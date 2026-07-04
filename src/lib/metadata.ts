import type { Metadata } from "next";
import { site } from "./site";

export const baseMetadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "AI automation",
    "AI agents",
    "custom CRM",
    "small business automation",
    "n8n",
    "consulting",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    // PLACEHOLDER: Add OG image before launch
    // images: [{ url: '/og-image.png', width: 1200, height: 630, alt: site.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    // PLACEHOLDER: Add Twitter handle before launch
    // creator: '@joshstrohm',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: site.url,
  },
};

export function pageMetadata(
  title: string,
  description: string,
  path: string
): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${site.url}${path}`,
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `${site.url}${path}`,
    },
  };
}