import { CTABlockSection } from "@/components/sections/CTABlockSection";
import { PageHeroSection } from "@/components/sections/PageHeroSection";
import { ProcessStepsSection } from "@/components/sections/ProcessStepsSection";
import { StatsStripSection } from "@/components/sections/StatsStripSection";
import { getSectionById, nosotrosPageContent } from "@/content/pages";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: nosotrosPageContent.title,
  description: nosotrosPageContent.description,
};

export default function AboutPage() {
  const hero = getSectionById(nosotrosPageContent, "hero");
  const stats = getSectionById(nosotrosPageContent, "stats");
  const process = getSectionById(nosotrosPageContent, "process");
  const cta = getSectionById(nosotrosPageContent, "cta");

  return (
    <>
      <PageHeroSection
        title={hero.heading}
        description={hero.body ?? nosotrosPageContent.description ?? ""}
        eyebrow={hero.subheading}
      />
      <StatsStripSection section={stats} />
      <ProcessStepsSection section={process} />
      <CTABlockSection section={cta} />
    </>
  );
}
