import type { Metadata } from "next";
import { Noto_Sans_JP, Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: 'swap', // Improve performance with font display swap
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap', // Improve performance with font display swap
});

export const metadata: Metadata = {
  title: "アイクロ | あの人が、あなた専用のAIに",
  description: "話題のAIクローンSNSマーケットプレイス「アイクロ」。著名人・アイドル・キャラクターと会話。AIチューバーになって収益化も。今すぐLINE登録で先行体験＆特典。",
  keywords: "AIクローン, AI会話, SNS, マーケットプレイス, AI, チューバー, クローン, チャットボット, 推し活, 公式, 収益化",
  manifest: "/manifest.json",
  openGraph: {
    title: "アイクロ | あの人が、あなた専用のAIに",
    description: "話題のAIクローンSNSマーケットプレイス「アイクロ」。著名人・アイドル・キャラクターと会話。AIチューバーになって収益化も。今すぐLINE登録で先行体験＆特典。",
    images: ["/images/ogp.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${inter.variable}`}>
      <body className="antialiased font-sans bg-white">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
