import type { PageContent } from "../types";

export const serviciosPageContent = {
  title: "Servicios",
  description:
    "Módulos tecnológicos diseñados para mitigar riesgo, optimizar procesos y escalar operaciones con cumplimiento normativo.",
  sections: [
    {
      id: "hero",
      heading: "Servicios",
      body:
        "Módulos tecnológicos diseñados para mitigar riesgo, optimizar procesos y escalar operaciones con cumplimiento normativo.",
    },
    {
      id: "features",
      heading: "Control operativo y decisiones basadas en datos",
      subheading: "Servicios",
      body:
        "Tecnología diseñada para instituciones que requieren precisión, escalabilidad y cumplimiento normativo.",
      items: [
        {
          kind: "feature",
          icon: "shield",
          title: "Gestión de riesgo crediticio",
          description:
            "Modelos de scoring, análisis de capacidad de pago y seguimiento continuo de cartera. Integración con bureaus y fuentes de datos alternativas.",
        },
        {
          kind: "feature",
          icon: "database",
          title: "Financiamiento de dispositivos",
          description:
            "Soluciones tecnológicas para lease, renting y financiación de hardware. Control de garantías y gestión de recuperación de activos.",
        },
        {
          kind: "feature",
          icon: "trend",
          title: "Cobranza inteligente",
          description:
            "Automatización de estrategias de cobranza preventiva y correctiva. Segmentación de cartera y optimización de recursos.",
        },
        {
          kind: "feature",
          icon: "chart",
          title: "Reportería y cumplimiento",
          description:
            "Dashboards ejecutivos en tiempo real. Métricas regulatorias y documentación de auditoría. Trazabilidad completa de operaciones.",
        },
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
