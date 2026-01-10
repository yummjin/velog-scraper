"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DocumentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="sticky top-0 h-screen w-64 min-w-[256px] overflow-y-auto border-r border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="p-6">
          <Link
            href="/"
            className="mb-6 block text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
          >
            ← Home
          </Link>
          <h2 className="mb-4 text-lg font-semibold text-black dark:text-zinc-50">
            REST API
          </h2>
          <nav className="space-y-1">
            <Link
              href="/document"
              className={`block w-full rounded-md px-3 py-2 text-left text-sm font-medium transition-colors ${
                pathname === "/document"
                  ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                  : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
              }`}
            >
              단일 페이지 스크래핑
            </Link>
            <Link
              href="/document/series"
              className={`block w-full rounded-md px-3 py-2 text-left text-sm font-medium transition-colors ${
                pathname === "/document/series"
                  ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                  : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
              }`}
            >
              시리즈 스크래핑
            </Link>
            <Link
              href="/document/tags"
              className={`block w-full rounded-md px-3 py-2 text-left text-sm font-medium transition-colors ${
                pathname === "/document/tags"
                  ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                  : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
              }`}
            >
              태그 스크래핑
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="min-w-0 flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
