import Link from "next/link";

import type {
  CtaItem,
  HeroChart,
  HeroMetric,
  HeroStatus,
  SectionContent,
  SectionItem,
} from "@/content/types";

type HeroSectionProps = {
  section: SectionContent;
};

const isMetric = (item: SectionItem): item is HeroMetric =>
  item.kind === "metric";
const isStatus = (item: SectionItem): item is HeroStatus =>
  item.kind === "status";
const isChart = (item: SectionItem): item is HeroChart =>
  item.kind === "chart";
const isCta = (item: SectionItem): item is CtaItem =>
  item.kind === "cta";

export function HeroSection({ section }: HeroSectionProps) {
  const items = section.items ?? [];
  const metrics = items.filter(isMetric);
  const statuses = items.filter(isStatus);
  const chart = items.find(isChart);
  const ctas = items.filter(isCta);
  const primaryCta = ctas.find((cta) => cta.variant === "primary") ?? ctas[0];
  const secondaryCta = ctas.find((cta) => cta.variant === "secondary") ?? ctas[1];

  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-xl">
            {section.subheading ? (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full mb-8">
                <div className="w-1.5 h-1.5 bg-zinc-100 rounded-full" />
                <span className="text-xs text-zinc-400 tracking-wide uppercase">
                  {section.subheading}
                </span>
              </div>
            ) : null}

            <h1 className="text-5xl lg:text-6xl tracking-tight mb-6">
              {section.heading}
            </h1>

            <p className="text-lg text-zinc-400 leading-relaxed mb-10">
              {section.body}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
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

          <div className="relative">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 lg:p-12">
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  {metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="bg-zinc-950 border border-zinc-800 rounded p-4"
                    >
                      <div className="text-xs text-zinc-500 mb-2">
                        {metric.label}
                      </div>
                      <div className="text-2xl">{metric.value}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-zinc-950 border border-zinc-800 rounded p-6">
                  <div className="flex items-end justify-between h-32 gap-2">
                    {(chart?.bars ?? []).map((height, i) => (
                      <div
                        key={`${height}-${i}`}
                        className="flex-1 bg-zinc-700 rounded-sm"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                  <div className="text-xs text-zinc-500 mt-4">
                    {chart?.label}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {statuses.map((item) => (
                    <div
                      key={item.label}
                      className="bg-zinc-950 border border-zinc-800 rounded p-4"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            item.tone === "success"
                              ? "bg-emerald-500"
                              : "bg-zinc-500"
                          }`}
                        />
                        <span className="text-xs text-zinc-500">
                          {item.label}
                        </span>
                      </div>
                      <div className="text-sm">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-zinc-800/20 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
