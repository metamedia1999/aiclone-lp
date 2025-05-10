"use client";

import { useRef } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";

const BusinessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 bg-gradient-to-br from-pastel-blue/20 via-white to-pastel-purple/20 overflow-hidden"
      id="business"
    >
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-neon-blue to-neon-green text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
            ビジネスパーソン・専門家向け
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gray-800">業界のプロフェッショナルと</span>
            <br />
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple text-transparent bg-clip-text">いつでも相談できる</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            著名起業家や各分野の専門家の公式認証AIも多数登場予定。ビジネス相談、専門知識の提供など、あなたのビジネスやキャリアをサポートします。
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          style={{
            transform: isInView ? "none" : "translateY(40px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
          }}
        >
          {/* 左側：専門家AI対話のメリット */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-5 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10">
              <h3 className="text-xl font-bold mb-2">
                「専門家AI対話」で得られるメリット
              </h3>
              <div className="space-y-4 mt-4">
                {[
                  { title: "24時間いつでも相談可能", desc: "深夜や早朝でも、忙しい時間帯でもAIは常に対応可能です" },
                  { title: "本人の知見が詰まったデータベース", desc: "実際の専門家の知識と経験に基づいた回答が得られます" },
                  { title: "リアルタイムのアドバイス", desc: "最新のビジネスシーンでも即座に専門的アドバイスを提供" },
                  { title: "完全プライベートな相談", desc: "人目を気にせず、機密情報も含めた相談が可能です" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-neon-blue/20 rounded-full flex items-center justify-center">
                      <span className="text-neon-blue font-bold">{i+1}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 右側：事例シミュレーション */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-5">
              <h3 className="text-xl font-bold mb-4">専門家AIとの対話例</h3>

              <div className="bg-gray-100 rounded-xl p-4 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-white shadow-sm">
                    <Image
                      src="/images/male-character.jpg"
                      width={40}
                      height={40}
                      alt="あなた"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none max-w-[85%] shadow-sm">
                    <p className="text-sm">新規事業立ち上げについてアドバイスが欲しいです。初期資金が限られている場合、どのような戦略が有効でしょうか？</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-white shadow-sm bg-neon-blue/10 flex items-center justify-center">
                    <span className="text-xs font-bold text-neon-blue">公式</span>
                  </div>
                  <div className="bg-neon-blue/10 p-3 rounded-2xl rounded-tl-none max-w-[85%] shadow-sm">
                    <p className="text-xs font-bold text-neon-blue mb-1">起業家AIチューバー</p>
                    <p className="text-sm">限られた資金で始める場合は、MVP（最小限の製品）を素早く作ることが重要です。私の経験では、以下の3ステップがおすすめです：
                    <br /><br />1. 顧客インタビューを徹底して行い、本当のニーズを把握
                    <br />2. 最小限の機能で素早くリリースし、早期にフィードバックを収集
                    <br />3. 月額課金などの継続収益モデルを検討し、キャッシュフローを確保
                    <br /><br />具体的な事業内容について詳しく教えていただけますか？</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-center">
                <span className="text-sm text-gray-500">※プレミアムプランでは音声対話も可能になります</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
