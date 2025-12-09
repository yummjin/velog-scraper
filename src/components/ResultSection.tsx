"use client";

import { Series } from "../actions/fetchSeries";
import { Post } from "../actions/fetchSingle";

export default function ResultSection({
  result,
  isLoading,
}: {
  result: Post | Series | null;
  isLoading: boolean;
}) {
  if (isLoading)
    return (
      <div className="mt-4 p-4 rounded-md bg-gray-50 dark:bg-zinc-900 text-sm text-zinc-600 dark:text-zinc-400 overflow-auto whitespace-pre-wrap break-words flex items-center gap-2">
        <svg
          className="animate-spin h-5 w-5 text-blue-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        <span>Loading...</span>
      </div>
    );

  if (!result) return null;

  if ("title" in result && "body" in result && "image" in result) {
    return (
      <pre className="mt-4 p-4 rounded-md bg-gray-50 dark:bg-zinc-900 text-sm text-zinc-600 dark:text-zinc-400 overflow-auto whitespace-pre-wrap break-words">
        <code>{`title: ${result.title}
body: ${result.body.slice(0, 100)}...
image: ${result.image}`}</code>
      </pre>
    );
  }
  if ("title" in result && "contents" in result) {
    return (
      <pre className="mt-4 p-4 border rounded-md bg-gray-50 dark:bg-zinc-900 text-sm text-zinc-600 dark:text-zinc-400 overflow-auto whitespace-pre-wrap break-words">
        <code>{`title: ${result.title}
${result.contents
  .map(
    (content) => `title: ${content.title}
body: ${content.body}
date: ${content.date}`
  )
  .join("\n")}`}</code>
      </pre>
    );
  }
  return (
    <pre className="mt-4 p-4 border rounded-md bg-gray-50 dark:bg-zinc-900 text-sm text-zinc-600 dark:text-zinc-400 overflow-auto whitespace-pre-wrap break-words">
      <code>No result</code>
    </pre>
  );
}
