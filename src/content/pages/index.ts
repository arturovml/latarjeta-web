import type { PageContent, SectionContent } from "../types";

export { homePageContent } from "./home";
export { serviciosPageContent } from "./servicios";
export { nosotrosPageContent } from "./nosotros";
export { faqPageContent } from "./faq";
export { contactoPageContent } from "./contacto";
export { legalPageContent } from "./legal";

export const getSectionById = (
  pageContent: PageContent,
  id: string,
): SectionContent => {
  const section = pageContent.sections.find((item) => item.id === id);

  if (!section) {
    throw new Error(`Section "${id}" not found in page content.`);
  }

  return section;
};
