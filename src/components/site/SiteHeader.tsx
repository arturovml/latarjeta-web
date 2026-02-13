"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { siteContent } from "@/content/site";

const getLinkProps = (href: string, external?: boolean) =>
  external || href.startsWith("http")
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-blue-100 bg-white/95 backdrop-blur-sm">
      <div className="site-container">
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            aria-label="La Tarjeta Papelerías"
            className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[var(--primary)] shadow-sm">
              <Image
                src="/latarjetajr.png"
                alt="Logo La Tarjeta Papelerías"
                width={28}
                height={28}
                className="h-6 w-6 object-contain"
                priority
              />
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {siteContent.nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-neutral-700 transition-colors hover:text-[var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link href={siteContent.ctas.secondary.href} className="btn-secondary px-5 py-2.5">
              {siteContent.ctas.secondary.label}
            </Link>
            <Link
              href={siteContent.ctas.primary.href}
              className="btn-primary px-5 py-2.5"
              {...getLinkProps(
                siteContent.ctas.primary.href,
                siteContent.ctas.primary.external,
              )}
            >
              {siteContent.ctas.primary.label}
            </Link>
          </div>

          <button
            type="button"
            className="rounded-md p-2 text-neutral-700 transition-colors hover:bg-blue-50 hover:text-[var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 md:hidden"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <>
          <button
            type="button"
            aria-label="Cerrar menú"
            className="fixed inset-0 z-40 bg-black/20 md:hidden"
            onClick={closeMenu}
          />
          <div
            id="mobile-nav"
            className="absolute inset-x-0 top-full z-50 border-b border-neutral-200 bg-white shadow-sm md:hidden"
          >
            <nav className="site-container py-4">
              <div className="flex flex-col gap-2">
                {siteContent.nav.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="rounded-md px-3 py-2 text-sm text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <Link href={siteContent.ctas.secondary.href} className="btn-secondary text-center" onClick={closeMenu}>
                  {siteContent.ctas.secondary.label}
                </Link>
                <Link
                  href={siteContent.ctas.primary.href}
                  className="btn-primary text-center"
                  onClick={closeMenu}
                  {...getLinkProps(
                    siteContent.ctas.primary.href,
                    siteContent.ctas.primary.external,
                  )}
                >
                  {siteContent.ctas.primary.label}
                </Link>
              </div>
            </nav>
          </div>
        </>
      ) : null}
    </header>
  );
}
