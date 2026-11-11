"use client";

import { useEffect, useRef, useState } from "react";

/** The little black face in the greeting: pupils follow the pointer and blink now and then. */
export function Eyes() {
  const ref = useRef<HTMLSpanElement>(null);
  const [blinking, setBlinking] = useState(false);

  useEffect(() => {
    function look(event: PointerEvent) {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);
      const distance = Math.hypot(dx, dy) || 1;
      const reach = Math.min(distance / 60, 1) * 3;
      el.style.setProperty("--look-x", `${(dx / distance) * reach}px`);
      el.style.setProperty("--look-y", `${(dy / distance) * reach}px`);
    }
    window.addEventListener("pointermove", look);
    return () => window.removeEventListener("pointermove", look);
  }, []);

  useEffect(() => {
    let open: ReturnType<typeof setTimeout>;
    let next: ReturnType<typeof setTimeout>;
    const schedule = () => {
      next = setTimeout(() => {
        setBlinking(true);
        open = setTimeout(() => setBlinking(false), 140);
        schedule();
      }, 2200 + Math.random() * 3200);
    };
    schedule();
    return () => {
      clearTimeout(next);
      clearTimeout(open);
    };
  }, []);

  return (
    <span
      ref={ref}
      aria-hidden="true"
      onClick={() => {
        setBlinking(true);
        setTimeout(() => setBlinking(false), 180);
      }}
      className="relative mr-0.5 inline-flex size-[38px] shrink-0 cursor-pointer select-none items-center justify-center rounded-full bg-black shadow-sm ring-1 ring-black/10 transition-transform hover:scale-110 active:scale-95 dark:bg-zinc-950 dark:ring-white/25"
    >
      <span
        className="flex items-center justify-center gap-2 transition-transform duration-75 ease-out"
        style={{ transform: "translate(var(--look-x, 0px), var(--look-y, 0px))" }}
      >
        {[0, 1].map((eye) => (
          <span key={eye} className="relative flex size-2.5 items-center justify-center">
            <span
              className={`size-[6px] rounded-full bg-white shadow-[0_0_1.5px_rgba(255,255,255,0.9)] transition-transform duration-100 dark:bg-zinc-100 ${blinking ? "scale-y-[0.15]" : ""}`}
            />
          </span>
        ))}
      </span>
    </span>
  );
}
