"use client";

import { cn } from "@/lib/utils";
import { Book, Home, Music } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const NAV_BUTTON_OPTIONS = [
  { label: "블로그", icon: Home, path: "/blog" },
  { label: "독서록", icon: Book, path: "/book" },
  { label: "음악", icon: Music, path: "/music" },
];

export default function Sidebar({ children }: Props) {
  const pathname = usePathname();
  const currentPath = `/${pathname.slice(1).split("/")[0]}`;

  return (
    <div className="w-[80%] md:w-[360px] h-full">
      <div className="w-full h-full pt-4 flex flex-col justify-between relative z-10 dark:bg-slate-800">
        <nav className="w-fit mx-auto mb-4 px-4 py-2 flex justify-center items-center gap-5 rounded-md shadow-md bg-slate-700 text-gray-300">
          {NAV_BUTTON_OPTIONS.map(({ label, icon, path }) => {
            const Icon = icon;
            return (
              <Link
                href={path}
                key={path}
                className={cn(
                  "p-2 flex flex-col items-center gap-1",
                  currentPath === path && "text-white"
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="text-[12px]">{label}</span>
              </Link>
            );
          })}
        </nav>
        {children}
      </div>
      <div className="w-full h-full absolute inset-0 bg-black/40"></div>
    </div>
  );
}
