import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ClientLogos from "@/components/ClientLogos";
import CountUp from "@/components/CountUp";
import CtaSection from "@/components/CtaSection";
import Hero from "@/components/Hero";
import PromiseIcon from "@/components/PromiseIcon";
import ServiceIcon from "@/components/ServiceIcon";
import Tiles from "@/components/Tiles";
import { home } from "@/content/home";
import { homePath, isLocale, sectionPath, servicePath, siteUrl } from "@/content/routes";
import { ui } from "@/content/site";

type Props = { params: Promise<{ locale: string }> };

// Hero hisobot kartasidagi oy nomi yangilanib turishi uchun — kuniga bir marta qayta generatsiya
export const revalidate = 86400;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const h = home[locale];
  return {
    title: h.meta.title,
    description: h.meta.description,
    alternates: {
      canonical: siteUrl + homePath(locale),
      languages: { uz: siteUrl + homePath("uz"), ru: siteUrl + homePath("ru"), "x-default": siteUrl + homePath("uz") },
    },
    openGraph: { title: h.meta.title, description: h.meta.description, url: siteUrl + homePath(locale), locale: locale === "uz" ? "uz_UZ" : "ru_RU" },
  };
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="eyebrow">
      <Tiles /> {children}
    </div>
  );
}

/**
 * Bosh sahifa: 8 boʻlim (audit 8.6). Navbat: D L D L D L D L, footer D.
 * 1 hero · 2 qachon murojaat · 3 majburiyatlar · 4 xizmatlar · 5 narx · 6 raqamlar + mijozlar · 7 jarayon · 8 ariza
 */
export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const h = home[locale];
  const t = ui[locale];

  return (
    <>
      {/* 1. HERO — toʻq, kinematografik; keyingi och «varaq» ustiga chiqadi */}
      <Hero h={h.hero} locale={locale} />

      {/* 2. QACHON MUROJAAT QILISHADI — och */}
      <section id="holatlar" className="light sheet">
        <div className="wrap">
          <div className="head">
            <div>
              <Eyebrow>{h.triggers.eyebrow}</Eyebrow>
              <h2>{h.triggers.h2}</h2>
            </div>
          </div>
          <ul className="trig-grid">
            {h.triggers.items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
          <p className="trig-note">{h.triggers.note}</p>
        </div>
      </section>

      {/* 3. MAJBURIYATLAR — to'q, shaffof kartalar */}
      <section id="majburiyatlar" className="dark glass">
        <div className="glass-bg" aria-hidden="true">
          <Tiles className="a" />
          <Tiles className="b" />
        </div>
        <div className="wrap">
          <div className="head">
            <div>
              <Eyebrow>{h.promises.eyebrow}</Eyebrow>
              <h2>{h.promises.h2}</h2>
            </div>
            <p className="lead">{h.promises.lead}</p>
          </div>
          <ul className="glass-grid">
            {h.promises.items.map((p, i) => (
              <li className="glass-card cut" key={p.title}>
                <PromiseIcon i={i} />
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. XIZMATLAR — och, bento */}
      <section id="xizmatlar" className="light">
        <div className="wrap">
          <div className="head">
            <div>
              <Eyebrow>{h.services.eyebrow}</Eyebrow>
              <h2>{h.services.h2}</h2>
            </div>
            <p className="lead">{h.services.lead}</p>
          </div>
          <div className="svc-grid">
            {h.services.groups.map((g) => (
              <Link key={g.title} href={servicePath(locale, g.id)} className="svc cut">
                <ServiceIcon id={g.id} className="svc-icon" />
                <h3>{g.title}</h3>
                <ul>
                  {g.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                <div className="more">{t.readMore}</div>
              </Link>
            ))}
            <Link href={sectionPath(locale, "services")} className="svc svc-all cut">
              <span>{h.services.hubLink}</span>
              <Tiles />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. NARX — to'q, shashka */}
      <section id="narx" className="dark glass">
        <div className="glass-bg" aria-hidden="true">
          <Tiles className="b" />
        </div>
        <div className="wrap wrap-wide">
          <div className="head">
            <div>
              <Eyebrow>{h.pricing.eyebrow}</Eyebrow>
              <h2>{h.pricing.h2}</h2>
            </div>
            <p className="lead">{h.pricing.intro}</p>
          </div>
          <div className="board">
            {h.pricing.cards.map((c) => (
              <div className="board-card cut" key={c.title}>
                <span className="glass-icon" aria-hidden="true">
                  <Tiles />
                </span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
          <div className="price-links">
            <a href="#ariza" className="btn btn-accent">
              {h.pricing.cta}
              <span className="tile" aria-hidden="true" />
            </a>
            <Link className="link" href={sectionPath(locale, "pricing")}>
              {t.pricingLink}
            </Link>
          </div>
        </div>
      </section>

      {/* 6. RAQAMLAR + MIJOZLAR — och */}
      <section className="light" id="raqamlar">
        <div className="wrap">
          <div className="stats">
            {h.stats.map(([n, l]) => {
              const m = n.match(/^(\S+)\s*(.*)$/);
              return (
                <div className="stat" key={n}>
                  <strong>
                    <CountUp value={m ? m[1] : n} />
                    {m && m[2] && <small>{m[2]}</small>}
                  </strong>
                  <span>{l}</span>
                </div>
              );
            })}
          </div>
          <div className="head head-gap" id="tajriba">
            <div>
              <Eyebrow>{h.clients.eyebrow}</Eyebrow>
              <h2>{h.clients.h2}</h2>
            </div>
            <p className="lead">{h.clients.lead}</p>
          </div>
          <ClientLogos />
        </div>
      </section>

      {/* 7. JARAYON — to'q */}
      <section id="jarayon" className="dark">
        <div className="wrap">
          <div className="head">
            <div>
              <Eyebrow>{h.process.eyebrow}</Eyebrow>
              <h2>{h.process.h2}</h2>
            </div>
          </div>
          <ol className="process process-dark">
            {h.process.steps.map((st) => (
              <li key={st.title}>
                <div>
                  <h3>{st.title}</h3>
                  <p>{st.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 8. ARIZA — och */}
      <CtaSection locale={locale} eyebrow={h.cta.eyebrow} source="home" />
    </>
  );
}
