import type { Tag } from "@/app/types";
import axios from "axios";
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

  try {
    const html = await axios.get(`https://velog.io/@${userId}`);

    const htmlString = html.data.toString();
    let userTagsSection = "";

    if (htmlString.includes("userTags")) {
      const parts = htmlString.split("userTags");
      if (parts.length > 1) {
        const afterUserTags = parts[1].split("initialData")[0];
        userTagsSection = afterUserTags.replace(/\\/g, "");
      }
    }

    let tags: Tag[] = [];

    try {
      const tagsMatch = userTagsSection.match(/"tags"\s*:\s*\[([\s\S]*?)\]/);
      if (tagsMatch && tagsMatch[1]) {
        const tagsArrayString = "[" + tagsMatch[1] + "]";
        const tagsArray = JSON.parse(tagsArrayString) as Tag[];

        tags = tagsArray.map((tag) => ({
          id: tag.id || "",
          name: tag.name || "",
          posts_count: tag.posts_count || 0,
        }));
      }
    } catch {}

    const response = {
      tags,
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
