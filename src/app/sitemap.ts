import type { MetadataRoute } from "next";
import { routes } from "@/config/routes";
import { isIndexingEnabled } from "@/lib/seo";

const BASE_URL = "https://dastyare.social";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isIndexingEnabled()) {
    return [];
  }

  return routes.indexable.map((pathname) => ({
    url: `${BASE_URL}${pathname === "/" ? "" : pathname}`,
    changeFrequency: "monthly",
    lastModified: new Date(),
    priority: pathname === "/" ? 1 : 0.8,
  }));
}