import type { PageContent } from "../types";

export const legalPageContent = {
  title: "Legal",
  description:
    "Información sobre términos, privacidad y cumplimiento para operar con transparencia.",
  sections: [
    {
      id: "hero",
      heading: "Legal",
      body:
        "Información sobre términos, privacidad y cumplimiento para operar con transparencia.",
    },
    {
      id: "privacidad",
      heading: "Aviso de privacidad",
      body:
        "Este aviso describe, de manera general, cómo podemos recopilar y usar información cuando interactúas con nuestro sitio. Solo solicitamos datos necesarios para responder a tu solicitud y mejorar la experiencia. Si compartes información personal, la tratamos con cuidado y con acceso limitado dentro del equipo.",
      bullets: [
        "Usamos los datos para responder consultas y preparar propuestas.",
        "No vendemos datos personales a terceros.",
        "Puedes solicitar actualización o eliminación de tus datos.",
      ],
    },
    {
      id: "terminos",
      heading: "Términos de uso",
      body:
        "El contenido de este sitio es informativo y puede cambiar sin previo aviso. El uso del sitio implica aceptar estas condiciones generales y un uso responsable de la información publicada.",
      bullets: [
        "La información no constituye asesoría legal o financiera.",
        "Puedes enlazar este sitio citando la fuente.",
        "Reservamos el derecho de actualizar estos términos.",
      ],
    },
    {
      id: "atribuciones",
      heading: "Atribuciones",
      body:
        "Este sitio utiliza recursos de terceros con licencias abiertas. A continuación, se reconocen sus fuentes.",
      bullets: [
        "Componentes de shadcn/ui bajo licencia MIT (https://ui.shadcn.com).",
        "Fotografías de Unsplash bajo su licencia (https://unsplash.com/license).",
      ],
    },
  ],
} as const satisfies PageContent;
