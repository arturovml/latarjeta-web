import type { PageContent } from "../types";

export const faqPageContent = {
  title: "FAQ",
  description:
    "Respuestas a consultas comunes sobre implementación, integración y operación.",
  sections: [
    {
      id: "hero",
      heading: "Preguntas frecuentes",
      subheading: "FAQ",
      body:
        "Respuestas a consultas comunes sobre implementación, integración y operación.",
    },
    {
      id: "faq",
      heading: "Preguntas frecuentes",
      subheading: "FAQ",
      body:
        "Respuestas a consultas comunes sobre implementación, integración y operación.",
      items: [
        {
          kind: "faq",
          question: "¿Qué tipo de instituciones trabajan con Nodo 88?",
          answer:
            "Trabajamos con fintechs, bancos, retail financiero y telecomunicaciones que requieren gestión de riesgo crediticio, financiamiento de dispositivos o cobranza estructurada. Nuestros clientes típicamente tienen operaciones en múltiples países y necesitan control normativo estricto.",
        },
        {
          kind: "faq",
          question: "¿Cómo se integra con sistemas existentes?",
          answer:
            "Nuestra plataforma se integra mediante APIs REST documentadas y webhooks. Soportamos conexión con core bancarios, ERPs, CRMs y bureaus de crédito. El proceso de integración es guiado y cuenta con ambientes de testing previos a producción.",
        },
        {
          kind: "faq",
          question: "¿Cuánto tiempo toma la implementación?",
          answer:
            "Depende del alcance del proyecto. Una implementación estándar toma entre 8 y 12 semanas, incluyendo integración, configuración de reglas de negocio, capacitación y estabilización. Proyectos enterprise con múltiples módulos pueden extenderse según complejidad.",
        },
        {
          kind: "faq",
          question: "¿Qué nivel de personalización es posible?",
          answer:
            "La plataforma es altamente configurable: reglas de scoring, flujos de cobranza, dashboards, integraciones y reportería pueden ajustarse sin código. Para casos que requieren lógica específica, ofrecemos desarrollo custom dentro del roadmap del proyecto.",
        },
        {
          kind: "faq",
          question: "¿Qué garantías de seguridad y cumplimiento ofrecen?",
          answer:
            "Cumplimos con estándares SOC 2, cifrado en tránsito y reposo, auditoría de accesos y logs completos de operaciones. Cada cliente tiene ambientes segregados. Contamos con procesos certificados de gestión de incidentes y recuperación ante desastres.",
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
