import type { HomeContent } from "@/content/home";
import { fillPeriod, reportPeriod } from "@/content/months";
import type { Locale } from "@/content/services";
import Tiles from "./Tiles";

/**
 * Direktor uchun oylik hisobot — hero'dagi oq qogʻoz.
 * Hujjat kabi: sarlavha, davr, «Namuna» belgisi, 5 qator, imzo.
 * Marketing raqamlari (24/7, tashrif) bu yerda yoʻq — ular alohida blokda.
 * Bitta qator (qoʻllangan imtiyoz va tejalgan pul) ajratib koʻrsatiladi.
 */
export default function ReportCard({ s, locale }: { s: HomeContent["hero"]["sample"]; locale: Locale }) {
  const p = reportPeriod(locale);
  const highlight = 3;
  return (
    <div className="paper">
      <div className="paper-head">
        <div>
          <div className="paper-kicker">{s.title}</div>
          <div className="paper-period">{fillPeriod(s.period, p)}</div>
        </div>
        <span className="paper-badge">{s.badge}</span>
      </div>
      <ul className="paper-rows">
        {s.rows.map(([k, v], i) => (
          <li key={k} className={i === highlight ? "hi" : undefined}>
            <span className="k">{k}</span>
            <span className="v">{fillPeriod(v, p)}</span>
          </li>
        ))}
      </ul>
      <div className="paper-foot">
        <span>{s.signed}</span>
        <Tiles className="paper-mark" />
      </div>
    </div>
  );
}
