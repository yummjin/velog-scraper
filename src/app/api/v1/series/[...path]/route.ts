import { cleanSeriesElement } from "@/src/utils/cleanElement";
import axios from "axios";
import * as cheerio from "cheerio";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ path: string[] }> }
) {
  const { path } = await context.params;
  const url = path.join("/");

  if (!url.includes("velog.io") || !url.includes("series")) {
    return new Response(JSON.stringify({ error: "Not a Velog Series URL" }), {
      status: 400,
    });
  }

  try {
    const html = await axios.get(url);
    const $ = cheerio.load(html.data);

    const title = $("title").text().split(" | ")[1];

    let bodyContent: { title: string; body: string; date: string }[] = [];

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
          };
        })
        .get();
    } else {
      bodyContent = [];
    }

    const response = {
      title,
      contents: bodyContent,
    };
    return new Response(JSON.stringify(response));
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 500,
    });
  }
}
