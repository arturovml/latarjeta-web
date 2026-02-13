import Image from "next/image";
import Link from "next/link";

import { siteContent } from "@/content/site";

const getLinkProps = (href: string) =>
  href.startsWith("http")
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

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
        : label.toLowerCase() === "pedidos por whatsapp"
          ? "https://wa.me/522229995593"
          : label.toLowerCase() === "sucursales"
            ? "/#sucursales"
            : "/servicios",
  })),
  legal: siteContent.footer.legal.map((label) => ({
    label,
    href: "/legal",
  })),
  social: siteContent.footer.social,
  quickLinks: siteContent.footer.quickLinks,
} as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 py-16">
      <div className="site-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--primary)]">
                <Image
                  src="/latarjetajr.png"
                  alt="Logo La Tarjeta Papelerías"
                  width={26}
                  height={26}
                  className="h-6 w-6 object-contain"
                />
              </div>
              <span className="text-xl tracking-tight text-neutral-900">{siteContent.siteName}</span>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              {siteContent.brand.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm text-neutral-900 mb-4">{siteContent.footer.headings.services}</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                    {...getLinkProps(item.href)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm text-neutral-900 mb-4">{siteContent.footer.headings.company}</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm text-neutral-900 mb-4">{siteContent.footer.headings.legal}</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-500">{siteContent.footer.copyright}</p>
          <div className="flex items-center gap-6">
            {footerLinks.quickLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
                {...getLinkProps(item.href)}
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
