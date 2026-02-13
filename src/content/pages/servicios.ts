import type { PageContent } from "../types";

export const serviciosPageContent = {
  title: "Servicios en sucursal",
  description:
    "Servicios en sucursal para impresión, encuadernado y más, con atención rápida en Puebla.",
  sections: [
    {
      id: "hero",
      heading: "Servicios en sucursal",
      subheading: "Resuelve en un mismo lugar: compra + impresión.",
      body:
        "Atendemos necesidades de escuela, oficina y negocio con servicios prácticos en sucursal.",
    },
    {
      id: "servicios",
      heading: "Servicios",
      body:
        "Servicios sujetos a disponibilidad por sucursal.",
      bullets: [
        "Fotocopiado",
        "Impresión",
        "Encuadernado",
        "Material especializado para manualidades y proyectos",
      ],
    },
    {
      id: "cta",
      heading: "¿Necesitas confirmar disponibilidad?",
      body:
        "Escríbenos por WhatsApp y te respondemos rápido.",
      items: [
        {
          kind: "cta",
          label: "Preguntar por WhatsApp",
          href: "https://wa.me/522229995593",
          variant: "primary",
        },
      ],
    },
  ],
} as const satisfies PageContent;
