import type { Metadata } from "next";

import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { siteContent } from "@/content/site";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
const defaultTitle = `${siteContent.siteName} | ${siteContent.slogan}`;
const defaultDescription = siteContent.brand.description;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteContent.siteName} | ${siteContent.slogan}`,
  },
  description: defaultDescription,
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
