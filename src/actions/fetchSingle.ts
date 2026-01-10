"use server";

import type { Post } from "../types/post";

export async function fetchSingle(data: FormData): Promise<Post> {
  const baseUrl = "https://velog-scraper.vercel.app/api/v1";
  const url = data.get("url") as string;
  const response = await fetch(
    `${baseUrl}/page?url=${encodeURIComponent(url)}`,
  );
  return response.json();
}
