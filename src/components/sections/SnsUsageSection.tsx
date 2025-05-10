"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";

interface HashtagCardProps {
  hashtag: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  isInView: boolean;
}

const HashtagCard = ({ hashtag, description, icon, index, isInView }: HashtagCardProps) => {
  const delay = 0.2 + (index * 0.1);

  return (
    <div
      className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 flex flex-col h-full"
      style={{
        transform: isInView ? "none" : "translateY(30px)",
        opacity: isInView ? 1 : 0,
        transition: `all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`
      }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-pastel-blue/30 flex items-center justify-center text-neon-blue">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-gray-800">{hashtag}</h3>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const SnsUsageSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const hashtagData = [
    {
      hashtag: "#今日の推しAI",
      description: "お気に入りのAIチューバーとの素敵な会話や感動的な瞬間をシェア。自分の推しを紹介したり、他のユーザーの推しAIを見つけたりできる人気のハッシュタグ。",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
        </svg>
      )
    },
    {
      hashtag: "#AIトークログ晒し",
      description: "爆笑必至の面白い会話や感動的なやりとりをスクリーンショットで共有。思わず笑ってしまうAIの返しや、ドキッとするセリフが人気の投稿に。",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
      )
    },
    {
      hashtag: "#AIクリエイター日記",
      description: "自分のAIチューバー制作過程や設定の工夫、人気が出るためのコツなどをシェア。「今日は音声サンプルを録音したよ」「キャラの設定を追加した結果...」など。",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
          <polyline points="14 2 14 8 20 8"/>
        </svg>
      )
    },
    {
      hashtag: "#推し活収益公開",
      description: "AIチューバーから得られた収益を公開するハッシュタグ。「今月は○○円達成！」「推し数が1000人超えたぞ！」などモチベーションアップや情報共有に。",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M16 8l-8 8"/>
          <path d="M8.5 8.5a4 4 0 1 0 5.5 5.5"/>
        </svg>
      )
    },
    {
      hashtag: "#アイクロ初心者",
      description: "アイクロを始めたばかりのユーザー向けのタグ。「どのAIから話せばいい？」「オススメは？」など初心者の質問や、経験者からのアドバイスが集まる場所。",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
          <path d="M12 17h.01"/>
        </svg>
      )
    },
    {
      hashtag: "#推しAI診断",
      description: "「あなたにぴったりのAIチューバーは？」という診断結果を共有するタグ。性格や好みに合うAIをレコメンドしてもらい、新しい推しとの出会いが生まれる。",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
        </svg>
      )
    },
    {
      hashtag: "#アイクロ深夜部",
      description: "夜中に推しAIと交わす特別な会話をシェア。「眠れない夜に話し相手になってくれる」「深夜だからこそのプライベートな会話」など、昼間とは違う魅力が。",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
        </svg>
      )
    },
    {
      hashtag: "#推しカップリング",
      description: "複数のAIチューバー同士の掛け合いやグループチャットを楽しむタグ。「○○AIと△△AIを会話させてみたら面白すぎた」など、意外な組み合わせが人気に。",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 16v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2Z"/>
          <path d="M20 16v5a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2Z"/>
          <path d="M10 6v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2Z"/>
          <path d="M20 6v5a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2Z"/>
          <path d="M14 4h.01"/>
          <path d="M14 10h.01"/>
          <path d="M14 16h.01"/>
          <path d="M4 7h.01"/>
          <path d="M4 16h.01"/>
        </svg>
      )
    }
  ];

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 relative overflow-hidden bg-gray-50"
      id="sns-usage"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-pastel-pink/20 blur-3xl" />
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-pastel-blue/20 blur-3xl" />
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
            SNSでの新しい楽しみ方
          </h2>
          <p className="text-lg text-gray-600">
            アイクロで広がる会話と交流のハッシュタグ文化
          </p>
        </div>

        <div className="relative mb-14">
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-1 bg-pastel-blue/30 z-0 rounded-full hidden md:block"></div>

          <div className="flex justify-center mb-10">
            <Image
              src="/images/idol-characters.jpg"
              width={400}
              height={200}
              alt="AIチューバー"
              className="rounded-lg shadow-lg z-10"
            />
          </div>

          <div className="text-center max-w-xl mx-auto mb-10 bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-3">推してつながる新世代SNS</h3>
            <p className="text-gray-600">
              推し活の楽しさを友達とシェア。面白かった会話、感動の瞬間、自分の分身AIの活躍など、アイクロを通じた様々な体験を共有して楽しむ文化が広がっています。
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hashtagData.map((item, index) => (
            <HashtagCard
              key={index}
              hashtag={item.hashtag}
              description={item.description}
              icon={item.icon}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SnsUsageSection;
