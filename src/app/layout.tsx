import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Gowun_Dodum } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
});

const gowunDodum = Gowun_Dodum({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-gowun",
});

export const metadata: Metadata = {
  title: "화양교회 다니엘초등부",
  description: "화양교회 다니엘초등부 홈페이지입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${nunito.variable} ${gowunDodum.variable} font-sans antialiased bg-amber-50`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
