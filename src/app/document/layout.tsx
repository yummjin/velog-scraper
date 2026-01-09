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
      <aside className="w-64 min-w-[256px] h-screen sticky top-0 border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 overflow-y-auto">
        <div className="p-6">
          <Link
            href="/"
            className="block mb-6 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
          >
            ← Home
          </Link>
          <h2 className="text-lg font-semibold text-black dark:text-zinc-50 mb-4">
            REST API
          </h2>
          <nav className="space-y-1">
            <Link
              href="/document"
              className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === "/document"
                  ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                  : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              }`}
            >
              단일 페이지 스크래핑
            </Link>
            <Link
              href="/document/series"
              className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === "/document/series"
                  ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                  : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              }`}
            >
              시리즈 스크래핑
            </Link>
            <Link
              href="/document/tags"
              className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === "/document/tags"
                  ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                  : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              }`}
            >
              태그 스크래핑
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 overflow-y-auto">{children}</main>
    </div>
  );
}
