import type { PageContent } from "../types";

export const contactoPageContent = {
  title: "Contacto",
  description:
    "Envíanos tu lista por WhatsApp y te respondemos con precio y disponibilidad.",
  sections: [
    {
      id: "hero",
      heading: "Cotiza en minutos",
      subheading: "WhatsApp directo",
      body:
        "Envíanos tu lista por WhatsApp y te respondemos con precio y disponibilidad.",
    },
    {
      id: "contact-cards",
      heading: "Atención inmediata por WhatsApp",
      body:
        "Escríbenos para cotización rápida de menudeo o mayoreo.",
      bullets: ["+52 221 515 3285", "222 296 6241", "221 407 8087"],
      items: [
        {
          kind: "contact",
          title: "Enviar WhatsApp",
          description:
            "Comparte tu lista de productos y cantidades para recibir precio y disponibilidad.",
          cta: {
            label: "Enviar WhatsApp",
            href: "https://wa.me/522229995593",
            variant: "primary",
          },
        },
      ],
    },
    {
      id: "form",
      heading: "¿Prefieres formulario?",
      body:
        "Si es urgente, WhatsApp es más rápido.",
      items: [
        {
          kind: "formField",
          name: "nombre",
          label: "Nombre",
          type: "text",
          required: true,
          placeholder: "Tu nombre completo",
        },
        {
          kind: "formField",
          name: "interes",
          label: "Tipo de cliente",
          type: "select",
          required: true,
          options: [
            { label: "Menudeo", value: "Menudeo" },
            { label: "Mayoreo", value: "Mayoreo" },
          ],
        },
        {
          kind: "formField",
          name: "telefono",
          label: "Teléfono (opcional)",
          type: "tel",
          required: false,
          placeholder: "+52 221 515 3285",
        },
        {
          kind: "formField",
          name: "mensaje",
          label: "Mensaje",
          type: "textarea",
          required: true,
          placeholder: "Escribe tu pedido o lo que necesitas cotizar.",
        },
        {
          kind: "formSubmit",
          label: "Enviar formulario",
        },
      ],
    },
  ],
} as const satisfies PageContent;
