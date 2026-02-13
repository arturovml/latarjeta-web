import type { SectionContent } from "@/content/types";

type BrandsStripSectionProps = {
  section: SectionContent;
};

export function BrandsStripSection({ section }: BrandsStripSectionProps) {
  return (
    <section className="section-pad">
      <div className="site-container">
        <div className="max-w-3xl mb-10">
          <h2 className="text-4xl lg:text-5xl tracking-tight mb-4">{section.heading}</h2>
          {section.body ? (
            <p className="text-lg text-neutral-600 leading-relaxed">{section.body}</p>
          ) : null}
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={`brand-placeholder-${index + 1}`}
              className="card-soft h-16 flex items-center justify-center text-sm text-neutral-500"
            >
              Marca
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
