import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingLineButton from "@/components/layout/FloatingLineButton";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import UsageScene from "@/components/sections/UsageScene";
import Features from "@/components/sections/Features";
import RegisterSection from "@/components/sections/RegisterSection";
import ScreenshotSection from "@/components/sections/ScreenshotSection";
import SnsUsageSection from "@/components/sections/SnsUsageSection";
import BusinessSection from "@/components/sections/BusinessSection";
import ProcessSection from "@/components/sections/ProcessSection";
import FlowSection from "@/components/sections/FlowSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <FloatingLineButton />

      <HeroSection />
      <AboutSection />
      <UsageScene />
      <BusinessSection />
      <Features />
      <ProcessSection />
      <ScreenshotSection />
      <FlowSection />
      <SnsUsageSection />
      <RegisterSection />

      <Footer />
    </main>
  );
}
