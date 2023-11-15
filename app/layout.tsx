import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <div className="h-full bg-white text-black dark:bg-slate-800 dark:text-white">
          {children}
        </div>
      </body>
    </html>
  );
}
