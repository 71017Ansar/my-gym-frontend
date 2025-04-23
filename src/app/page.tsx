import Image from "next/image";
import Chadcn from "@/app/components/Chadcn"
import Dasiui from "@/app/components/Dasiui";
import Header from "@/app/components/Header";
import HeroSection from "@/app/components/HeroSection";
import ClassesSection from "@/app/components/ClassesSection";
import PricingSection from "@/app/components/PricingSection";
import TrainersSection from "@/app/components/TrainersSection";
import TestimonialsSection from "@/app/components/TestimonialsSection";
import CtaSection from "@/app/components/CtaSection";
import Footer from "@/app/components/Footer";


export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <ClassesSection />
        <PricingSection />
        <TrainersSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
