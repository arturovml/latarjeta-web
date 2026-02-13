import { CTABlockSection } from "@/components/sections/CTABlockSection";
import { CategoriesGridSection } from "@/components/sections/CategoriesGridSection";
import { PageHeroSection } from "@/components/sections/PageHeroSection";
import { getSectionById, serviciosPageContent } from "@/content/pages";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios de impresión y encuadernado en Puebla | La Tarjeta",
  description:
    "Servicios de impresión y encuadernado en Puebla, además de fotocopiado y material especializado en sucursal.",
};

export default function ServicesPage() {
  const hero = getSectionById(serviciosPageContent, "hero");
  const servicios = getSectionById(serviciosPageContent, "servicios");
  const cta = getSectionById(serviciosPageContent, "cta");

  return (
    <>
      <PageHeroSection
        title={hero.heading}
        description={hero.body ?? serviciosPageContent.description ?? ""}
        eyebrow={hero.subheading}
      />
      <CategoriesGridSection section={servicios} />
      <CTABlockSection section={cta} />
    </>
  );
}
