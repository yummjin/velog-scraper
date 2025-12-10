import { Post } from "@/src/app/types/post";
import { Series } from "@/src/app/types/series";
import { cleanSeriesElement } from "@/src/utils/cleanElement";
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
  const url = searchParams.get("url");

  if (!url) {
    return new Response(
      JSON.stringify({ error: "URL parameter is required" }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  }

  if (!url.includes("velog.io") || !url.includes("series")) {
    return new Response(JSON.stringify({ error: "Not a Velog Series URL" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  }

  try {
    const html = await axios.get(decodeURIComponent(url));
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
