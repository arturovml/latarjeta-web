import Link from "next/link";

import type { CtaItem, SectionContent, SectionItem } from "@/content/types";

type CTABlockSectionProps = {
  section: SectionContent;
};

const isCta = (item: SectionItem): item is CtaItem =>
  item.kind === "cta";

export function CTABlockSection({ section }: CTABlockSectionProps) {
  const items = section.items ?? [];
  const ctas = items.filter(isCta);
  const primaryCta = ctas.find((cta) => cta.variant === "primary") ?? ctas[0];
  const secondaryCta = ctas.find((cta) => cta.variant === "secondary") ?? ctas[1];

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-12 lg:p-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl tracking-tight mb-6">
              {section.heading}
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-10">
              {section.body}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {primaryCta ? (
                <Link
                  href={primaryCta.href}
                  className="px-8 py-4 bg-zinc-100 text-zinc-950 hover:bg-zinc-200 transition-colors text-center"
                >
                  {primaryCta.label}
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link
                  href={secondaryCta.href}
                  className="px-8 py-4 border border-zinc-700 text-zinc-100 hover:border-zinc-600 hover:bg-zinc-900 transition-colors text-center"
                >
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
