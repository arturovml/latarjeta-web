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
    <section className="pt-32 pb-16 lg:pt-36 lg:pb-20 border-b border-neutral-200 bg-white">
      <div className="site-container">
        <div className="max-w-2xl">
          {eyebrow ? (
            <div className="text-xs text-neutral-500 tracking-wider uppercase mb-4">
              {eyebrow}
            </div>
          ) : null}
          <h1 className="text-4xl lg:text-5xl tracking-tight mb-6">
            {title}
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </section>
  );
}
