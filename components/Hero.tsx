import type { HomeContent } from "@/content/home";
import type { Locale } from "@/content/services";
import ReportCard from "./ReportCard";
import { PillButton, Shield } from "./ui";

/**
 * Hero — toʻq, kinematografik. «Raqamlarda tartib = direktorning xotirjamligi».
 * Setka: xizmat ustuni (~13%, oʻngida 1px chiziq) · matn (2-ustundan) · shisha hisobot (380px).
 * Pastki burchaklar 40px; keyingi och «varaq» ustiga chiqadi (.sheet).
 *
 * Foto: /public/hero.jpg qoʻyib, HERO_PHOTO ni "/hero.jpg" qiling — kadr butun hero'ni qoplaydi
 * (Ken Burns 20s). Fotosiz variant: grafit fon + chiroq nuri + xiralashgan hujjatlar toʻplami.
 */
const HERO_PHOTO: string | null = null;

const NOISE =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 .5 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")";

function splitH1(text: string) {
  // Birinchi gap — shaffof (ghost), qolgani — oq. Ierarxiya rang bilan emas, shaffoflik bilan.
  const m = text.match(/^(.+?[.!?])\s+(.+)$/s);
  return m ? { ghost: m[1], main: m[2] } : { ghost: "", main: text };
}

export default function Hero({ h, locale }: { h: HomeContent["hero"]; locale: Locale }) {
  const { ghost, main } = splitH1(h.h1);
  const years = new Date().getFullYear() - h.exp.since;
  return (
    <section className="hx" aria-labelledby="hero-title">
      <div className="hx-bg" aria-hidden="true">
        {HERO_PHOTO ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="hx-photo" src={HERO_PHOTO} alt="" fetchPriority="high" />
        ) : (
          <div className="hx-scene">
            <svg className="hx-object" viewBox="0 0 520 520">
              <defs>
                <linearGradient id="hxp" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#3A3F4D" />
                  <stop offset="1" stopColor="#1B1E27" />
                </linearGradient>
                <radialGradient id="hxs" cx=".35" cy=".3" r=".8">
                  <stop offset="0" stopColor="#E9D9B0" />
                  <stop offset="1" stopColor="#A8893F" />
                </radialGradient>
              </defs>
              <g transform="rotate(-8 260 300)">
                <rect x="120" y="150" width="300" height="380" rx="14" fill="url(#hxp)" opacity=".55" transform="translate(28 -26)" />
                <rect x="120" y="150" width="300" height="380" rx="14" fill="url(#hxp)" opacity=".75" transform="translate(14 -13)" />
                <rect x="120" y="150" width="300" height="380" rx="14" fill="url(#hxp)" />
                <g stroke="#FFFFFF" strokeOpacity=".16" strokeWidth="6" strokeLinecap="round">
                  <path d="M160 205h140M160 245h200M160 285h170M160 325h200M160 365h120" />
                </g>
                <circle cx="352" cy="428" r="46" fill="url(#hxs)" opacity=".9" />
                <circle cx="352" cy="428" r="30" fill="none" stroke="#FFFFFF" strokeOpacity=".45" strokeWidth="2" />
              </g>
            </svg>
          </div>
        )}
        <div className="hx-vignette" />
        <div className="hx-grain" style={{ backgroundImage: NOISE }} />
      </div>

      <div className="hx-grid">
        <aside className="hx-aside">
          <span className="plate" aria-hidden="true">
            <Shield size={16} strokeWidth={1.5} />
          </span>
          <div className="hx-exp">{h.exp.label.replace("{n}", String(years))}</div>
          <p className="hx-exp-note">{h.exp.note}</p>
        </aside>

        <div className="hx-copy">
          <div className="hx-exp-inline">
            <span className="plate" aria-hidden="true">
              <Shield size={14} strokeWidth={1.5} />
            </span>
            {h.exp.label.replace("{n}", String(years))}
          </div>
          <h1 id="hero-title" className="hx-h1">
            {ghost && <span className="ghost">{ghost}</span>}
            <span className="main">{main}</span>
          </h1>
          <p className="hx-lead">{h.lead}</p>
          <div className="hx-actions">
            <PillButton href="#ariza" tone="light">
              {h.cta}
            </PillButton>
          </div>
        </div>

        <div className="hx-card">
          <ReportCard s={h.sample} locale={locale} />
        </div>
      </div>
    </section>
  );
}
