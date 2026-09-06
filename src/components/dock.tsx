"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";

const DOCK_ITEMS = [
  {
    href: "/",
    label: "Home",
    tooltip: "dastyare.social",
    src: "/icon.png",
    padIcon: true,
  },
  { href: "/creator-studio", label: "CS —", tooltip: "CS — Creator Studio" },
];

const Dock = () => {
  const dockRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(() => {
    const dock = dockRef.current;
    if (!dock) return;

    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    const icons = dock.querySelectorAll<HTMLDivElement>(".dock-icon");

    const animateIcons = (mouseX: number) => {
      const { left } = dock.getBoundingClientRect();

      const stats = Array.from(icons, (icon) => {
        const { left: iconLeft, width } = icon.getBoundingClientRect();
        const center = iconLeft - left + width / 2;
        const distance = Math.abs(mouseX - center);
        const intensity = Math.exp(-(distance ** 2.5) / 20000);
        return { icon, intensity };
      });

      const closest = stats.reduce((a, b) =>
        b.intensity > a.intensity ? b : a,
      );

      stats.forEach(({ icon, intensity }) => {
        gsap.to(icon, {
          scale: 1 + 0.1 * intensity,
          y: -15 * intensity,
          duration: 0.2,
          ease: "power1.out",
        });

        // Animate tooltip - only the closest icon can show its tooltip
        const showTooltip = icon === closest.icon && closest.intensity > 0.3;
        const tooltip = icon.querySelector<HTMLSpanElement>(".dock-tooltip");
        if (tooltip) {
          gsap.to(tooltip, {
            opacity: showTooltip ? 1 : 0,
            y: showTooltip ? 0 : 4,
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

  return (
    <div className="flex shrink-0 w-full justify-center items-end">
      <div
        ref={dockRef}
        className="sticky bottom-0 mb-5 bg-primary/3 rounded-3xl flex gap-x-2 px-3 py-3 border border-primary/5 select-none"
      >
        {DOCK_ITEMS.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <div
              key={item.href}
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
                {item.tooltip}
              </span>

              <Link
                href={item.href}
                className="h-10 w-10 rounded-xl flex justify-center items-center bg-primary/5 duration-900 overflow-hidden border border-primary/5"
                aria-label={item.tooltip}
              >
                {item.src ? (
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={40}
                    height={40}
                    loading="lazy"
                    className={
                      item.padIcon ? "aspect-square p-1" : "aspect-square"
                    }
                  />
                ) : (
                  <span className="whitespace-nowrap text-xs">
                    {item.label}
                  </span>
                )}
              </Link>

              <div
                className={`rounded-full w-1 h-1 mt-1 bg-primary/10 border border-primary/20 group-hover:border-primary/40 ${
                  active ? "border-primary/40 bg-primary/40" : ""
                }`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dock;
