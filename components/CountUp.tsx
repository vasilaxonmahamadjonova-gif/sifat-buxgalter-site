"use client";

import { useEffect, useRef } from "react";

/** Raqam ekranga kirganda 0 dan sanalib chiqadi. Server 100% tayyor qiymatni chiqaradi, JS boʻlmasa ham toʻgʻri koʻrinadi. */
export default function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const m = value.match(/^(\d[\d\s]*)(.*)$/);
    if (!m || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const target = parseInt(m[1].replace(/\s/g, ""), 10);
    if (target >= 1000) return; // yil sanalmaydi (audit 8.7)
    const suffix = m[2];
    const from = 0;
    const dur = 1400;
    let started = false;
    const io = new IntersectionObserver((entries) => {
      if (!entries.some((e) => e.isIntersecting) || started) return;
      started = true;
      io.disconnect();
      const t0 = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - t0) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = String(Math.round(from + (target - from) * eased)) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      el.textContent = String(from) + suffix;
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return <span ref={ref}>{value}</span>;
}
