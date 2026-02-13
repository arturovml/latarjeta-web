import type { PageContent } from "../types";

export const homePageContent = {
  title: "Inicio",
  description:
    "Papelería y artículos de oficina en Puebla con atención por WhatsApp para menudeo y mayoreo.",
  sections: [
    {
      id: "hero",
      heading: "Papelería y artículos de oficina en Puebla",
      subheading: "Más de 30 años abasteciendo a escuelas, oficinas y negocios con gran variedad, marcas confiables y respuesta rápida.",
      body:
        "Atendemos clientes de menudeo y mayoreo con enfoque local en Puebla, inventario amplio y respuesta rápida.",
      bullets: [
        "Mayoreo y menudeo",
        "3 sucursales en el Centro Histórico",
        "Atención directa por WhatsApp",
      ],
      items: [
        {
          kind: "cta",
          label: "Cotizar por WhatsApp",
          href: "https://wa.me/522229995593",
          variant: "primary",
        },
        {
          kind: "cta",
          label: "Ver categorías",
          href: "#categorias",
          variant: "secondary",
        },
      ],
    },
    {
      id: "beneficios",
      heading: "Beneficios",
      body: "Atención práctica para compras de oficina, escuela y negocio con respuesta directa.",
      items: [
        {
          kind: "feature",
          icon: "shield",
          title: "Variedad real",
          description: "Amplio surtido de papelería escolar, oficina y materiales de apoyo.",
        },
        {
          kind: "feature",
          icon: "database",
          title: "Mayoreo especializado",
          description: "Atención para pedidos por volumen de escuelas, oficinas y negocios.",
        },
        {
          kind: "feature",
          icon: "trend",
          title: "Productos difíciles de encontrar",
          description: "Opciones específicas para proyectos escolares, oficina y manualidades.",
        },
        {
          kind: "feature",
          icon: "chart",
          title: "Atención humana",
          description: "Te atendemos directo por WhatsApp para resolver rápido tu pedido.",
        },
        {
          kind: "feature",
          icon: "shield",
          title: "Entrega local (B2B)",
          description: "Coordinamos entrega local para cuentas de mayoreo cuando aplica.",
        },
        {
          kind: "feature",
          icon: "database",
          title: "Servicio en sucursal",
          description: "Tres puntos de atención en el Centro Histórico de Puebla.",
        },
      ],
    },
    {
      id: "categorias",
      heading: "Categorías",
      body:
        "Encuentra productos para escuela, oficina y negocio en un solo lugar.",
      bullets: [
        "Útiles escolares",
        "Oficina",
        "Papel y cartulinas",
        "Arte y manualidades",
        "Escritura (plumas, lápices, marcadores)",
        "Organización y archivo",
        "Impresión y consumibles",
        "Temporada escolar",
      ],
    },
    {
      id: "mayoreo",
      heading: "¿Eres escuela, oficina o negocio? Tenemos mayoreo.",
      body:
        "Atención B2B ágil para compras por volumen y reposición de inventario.",
      bullets: [
        "Precios por volumen según lista solicitada",
        "Atención directa y seguimiento por WhatsApp",
        "Coordinación para recolección o entrega local cuando aplique",
      ],
      items: [
        {
          kind: "step",
          number: "01",
          title: "Envíanos tu lista por WhatsApp",
          description: "Comparte productos y cantidades para iniciar tu cotización.",
        },
        {
          kind: "step",
          number: "02",
          title: "Confirmamos precio y disponibilidad",
          description: "Validamos existencias y te enviamos propuesta.",
        },
        {
          kind: "step",
          number: "03",
          title: "Pagas (transferencia u otros métodos acordados)",
          description: "Cerramos pedido con el método de pago definido.",
        },
        {
          kind: "step",
          number: "04",
          title: "Recoges en sucursal o coordinamos entrega local",
          description: "Te compartimos seguimiento hasta la entrega.",
        },
        {
          kind: "cta",
          label: "Solicitar precio de mayoreo",
          href: "https://wa.me/522229995593",
          variant: "primary",
        },
      ],
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
      id: "sucursales",
      heading: "Visítanos en el Centro Histórico de Puebla",
      body:
        "Conoce nuestras sucursales para compras directas y atención cercana.",
      items: [
        {
          kind: "branch",
          name: "Sucursal 8 Oriente",
          address: "Av. 8 Oriente 11-A, Centro, Puebla",
          hours: "10:00–19:00 (Domingo aprox. 18:00)",
          phone: "+52 221 515 3285",
          mapsHref: "#",
        },
        {
          kind: "branch",
          name: "Sucursal 5 Norte 805",
          address: "Calle 5 Norte 805, Centro Histórico, Puebla",
          hours: "10:00–19:00",
          mapsHref: "#",
        },
        {
          kind: "branch",
          name: "Sucursal 5 Norte 403",
          address: "Calle 5 Norte 403, Centro Histórico, Puebla",
          hours: "10:00–19:00",
          mapsHref: "#",
        },
      ],
    },
    {
      id: "marcas",
      heading: "Trabajamos con marcas reconocidas",
      body:
        "Seleccionamos productos de calidad para garantizar buen rendimiento y durabilidad en cada compra.",
    },
    {
      id: "faq",
      heading: "Preguntas frecuentes",
      subheading: "FAQ",
      body: "Resolvemos fricciones comunes antes de que hagas tu pedido.",
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
      id: "cta-final",
      heading: "Cotiza en minutos",
      body:
        "Envíanos tu lista por WhatsApp y te respondemos con precio y disponibilidad.",
      items: [
        {
          kind: "cta",
          label: "Enviar WhatsApp",
          href: "https://wa.me/522229995593",
          variant: "primary",
        },
      ],
    },
  ],
} as const satisfies PageContent;
