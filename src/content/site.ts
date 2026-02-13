import type { SiteContent } from "./types";

export const siteContent = {
  siteName: "La Tarjeta Papelerías",
  slogan: "Mayoreo y menudeo en Puebla",
  brand: {
    name: "La Tarjeta Papelerías",
    description:
      "3 sucursales en el Centro Histórico de Puebla",
  },
  nav: [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/servicios" },
    { label: "Contacto", href: "/contacto" },
    { label: "Categorías", href: "/#categorias" },
    { label: "Mayoreo", href: "/#mayoreo" },
    { label: "Oferta", href: "/#servicios" },
    { label: "Sucursales", href: "/#sucursales" },
  ],
  ctas: {
    primary: {
      label: "Cotizar por WhatsApp",
      href: "https://wa.me/522229995593",
      external: true,
    },
    secondary: { label: "Ver sucursales", href: "/#sucursales" },
  },
  contact: {
    email: "contacto@latarjeta.mx",
    phones: ["+52 221 515 3285", "222 296 6241", "221 407 8087"],
    phone: "+52 221 515 3285",
    whatsapp: "https://wa.me/522229995593",
    address: "Centro Histórico, Puebla, México",
  },
  footer: {
    headings: {
      services: "Categorías",
      company: "Contacto",
      legal: "Legal",
    },
    services: [
      "Papelería escolar",
      "Papelería de oficina",
      "Arte y manualidades",
      "Temporada escolar",
    ],
    company: ["Atención mayorista", "Pedidos por WhatsApp", "Sucursales", "Contacto"],
    legal: ["Legal", "Privacidad", "Términos"],
    social: [
      {
        label: "Facebook",
        href: "https://www.facebook.com/latarjetapapelerias/",
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/tarjetapapelerias/",
      },
    ],
    quickLinks: [
      { label: "WhatsApp", href: "https://wa.me/522229995593" },
      {
        label: "Facebook",
        href: "https://www.facebook.com/latarjetapapelerias/",
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/tarjetapapelerias/",
      },
      { label: "Legal", href: "/legal" },
    ],
    copyright: "© 2026 La Tarjeta Papelerías. Todos los derechos reservados.",
  },
} as const satisfies SiteContent;
