import type { MetadataRoute } from "next";
import { services } from "@/features/services/data";
import { site } from "@/shared/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/services", "/about", "/contact"].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
  const detail = services.map((s) => ({
    url: `${site.url}/services/${s.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  return [...pages, ...detail];
}
