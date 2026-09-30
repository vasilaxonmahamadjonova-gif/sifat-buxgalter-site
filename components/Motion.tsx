"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Yumshoq paydo boʻlish: elementlar skrollda 24px pastdan koʻtarilib, ochiladi.
 * JS boʻlmasa hamma narsa darrov koʻrinadi. prefers-reduced-motion hurmat qilinadi.
 */
const SELECTOR = [
  ".head", ".manifest", ".stat", ".trig-grid li", ".trig-note",
  ".check-q li", ".check-outro", ".risk-steps li", ".risk-big", ".risk-note", ".risk-outro",
  ".svc", ".glass-card", ".board-card", ".card", ".who-col", ".process li", ".person",
  ".marquee", ".faq details", ".cta-grid > *", ".price-links", ".checklist li", ".related a", ".prose p",
].join(",");

export default function Motion() {
  const pathname = usePathname();
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const el = e.target as HTMLElement;
          el.classList.add("in");
          io.unobserve(el);
          window.setTimeout(() => el.classList.remove("rv", "in"), 900);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    els.forEach((el) => {
      const i = Array.prototype.indexOf.call(el.parentElement?.children ?? [], el);
      el.style.transitionDelay = `${Math.min(i, 5) * 70}ms`;
      el.classList.add("rv");
      io.observe(el);
    });
    // chop etish yoki toʻliq sahifa skrinshotida hammasi koʻrinsin
    const showAll = () => els.forEach((el) => el.classList.remove("rv", "in"));
    window.addEventListener("beforeprint", showAll);
    return () => {
      io.disconnect();
      window.removeEventListener("beforeprint", showAll);
    };
  }, [pathname]);
  return null;
}
