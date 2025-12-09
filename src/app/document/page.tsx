"use client";

import ResultSection from "@/src/components/ResultSection";
import { fetchSingle, type Post } from "../../actions/fetchSingle";
import { FormEvent, useState } from "react";
import { fetchSeries, type Series } from "../../actions/fetchSeries";
export default function DocumentPage() {
  const [result, setResult] = useState<Post | null>(null);
  const [seriesResult, setSeriesResult] = useState<Series | null>(null);
  const [isSingleLoading, setIsSingleLoading] = useState(false);
  const [isSeriesLoading, setIsSeriesLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSingleLoading(true);
    setResult(null);
    const formData = new FormData(e.target as HTMLFormElement);

    if (formData.get("url") === "") {
      setIsSingleLoading(false);
      alert("Please enter a valid URL");
      setResult(null);
      return;
    }

    const result = await fetchSingle(formData);
    setResult(result);
    setIsSingleLoading(false);
  };

  const handleSeriesSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSeriesLoading(true);
    setSeriesResult(null);
    const formData = new FormData(e.target as HTMLFormElement);

    if (formData.get("seriesUrl") === "") {
      setIsSeriesLoading(false);
      alert("Please enter a valid URL");
      setSeriesResult(null);
      return;
    }

    const seriesResult = await fetchSeries(formData);
    setSeriesResult(seriesResult);
    setIsSeriesLoading(false);
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
            <button
              className="px-6 py-2 hover:text-white/80 text-white rounded-md cursor-pointer disabled:bg-white/10 disabled:cursor-not-allowed transition-colors"
              type="submit"
              disabled={isSingleLoading}
            >
              {isSingleLoading ? "Scraping..." : "Scrape"}
            </button>
          </form>
          <ResultSection result={result} isLoading={isSingleLoading} />
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-semibold text-black dark:text-zinc-50">
            Series Scrape
          </h4>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 -mt-2">
            Scrape a series of Velog posts.
          </p>
          <form className="flex w-full gap-4" onSubmit={handleSeriesSubmit}>
            <input
              name="seriesUrl"
              type="text"
              placeholder="Enter a Velog Series URL"
              className="w-full rounded-md border px-4 focus:outline-none border-gray-300 p-2"
            />
            <button
              className="px-6 py-2 hover:text-white/80 text-white rounded-md cursor-pointer disabled:bg-white/10 disabled:cursor-not-allowed transition-colors"
              type="submit"
              disabled={isSeriesLoading}
            >
              {isSeriesLoading ? "Scraping..." : "Scrape"}
            </button>
          </form>
          <ResultSection result={seriesResult} isLoading={isSeriesLoading} />
        </div>
      </div>
    </>
  );
}
