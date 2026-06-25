import type { Metadata } from "next";
import { Noto_Sans_KR, Gowun_Batang } from "next/font/google";
import "./globals.css";

const noto = Noto_Sans_KR({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const display = Gowun_Batang({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "바른식탁 · 우리 아이에게 먹일 거니까",
  description:
    "우리 아이에게 먹일 거니까 — 소량 주문제작 반찬과 수제 샌드위치. 정직한 재료로 매일 새로 만듭니다.",
  openGraph: {
    title: "바른식탁 · 우리 아이에게 먹일 거니까",
    description:
      "소량 주문제작 반찬과 수제 샌드위치. 정직한 재료로 매일 새로 만듭니다.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${noto.variable} ${display.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
