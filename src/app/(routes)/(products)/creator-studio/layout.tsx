import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "DS-CS — Self-Hosted, Open-Source Creator Studio",
  description:
    "Publish text, image, video, voice, or file posts on your own server. Open-source, self-hosted, no license required, built for both humans and AI agents.",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return children;
}
