"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 relative overflow-hidden"
      id="about"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-pastel-green/20 blur-3xl" />
        <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-pastel-yellow/20 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div
          className="text-center max-w-3xl mx-auto mb-16"
          style={{
            transform: isInView ? "none" : "translateY(20px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            アイクロって何？
          </h2>
          <p className="text-lg text-gray-600">
            あなたも、推しも、みんなAIになれる新しいSNS型マーケットプレイス
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* カード1 */}
          <Card
            className="overflow-hidden shadow-lg border-0"
            style={{
              transform: isInView ? "none" : "translateY(40px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
            }}
          >
            <div className="h-48 bg-gradient-to-br from-neon-pink to-neon-purple relative">
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <Image
                  src="/images/anime-characters.webp"
                  width={200}
                  height={200}
                  alt="AIキャラクター"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3">
                SNSのようにAIチューバーを<br />
                "探す・話す・推す"
              </h3>
              <p className="text-gray-600">
                何千ものAIキャラクターと自由に会話。声優系、アイドル系、ツンデレ系など様々なタイプから選べる。お気に入りを「推し」として応援したり、会話をシェアしたり。
              </p>
            </CardContent>
          </Card>

          {/* カード2 */}
          <Card
            className="overflow-hidden shadow-lg border-0"
            style={{
              transform: isInView ? "none" : "translateY(40px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
          >
            <div className="h-48 bg-gradient-to-br from-neon-blue to-neon-green relative">
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <Image
                  src="/images/virtual-characters.jpg"
                  width={200}
                  height={200}
                  alt="AIチューバー"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3">
                あの著名人・キャラクターと<br />
                会話できるかも...？
              </h3>
              <p className="text-gray-600">
                テキストチャットも、音声会話もOK。24時間365日、いつでもどこでも、あなただけのために話してくれる。推しとの特別な関係を楽しもう。
              </p>
            </CardContent>
          </Card>

          {/* カード3 */}
          <Card
            className="overflow-hidden shadow-lg border-0"
            style={{
              transform: isInView ? "none" : "translateY(40px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
            }}
          >
            <div className="h-48 bg-gradient-to-br from-neon-yellow to-neon-green relative">
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <Image
                  src="/images/male-character.jpg"
                  width={200}
                  height={200}
                  alt="オリジナルAI"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3">
                あなた自身がAIチューバーに<br />
                なって人気を集めることも
              </h3>
              <p className="text-gray-600">
                オリジナルのAIキャラクターを作成して公開。個性的な設定で独自のファンを集めよう。人気が出れば収益化も可能。24時間休まず働いてくれるもう一人の自分。
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
