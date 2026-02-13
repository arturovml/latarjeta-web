import type { ProcessStep, SectionContent, SectionItem } from "@/content/types";

type ProcessStepsSectionProps = {
  section: SectionContent;
};

const isStep = (item: SectionItem): item is ProcessStep =>
  item.kind === "step";

export function ProcessStepsSection({ section }: ProcessStepsSectionProps) {
  const items = section.items ?? [];
  const steps = items.filter(isStep);

  return (
    <section id="proceso" className="py-24 lg:py-32 bg-zinc-900/50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-16">
          {section.subheading ? (
            <div className="text-xs text-zinc-500 tracking-wider uppercase mb-4">
              {section.subheading}
            </div>
          ) : null}
          <h2 className="text-4xl lg:text-5xl tracking-tight mb-6">
            {section.heading}
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed">
            {section.body}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-zinc-800 -z-10" />
              )}

              <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6">
                <div className="text-5xl mb-6 text-zinc-700">
                  {step.number}
                </div>
                <h3 className="text-lg mb-3">{step.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
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
