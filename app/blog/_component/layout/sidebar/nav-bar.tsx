"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Book, Home, Music } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_BUTTON_OPTIONS = [
  { label: "블로그", icon: Home, path: "/blog" },
  { label: "독서록", icon: Book, path: "/book" },
  { label: "음악", icon: Music, path: "/music" },
];

export default function NavBar() {
  const pathname = usePathname();
  const currentPath = `/${pathname.slice(1).split("/")[0]}`;

  return (
    <nav className="w-fit mx-auto mb-4 px-4 py-2 flex justify-center items-center gap-5 rounded-md shadow-md bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-gray-300">
      {NAV_BUTTON_OPTIONS.map(({ label, icon, path }) => {
        const Icon = icon;
        return (
          <Link
            href={path}
            key={path}
            className={cn(
              "p-2 flex flex-col items-center gap-1",
              currentPath === path && "text-slate-900 dark:text-white"
            )}
          >
            <Icon className="w-5 h-5" />
            <span className="text-[12px]">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
