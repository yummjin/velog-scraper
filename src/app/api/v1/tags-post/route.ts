import type { Post } from "@/types";
import * as cheerio from "cheerio";
import puppeteer from "puppeteer";
import { NextRequest } from "next/server";

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
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();
    const url = `https://velog.io/@${userId}/posts?tag=${tag}`;
    await page.goto(url, { waitUntil: "networkidle2" });

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
