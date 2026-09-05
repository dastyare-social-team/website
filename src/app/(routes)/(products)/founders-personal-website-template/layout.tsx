import type { Metadata } from "next";
import { routeRobots } from "@/lib/seo";
import React from "react";

export const metadata: Metadata = {
  robots: routeRobots("/founders-personal-website-template"),
};

export default function layout({ children }: { children: React.ReactNode }) {
  return children;
}
