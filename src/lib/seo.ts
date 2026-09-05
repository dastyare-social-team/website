import type { Metadata } from "next";
import { routes } from "@/config/routes";

const PRODUCTION_HOSTS = new Set([
  "dastyare.social",
  "www.dastyare.social",
]);

export function normalizeHost(host: string): string {
  return host.trim().toLowerCase().split(":")[0];
}

export function isIndexingEnabled(host?: string): boolean {
  if (process.env.NEXT_PUBLIC_ALLOW_INDEXING !== "true") {
    return false;
  }
  if (host === undefined || host === "") {
    return true;
  }
  return PRODUCTION_HOSTS.has(normalizeHost(host));
}

export function routeRobots(
  pathname: string,
  host?: string
): Metadata["robots"] {
  if (!isIndexingEnabled(host)) {
    return { index: false, follow: false };
  }
  return routes.indexable.includes(pathname)
    ? undefined
    : { index: false, follow: false };
}
