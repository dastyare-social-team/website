"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import useWindowStore from "@/lib/hooks/use-window-store";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import gsap from "gsap";
import { Draggable } from "gsap/all";
import {
  Intro,
  Foundation,
  Systems,
  Scaling,
  Invest,
} from "@/components/windows";
import Dock from "@/components/dock";

if (typeof window !== "undefined") {
  gsap.registerPlugin(Draggable);
}

export default function layout({ children }: { children: React.ReactNode }) {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const [pageHeight, setPageHeight] = useState<number | null>(null);

  const updateOffsets = useCallback(() => {
    requestAnimationFrame(() => {
      setPageHeight(window.innerHeight);
    });
  }, []);

  useEffect(() => {
    updateOffsets();
    window.addEventListener("resize", updateOffsets);
    return () => window.removeEventListener("resize", updateOffsets);
  }, [updateOffsets]);

  const [mounted, setMounted] = useState(false);
  const { windows, open_window } = useWindowStore();

  const introWin = useMemo(() => windows[0], [windows]);
  const foundationWin = useMemo(() => windows[1], [windows]);
  const systemsWin = useMemo(() => windows[2], [windows]);
  const scalingWin = useMemo(() => windows[3], [windows]);
  const investWin = useMemo(() => windows[4], [windows]);

  useEffect(() => {
    setMounted(true);
    open_window("intro");
  }, [open_window]);

  return (
    <div
      ref={pageRef}
      style={{ height: pageHeight !== null ? `${pageHeight}px` : "100vh" }}
      className="flex flex-col h-full"
    >
      <div className="px-5 py-5 sm:px-7.5 sm:py-7.5 h-full outline-0">
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

      {mounted && (
        <>
          <Dock />
          <Intro win={introWin} />
          <Foundation win={foundationWin} />
          <Systems win={systemsWin} />
          <Scaling win={scalingWin} />
          <Invest win={investWin} />
        </>
      )}
    </div>
  );
}
