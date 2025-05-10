"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const FloatingLineButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // ヒーローセクションを超えたら表示
      if (window.scrollY > window.innerHeight * 0.7) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <Button
        className="bg-line hover:bg-line/90 text-white rounded-full shadow-lg px-6 py-6 h-auto font-bold flex items-center gap-2"
        size="lg"
        asChild
      >
        <Link href="#register">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
            <path d="M9 11a2 2 0 1 1 4 0v6a2 2 0 1 1-4 0z"/>
            <path d="M17 7c0-4.6-4-6-5-6-1 0-5 1.4-5 6-.2.1 0 8 5 12 5-4 5-12 5-12Z"/>
          </svg>
          <span>LINE登録</span>
        </Link>
      </Button>
    </div>
  );
};

export default FloatingLineButton;
