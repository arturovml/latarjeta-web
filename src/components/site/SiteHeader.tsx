import Link from "next/link";

import { siteContent } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-zinc-100 to-zinc-400 rounded-sm" />
            <span className="text-xl tracking-tight">{siteContent.siteName}</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {siteContent.nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href={siteContent.ctas.secondary.href}
              className="px-5 py-2.5 border border-zinc-700 text-zinc-100 text-sm hover:border-zinc-600 hover:bg-zinc-900 transition-colors"
            >
              {siteContent.ctas.secondary.label}
            </Link>
            <Link
              href={siteContent.ctas.primary.href}
              className="px-5 py-2.5 bg-zinc-100 text-zinc-950 text-sm hover:bg-zinc-200 transition-colors"
            >
              {siteContent.ctas.primary.label}
            </Link>
          </div>

          <button className="md:hidden p-2 text-zinc-400" aria-label="Abrir menú">
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
