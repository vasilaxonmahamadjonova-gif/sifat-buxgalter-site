import type { HomeContent } from "@/content/home";
import { fillPeriod, reportPeriod } from "@/content/months";
import type { Locale } from "@/content/services";
import Tiles from "./Tiles";

/** Direktor uchun oylik hisobot — oq qog'oz namunasi. Qimirlamaydi, gradient yo'q. */
export default function ReportCard({ s, locale }: { s: HomeContent["hero"]["sample"]; locale: Locale }) {
  const p = reportPeriod(locale);
  return (
    <div className="paper" aria-hidden="true">
      <div className="paper-head">
        <div>
          <div className="paper-title">{s.title}</div>
          <div className="paper-period">{fillPeriod(s.period, p)}</div>
        </div>
        <span className="paper-badge">{s.badge}</span>
      </div>
      <ul className="paper-rows">
        {s.rows.map(([k, v]) => (
          <li key={k}>
            <span className="k">{k}</span>
            <span className="dots" />
            <span className="v">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              {fillPeriod(v, p)}
            </span>
          </li>
        ))}
      </ul>
      <div className="paper-stats">
        <div>
          <small>{s.stat1[0]}</small>
          <strong>{s.stat1[1]}</strong>
        </div>
        <div>
          <small>{s.stat2[0]}</small>
          <strong>{s.stat2[1]}</strong>
        </div>
      </div>
      <div className="paper-sign">{s.signed}</div>
      <Tiles className="paper-mark" />
    </div>
  );
}
