import type { Post, Series } from "@/app/types";
import { cleanSeriesElement } from "@/utils/cleanElement";
import axios from "axios";
import * as cheerio from "cheerio";
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
  const seriesTitle = searchParams.get("seriesTitle");

  if (!userId) {
    return new Response(
      JSON.stringify({ error: "userId parameter is required" }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  }

  if (!seriesTitle) {
    return new Response(
      JSON.stringify({ error: "seriesTitle parameter is required" }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  }

  const seriesUrl = seriesTitle.replace(/ /g, "-");

  try {
    const html = await axios.get(
      `https://velog.io/@${userId}/series/${seriesUrl}`
    );
    const $ = cheerio.load(html.data);

    const title = $("title").text().split(" | ")[1];

    let bodyContent: Post[] = [];

    if ($("section").length > 0) {
      const $section = $("section").clone();
      bodyContent = $section
        .find("div")
        .find("h2")
        .map((_, element) => {
          return {
            title: $(element).text(),
            body: cleanSeriesElement($(element).next()).slice(0, 100) + " ...",
            date: $(element).next().find("[class*='date']").text(),
            href:
              "https://velog.io" + $(element).next().find("a").attr("href") ||
              "",
            image: $(element).next().find("img").attr("src") || "",
          };
        })
        .get();
    } else {
      bodyContent = [];
    }

    const response: Series = {
      title,
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
