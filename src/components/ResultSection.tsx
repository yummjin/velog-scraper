"use client";

import { Post } from "../actions/fetchSingle";

export default function ResultSection({ result }: { result: Post | null }) {
  if (!result) return null;
  return (
    <pre className="mt-4 p-4 border rounded-md bg-gray-50 dark:bg-zinc-900 text-sm text-zinc-600 dark:text-zinc-400 overflow-auto whitespace-pre-wrap break-words">
      <code>{`title: ${result.title}
body: ${result.body.slice(0, 100)}...
image: ${result.image}`}</code>
    </pre>
  );
}
