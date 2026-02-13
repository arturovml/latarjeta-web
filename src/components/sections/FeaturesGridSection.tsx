import type { FeatureItem, SectionContent, SectionItem } from "@/content/types";

const iconMap = {
  shield: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3l7 3v6c0 4.1-2.9 7.8-7 9-4.1-1.2-7-4.9-7-9V6l7-3z" />
    </svg>
  ),
  database: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="7" ry="3" />
      <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
      <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </svg>
  ),
  trend: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 17l6-6 4 4 7-7" />
      <path d="M14 5h6v6" />
    </svg>
  ),
  chart: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 20V10" />
      <path d="M10 20V4" />
      <path d="M16 20v-8" />
      <path d="M3 20h18" />
    </svg>
  ),
};

type FeaturesGridSectionProps = {
  section: SectionContent;
};

const isFeature = (item: SectionItem): item is FeatureItem =>
  item.kind === "feature";

export function FeaturesGridSection({ section }: FeaturesGridSectionProps) {
  const items = section.items ?? [];
  const features = items.filter(isFeature);

  return (
    <section id={section.id} className="section-pad">
      <div className="site-container">
        <div className="max-w-2xl mb-16">
          {section.subheading ? (
            <div className="text-xs text-neutral-500 tracking-wider uppercase mb-4">
              {section.subheading}
            </div>
          ) : null}
          <h2 className="text-4xl lg:text-5xl tracking-tight mb-6">
            {section.heading}
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            {section.body}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="card-soft p-8 transition-shadow hover:shadow-md"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-[var(--primary)]">
                {iconMap[feature.icon]}
              </div>
              <h3 className="text-xl text-neutral-900 mb-4">{feature.title}</h3>
              <p className="text-neutral-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
