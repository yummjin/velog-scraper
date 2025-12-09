import axios from "axios";
import * as cheerio from "cheerio";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ path: string[] }> }
) {
  const { path } = await context.params;
  const url = path.join("/");

  try {
    const html = await axios.get(url);
    const $ = cheerio.load(html.data);

    const title = $("title").text();

    const cleanElement = ($element: ReturnType<typeof $>) => {
      $element
        .find(
          "script, style, nav, header, footer, aside, button, iframe, form, a"
        )
        .remove();
      $element
        .find(
          "[class*='nav'], [class*='user-logo'], [class*='sc-TBWPX dXONqK sc-brSvTw cgYvDI'], [class*='menu'], [class*='sidebar'], [class*='header'], [class*='footer']"
        )
        .remove();
      $element
        .find(
          "[class*='login'], [class*='signin'], [class*='signup'], [class*='auth']"
        )
        .remove();
      $element
        .find(
          "[class*='ad'], [class*='banner'], [class*='popup'], [class*='modal']"
        )
        .remove();
      $element
        .find(
          "[class*='comment'], [class*='tag'], [class*='author'], [class*='profile'], [class*='share'], [class*='follow']"
        )
        .remove();
      $element.find("[class*='meta'], [class*='info']").remove();
      return $element.text().trim().replace(/\s+/g, " ");
    };

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

    const response = {
      title,
      body: bodyContent,
      image: $("img").attr("src"),
    };
    return new Response(JSON.stringify(response));
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 500,
    });
  }
}
