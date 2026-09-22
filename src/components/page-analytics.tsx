"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { capture, capturePageview } from "@/lib/posthog";
import { indexableRoutes } from "@/config/routes";

const SCROLL_THRESHOLDS = [25, 50, 75, 100] as const;

function getScrollMetrics(target: EventTarget | null): {
  scrollTop: number;
  maxScroll: number;
} | null {
  if (target instanceof HTMLElement) {
    return {
      scrollTop: target.scrollTop,
      maxScroll: target.scrollHeight - target.clientHeight,
    };
  }

  if (target === document) {
    const doc = document.documentElement;
    return {
      scrollTop: window.scrollY || doc.scrollTop,
      maxScroll: doc.scrollHeight - window.innerHeight,
    };
  }

  return null;
}

export function PageAnalytics() {
  const pathname = usePathname();

  const startedAtRef = useRef<number>(0);
  const currentPathnameRef = useRef<string | null>(null);
  const trackedScrollRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const currentPathname = currentPathnameRef.current;
    const now = Date.now();

    if (currentPathname && currentPathname !== pathname) {
      const durationSeconds = Math.round((now - startedAtRef.current) / 1000);
      if (durationSeconds >= 1) {
        capture("page_engaged", {
          pathname: currentPathname,
          duration_seconds: durationSeconds,
        });
      }
    }

    currentPathnameRef.current = pathname;
    startedAtRef.current = now;
    trackedScrollRef.current = new Set();

    const search = window.location.search;

    capturePageview(pathname, search);

    if (indexableRoutes.includes(pathname)) {
      capture("landing_page_viewed", { page: pathname, pathname });
    }
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    let ticking = false;

    const handleScroll = (event: Event) => {
      if (ticking) {
        return;
      }

      ticking = true;

      window.requestAnimationFrame(() => {
        ticking = false;

        const metrics = getScrollMetrics(event.target);
        if (!metrics || metrics.maxScroll <= 0) {
          return;
        }

        const ratio = metrics.scrollTop / metrics.maxScroll;

        for (const threshold of SCROLL_THRESHOLDS) {
          if (
            ratio >= threshold / 100 &&
            !trackedScrollRef.current.has(threshold)
          ) {
            trackedScrollRef.current.add(threshold);
            capture(`scroll_depth_${threshold}`, {
              pathname: currentPathnameRef.current ?? window.location.pathname,
            });
          }
        }
      });
    };

    // Capture phase: the site scrolls inside an inner container
    // (RoutesShell), not the window — capture catches those scrolls too.
    document.addEventListener("scroll", handleScroll, {
      capture: true,
      passive: true,
    });
    return () =>
      document.removeEventListener("scroll", handleScroll, { capture: true });
  }, []);

  return null;
}
