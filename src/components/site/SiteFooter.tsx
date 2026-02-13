import Link from "next/link";

import { siteContent } from "@/content/site";

const footerLinks = {
  services: siteContent.footer.services.map((label) => ({
    label,
    href: "/servicios",
  })),
  company: siteContent.footer.company.map((label) => ({
    label,
    href:
      label.toLowerCase() === "contacto"
        ? "/contacto"
        : label.toLowerCase() === "nosotros"
          ? "/nosotros"
          : "/servicios",
  })),
  legal: siteContent.footer.legal.map((label) => ({
    label,
    href: "/legal",
  })),
  social: siteContent.footer.social.map((label) => ({
    label,
    href: "#",
  })),
} as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-800/50 py-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 bg-gradient-to-br from-zinc-100 to-zinc-400 rounded-sm" />
              <span className="text-xl tracking-tight">{siteContent.siteName}</span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {siteContent.brand.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm mb-4">{siteContent.footer.headings.services}</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm mb-4">{siteContent.footer.headings.company}</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm mb-4">{siteContent.footer.headings.legal}</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-500">{siteContent.footer.copyright}</p>
          <div className="flex items-center gap-6">
            {footerLinks.social.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-zinc-500 hover:text-zinc-100 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
