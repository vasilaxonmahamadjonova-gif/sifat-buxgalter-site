import Link from "next/link";

/**
 * Premium Quiet Luxury uchun umumiy boʻlaklar: outline ikonkalar (1.25–1.5px, round caps)
 * va pill-tugmalar. Toʻrtburchak tugma yoʻq — faqat pill yoki doira.
 */

type IconProps = { className?: string; size?: number; strokeWidth?: number };

function Svg({ className, size = 18, strokeWidth = 1.5, children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export const ArrowUpRight = (p: IconProps) => (
  <Svg {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </Svg>
);
export const ArrowRight = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Svg>
);
export const Shield = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3l7 2.6v5.6c0 4.6-3 8.4-7 9.8-4-1.4-7-5.2-7-9.8V5.6L12 3zM9 12l2 2 4-4" />
  </Svg>
);
export const Check = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </Svg>
);
export const MenuIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 7h16M4 12h16M4 17h10" />
  </Svg>
);
export const Phone = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </Svg>
);
export const Close = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Svg>
);

/**
 * Primary CTA: oq (yoki toʻq) pill + oʻngida oltin doira ↗.
 * tone="light" — oq fon (toʻq fonda), tone="dark" — toʻq fon (och fonda).
 * hover: strelka ↗ → → ga aylanadi, soya paydo boʻladi.
 */
export function PillButton({
  href,
  children,
  tone = "light",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  const cls = `pill pill-${tone} ${className}`.trim();
  const inner = (
    <>
      <span className="pill-label">{children}</span>
      <span className="pill-orb" aria-hidden="true">
        <ArrowUpRight size={16} strokeWidth={1.5} />
      </span>
    </>
  );
  return href.startsWith("#") || href.startsWith("tel:") ? (
    <a className={cls} href={href}>
      {inner}
    </a>
  ) : (
    <Link className={cls} href={href}>
      {inner}
    </Link>
  );
}
