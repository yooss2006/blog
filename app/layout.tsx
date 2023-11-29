import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_KR } from "next/font/google";
import Sidebar from "@/components/layout/sidebar";
import { cn } from "@/lib/utils";
import { Suspense } from "react";
import LoadingSpinner from "@/components/loading-spinner/loading-spinner";

const noto_sans = Noto_Sans_KR({
  weight: ["100", "400", "500", "800"],
  subsets: ["latin"],
  variable: "--font-noto",
  display: "swap",
});
export const metadata: Metadata = {
  title: "임시 블로그",
  description: "내 임시 블로그야",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="dark">
      <body className={cn(noto_sans.className, "md:flex md:justify-between")}>
        <Sidebar />
        <main className="h-full md:flex-1 dark:bg-slate-900">
          <Suspense>{children}</Suspense>
        </main>
      </body>
    </html>
  );
}
