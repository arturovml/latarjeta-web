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
  const cards = getSectionById(contactoPageContent, "contact-cards");
  const form = getSectionById(contactoPageContent, "form");

  return (
    <>
      <PageHeroSection
        title={hero.heading}
        description={hero.body ?? contactoPageContent.description ?? ""}
        eyebrow={hero.subheading}
      />
      <ContactCardsSection section={cards} />
      <ContactFormSection section={form} />
    </>
  );
}
