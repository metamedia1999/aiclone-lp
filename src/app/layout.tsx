import type { Metadata } from "next";
import { Noto_Sans_JP, Inter } from "next/font/google";
import Script from "next/script"; //
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
      <head>
        <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PSN4B5R9');</script>
<!-- End Google Tag Manager -->
        {/* ✅ Google Analytics（GA4）スクリプト */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FRVN29KFZZ"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FRVN29KFZZ');
          `}
        </Script>
      </head>
      <body className="antialiased font-sans bg-white">
        <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PSN4B5R9"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
