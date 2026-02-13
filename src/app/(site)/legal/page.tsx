import { PageHeroSection } from "@/components/sections/PageHeroSection";
import { getSectionById, legalPageContent } from "@/content/pages";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: legalPageContent.title,
  description: legalPageContent.description,
};

export default function LegalPage() {
  const hero = getSectionById(legalPageContent, "hero");
  const contentSections = legalPageContent.sections.filter(
    (section) => section.id !== "hero",
  );

  return (
    <>
      <PageHeroSection
        title={hero.heading}
        description={hero.body ?? legalPageContent.description ?? ""}
        eyebrow={hero.subheading}
      />
      <section className="py-20">
        <div className="mx-auto w-full max-w-[900px] px-6 lg:px-10 space-y-8">
          {contentSections.map((section) => (
            <div
              key={section.id}
              className="card-soft p-8"
            >
              <h2 className="text-2xl text-neutral-900 mb-4">{section.heading}</h2>
              {section.body ? (
                <p className="text-neutral-600 leading-relaxed mb-6">
                  {section.body}
                </p>
              ) : null}
              {(section.bullets ?? []).length > 0 ? (
                <ul className="space-y-3 text-neutral-600">
                  {section.bullets?.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[var(--primary)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
