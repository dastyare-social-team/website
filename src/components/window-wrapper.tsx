"use client";

import useWindowStore from "@/lib/hooks/use-window-store";
import { WINDOW_CONFIG_TYPE } from "@/config/constants";
import { useRef, ComponentType, useLayoutEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/all";

type WindowWrapperProps = {
  win?: WINDOW_CONFIG_TYPE;
};

function WindowWrapper<P extends object>(Component: ComponentType<P>) {
  const Wrapped = (props: P & WindowWrapperProps) => {
    const { focus_window } = useWindowStore();
    const ref = useRef<HTMLElement | null>(null);

    const { win, ...rest } = props as P & WindowWrapperProps;

    const name = win?.name;
    const z_index = win?.z_index;
    const is_open = win?.is_open ?? false;

    useGSAP(() => {
      const el = ref.current;
      if (!el || !is_open) return;

      el.style.display = "block";

      gsap.fromTo(
        el,
        { scale: 0.8, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power3.in" },
      );
    }, [is_open]);

    useGSAP(() => {
      const el = ref.current;
      if (!el || !name || !is_open) return;

      const [instance] = Draggable.create(el, {
        bounds: window,
        onPress: () => focus_window(name),
      });

      return () => instance.kill();
    }, [name, focus_window, is_open]);

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;
      el.style.display = is_open ? "block" : "none";
    }, [is_open]);

    if (!win || !win.is_open) return null;

    return (
      <section
        id={win.name}
        ref={ref}
        style={{
          zIndex: z_index,
        }}
        className="absolute window-container max-w-full min-w-full sm:max-w-sm sm:min-w-sm max-h-80 min-h-60 flex flex-col border border-primary/5 rounded-3xl px-5 py-5 backdrop-blur-xl bg-background/50"
      >
        <Component {...(rest as P)} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;

  return Wrapped;
}

export default WindowWrapper;
