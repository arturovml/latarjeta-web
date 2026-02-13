import { CTABlockSection } from "@/components/sections/CTABlockSection";
import { ContactCardsSection } from "@/components/sections/ContactCardsSection";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { PageHeroSection } from "@/components/sections/PageHeroSection";
import { contactoPageContent, getSectionById } from "@/content/pages";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: contactoPageContent.title,
  description: contactoPageContent.description,
};

export default function ContactPage() {
  const hero = getSectionById(contactoPageContent, "hero");
  const form = getSectionById(contactoPageContent, "form");
  const cards = getSectionById(contactoPageContent, "contact-cards");
  const cta = getSectionById(contactoPageContent, "cta");

  return (
    <>
      <PageHeroSection
        title={hero.heading}
        description={hero.body ?? contactoPageContent.description ?? ""}
        eyebrow={hero.subheading}
      />
      <ContactFormSection section={form} />
      <ContactCardsSection section={cards} />
      <CTABlockSection section={cta} />
    </>
  );
}
