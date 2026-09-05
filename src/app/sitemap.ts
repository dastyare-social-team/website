import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { routes } from "@/config/routes";
import { isIndexingEnabled } from "@/lib/seo";

const BASE_URL = "https://dastyare.social";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const host = (await headers()).get("host") ?? undefined;

  if (!isIndexingEnabled(host)) {
    return [];
  }

  return routes.indexable.map((pathname) => ({
    url: `${BASE_URL}${pathname === "/" ? "" : pathname}`,
    changeFrequency: "monthly",
    lastModified: new Date(),
    priority: pathname === "/" ? 1 : 0.8,
  }));
}