"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Book } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type Props = {
  categories: Record<string, any>;
  path?: string;
  level?: number;
};

export default function AccordionCategory({
  categories,
  path = "",
  level = 0,
}: Props) {
  const pathname = usePathname();
  const pathnameSet = pathname.split("/").slice(2);

  const categoryNames = Object.keys(categories);
  const dynamicPaddingLeft = `${8 + level * 16}px`;
  return (
    <Accordion type="single" collapsible defaultValue={pathnameSet[level]}>
      {categoryNames.map((categoryName) => {
        const child = categories[categoryName];
        const isMarkdown =
          typeof child === "string" && child.slice(-3) === ".md";

        if (!isMarkdown && Object.keys(child).length === 0) return;

        if (isMarkdown) {
          return (
            <Link
              key={`${categoryName}${path && `-${path}`}`}
              href={`${path}/${categoryName}`}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "w-full h-14 px-0 py-4 leading-6 flex justify-start gap-2 text-base font-medium bg-transparent",
                pathnameSet[level] === categoryName &&
                  "bg-slate-700 hover:bg-slate-600"
              )}
              style={{ paddingLeft: dynamicPaddingLeft }}
            >
              <Book className="w-4 h-4" />
              {categoryName}
            </Link>
          );
        }
        return (
          <AccordionItem
            key={`${categoryName}${path && `-${path}`}`}
            value={categoryName}
          >
            <AccordionTrigger
              className="justify-start items-center gap-2"
              style={{ paddingLeft: dynamicPaddingLeft }}
            >
              <p className="pb-1">{categoryName}</p>
            </AccordionTrigger>
            <AccordionContent className="pb-1">
              <AccordionCategory
                categories={categories[categoryName]}
                path={`${path}/${categoryName}`}
                level={level + 1}
              />
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
