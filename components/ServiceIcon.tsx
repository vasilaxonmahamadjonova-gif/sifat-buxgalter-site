import type { ServiceId } from "@/content/services";

const paths: Record<string, string> = {
  // hujjat + galochka
  reporting: "M14 4h20l10 10v30a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4zM34 4v10h10M18 28l6 6 12-12",
  // foiz
  "tax-reduction": "M12 44L44 12M18 22a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM38 46a6 6 0 1 0 0-12 6 6 0 0 0 0 12z",
  // qalqon
  "audit-defense": "M28 6l18 6v14c0 12-8 20-18 24C18 46 10 38 10 26V12l18-6zM20 27l6 6 10-12",
  // odamlar
  payroll: "M22 26a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM8 48c0-8 6-14 14-14s14 6 14 14M38 24a6 6 0 1 0 0-12M48 46c0-6-4-11-10-12",
  // globus
  "foreign-trade": "M28 50a22 22 0 1 0 0-44 22 22 0 0 0 0 44zM6 28h44M28 6c6 6 9 14 9 22s-3 16-9 22c-6-6-9-14-9-22s3-16 9-22z",
  // hub
  all: "M8 8h16v16H8zM32 8h16v16H32zM8 32h16v16H8zM32 32h16v16H32z",
};

export default function ServiceIcon({ id, className = "svc-icon" }: { id: ServiceId | "all"; className?: string }) {
  const d = paths[id] || paths.all;
  return (
    <svg className={className} viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}
