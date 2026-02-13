import type { PageContent } from "../types";

export const faqPageContent = {
  title: "FAQ",
  description:
    "Respuestas rápidas sobre pedidos, mayoreo y atención en sucursal.",
  sections: [
    {
      id: "hero",
      heading: "Preguntas frecuentes",
      subheading: "FAQ",
      body:
        "Resolvemos dudas comunes de compra para menudeo y mayoreo.",
    },
    {
      id: "faq",
      heading: "Preguntas frecuentes",
      subheading: "FAQ",
      body:
        "Respuestas rápidas sobre pedidos, mayoreo y atención en sucursal.",
      items: [
        {
          kind: "faq",
          question: "¿Venden por mayoreo?",
          answer:
            "Sí, atendemos mayoreo para escuelas, oficinas y negocios. Envíanos tu lista por WhatsApp para cotizar rápido.",
        },
        {
          kind: "faq",
          question: "¿Puedo pedir por WhatsApp?",
          answer:
            "Sí, es nuestro canal principal para pedidos y cotizaciones. Escríbenos por WhatsApp y te confirmamos disponibilidad.",
        },
        {
          kind: "faq",
          question: "¿Hacen entregas a domicilio?",
          answer:
            "En algunos pedidos podemos coordinar entrega local. Escríbenos por WhatsApp para revisar cobertura y tiempos.",
        },
        {
          kind: "faq",
          question: "¿Facturan?",
          answer:
            "Sí, emitimos factura. Compártenos tus datos por WhatsApp para agilizar tu pedido.",
        },
        {
          kind: "faq",
          question: "¿Manejan productos especiales o difíciles de encontrar?",
          answer:
            "Sí, te ayudamos a buscar productos específicos según disponibilidad. Mándanos por WhatsApp lo que necesitas.",
        },
      ],
    },
    {
      id: "cta",
      heading: "¿Listo para cotizar tu pedido?",
      body:
        "Te atendemos por WhatsApp para pedidos por volumen y compras recurrentes.",
      items: [
        {
          kind: "cta",
          label: "Cotizar por WhatsApp",
          href: "https://wa.me/522229995593",
          variant: "primary",
        },
        { kind: "cta", label: "Ver servicios", href: "/servicios", variant: "secondary" },
      ],
    },
  ],
} as const satisfies PageContent;
