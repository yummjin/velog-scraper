import { Post } from "@/src/app/types/post";
import { cleanElement } from "@/src/utils/cleanElement";
import axios from "axios";
import * as cheerio from "cheerio";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const url = searchParams.get("url");

  if (!url) {
    return new Response(JSON.stringify({ error: "URL parameter is required" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  try {
    const html = await axios.get(url);
    const $ = cheerio.load(html.data);

    const title = $("title").text();

    let bodyContent = "";

    if ($("article").length > 0) {
      const $article = $("article").clone();
      bodyContent = cleanElement($article);
    } else if ($("main").length > 0) {
      const $main = $("main").clone();
      bodyContent = cleanElement($main);
    } else if (
      $(".content, .post-content, .article-content, .entry-content").length > 0
    ) {
      const $content = $(
        ".content, .post-content, .article-content, .entry-content"
      )
        .first()
        .clone();
      bodyContent = cleanElement($content);
    } else {
      const $body = $("body").clone();
      bodyContent = cleanElement($body);
    }

    const response: Post = {
      title,
      body: bodyContent,
      image: $("img").attr("src") || "",
      date:
        $("[class*='information']")
          .find("[class*='username']")
          .next()
          .next()
          .text() || "",
      href: url,
    };

    return new Response(JSON.stringify(response), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

