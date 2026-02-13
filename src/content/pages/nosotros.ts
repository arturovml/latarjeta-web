import type { PageContent } from "../types";

export const nosotrosPageContent = {
  title: "Nosotros",
  description:
    "Somos un partner tecnológico enfocado en riesgo crediticio, financiamiento de dispositivos y cobranza estructurada.",
  sections: [
    {
      id: "hero",
      heading: "Nosotros",
      body:
        "Somos un partner tecnológico enfocado en riesgo crediticio, financiamiento de dispositivos y cobranza estructurada.",
    },
    {
      id: "stats",
      heading: "Indicadores",
      items: [
        { kind: "stat", value: "15+", label: "Años de experiencia combinada" },
        { kind: "stat", value: "120M+", label: "USD en cartera gestionada" },
        { kind: "stat", value: "99.8%", label: "Disponibilidad del sistema" },
        { kind: "stat", value: "8", label: "Países de operación" },
      ],
    },
    {
      id: "process",
      heading: "Implementación responsable y estructurada",
      subheading: "Proceso",
      body:
        "Metodología probada que minimiza riesgo operativo y asegura adopción efectiva por parte de los equipos.",
      items: [
        {
          kind: "step",
          number: "01",
          title: "Diagnóstico inicial",
          description:
            "Análisis de procesos actuales, identificación de puntos críticos y definición de objetivos medibles.",
        },
        {
          kind: "step",
          number: "02",
          title: "Diseño de solución",
          description:
            "Configuración de módulos, integración con sistemas existentes y definición de flujos de trabajo.",
        },
        {
          kind: "step",
          number: "03",
          title: "Implementación guiada",
          description:
            "Deploy controlado, capacitación de equipos y establecimiento de protocolos de operación.",
        },
        {
          kind: "step",
          number: "04",
          title: "Optimización continua",
          description:
            "Monitoreo de KPIs, ajuste de modelos y mejora iterativa basada en datos reales.",
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
