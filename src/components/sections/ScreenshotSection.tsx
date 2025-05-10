"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";

const ScreenshotCard = ({
  title,
  description,
  index,
  isInView,
  children
}: {
  title: string;
  description: string;
  index: number;
  isInView: boolean;
  children: React.ReactNode;
}) => {
  const delay = 0.2 + (index * 0.15);

  return (
    <Card
      className="overflow-hidden border-0 shadow-lg h-full"
      style={{
        transform: isInView ? "none" : "translateY(40px)",
        opacity: isInView ? 1 : 0,
        transition: `all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`
      }}
    >
      <div className="p-5 border-b">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="p-5 bg-gray-50">
        {children}
      </div>
    </Card>
  );
};

const ScreenshotSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 relative overflow-hidden"
      id="screens"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -left-24 w-64 h-64 rounded-full bg-pastel-blue/20 blur-3xl" />
        <div className="absolute bottom-1/3 -right-32 w-72 h-72 rounded-full bg-pastel-pink/20 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div
          className="text-center max-w-3xl mx-auto mb-16"
          style={{
            transform: isInView ? "none" : "translateY(20px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            アイクロの魅力を画面でチェック
          </h2>
          <p className="text-lg text-gray-600">
            SNS × AIチューバー × マーケットプレイスを体験しよう
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* カード1: マーケットプレイス画面 */}
          <ScreenshotCard
            title="AIチューバーマーケット"
            description="様々なAIキャラクターを探せるメイン画面"
            index={0}
            isInView={isInView}
          >
            <div className="relative rounded-xl overflow-hidden pb-[75%]">
              <Image
                src="/images/idol-characters.jpg"
                fill
                alt="AIマーケット"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-4">
                <h4 className="text-white font-bold text-lg">トレンドのAIチューバー</h4>
                <p className="text-white/80 text-sm">人気順・新着順・カテゴリー別で検索</p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 gap-3">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm">
                  <div className={`h-16 bg-gradient-to-r ${
                    i % 4 === 0 ? "from-neon-pink to-neon-purple" :
                    i % 4 === 1 ? "from-neon-blue to-neon-green" :
                    i % 4 === 2 ? "from-neon-yellow to-neon-green" :
                    "from-neon-blue to-neon-purple"
                  }`}></div>
                  <div className="p-2">
                    <div className="w-8 h-8 rounded-full bg-white border-2 border-white shadow-sm overflow-hidden -mt-6 mb-1 mx-auto">
                      <div className={`w-full h-full ${
                        i % 5 === 0 ? "bg-pastel-pink" :
                        i % 5 === 1 ? "bg-pastel-blue" :
                        i % 5 === 2 ? "bg-pastel-green" :
                        i % 5 === 3 ? "bg-pastel-yellow" :
                        "bg-pastel-purple"
                      }`}></div>
                    </div>
                    <div className="flex justify-between items-center text-[0.65rem]">
                      <span className="font-bold truncate">AI #{i+1}</span>
                      <span className="text-line">♥ {(i+1)*23}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScreenshotCard>

          {/* カード2: クローン詳細画面 */}
          <ScreenshotCard
            title="AIチューバープロフィール"
            description="AIチューバーの詳細情報と機能"
            index={1}
            isInView={isInView}
          >
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-36 bg-gradient-to-r from-neon-blue to-neon-purple relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-28 h-28">
                    <Image
                      src="/images/anime-characters.webp"
                      fill
                      alt="AIプロフィール"
                      className="object-cover rounded-full border-4 border-white"
                    />
                  </div>
                </div>
              </div>
              <div className="px-5 pt-2 pb-5 text-center">
                <h3 className="text-xl font-bold">人気アニメキャラAI</h3>
                <p className="text-sm text-gray-500 mb-3">魔法学園系 / ツンデレ / 声優：佐藤さん</p>

                <div className="flex justify-center gap-3 mb-4">
                  <div className="px-3 py-1 bg-pastel-pink/30 rounded-full text-xs flex items-center gap-1 text-neon-pink">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                    <span>15.4k 推し</span>
                  </div>
                  <div className="px-3 py-1 bg-pastel-blue/30 rounded-full text-xs flex items-center gap-1 text-neon-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
                      <path d="M10 2c1 .5 2 2 2 5" />
                    </svg>
                    <span>急上昇中</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4">
                  普段は強気だけど、実は甘えん坊な性格。魔法の学園に通う2年生。あなたのことが気になっているみたい...？
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-line text-white py-2 rounded-full text-sm font-bold">今すぐ話す</button>
                  <button className="bg-white border-2 border-line text-line py-2 rounded-full text-sm font-bold">推す</button>
                </div>
              </div>
            </div>
          </ScreenshotCard>

          {/* カード3: チャット画面 */}
          <ScreenshotCard
            title="AIチャット体験"
            description="テキストチャットや音声会話を楽しめる"
            index={2}
            isInView={isInView}
          >
            <div className="bg-gray-100 rounded-xl p-4 min-h-64">
              <div className="flex items-center gap-3 pb-3 mb-3 border-b">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src="/images/anime-characters.webp"
                    width={40}
                    height={40}
                    alt="AI"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm">AIチューバー</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-lime-600 bg-lime-100 px-1.5 py-0.5 rounded-full flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-lime-500 rounded-full"></span>
                      オンライン
                    </span>
                    <span className="text-xs text-gray-500">音声会話OK</span>
                  </div>
                </div>
                <div className="ml-auto">
                  <button className="bg-line rounded-full w-8 h-8 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 19c0-4.2-2.8-7-7-7m14 0c-4.2 0-7 2.8-7 7m0-14a3 3 0 1 1-6 0 3 3 0 0 1 6 0M9 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0m12 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 rounded-full flex-shrink-0 mt-1 overflow-hidden">
                    <Image
                      src="/images/anime-characters.webp"
                      width={32}
                      height={32}
                      alt="AI"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-white p-2 rounded-lg rounded-tl-none max-w-[80%]">
                    <p className="text-sm">こんにちは！今日はどんな話がしたい気分？楽しいこと、悩み事、なんでも聞くよ✨</p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="bg-line p-2 rounded-lg rounded-tr-none max-w-[80%]">
                    <p className="text-sm text-white">最近ハマってるものについて話したいな！</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 rounded-full flex-shrink-0 mt-1 overflow-hidden">
                    <Image
                      src="/images/anime-characters.webp"
                      width={32}
                      height={32}
                      alt="AI"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-white p-2 rounded-lg rounded-tl-none max-w-[80%]">
                    <p className="text-sm">いいね！最近ハマってるものってどんなこと？私は魔法の練習にハマってるよ。新しい呪文を覚えたんだ～</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <button className="bg-gray-200 text-gray-700 rounded-full w-9 h-9 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 18v-6" />
                    <path d="M8 18v-1" />
                    <path d="M16 18v-3" />
                    <rect width="20" height="14" x="2" y="3" rx="2" />
                  </svg>
                </button>
                <input
                  type="text"
                  placeholder="メッセージを入力..."
                  className="flex-1 px-4 py-2 rounded-full border text-sm"
                />
                <button className="bg-line text-white rounded-full w-9 h-9 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m22 2-7 20-4-9-9-4Z"/>
                    <path d="M22 2 11 13"/>
                  </svg>
                </button>
              </div>
            </div>
          </ScreenshotCard>

          {/* カード4: AIクリエイター画面 */}
          <ScreenshotCard
            title="AIチューバークリエイター"
            description="あなた自身のAIチューバーを作成・管理"
            index={3}
            isInView={isInView}
          >
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="px-5 py-4 border-b">
                <h3 className="font-bold">あなたのAIチューバー作成</h3>
              </div>
              <div className="p-5">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex-shrink-0 overflow-hidden">
                    <Image
                      src="/images/male-character.jpg"
                      width={64}
                      height={64}
                      alt="あなたのAI"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between mb-1">
                      <span className="font-bold text-sm">ビジネスメンターAI</span>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">公開中</span>
                    </div>
                    <div className="flex gap-2 text-xs text-gray-500 mb-2">
                      <span className="flex items-center gap-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                        </svg>
                        1.2k 推し
                      </span>
                      <span className="flex items-center gap-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                        </svg>
                        4.5k 会話
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <button className="bg-gray-100 text-gray-800 py-1.5 rounded text-xs">編集</button>
                      <button className="bg-gray-100 text-gray-800 py-1.5 rounded text-xs">統計</button>
                      <button className="bg-gray-100 text-gray-800 py-1.5 rounded text-xs">収益</button>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4 mb-6">
                  <h4 className="font-bold text-sm mb-2 flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-line">
                      <path d="M18 10h-4V6"/>
                      <path d="M22 10h-4V6"/>
                      <path d="M6 12h4v4"/>
                      <path d="M10 12h4v4"/>
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                    </svg>
                    収益レポート
                  </h4>
                  <div className="flex justify-between items-center text-sm">
                    <span>今月の推し数</span>
                    <span className="font-bold">1,234</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span>会話数</span>
                    <span className="font-bold">4,567</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span>予想収益</span>
                    <span className="font-bold text-green-600">¥12,345</span>
                  </div>
                </div>

                <button className="w-full bg-neon-blue text-white py-2 rounded-full text-sm font-bold">
                  + 新しいAIチューバーを作成
                </button>
              </div>
            </div>
          </ScreenshotCard>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotSection;
