import React from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import CustomLink from "../../../../components/custom-link";
import { cn } from "@/lib/utils";

type Props = {
  prev?: string;
  next?: string;
};

export default function ContentNavigationButtons({ prev, next }: Props) {
  const prevHref = prev === "null" ? undefined : prev;
  const nextHref = next === "null" ? undefined : next;
  return (
    <>
      <div className="hidden md:flex justify-between fixed top-[50%] translate-y-[-50%] left-[364px] right-4">
        <CustomLink
          disabled={!prevHref}
          href={prevHref}
          className={cn(
            "relative transition group",
            prevHref && "hover:bg-slate-200 dark:hover:bg-sky-800"
          )}
        >
          <ChevronLeft
            className={cn(
              "w-16 h-16",
              prevHref
                ? "text-slate-700 dark:text-white"
                : "text-slate-100 dark:text-slate-700"
            )}
          />
          {prevHref && (
            <div className="hidden break-keep px-2 pb-1 rounded-sm absolute bottom-[-40px] left-1/2 translate-x-[-50%] z-50 group-hover:block text-center transition bg-slate-200 dark:bg-sky-500">
              {prevHref?.split("/").at(-1)}
            </div>
          )}
        </CustomLink>
        <CustomLink
          disabled={!nextHref}
          href={nextHref}
          className={cn(
            "relative transition group",
            nextHref && "hover:bg-slate-200 dark:hover:bg-sky-800"
          )}
        >
          <ChevronRight
            className={cn(
              "w-16 h-16",
              nextHref
                ? "text-slate-700 dark:text-white"
                : "text-slate-100 dark:text-slate-700"
            )}
          />
          {nextHref && (
            <div className="hidden break-keep px-2 pb-1 rounded-sm absolute bottom-[-40px] left-1/2 translate-x-[-50%] z-50 group-hover:block text-center transition bg-slate-200 dark:bg-sky-500">
              {nextHref?.split("/").at(-1)}
            </div>
          )}
        </CustomLink>
      </div>
      <div className="h-20 flex md:hidden justify-between">
        <CustomLink
          disabled={!prevHref}
          href={prevHref}
          className={cn(
            "h-full flex-1 flex items-center justify-center relative text-xl transition",
            prevHref &&
              "bg-sky-200 hover:bg-sky-300 dark:bg-sky-900 dark:hover:bg-sky-800"
          )}
        >
          <ChevronLeft
            className={cn(
              "w-16 h-16 absolute top-[50%] translate-y-[-50%] left-0",
              prevHref
                ? "text-slate-700 dark:text-white"
                : "text-white dark:text-slate-700"
            )}
          />
          {prevHref ? prevHref?.split("/").at(-1) : "이전글 없음"}
        </CustomLink>
        <CustomLink
          disabled={!nextHref}
          href={nextHref}
          className={cn(
            "h-full flex-1 flex items-center justify-center relative text-xl transition",
            nextHref &&
              "bg-sky-200 hover:bg-sky-300 dark:bg-sky-900 dark:hover:bg-sky-800"
          )}
        >
          {nextHref ? nextHref?.split("/").at(-1) : "다음글 없음"}
          <ChevronRight
            className={cn(
              "w-16 h-16 absolute top-[50%] translate-y-[-50%] right-0",
              nextHref
                ? "text-slate-700 dark:text-white"
                : "text-white dark:text-slate-700"
            )}
          />
        </CustomLink>
      </div>
    </>
  );
}
