"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const RegisterSection = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("register");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  if (!mounted) return null;

  return (
    <section id="register" className="pt-20 pb-10 md:pt-28 md:pb-14 bg-gradient-to-br from-pastel-purple/30 via-white to-pastel-blue/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100" style={{ backdropFilter: "blur(12px)" }}>
            <div className="px-6 py-8 md:px-12 md:py-14">
              <div className="text-center mb-8">
                <div className="inline-block bg-gradient-to-r from-neon-blue to-neon-purple text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
                  期間限定先行登録特典
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="text-neon-pink">LINE</span>で登録して<br />
                  <span className="underline decoration-neon-blue decoration-4 underline-offset-4">β版先行アクセス権を確保</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                  アイクロのβ版リリース時に真っ先にお知らせ。公式AIチューバーとのコミュニケーションを一足先に体験できます。
                  <span className="block mt-2 font-bold text-gray-800">先着1,000名様限定特典付き！</span>
                </p>

                <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-8">
                  <Button
                    className="bg-line hover:bg-line/90 text-white font-bold text-lg px-8 py-6 h-auto rounded-xl shadow-lg flex items-center justify-center gap-3 animate-pulse"
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
                      <span>今すぐLINEで登録する</span>
                    </Link>
                  </Button>

                  <div className="flex-shrink-0 w-32 h-32 relative mx-auto md:mx-0">
                    <Image
                      src="/images/line-qr.jpg"
                      fill
                      alt="LINE QRコード"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="mt-8 text-sm text-gray-500">
                  <ul className="space-y-1">
                    <li>※ご登録後、LINEで最新情報やリリース案内をお届けします</li>
                    <li>※β版リリース前にプレミアム特典や先行体験の案内をお送りします</li>
                    <li>※個人情報の取り扱いについては「プライバシーポリシー」をご確認ください</li>
                  </ul>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-4 max-w-sm mx-auto">
                  {['優先アクセス', '特別プレゼント', '限定イベント'].map((benefit, i) => (
                    <div key={i} className="bg-gray-50 rounded-lg p-2 shadow-sm">
                      <div className="text-xs font-bold text-neon-pink">特典 {i+1}</div>
                      <div className="text-sm font-medium">{benefit}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegisterSection;
