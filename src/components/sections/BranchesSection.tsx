import Link from "next/link";

import type { BranchItem, SectionContent, SectionItem } from "@/content/types";

type BranchesSectionProps = {
  section: SectionContent;
};

const isBranch = (item: SectionItem): item is BranchItem => item.kind === "branch";

export function BranchesSection({ section }: BranchesSectionProps) {
  const branches = (section.items ?? []).filter(isBranch);

  return (
    <section id={section.id} className="section-pad bg-neutral-50">
      <div className="site-container">
        <div className="max-w-3xl mb-12">
          <h2 className="text-4xl lg:text-5xl tracking-tight mb-4">{section.heading}</h2>
          {section.body ? (
            <p className="text-lg text-neutral-600 leading-relaxed">{section.body}</p>
          ) : null}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {branches.map((branch) => (
            <article key={branch.name} className="card-soft p-6">
              <h3 className="text-xl text-neutral-900 mb-4">{branch.name}</h3>
              <div className="space-y-2 text-sm text-neutral-600 mb-6">
                <p>{branch.address}</p>
                <p>{branch.hours}</p>
                {branch.phone ? <p>{branch.phone}</p> : null}
              </div>
              {/* TODO: Reemplazar mapsHref="#" por enlaces reales de Google Maps de cada sucursal */}
              <Link
                href={branch.mapsHref}
                className="btn-secondary"
                aria-label={`Abrir en Google Maps ${branch.name}`}
              >
                Abrir en Google Maps
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-8 text-sm text-neutral-600 leading-relaxed">
          3 sucursales en el Centro Histórico de Puebla. Atención por WhatsApp para pedidos y cotizaciones.
        </p>
      </div>
    </section>
  );
}