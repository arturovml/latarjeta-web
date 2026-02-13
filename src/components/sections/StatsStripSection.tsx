import type { SectionContent, SectionItem, StatItem } from "@/content/types";

type StatsStripSectionProps = {
  section: SectionContent;
};

const isStat = (item: SectionItem): item is StatItem =>
  item.kind === "stat";

export function StatsStripSection({ section }: StatsStripSectionProps) {
  const items = section.items ?? [];
  const stats = items.filter(isStat);

  return (
    <section className="py-16 border-y border-zinc-800/50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <div className="text-4xl lg:text-5xl mb-3">{stat.value}</div>
              <div className="text-sm text-zinc-500 leading-relaxed">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
