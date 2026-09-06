"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Dock from "@/components/dock";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-dvh">
      <div className="px-5 py-5 sm:px-7.5 sm:py-7.5 flex-1 min-h-0 outline-0">
        <div className="border-2 border-primary/5 bg-white/10 overflow-y-scroll none-scroll-bar flex flex-col flex-1 w-full h-full">
          <Header />

          <div className="pt-15 px-6.25 sm:pt-20 sm:px-12.5 flex flex-col items-center flex-1 w-full h-full">
            <div className="lg:max-w-5xl w-full h-full">
              {children}

              <Footer />
            </div>
          </div>
        </div>
      </div>

      <Dock />
    </div>
  );
}