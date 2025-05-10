"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  isInView: boolean;
}

const Feature = ({ title, description, icon, index, isInView }: FeatureProps) => {
  const delay = 0.2 + (index * 0.15);

  return (
    <div
      className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6"
      style={{
        transform: isInView ? "none" : "translateY(30px)",
        opacity: isInView ? 1 : 0,
        transition: `all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`
      }}
    >
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2 text-center md:text-left">{title}</h3>
        <p className="text-gray-600 text-center md:text-left">{description}</p>
      </div>
    </div>
  );
};

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const featuresData = [
    {
      title: "誰でも簡単にAIチューバーを作れる",
      description: "専門知識は不要。音声サンプルや写真、キャラクターの性格を設定するだけで、あなただけのオリジナルAIキャラクターが作れます。個性的な設定で、独自のファン層を獲得しましょう。",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
          <polyline points="14 2 14 8 20 8"/>
          <path d="M8 13h2"/>
          <path d="M8 17h2"/>
          <path d="M14 13h2"/>
          <path d="M14 17h2"/>
        </svg>
      )
    },
    {
      title: "「推し」と「推される」のSNS文化",
      description: "お気に入りのAIチューバーを「推し」として応援。面白い会話や感動的なやりとりをSNSでシェア。自分が作ったAIが「推される」喜びも味わえます。推し数でランキングも！",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
        </svg>
      )
    },
    {
      title: "AIの人気が高まれば収益化も可能",
      description: "あなたが作ったAIチューバーがファンを獲得すれば、収益を得るチャンスも。24時間休まず働いてくれる分身があなたの代わりに稼いでくれます。クリエイターエコノミーの新しい形です。",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v12" />
          <path d="M16 10H8" />
        </svg>
      )
    },
    {
      title: "テキストも音声会話も楽しめる",
      description: "テキストチャットだけでなく、音声での会話も可能。声でのリアルタイムなやりとりがさらに臨場感を高めます。まるで本当に一緒にいるような体験をお楽しみください。",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <path d="M12 6v12" />
          <path d="M6 12h12" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      )
    }
  ];

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 relative overflow-hidden bg-gray-50"
      id="features"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-pastel-green/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-pastel-yellow/30 blur-3xl" />
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
            アイクロならではの特別体験
          </h2>
          <p className="text-lg text-gray-600">
            遊んで、話して、稼げる。あなたらしい使い方を見つけよう
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {featuresData.map((feature, index) => (
            <Feature
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
