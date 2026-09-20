import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Dastyare Social App — Connect With Other Personal Brands",
  description:
    "A social network built specifically for personal brands — founders, professionals, anyone building a name for themselves. Find your next client, collaborator, mentor, or job. Free to use.",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return children;
}
