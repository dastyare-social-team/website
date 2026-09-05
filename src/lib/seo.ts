import type { Metadata } from "next";
import { routes } from "@/config/routes";

export function isIndexingEnabled(): boolean {
  return process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";
}

export function routeRobots(pathname: string): Metadata["robots"] {
  if (!isIndexingEnabled()) {
    return { index: false, follow: false };
  }
  return routes.indexable.includes(pathname)
    ? undefined
    : { index: false, follow: false };
}
