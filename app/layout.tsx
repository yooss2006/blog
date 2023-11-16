import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_KR } from "next/font/google";
import Sidebar from "@/components/layout/sidebar";
import BlogCategory from "@/components/layout/blog/blog-category";

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
      <body className={noto_sans.className}>
        <div className="h-full">
          <div className="flex justify-between">
            <Sidebar>
              <div className="px-2 flex-1">
                <BlogCategory />
              </div>
            </Sidebar>
            <main className="flex-1">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
