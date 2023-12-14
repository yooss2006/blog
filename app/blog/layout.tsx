import type { Metadata } from "next";
import Sidebar from "@/app/blog/_component/layout/sidebar";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "블로그",
  description: "내 블로그입니다.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full md:flex md:justify-between">
      <Sidebar />
      <main className="h-full md:flex-1 dark:bg-slate-900">
        <Suspense>{children}</Suspense>
      </main>
    </div>
  );
}
