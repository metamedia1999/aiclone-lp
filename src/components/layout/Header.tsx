"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // スクロール監視
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "サービス紹介", href: "#about" },
    { name: "利用シーン", href: "#usage" },
    { name: "特徴", href: "#features" },
    { name: "サービス画面", href: "#screens" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink text-transparent bg-clip-text">
            アイクロ
          </span>
        </Link>

        {/* デスクトップナビゲーション */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <Button
            className="bg-line hover:bg-line/90 text-white rounded-full text-sm px-6"
            asChild
          >
            <Link href="#register">
              LINEで先行登録
            </Link>
          </Button>
        </nav>

        {/* モバイルメニュー */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">メニュー</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-80">
            <div className="flex flex-col gap-8 h-full">
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink text-transparent bg-clip-text">
                  アイクロ
                </span>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <X className="h-5 w-5" />
                    <span className="sr-only">閉じる</span>
                  </Button>
                </SheetTrigger>
              </div>
              <nav className="flex flex-col gap-6">
                <ul className="space-y-4">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-base font-medium hover:text-primary block py-2 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Button
                  className="bg-line hover:bg-line/90 text-white w-full rounded-full text-base"
                  asChild
                >
                  <Link href="#register">
                    LINEで先行登録
                  </Link>
                </Button>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
