"use client";

import ResultSection from "@/src/components/ResultSection";
import { fetchSingle, type Post } from "../../actions/fetchSingle";
import { useState } from "react";

export default function DocumentPage() {
  const [result, setResult] = useState<Post | null>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const result = await fetchSingle(formData);
    setResult(result);
  };

  return (
    <>
      <h2 className="text-2xl font-bold text-black dark:text-zinc-50">
        How to use
      </h2>
      <div className="flex-1 mt-12 w-full gap-8 flex flex-col justify-start">
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-semibold text-black dark:text-zinc-50">
            Single Scrape
          </h4>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 -mt-2">
            Scrape a single Velog post.
          </p>
          <form className="flex w-full gap-4" onSubmit={handleSubmit}>
            <input
              name="url"
              type="text"
              placeholder="Enter a Velog Post URL"
              className="w-full rounded-md border px-4 focus:outline-none border-gray-300 p-2"
            />
            <button className="cursor-pointer" type="submit">
              Scrape
            </button>
          </form>
          <ResultSection result={result} />
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-semibold text-black dark:text-zinc-50">
            Series Scrape
          </h4>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 -mt-2">
            Scrape a series of Velog posts.
          </p>
          <form className="flex w-full gap-4">
            <input
              type="text"
              placeholder="Enter a Velog Series URL"
              className="w-full rounded-md border px-4 focus:outline-none border-gray-300 p-2"
            />
            <button className="cursor-pointer" type="submit">
              Scrape
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
