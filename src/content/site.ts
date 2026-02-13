import type { SiteContent } from "./types";

export const siteContent = {
  siteName: "Nodo 88",
  slogan: "Partner tecnológico",
  brand: {
    name: "Nodo 88",
    description:
      "Partner tecnológico para gestión de riesgo crediticio, financiamiento de dispositivos y cobranza.",
  },
  nav: [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/servicios" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "FAQ", href: "/faq" },
    { label: "Contacto", href: "/contacto" },
  ],
  ctas: {
    primary: { label: "Reserva una demo", href: "/contacto" },
    secondary: { label: "Cotiza aquí", href: "/contacto" },
  },
  contact: {
    email: "contacto@nodo88.com",
    phone: "+56 9 1234 5678",
    address: "Santiago, Chile",
  },
  footer: {
    headings: {
      services: "Servicios",
      company: "Empresa",
      legal: "Legal",
    },
    services: [
      "Riesgo crediticio",
      "Financiamiento de dispositivos",
      "Cobranza",
      "Reportería",
    ],
    company: ["Nosotros", "Casos de uso", "Documentación", "Contacto"],
    legal: ["Legal", "Privacidad", "Términos"],
    social: ["LinkedIn", "Twitter", "GitHub"],
    copyright: "© 2026 Nodo 88. Todos los derechos reservados.",
  },
} as const satisfies SiteContent;
