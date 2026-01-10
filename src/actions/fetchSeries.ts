"use server";

import type { Series } from "../types/series";

export async function fetchSeries(data: FormData): Promise<Series> {
  const baseUrl = "https://velog-scraper.vercel.app/api/v1";
  const url = data.get("seriesUrl") as string;
  const response = await fetch(
    `${baseUrl}/series?url=${encodeURIComponent(url)}`,
  );
  return response.json();
}
