export type NavItem = {
  label: string;
  href: string;
};

export type CtaLink = {
  label: string;
  href: string;
};

export type CtaItem = {
  kind: "cta";
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

export type ContactInfo = {
  email: string;
  phone?: string;
  address?: string;
};

export type SiteContent = {
  siteName: string;
  slogan: string;
  brand: {
    name: string;
    description: string;
  };
  nav: NavItem[];
  ctas: {
    primary: CtaLink;
    secondary: CtaLink;
  };
  contact: ContactInfo;
  footer: {
    headings: {
      services: string;
      company: string;
      legal: string;
    };
    services: string[];
    company: string[];
    legal: string[];
    social: string[];
    copyright: string;
  };
};

export type FeatureItem = {
  kind: "feature";
  icon: "shield" | "database" | "trend" | "chart";
  title: string;
  description: string;
};

export type ProcessStep = {
  kind: "step";
  number: string;
  title: string;
  description: string;
};

export type FaqItem = {
  kind: "faq";
  question: string;
  answer: string;
};

export type StatItem = {
  kind: "stat";
  value: string;
  label: string;
};

export type HeroMetric = {
  kind: "metric";
  label: string;
  value: string;
};

export type HeroChart = {
  kind: "chart";
  label: string;
  bars: number[];
};

export type HeroStatus = {
  kind: "status";
  label: string;
  value: string;
  tone: "success" | "neutral";
};

export type ContactCardItem = {
  kind: "contact";
  title: string;
  description: string;
  cta: CtaLink & { variant: "primary" | "secondary" };
};

export type FormFieldOption = {
  label: string;
  value: string;
};

export type FormFieldItem = {
  kind: "formField";
  name:
    | "nombre"
    | "empresa"
    | "email"
    | "telefono"
    | "interes"
    | "mensaje";
  label: string;
  type: "text" | "email" | "tel" | "select" | "textarea";
  required: boolean;
  placeholder?: string;
  options?: FormFieldOption[];
};

export type FormSubmitItem = {
  kind: "formSubmit";
  label: string;
};

export type SectionItem =
  | FeatureItem
  | ProcessStep
  | FaqItem
  | StatItem
  | HeroMetric
  | HeroChart
  | HeroStatus
  | CtaItem
  | ContactCardItem
  | FormFieldItem
  | FormSubmitItem;

export type SectionContent = {
  id: string;
  heading: string;
  subheading?: string;
  body?: string;
  bullets?: string[];
  items?: SectionItem[];
};

export type PageContent = {
  title: string;
  description?: string;
  sections: SectionContent[];
};
