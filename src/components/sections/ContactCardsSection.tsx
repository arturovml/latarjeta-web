import Link from "next/link";

import type { ContactCardItem, SectionContent, SectionItem } from "@/content/types";

type ContactCardsSectionProps = {
  section: SectionContent;
};

const isContactCard = (item: SectionItem): item is ContactCardItem =>
  item.kind === "contact";

const getLinkProps = (href: string) =>
  href.startsWith("http")
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

export function ContactCardsSection({ section }: ContactCardsSectionProps) {
  const items = section.items ?? [];
  const cards = items.filter(isContactCard);

  return (
    <section className="section-pad">
      <div className="mx-auto w-full max-w-[1000px] px-6 lg:px-10">
        {(section.heading || section.body) ? (
          <div className="max-w-2xl mb-10">
            {section.heading ? (
              <h2 className="text-2xl text-neutral-900 mb-3">{section.heading}</h2>
            ) : null}
            {section.body ? (
              <p className="text-neutral-600 leading-relaxed">{section.body}</p>
            ) : null}
            {(section.bullets ?? []).length > 0 ? (
              <ul className="mt-4 space-y-1 text-neutral-700">
                {section.bullets?.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </div>
        ) : null}
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="card-soft p-8"
            >
              <h3 className="text-2xl text-neutral-900 mb-4">{card.title}</h3>
              <p className="text-neutral-600 leading-relaxed mb-6">
                {card.description}
              </p>
              <Link
                href={card.cta.href}
                className={
                  card.cta.variant === "primary"
                    ? "btn-primary px-8 py-4 text-base"
                    : "btn-secondary"
                }
                {...getLinkProps(card.cta.href)}
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
