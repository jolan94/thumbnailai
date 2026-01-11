import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { CarouselSection } from "@/components/sections/CarouselSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { WhyDifferentSection } from "@/components/sections/WhyDifferentSection";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WhyDifferentSection />
        <BeforeAfterSection />
        <FeaturesSection />
        <CarouselSection />
        <ComparisonSection />
        <ValueProposition />
        <TestimonialsSection />

        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
