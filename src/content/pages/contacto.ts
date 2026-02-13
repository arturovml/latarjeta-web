import type { PageContent } from "../types";

export const contactoPageContent = {
  title: "Contacto",
  description:
    "Agenda una sesión de diagnóstico con nuestro equipo técnico para evaluar tu caso.",
  sections: [
    {
      id: "hero",
      heading: "Contacto",
      body:
        "Agenda una sesión de diagnóstico con nuestro equipo técnico para evaluar tu caso.",
    },
    {
      id: "form",
      heading: "Hablemos de tu operación",
      body:
        "Completa el formulario y te responderemos con una propuesta alineada a tu necesidad.",
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
          name: "empresa",
          label: "Empresa",
          type: "text",
          required: true,
          placeholder: "Nombre de tu empresa",
        },
        {
          kind: "formField",
          name: "email",
          label: "Email",
          type: "email",
          required: true,
          placeholder: "nombre@empresa.com",
        },
        {
          kind: "formField",
          name: "telefono",
          label: "Teléfono (recomendado)",
          type: "tel",
          required: false,
          placeholder: "+56 9 1234 5678",
        },
        {
          kind: "formField",
          name: "interes",
          label: "Interés",
          type: "select",
          required: true,
          options: [
            { label: "Demo", value: "Demo" },
            { label: "Cotización", value: "Cotización" },
          ],
        },
        {
          kind: "formField",
          name: "mensaje",
          label: "Mensaje",
          type: "textarea",
          required: false,
          placeholder: "Cuéntanos sobre tu operación y objetivos.",
        },
        {
          kind: "formSubmit",
          label: "Enviar solicitud",
        },
      ],
    },
    {
      id: "contact-cards",
      heading: "",
      items: [
        {
          kind: "contact",
          title: "Reserva una demo",
          description:
            "Agenda una sesión guiada con nuestro equipo para revisar tu caso y validar el alcance de la implementación.",
          cta: { label: "Reserva una demo", href: "/contacto", variant: "primary" },
        },
        {
          kind: "contact",
          title: "Cotiza aquí",
          description:
            "Comparte el contexto de tu operación y obtén una propuesta alineada a tus necesidades.",
          cta: { label: "Cotiza aquí", href: "/contacto", variant: "secondary" },
        },
      ],
    },
    {
      id: "cta",
      heading: "¿Listo para implementar tecnología estratégica?",
      body:
        "Agenda una sesión de diagnóstico con nuestro equipo técnico. Sin compromiso. Evaluamos tu caso específico y definimos si existe un fit estratégico.",
      items: [
        { kind: "cta", label: "Agendar consulta", href: "/contacto", variant: "primary" },
        { kind: "cta", label: "Ver casos de uso", href: "/servicios", variant: "secondary" },
      ],
    },
  ],
} as const satisfies PageContent;
