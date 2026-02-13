import Image from "next/image";
import Link from "next/link";

import type { CtaItem, SectionContent, SectionItem } from "@/content/types";

type HeroSectionProps = {
  section: SectionContent;
};

const isCta = (item: SectionItem): item is CtaItem =>
  item.kind === "cta";

export function HeroSection({ section }: HeroSectionProps) {
  const items = section.items ?? [];
  const ctas = items.filter(isCta);
  const primaryCta = ctas.find((cta) => cta.variant === "primary") ?? ctas[0];
  const secondaryCta = ctas.find((cta) => cta.variant === "secondary") ?? ctas[1];

  return (
    <section className="pt-32 pb-16 lg:pt-36 lg:pb-20">
      <div className="site-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-xl">
            {section.subheading ? (
              <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 mb-8 shadow-sm">
                <div className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                <span className="text-xs text-neutral-600 tracking-wide">
                  {section.subheading}
                </span>
              </div>
            ) : null}

            <h1 className="text-5xl lg:text-6xl tracking-tight mb-6">
              {section.heading}
            </h1>

            <p className="text-lg text-neutral-600 leading-relaxed mb-10">
              {section.body}
            </p>

            {(section.bullets ?? []).length > 0 ? (
              <ul className="mb-10 space-y-3">
                {section.bullets?.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-3 text-neutral-700">
                    <span className="h-2 w-2 rounded-full bg-[var(--primary)]" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="flex flex-col sm:flex-row gap-4">
              {primaryCta ? (
                <Link href={primaryCta.href} className="btn-primary px-8 py-4 text-center">
                  {primaryCta.label}
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link href={secondaryCta.href} className="btn-secondary px-8 py-4 text-center">
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          </div>

          <div className="card-soft p-6 lg:p-8">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100">
              <Image
                src="/latarjeta_papelerias.jpg"
                alt="Sucursal La Tarjeta Papelerías"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
