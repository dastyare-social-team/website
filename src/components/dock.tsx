"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import useWindowStore from "@/lib/hooks/use-window-store";
import { INITIAL_Z_INDEX, WINDOW_CONFIG, WindowName } from "@/config/constants";
import { cn } from "@/lib/utils";

const Dock = () => {
  const { open_window, close_window, windows } = useWindowStore();
  const dockRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const dock = dockRef.current;
    if (!dock) return;

    const icons = dock.querySelectorAll<HTMLDivElement>(".dock-icon");

    const animateIcons = (mouseX: number) => {
      const { left } = dock.getBoundingClientRect();

      icons.forEach((icon) => {
        const { left: iconLeft, width } = icon.getBoundingClientRect();
        const center = iconLeft - left + width / 2;
        const distance = Math.abs(mouseX - center);
        const intensity = Math.exp(-(distance ** 2.5) / 20000);

        gsap.to(icon, {
          scale: 1 + 0.1 * intensity,
          y: -15 * intensity,
          duration: 0.2,
          ease: "power1.out",
        });

        // Animate tooltip
        const tooltip = icon.querySelector<HTMLSpanElement>(".dock-tooltip");
        if (tooltip) {
          gsap.to(tooltip, {
            opacity: intensity > 0.3 ? 1 : 0,
            y: intensity > 0.3 ? 0 : 4,
            duration: 0.15,
            ease: "power2.out",
          });
        }
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { left } = dock.getBoundingClientRect();
      animateIcons(e.clientX - left);
    };

    const resetIcons = () => {
      icons.forEach((icon) => {
        gsap.to(icon, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power1.out",
        });

        const tooltip = icon.querySelector<HTMLSpanElement>(".dock-tooltip");
        if (tooltip) {
          gsap.to(tooltip, {
            opacity: 0,
            y: 4,
            duration: 0.2,
            ease: "power2.in",
          });
        }
      });
    };

    dock.addEventListener("mousemove", handleMouseMove);
    dock.addEventListener("mouseleave", resetIcons);

    return () => {
      dock.removeEventListener("mousemove", handleMouseMove);
      dock.removeEventListener("mouseleave", resetIcons);
    };
  }, []);

  const toggleItem = (name: WindowName) => {
    const win = windows.find((w) => w.name === name);
    if (win && win.is_open) {
      close_window(name);
    } else {
      open_window(name);
    }
  };

  return (
    <div className="flex flex-1 w-full justify-center items-end">
      <div
        ref={dockRef}
        style={{ zIndex: INITIAL_Z_INDEX * 100 }}
        className="sticky bottom-0 mb-5 bg-primary/3 rounded-3xl flex gap-x-2 px-3 py-3 border border-primary/5 select-none"
      >
        {WINDOW_CONFIG.map((window) => {
          const win = windows.find((w) => w.name === window.name);
          const label = window.name
            .split("_")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

          return (
            <div
              key={window.name}
              className="dock-icon flex flex-col justify-start items-center relative group"
            >
              {/* Tooltip */}
              <span
                className="dock-tooltip pointer-events-none absolute -top-5.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full backdrop-blur-sm tracking-tighter border border-primary/5 px-1 text-xs"
                style={{
                  opacity: 0,
                  transform: "translateX(-50%) translateY(4px)",
                }}
              >
                {label}
              </span>

              <button
                type="button"
                onClick={() => toggleItem(window.name)}
                className="h-10 w-10 rounded-xl flex justify-center items-center cursor-pointer bg-primary/5 border border-primary/5 duration-900 overflow-hidden"
                aria-label={window.name}
              >
                {label}
              </button>

              <div
                className={cn(
                  "rounded-full w-1 h-1 mt-1 bg-primary/10 border border-primary/20 group-hover:border-primary/40",
                  win?.is_open && "border-primary/40 bg-primary/40",
                )}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dock;
