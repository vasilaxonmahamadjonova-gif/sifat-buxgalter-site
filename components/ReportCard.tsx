import type { HomeContent } from "@/content/home";
import { fillPeriod, reportPeriod } from "@/content/months";
import type { Locale } from "@/content/services";
import { Check } from "./ui";

/**
 * «Direktor uchun oylik hisobot» — hero'dagi shisha karta (380px, blur 20px).
 * Ishonch dalili: vaʼda emas, namuna. Bitta ajratilgan qator — qoʻllangan imtiyoz (oltin).
 * Qatorlar birin-ketin paydo boʻladi (stagger 120ms), galochkalar navbat bilan «qoʻyiladi»,
 * imtiyoz qatori eng oxirida yonadi — jonli hisobot effekti (CSS, --i orqali).
 */
export default function ReportCard({ s, locale }: { s: HomeContent["hero"]["sample"]; locale: Locale }) {
  const p = reportPeriod(locale);
  const highlight = 3;
  const checked = new Set([0, 1, 2]);
  return (
    <div className="rep" role="figure" aria-label={s.title}>
      <div className="rep-head">
        <div>
          <div className="rep-kicker">{s.title}</div>
          <div className="rep-period">{fillPeriod(s.period, p)}</div>
        </div>
        <span className="badge-pill">{s.badge}</span>
      </div>
      <ul className="rep-rows">
        {s.rows.map(([k, v], i) => (
          <li key={k} className={i === highlight ? "hi" : undefined} style={{ "--i": i } as React.CSSProperties}>
            <span className="k">{k}</span>
            <span className="v">
              {fillPeriod(v, p)}
              {checked.has(i) && (
                <i className="tick" aria-hidden="true">
                  <Check size={12} strokeWidth={1.75} />
                </i>
              )}
            </span>
          </li>
        ))}
      </ul>
      <div className="rep-foot">
        <span>{s.signed}</span>
        <i className="orb-tick" aria-hidden="true">
          <Check size={11} strokeWidth={1.75} />
        </i>
      </div>
    </div>
  );
}
