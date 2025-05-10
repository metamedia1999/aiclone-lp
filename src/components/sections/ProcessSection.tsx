"use client";

import { useRef } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 overflow-hidden"
      id="process"
    >
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-neon-pink to-neon-purple text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
            アイクロの仕組み
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gray-800">本人の言葉、思考、知識をもとに</span>
            <br />
            <span className="bg-gradient-to-r from-neon-pink to-neon-purple text-transparent bg-clip-text">作られる高品質AIチューバー</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            アイクロは本人が作成・投稿した本人AIとして100%コントロール可能。架空のキャラクターでも、実在する専門家や著名人でも、質の高いAIチューバーを提供します。
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* 左側：著名人・専門家AIチューバーになる場合 */}
            <div>
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full bg-neon-pink/10 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-pink">
                    <circle cx="12" cy="8" r="5" />
                    <path d="M20 21a8 8 0 0 0-16 0" />
                    <path d="M15 19a4 4 0 0 0-8 0" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">著名人・専門家AIチューバーの場合</h3>
              </div>

              <div className="space-y-8">
                {[
                  {
                    title: "事務所・本人と提携",
                    desc: "アイクロ運営チームが事務所や本人と公式提携契約を締結。正式な認証AIとして展開します。",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 18a4 4 0 0 1-8 0" />
                        <path d="M12 2v4" />
                        <circle cx="12" cy="10" r="4" />
                        <path d="m15 15 3 3" />
                        <path d="m9 15-3 3" />
                      </svg>
                    )
                  },
                  {
                    title: "本人データをもとにAI作成",
                    desc: "発言内容、SNS投稿、動画・インタビュー、独自QAなど、本人のデータをもとに高精度AIを構築します。",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2a3 3 0 0 0-3 3v16h6V5a3 3 0 0 0-3-3z" />
                        <path d="M6 8a3 3 0 0 0-3 3v10h6V11a3 3 0 0 0-3-3z" />
                        <path d="M18 5a3 3 0 0 0-3 3v14h6V8a3 3 0 0 0-3-3z" />
                      </svg>
                    )
                  },
                  {
                    title: "自由に会話、相談が可能",
                    desc: "公式認証バッジつきAIチューバーとして公開。一般ユーザーは自由に会話や相談ができます。",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                    )
                  },
                  {
                    title: "プレミアム機能",
                    desc: "プレミアムプランではAI音声での対話、限定コンテンツの提供なども可能に。より深い交流を実現します。",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    )
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-neon-pink/10 flex items-center justify-center flex-shrink-0">
                      <div className="text-neon-pink">{item.icon}</div>
                    </div>
                    <div>
                      <div className="flex items-center mb-1">
                        <div className="w-6 h-6 rounded-full bg-neon-pink flex items-center justify-center text-white text-xs font-bold mr-2">
                          {i+1}
                        </div>
                        <h4 className="font-bold text-gray-800">{item.title}</h4>
                      </div>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 右側：自分がAIチューバーになる場合 */}
            <div>
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full bg-neon-blue/10 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon-blue">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">自分がAIチューバーになる場合</h3>
              </div>

              <div className="space-y-8">
                {[
                  {
                    title: "本人がQAに答えていく",
                    desc: "専用のアプリで質問に答えるだけ。あなたの考え方、言葉遣い、知識を自然と学習していきます。",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                        <path d="M12 17h.01" />
                      </svg>
                    )
                  },
                  {
                    title: "自分の思考や会話をインプット",
                    desc: "SNSの投稿や動画、ブログ記事なども連携可能。あなたの知識や個性がそのまま反映されます。",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                    )
                  },
                  {
                    title: "本人に代わってAIチューバーデビュー",
                    desc: "あなたのAIクローンがSNSで活動開始。忙しい時間帯もあなたに代わって活動を継続します。",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" x2="12" y1="8" y2="16" />
                        <line x1="8" x2="16" y1="12" y2="12" />
                      </svg>
                    )
                  },
                  {
                    title: "人気になれば収益化も",
                    desc: "フォロワー数に応じた広告収入、プレミアム課金、コラボ案件など、様々な収益化の道が開かれます。",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" x2="12" y1="8" y2="16" />
                        <path d="M8 12h8" />
                      </svg>
                    )
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-neon-blue/10 flex items-center justify-center flex-shrink-0">
                      <div className="text-neon-blue">{item.icon}</div>
                    </div>
                    <div>
                      <div className="flex items-center mb-1">
                        <div className="w-6 h-6 rounded-full bg-neon-blue flex items-center justify-center text-white text-xs font-bold mr-2">
                          {i+1}
                        </div>
                        <h4 className="font-bold text-gray-800">{item.title}</h4>
                      </div>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
              架空のキャラクターやオリジナルAIの作成も可能です。あなただけのAIチューバーを作成して、新しいコミュニケーションの形を体験しましょう。
            </p>
            <Button
              className="bg-neon-purple hover:bg-neon-purple/90 text-white font-bold rounded-full text-lg px-8 py-6 h-auto shadow-lg"
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

export default ProcessSection;
