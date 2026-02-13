import { BranchesSection } from "@/components/sections/BranchesSection";
import { BrandsStripSection } from "@/components/sections/BrandsStripSection";
import { CategoriesGridSection } from "@/components/sections/CategoriesGridSection";
import { CTABlockSection } from "@/components/sections/CTABlockSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FeaturesGridSection } from "@/components/sections/FeaturesGridSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessStepsSection } from "@/components/sections/ProcessStepsSection";
import { getSectionById, homePageContent } from "@/content/pages";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: homePageContent.title,
  description: homePageContent.description,
};

export default function HomePage() {
  const hero = getSectionById(homePageContent, "hero");
  const beneficios = getSectionById(homePageContent, "beneficios");
  const categorias = getSectionById(homePageContent, "categorias");
  const mayoreo = getSectionById(homePageContent, "mayoreo");
  const servicios = getSectionById(homePageContent, "servicios");
  const sucursales = getSectionById(homePageContent, "sucursales");
  const marcas = getSectionById(homePageContent, "marcas");
  const faq = getSectionById(homePageContent, "faq");
  const ctaFinal = getSectionById(homePageContent, "cta-final");

  return (
    <>
      <HeroSection section={hero} />
      <FeaturesGridSection section={beneficios} />
      <CategoriesGridSection section={categorias} />
      <ProcessStepsSection section={mayoreo} />
      <CategoriesGridSection section={servicios} />
      <BranchesSection section={sucursales} />
      <BrandsStripSection section={marcas} />
      <FAQSection section={faq} />
      <CTABlockSection section={ctaFinal} />
    </>
  );
}
