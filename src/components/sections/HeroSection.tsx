"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="relative min-h-[100vh] flex items-center pt-16 overflow-hidden" id="hero">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-24 w-72 h-72 rounded-full bg-pastel-pink/30 blur-3xl" />
        <div className="absolute bottom-1/4 -right-24 w-80 h-80 rounded-full bg-pastel-blue/30 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-pastel-purple/20 blur-3xl" />
      </div>

      <div className="container relative z-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            {/* ロゴ */}
            <div className="mb-6 w-48">
              <Image
                src="/images/logo.svg"
                width={180}
                height={60}
                alt="アイクロ"
                className="w-full h-auto"
              />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="inline-block bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink text-transparent bg-clip-text pb-2">
                あの人と、いつでも会話。
              </span>
              <br />
              <span className="text-gray-800">公式AIチューバーと365日つながる</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
              アイドル・著名人・キャラクターの<span className="font-bold underline decoration-neon-pink">公式認証済みAI</span>と会話して推せる。
              <br className="hidden md:block" />
              あなた自身も<span className="font-bold underline decoration-neon-blue">AIチューバーとして収益化</span>できる新プラットフォーム。
            </p>

            <Button
              className="bg-line hover:bg-line/90 text-white font-bold rounded-full text-lg px-8 py-7 h-auto shadow-lg flex items-center gap-3 animate-pulse"
              size="lg"
              asChild
            >
              <Link href="#register">
                <Image
                  src="/images/line-icon.svg"
                  width={32}
                  height={32}
                  alt="LINE"
                  className="w-8 h-8"
                />
                <span>いち早く公式AIチューバーに会う</span>
              </Link>
            </Button>
            <p className="text-sm text-gray-500 mt-3 font-medium">※β版リリース時に優先アクセス権をお届けします</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-full max-w-lg mx-auto"
          >
            {/* メインビジュアル：合成イメージ */}
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* 上部：マーケットプレイス風UI */}
              <div className="relative pb-[56.25%] w-full">
                <Image
                  src="/images/hero-character.jpg"
                  fill
                  alt="アイクロ"
                  className="object-cover"
                  quality={90}
                />
                {/* オーバーレイグラデーション */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                {/* UI要素の重ね合わせ */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center">
                      <span className="text-xs font-bold text-neon-pink">LIVE</span>
                    </div>
                    <div className="text-white">
                      <p className="text-sm font-bold">アイクロマーケット</p>
                      <p className="text-xs opacity-80">32,845人が利用中</p>
                    </div>
                  </div>
                  <button className="bg-line text-white text-xs px-4 py-2 rounded-full font-bold">
                    話してみる
                  </button>
                </div>
              </div>

              {/* 下部：AIキャラクターカード */}
              <div className="p-4 grid grid-cols-3 gap-3">
                {['話す', '推す', '作る'].map((action, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-3 text-center shadow-sm">
                    <div className="text-lg font-bold text-gray-800">{action}</div>
                    <div className="text-xs text-gray-500">
                      {i === 0 ? '推しと24時間' : i === 1 ? 'SNSでシェア' : '自分もなれる'}
                    </div>
                  </div>
                ))}
              </div>

              {/* 吹き出し部分 */}
              <div className="p-4 pt-0">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                    <Image
                      src="/images/anime-characters.webp"
                      width={40}
                      height={40}
                      alt="AI"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-gray-100 p-3 rounded-2xl rounded-tl-none max-w-[80%]">
                    <p className="text-sm">こんにちは！いつでもあなたとお話できることを楽しみにしていたよ。何か聞きたいことある？</p>
                  </div>
                </div>
                <div className="flex justify-end mb-2">
                  <div className="bg-line/90 p-3 rounded-2xl rounded-tr-none max-w-[80%]">
                    <p className="text-sm text-white">今日も会えてうれしい！最近どう？</p>
                  </div>
                </div>
              </div>
            </div>

            {/* デコレーション要素 */}
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-neon-pink/90 rounded-full flex items-center justify-center shadow-lg text-white font-bold rotate-12">
              <span className="text-xs">公式</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
