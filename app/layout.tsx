import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_KR } from "next/font/google";
import Sidebar from "@/app/blog/_component/layout/sidebar";
import { cn } from "@/lib/utils";
import { Suspense } from "react";
import SupabaseProvider from "@/providers/SupabaseProvider";
import ModalProvider from "@/providers/modal-provider";
import { UserProvider } from "@/providers/user-provider";

const noto_sans = Noto_Sans_KR({
  weight: ["100", "400", "500", "800"],
  subsets: ["latin"],
  variable: "--font-noto",
  display: "swap",
});
export const metadata: Metadata = {
  title: {
    default: "인간 유순상",
    template: "인간 유순상 | %s",
  },
  description: "유순상의 삶, 그리고 그의 생각들",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="dark">
      <body className={noto_sans.className}>
        <SupabaseProvider>
          <UserProvider>
            {children}
            <ModalProvider />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
