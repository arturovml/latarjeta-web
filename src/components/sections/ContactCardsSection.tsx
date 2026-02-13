import Link from "next/link";

import type { ContactCardItem, SectionContent, SectionItem } from "@/content/types";

type ContactCardsSectionProps = {
  section: SectionContent;
};

const isContactCard = (item: SectionItem): item is ContactCardItem =>
  item.kind === "contact";

export function ContactCardsSection({ section }: ContactCardsSectionProps) {
  const items = section.items ?? [];
  const cards = items.filter(isContactCard);

  return (
    <section className="py-20">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
        {(section.heading || section.body) ? (
          <div className="max-w-2xl mb-10">
            {section.heading ? (
              <h2 className="text-2xl mb-3">{section.heading}</h2>
            ) : null}
            {section.body ? (
              <p className="text-zinc-400 leading-relaxed">{section.body}</p>
            ) : null}
          </div>
        ) : null}
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-zinc-900 border border-zinc-800 rounded-lg p-8"
            >
              <h3 className="text-2xl mb-4">{card.title}</h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                {card.description}
              </p>
              <Link
                href={card.cta.href}
                className={
                  card.cta.variant === "primary"
                    ? "inline-flex px-6 py-3 bg-zinc-100 text-zinc-950 hover:bg-zinc-200 transition-colors"
                    : "inline-flex px-6 py-3 border border-zinc-700 text-zinc-100 hover:border-zinc-600 hover:bg-zinc-900 transition-colors"
                }
              >
                {card.cta.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
