import type { MetadataRoute } from "next";
import { company } from "@/lib/company";

const paths = ["", "/decapage-laser", "/aerogommage", "/professionnels", "/realisations", "/zone-intervention", "/contact", "/mentions-legales", "/politique-confidentialite"];
export default function sitemap(): MetadataRoute.Sitemap {
  const base = company.siteUrl || "http://localhost:3000";
  return paths.map((path, index) => ({ url: `${base}${path}`, changeFrequency: index === 0 ? "weekly" : "monthly", priority: index === 0 ? 1 : path === "/contact" ? .9 : .7 }));
}
