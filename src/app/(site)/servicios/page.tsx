import { CTABlockSection } from "@/components/sections/CTABlockSection";
import { FeaturesGridSection } from "@/components/sections/FeaturesGridSection";
import { PageHeroSection } from "@/components/sections/PageHeroSection";
import { ProcessStepsSection } from "@/components/sections/ProcessStepsSection";
import { getSectionById, serviciosPageContent } from "@/content/pages";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: serviciosPageContent.title,
  description: serviciosPageContent.description,
};

export default function ServicesPage() {
  const hero = getSectionById(serviciosPageContent, "hero");
  const features = getSectionById(serviciosPageContent, "features");
  const process = getSectionById(serviciosPageContent, "process");
  const cta = getSectionById(serviciosPageContent, "cta");

  return (
    <>
      <PageHeroSection
        title={hero.heading}
        description={hero.body ?? serviciosPageContent.description ?? ""}
        eyebrow={hero.subheading}
      />
      <FeaturesGridSection section={features} />
      <ProcessStepsSection section={process} />
      <CTABlockSection section={cta} />
    </>
  );
}
