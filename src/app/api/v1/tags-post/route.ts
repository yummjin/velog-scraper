/* eslint-disable @typescript-eslint/no-require-imports */
import type { Post } from "@/types";
import * as cheerio from "cheerio";
import { NextRequest } from "next/server";

// Vercel 환경에서는 puppeteer-core, 로컬에서는 puppeteer 사용
const isVercel =
  process.env.VERCEL === "1" ||
  process.env.VERCEL_ENV !== undefined ||
  process.env.AWS_LAMBDA_FUNCTION_NAME !== undefined;

// Conditional import를 위해 동적으로 로드
const getPuppeteer = () => {
  if (isVercel) {
    return require("puppeteer-core");
  }
  return require("puppeteer");
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const userId = searchParams.get("userId");
  const tag = searchParams.get("tag");

  if (!userId) {
    return new Response(
      JSON.stringify({ error: "userId parameter is required" }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      },
    );
  }

  if (!tag) {
    return new Response(
      JSON.stringify({ error: "tag parameter is required" }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      },
    );
  }

  try {
    const puppeteer = getPuppeteer();
    let browser;

    if (isVercel) {
      // Vercel 환경: puppeteer-core + chromium 사용
      const chromium = require("@sparticuz/chromium");

      // Chromium 실행 경로 가져오기
      const executablePath = await chromium.executablePath();

      browser = await puppeteer.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: executablePath,
        headless: chromium.headless,
      });
    } else {
      // 로컬 개발 환경: 일반 puppeteer 사용
      browser = await puppeteer.launch({
        headless: true,
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      });
    }

    const page = await browser.newPage();

    const postsUrl = `https://velog.io/@${userId}/posts`;

    await page.goto(postsUrl, { waitUntil: "networkidle2" });
    await new Promise((resolve) => setTimeout(resolve, 500));

    const navigationSuccess = await page.evaluate((tagName: string) => {
      try {
        const url = new URL(window.location.href);
        url.searchParams.set("tag", tagName);

        const windowWithNext = window as unknown as {
          next?: {
            router?: {
              push: (
                url: string,
                as?: string,
                options?: { shallow?: boolean },
              ) => void;
            };
          };
        };

        if (windowWithNext.next?.router) {
          windowWithNext.next.router.push(
            url.pathname + url.search,
            undefined,
            { shallow: true },
          );
          return true;
        }

        window.history.pushState({}, "", url.toString());

        window.dispatchEvent(new PopStateEvent("popstate"));

        return true;
      } catch {
        return false;
      }
    }, tag);

    if (!navigationSuccess) {
      await browser.close();
      return new Response(
        JSON.stringify({ error: "Failed to navigate with tag parameter" }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        },
      );
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const currentUrl = page.url();
    const urlObj = new URL(currentUrl);
    const currentTag = urlObj.searchParams.get("tag");

    const isRedirectedBack =
      !currentTag && (currentUrl === postsUrl || currentUrl === `${postsUrl}/`);

    if (isRedirectedBack) {
      await browser.close();
      return new Response(
        JSON.stringify({ error: "Tag not found or invalid" }),
        {
          status: 404,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        },
      );
    }

    await page
      .waitForSelector(
        "[class*='FlatPostCard_block']:not([class*='skeletonBlock'])",
        {
          timeout: 10000,
        },
      )
      .catch(() => {
        console.log("스켈레톤 대기 타임아웃, 계속 진행");
      });

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const html = await page.content();
    await browser.close();

    const $ = cheerio.load(html);

    const bodyContent = $("[class*='FlatPostCardList_block']")
      .find("[class*='FlatPostCard_block']:not([class*='skeletonBlock'])")
      .map((_, element) => {
        const $card = $(element);

        return {
          title: $card.find("h2").text().trim(),
          body: $card.find("p").text().trim(),
          image: $card.find("img").attr("src") || "",
          date: $card
            .find("[class*='FlatPostCard_subInfo']")
            .find("span")
            .first()
            .text()
            .trim(),
          href: $card.find("h2").parent("a").attr("href") || "",
        };
      })
      .get();

    const response: { contents: Post[] } = {
      contents: bodyContent,
    };

    return new Response(JSON.stringify(response), {
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  }
}
