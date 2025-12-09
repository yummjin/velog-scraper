"use server";

export async function fetchSeries(data: FormData): Promise<Series> {
  const baseUrl = "https://velog-scraper.vercel.app/api/v1";
  const url = data.get("seriesUrl") as string;
  const response = await fetch(`${baseUrl}/series/${url}`);
  return response.json();
}

export type Series = {
  title: string;
  contents: { title: string; body: string; date: string }[];
};
