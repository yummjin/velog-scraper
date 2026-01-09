"use client";

import { useState } from "react";

interface CodeBlockProps {
  children: React.ReactNode;
  code: string;
  variant?: "light" | "dark";
  className?: string;
}

export default function CodeBlock({
  children,
  code,
  variant = "dark",
  className = "",
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("복사 실패:", err);
    }
  };

  const baseClasses =
    variant === "light"
      ? "bg-zinc-50 dark:bg-zinc-900"
      : "bg-zinc-900 dark:bg-black";

  return (
    <div
      className={`${baseClasses} rounded-lg p-4 overflow-x-auto relative group ${className}`}
    >
      {children}
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 p-2 text-zinc-400 hover:text-zinc-200 dark:hover:text-zinc-300 hover:bg-zinc-800 dark:hover:bg-zinc-700 rounded transition-colors"
        title="복사하기"
      >
        {copied ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-green-500"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        )}
      </button>
    </div>
  );
}

