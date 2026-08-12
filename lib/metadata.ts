import type { Metadata } from "next";
import { company } from "./company";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const absoluteUrl = company.siteUrl ? new URL(path, company.siteUrl).toString() : undefined;
  return {
    title,
    description,
    alternates: absoluteUrl ? { canonical: absoluteUrl } : undefined,
    openGraph: {
      title,
      description,
      type: "website",
      locale: "fr_FR",
      siteName: company.name,
      url: absoluteUrl,
    },
  };
}
