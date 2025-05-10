"use client";

import { useRef } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const FlowSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 bg-gradient-to-br from-white via-pastel-blue/10 to-white overflow-hidden"
      id="flow"
    >
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-neon-blue to-neon-green text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
            アイクロの使い方
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gray-800">3ステップで誰でも簡単に</span>
            <br />
            <span className="bg-gradient-to-r from-neon-blue to-neon-green text-transparent bg-clip-text">AIチューバーと交流できる</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            アイクロは複雑な操作は一切不要。直感的なインターフェースで、あなたの推しや専門家のAIチューバーと簡単に対話できます。
          </p>
        </div>

        <div
          className="mt-16"
          style={{
            transform: isInView ? "none" : "translateY(40px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
          }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
            {/* ステップ1 */}
            <div className="flex flex-col items-center max-w-xs">
              <div className="w-20 h-20 rounded-full bg-neon-blue/10 flex items-center justify-center mb-4 relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-blue">
                  <path d="M3 6h18" />
                  <path d="M7 12h10" />
                  <path d="M10 18h4" />
                </svg>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-neon-blue flex items-center justify-center text-white font-bold">
                  1
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">マーケットを探索</h3>
              <p className="text-sm text-gray-600 text-center">
                アイクロマーケットで公式認証AIチューバーや人気クリエイターを検索。ジャンル別、人気順でお気に入りを見つけましょう。
              </p>
              <div className="mt-6 h-48 w-full rounded-xl overflow-hidden shadow-md relative bg-gray-100">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute top-0 left-0 right-0 p-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-white/90 shadow flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m21 21-6.05-6.05M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" />
                      </svg>
                    </div>
                    <span className="text-xs text-white font-medium">推しのAIを探す</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="flex flex-wrap gap-1">
                    {['エンタメ', 'ビジネス', 'アイドル', '専門家'].map((tag, i) => (
                      <span key={i} className="text-xs bg-white/90 rounded-full px-2 py-1 text-gray-800">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 矢印 - PCのみ表示 */}
            <div className="hidden md:block">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>

            {/* ステップ2 */}
            <div className="flex flex-col items-center max-w-xs">
              <div className="w-20 h-20 rounded-full bg-neon-purple/10 flex items-center justify-center mb-4 relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-purple">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-neon-purple flex items-center justify-center text-white font-bold">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">自由に会話を楽しむ</h3>
              <p className="text-sm text-gray-600 text-center">
                テキストだけでなく、音声や画像でも交流可能。「いつも通り」の会話感覚で楽しめます。会話の続きはいつでも再開できます。
              </p>
              <div className="mt-6 h-48 w-full rounded-xl overflow-hidden shadow-md relative bg-gray-100">
                <div className="absolute inset-0 p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-neon-purple/20 flex-shrink-0 flex items-center justify-center relative">
                      <span className="text-xs font-bold text-neon-purple">公式</span>
                    </div>
                    <div className="bg-white p-2 rounded-2xl rounded-tl-none max-w-[80%] shadow-sm">
                      <p className="text-xs">こんにちは！最近どんなことに興味があるの？一緒に話せることを楽しみにしてたよ♪</p>
                    </div>
                  </div>
                  <div className="flex justify-end mb-3">
                    <div className="bg-neon-blue/10 p-2 rounded-2xl rounded-tr-none max-w-[80%] shadow-sm">
                      <p className="text-xs">最近はプログラミングに挑戦してるんだけど、つまずいてるところがあって...</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-neon-purple/20 flex-shrink-0 flex items-center justify-center">
                      <span className="text-xs font-bold text-neon-purple">公式</span>
                    </div>
                    <div className="bg-white p-2 rounded-2xl rounded-tl-none max-w-[80%] shadow-sm">
                      <p className="text-xs">それは大変だね！どんな言語を勉強してるの？つまずいてるポイントを教えてくれたら、一緒に考えよう！</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 矢印 - PCのみ表示 */}
            <div className="hidden md:block">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>

            {/* ステップ3 */}
            <div className="flex flex-col items-center max-w-xs">
              <div className="w-20 h-20 rounded-full bg-neon-pink/10 flex items-center justify-center mb-4 relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-pink">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-neon-pink flex items-center justify-center text-white font-bold">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">自分もAIチューバーに</h3>
              <p className="text-sm text-gray-600 text-center">
                会話を楽しむだけでなく、自分自身のAIチューバーを作成。知識や個性を活かして、新たなコミュニティを構築できます。
              </p>
              <div className="mt-6 h-48 w-full rounded-xl overflow-hidden shadow-md relative bg-gray-100">
                <div className="absolute inset-0 bg-gradient-to-b from-neon-pink/10 to-transparent"></div>
                <div className="absolute inset-0 p-3 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-white overflow-hidden">
                        <div className="w-full h-full bg-neon-pink/20 flex items-center justify-center">
                          <span className="text-xs font-bold text-neon-pink">AI</span>
                        </div>
                      </div>
                      <span className="text-xs font-bold">あなたのAIチューバー</span>
                    </div>
                    <div className="px-2 py-1 bg-green-100 rounded-full">
                      <span className="text-xs text-green-700 font-medium">ライブ中</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-2 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-bold">今週の収益</span>
                      <span className="text-xs text-neon-pink font-bold">¥12,400</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1 bg-gray-100 rounded-md p-1">
                        <div className="text-[10px] text-gray-600">フォロワー</div>
                        <div className="text-xs font-bold">1,248人</div>
                      </div>
                      <div className="flex-1 bg-gray-100 rounded-md p-1">
                        <div className="text-[10px] text-gray-600">会話数</div>
                        <div className="text-xs font-bold">3,892回</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block bg-yellow-100 rounded-lg py-2 px-4 mb-6">
              <p className="text-sm text-yellow-800 font-medium">
                <span className="font-bold">架空のキャラクター</span>を作成することも可能！二次創作も楽しめます
              </p>
            </div>
            <Button
              className="bg-line hover:bg-line/90 text-white font-bold rounded-full text-lg px-8 py-6 h-auto shadow-lg animate-pulse"
              size="lg"
              asChild
            >
              <Link href="#register">
                <span>今すぐLINEで先行登録する</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlowSection;
