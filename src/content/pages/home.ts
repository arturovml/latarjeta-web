import type { PageContent } from "../types";

export const homePageContent = {
  title: "Inicio",
  description:
    "Tecnología estratégica para instituciones financieras y retail con operaciones de riesgo.",
  sections: [
    {
      id: "hero",
      heading: "Tecnología estratégica para reducir riesgo",
      subheading: "Partner tecnológico",
      body:
        "Implementamos soluciones tecnológicas para riesgo crediticio, financiamiento de dispositivos y cobranza. Orientado a fintechs, bancos y retail que necesitan control operativo y decisiones basadas en datos.",
      items: [
        { kind: "metric", label: "NPL", value: "2.4%" },
        { kind: "metric", label: "Aprobación", value: "68%" },
        { kind: "metric", label: "Recovery", value: "81%" },
        {
          kind: "chart",
          label: "Evolución de riesgo mensual",
          bars: [40, 65, 55, 80, 70, 85, 75, 90],
        },
        { kind: "status", label: "Sistema activo", value: "99.8% uptime", tone: "success" },
        { kind: "status", label: "Procesos", value: "1,247 activos", tone: "neutral" },
        { kind: "cta", label: "Conocer servicios", href: "/servicios", variant: "primary" },
        { kind: "cta", label: "Agendar demo", href: "/contacto", variant: "secondary" },
      ],
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
  ],
} as const satisfies PageContent;
