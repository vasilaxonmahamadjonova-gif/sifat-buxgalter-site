/** Logotipdagi 4 ta qiya to'rtburchak — yaxlit rang, gradient yo'q. currentColor orqali bo'yaladi. */
export default function Tiles({ className = "tiles" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 140 145" fill="currentColor" aria-hidden="true">
      <g transform="skewX(-12)">
        <rect x="42" y="2" width="58" height="66" rx="7" />
        <rect x="106" y="34" width="30" height="34" rx="5" />
        <rect x="32" y="80" width="30" height="34" rx="5" />
        <rect x="68" y="76" width="60" height="66" rx="7" />
      </g>
    </svg>
  );
}
