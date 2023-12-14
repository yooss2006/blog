"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Book, Home, Music } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_BUTTON_OPTIONS = [
  { label: "블로그", icon: Home, path: "/blog", disabled: false },
  { label: "독서록", icon: Book, path: "/book", disabled: true },
  { label: "음악", icon: Music, path: "/music", disabled: true },
];

export default function NavBar() {
  const pathname = usePathname();
  const currentPath = `/${pathname.slice(1).split("/")[0]}`;

  return (
    <nav className="w-fit mx-auto mb-4 px-4 py-2 flex justify-center items-center gap-5 rounded-md shadow-md bg-slate-200 dark:bg-slate-700 text-yblue-900/40 dark:text-gray-300">
      {NAV_BUTTON_OPTIONS.map(({ label, icon, path, disabled }) => {
        const Icon = icon;

        if (disabled) {
          return (
            <div className="relative group">
              <button
                key={path}
                className="p-2 w-14 flex flex-col items-center gap-1 text-gray-400"
                disabled
              >
                <Icon className="w-5 h-5" />
                <span className="text-[12px]">{label}</span>
              </button>
              <div className="w-20 py-2 px-4 hidden absolute left-[50%] translate-x-[-50%] bottom-[-40px] text-yblue-900 font-medium bg-white rounded-md group-hover:block">
                준비중
              </div>
            </div>
          );
        }

        return (
          <Link
            href={path}
            key={path}
            className={cn(
              "p-2 w-14 flex flex-col items-center gap-1",
              currentPath === path && "text-yblue-900 dark:text-white font-bold"
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
