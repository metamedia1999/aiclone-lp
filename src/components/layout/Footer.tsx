import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 pt-0 pb-12">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <Link href="/" className="flex items-center gap-2 mt-4 mb-6">
            <span className="text-2xl font-bold bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink text-transparent bg-clip-text">
              アイクロ
            </span>
          </Link>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 mb-6">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">
              プライバシーポリシー
            </Link>
            <Link href="mailto:info@metamoment.co.jp" className="hover:text-primary transition-colors">
              お問い合わせ
            </Link>
          </div>

          <Separator className="mb-6 max-w-md mx-auto" />

          <p className="text-xs text-gray-400">
            &copy; {currentYear} アイクロ All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
