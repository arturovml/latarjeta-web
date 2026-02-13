import Link from "next/link";

import type { CtaItem, ProcessStep, SectionContent, SectionItem } from "@/content/types";

type ProcessStepsSectionProps = {
  section: SectionContent;
};

const isStep = (item: SectionItem): item is ProcessStep =>
  item.kind === "step";
const isCta = (item: SectionItem): item is CtaItem =>
  item.kind === "cta";

export function ProcessStepsSection({ section }: ProcessStepsSectionProps) {
  const items = section.items ?? [];
  const steps = items.filter(isStep);
  const ctas = items.filter(isCta);
  const primaryCta = ctas.find((cta) => cta.variant === "primary") ?? ctas[0];

  return (
    <section id={section.id} className="section-pad bg-neutral-50">
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

          {(section.bullets ?? []).length > 0 ? (
            <ul className="mt-6 space-y-2">
              {section.bullets?.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-neutral-700">
                  <span
                    className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--primary)]"
                    aria-hidden="true"
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          ) : null}

          {primaryCta ? (
            <div className="mt-8">
              <Link href={primaryCta.href} className="btn-primary" aria-label={primaryCta.label}>
                {primaryCta.label}
              </Link>
            </div>
          ) : null}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-neutral-300 -z-10" />
              )}

              <div className="card-soft p-6">
                <div className="text-5xl mb-6 text-neutral-300">
                  {step.number}
                </div>
                <h3 className="text-lg text-neutral-900 mb-3">{step.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
