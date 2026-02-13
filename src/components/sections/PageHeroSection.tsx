interface PageHeroSectionProps {
  title: string;
  description: string;
  eyebrow?: string;
}

export function PageHeroSection({
  title,
  description,
  eyebrow,
}: PageHeroSectionProps) {
  return (
    <section className="pt-32 pb-16 lg:pt-36 lg:pb-20 border-b border-zinc-800/50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-2xl">
          {eyebrow ? (
            <div className="text-xs text-zinc-500 tracking-wider uppercase mb-4">
              {eyebrow}
            </div>
          ) : null}
          <h1 className="text-4xl lg:text-5xl tracking-tight mb-6">
            {title}
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed">{description}</p>
        </div>
      </div>
    </section>
  );
}
