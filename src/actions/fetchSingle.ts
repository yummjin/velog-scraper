"use server";

export async function fetchSingle(data: FormData): Promise<Post> {
  const baseUrl = "https://velog-scraper.vercel.app/api/v1";
  const url = data.get("url") as string;
  const response = await fetch(`${baseUrl}/page/${url}`);
  return response.json();
}

export type Post = {
  title: string;
  body: string;
  image: string;
};
