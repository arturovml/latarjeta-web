import type { SectionContent } from "@/content/types";

type CategoriesGridSectionProps = {
  section: SectionContent;
};

export function CategoriesGridSection({ section }: CategoriesGridSectionProps) {
  const categories = section.bullets ?? [];

  return (
    <section id={section.id} className="section-pad bg-neutral-50">
      <div className="site-container">
        <div className="max-w-3xl mb-12">
          <h2 className="text-4xl lg:text-5xl tracking-tight mb-4">{section.heading}</h2>
          {section.body ? (
            <p className="text-lg text-neutral-600 leading-relaxed">{section.body}</p>
          ) : null}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <article key={category} className="card-soft p-5 transition-shadow hover:shadow-md">
              <h3 className="text-base text-neutral-900 leading-snug">{category}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
