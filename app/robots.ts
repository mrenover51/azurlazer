import type { MetadataRoute } from "next";
import { company } from "@/lib/company";

export default function robots(): MetadataRoute.Robots {
  const base = company.siteUrl || "http://localhost:3000";
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${base}/sitemap.xml` };
}
