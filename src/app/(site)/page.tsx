import { CTABlockSection } from "@/components/sections/CTABlockSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FeaturesGridSection } from "@/components/sections/FeaturesGridSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessStepsSection } from "@/components/sections/ProcessStepsSection";
import { StatsStripSection } from "@/components/sections/StatsStripSection";
import { getSectionById, homePageContent } from "@/content/pages";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: homePageContent.title,
  description: homePageContent.description,
};

export default function HomePage() {
  const hero = getSectionById(homePageContent, "hero");
  const stats = getSectionById(homePageContent, "stats");
  const features = getSectionById(homePageContent, "features");
  const process = getSectionById(homePageContent, "process");
  const cta = getSectionById(homePageContent, "cta");
  const faq = getSectionById(homePageContent, "faq");

  return (
    <>
      <HeroSection section={hero} />
      <StatsStripSection section={stats} />
      <FeaturesGridSection section={features} />
      <ProcessStepsSection section={process} />
      <CTABlockSection section={cta} />
      <FAQSection section={faq} />
    </>
  );
}
