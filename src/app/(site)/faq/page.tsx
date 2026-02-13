import { CTABlockSection } from "@/components/sections/CTABlockSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { PageHeroSection } from "@/components/sections/PageHeroSection";
import { faqPageContent, getSectionById } from "@/content/pages";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: faqPageContent.title,
  description: faqPageContent.description,
};

export default function FAQPage() {
  const hero = getSectionById(faqPageContent, "hero");
  const faq = getSectionById(faqPageContent, "faq");
  const cta = getSectionById(faqPageContent, "cta");

  return (
    <>
      <PageHeroSection
        title={hero.heading}
        description={hero.body ?? faqPageContent.description ?? ""}
        eyebrow={hero.subheading}
      />
      <FAQSection section={faq} />
      <CTABlockSection section={cta} />
    </>
  );
}
