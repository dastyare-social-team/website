import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { isIndexingEnabled } from "@/lib/seo";

const BASE_URL = "https://dastyare.social";

export const dynamic = "force-dynamic";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const host = (await headers()).get("host") ?? undefined;

  if (!isIndexingEnabled(host)) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}