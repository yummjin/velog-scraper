"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, startTransition } from "react";
import { cn } from "@/utils/cn";

export default function Sidebar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    if (prevPathnameRef.current !== pathname && isMobileMenuOpen) {
      startTransition(() => {
        setIsMobileMenuOpen(false);
      });
    }
    prevPathnameRef.current = pathname;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <button
        onClick={toggleMobileMenu}
        className="fixed top-4 left-4 z-50 rounded-md p-2 text-zinc-700 hover:bg-zinc-100 md:hidden dark:text-zinc-300 dark:hover:bg-zinc-800"
        aria-label="메뉴 토글"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMobileMenuOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      <aside
        className={cn(
          "fixed top-0 left-0 z-40 h-screen w-64 min-w-[256px] transform overflow-y-auto border-r border-zinc-200 bg-white transition-transform duration-300 ease-in-out md:sticky md:translate-x-0 dark:border-zinc-800 dark:bg-zinc-950",
          isMobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0",
        )}
      >
        <div className="p-6">
          <Link
            href="/"
            className={cn(
              "mb-6 block text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200",
              "mt-14 md:mt-0",
            )}
            onClick={closeMobileMenu}
          >
            ← Home
          </Link>
          <h2 className="mb-4 text-lg font-semibold text-black dark:text-zinc-50">
            REST API
          </h2>
          <nav className="space-y-1">
            <SidebarLink
              href="/document"
              isActive={pathname === "/document"}
              onClick={closeMobileMenu}
            >
              단일 페이지 스크래핑
            </SidebarLink>
            <SidebarLink
              href="/document/series"
              isActive={pathname === "/document/series"}
              onClick={closeMobileMenu}
            >
              시리즈 스크래핑
            </SidebarLink>
            <SidebarLink
              href="/document/tags"
              isActive={pathname === "/document/tags"}
              onClick={closeMobileMenu}
            >
              태그 스크래핑
            </SidebarLink>
            <SidebarLink
              href="/document/tags-post"
              isActive={pathname === "/document/tags-post"}
              onClick={closeMobileMenu}
            >
              태그별 게시글 스크래핑
            </SidebarLink>
          </nav>
        </div>
      </aside>
    </>
  );
}

function SidebarLink({
  href,
  children,
  isActive,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "block w-full rounded-md px-3 py-2.5 text-left text-sm font-medium transition-colors",
        isActive
          ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
          : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800",
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
