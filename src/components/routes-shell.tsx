"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { useResetScrollOnNavigation } from "@/lib/use-reset-scroll-on-navigation";
import React, { useRef } from "react";

export default function RoutesShell({
  children,
  webhookUrl,
}: {
  children: React.ReactNode;
  webhookUrl?: string;
}) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  useResetScrollOnNavigation(scrollRef);

  return (
    <div
      ref={scrollRef}
      className="border-2 border-primary/5 bg-white/10 overflow-y-scroll none-scroll-bar flex flex-col flex-1 w-full h-full"
    >
      <Header webhookUrl={webhookUrl} />

      <div className="pt-15 px-6.25 sm:pt-20 sm:px-12.5 flex flex-col items-center flex-1 w-full h-full">
        <div className="lg:max-w-5xl w-full h-full">
          {children}

          <Footer />
        </div>
      </div>
    </div>
  );
}
