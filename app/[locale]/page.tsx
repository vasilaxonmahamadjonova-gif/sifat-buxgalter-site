import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ClientLogos from "@/components/ClientLogos";
import CtaSection from "@/components/CtaSection";
import PromiseIcon from "@/components/PromiseIcon";
import ReportCard from "@/components/ReportCard";
import ServiceIcon from "@/components/ServiceIcon";
import Tiles from "@/components/Tiles";
import JsonLd, { faqLd } from "@/components/JsonLd";
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

/** Sarlavhadagi bitta iborani sariq qiladi */
function Headline({ text, accent }: { text: string; accent?: string }) {
  if (!accent || !text.includes(accent)) return <>{text}</>;
  const [a, b] = text.split(accent);
  return (
    <>
      {a}
      <em>{accent}</em>
      {b}
    </>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="eyebrow">
      <Tiles /> {children}
    </div>
  );
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const h = home[locale];
  const t = ui[locale];

  return (
    <>
      {/* 1. HERO — to'liq ekran */}
      <section className="hero">
        <Tiles className="hero-pattern" />
        <div className="wrap hero-grid">
          <div>
            <h1>
              <Headline text={h.hero.h1} accent={h.hero.h1Accent} />
            </h1>
            <p className="lead">{h.hero.lead}</p>
            <div className="actions">
              <a className="btn btn-accent" href="#ariza">
                {h.hero.cta}
                <span className="tile" aria-hidden="true" />
              </a>
              <p className="hero-note">{h.hero.note}</p>
            </div>
          </div>
          <div className="hero-card">
            <ReportCard s={h.hero.sample} locale={locale} />
          </div>
        </div>
      </section>

      {/* 2. QACHON MUROJAAT QILISHADI — och */}
      <section id="holatlar" className="light">
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

      {/* 3. 3 SAVOL — to'q */}
      <section id="savol" className="dark rel">
        <div className="pattern-bg" aria-hidden="true">
          <Tiles />
        </div>
        <div className="wrap check-grid">
          <div>
            <Eyebrow>{h.check.eyebrow}</Eyebrow>
            <h2>{h.check.title}</h2>
            <p className="lead">{h.check.intro}</p>
          </div>
          <div>
            <ol className="check-q">
              {h.check.questions.map((q) => (
                <li key={q.q}>
                  <div>
                    <div className="q">{q.q}</div>
                    <div className="why">{q.why}</div>
                  </div>
                </li>
              ))}
            </ol>
            <div className="check-outro">
              <p className="yes">{h.check.outroYes}</p>
              <p className="no">
                {h.check.outroNo}{" "}
                <a className="link" href="#ariza">
                  {h.check.link}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. RAQAMLAR — och */}
      <section className="light" id="raqamlar">
        <div className="wrap">
          <p className="manifest">{h.manifest}</p>
          <div className="stats">
            {h.stats.map(([n, l]) => {
              const m = n.match(/^(\S+)\s*(.*)$/);
              return (
                <div className="stat" key={n}>
                  <strong>
                    {m ? m[1] : n}
                    {m && m[2] && <small>{m[2]}</small>}
                  </strong>
                  <span>{l}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. YASHIRIN XAVF — to'q */}
      <section className="dark" id="xavf">
        <div className="wrap">
          <div className="head">
            <div>
              <Eyebrow>{h.risk.eyebrow}</Eyebrow>
              <h2>{h.risk.h2}</h2>
            </div>
            <p className="lead">{h.risk.intro}</p>
          </div>
          <div className="risk-grid">
            <ol className="risk-steps">
              {h.risk.steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
            <div>
              <div className="risk-big">{h.risk.big}</div>
              <p className="risk-note">{h.risk.bigNote}</p>
            </div>
          </div>
          <p className="risk-outro">{h.risk.outro}</p>
        </div>
      </section>

      {/* 6. XIZMATLAR — och, bento */}
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
              <Link key={g.title} href={servicePath(locale, g.id)} className="svc">
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
            <Link href={sectionPath(locale, "services")} className="svc svc-all">
              <span>{h.services.hubLink}</span>
              <Tiles />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. MAJBURIYATLAR — to'q */}
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
              <li className="glass-card" key={p.title}>
                <PromiseIcon i={i} />
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8. NARX — och */}
      <section id="narx" className="light">
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
              <div className="board-card" key={c.title}>
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
            </a>
            <Link className="link" href={sectionPath(locale, "pricing")}>
              {t.pricingLink}
            </Link>
          </div>
        </div>
      </section>

      {/* 9. KIMGA — to'q */}
      <section id="kimga" className="dark rel">
        <div className="pattern-bg" aria-hidden="true">
          <Tiles />
        </div>
        <div className="wrap">
          <div className="head">
            <div>
              <Eyebrow>{h.who.eyebrow}</Eyebrow>
              <h2>{h.who.h2}</h2>
            </div>
          </div>
          <div className="who-grid">
            <div className="who-col yes">
              <h3>
                <i /> {h.who.yesTitle}
              </h3>
              <ul>
                {h.who.yes.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
            <div className="who-col no">
              <h3>
                <i /> {h.who.noTitle}
              </h3>
              <ul>
                {h.who.no.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="who-note">{h.who.note}</p>
        </div>
      </section>

      {/* 10. JARAYON — och */}
      <section id="jarayon" className="light">
        <div className="wrap">
          <div className="head">
            <div>
              <Eyebrow>{h.process.eyebrow}</Eyebrow>
              <h2>{h.process.h2}</h2>
            </div>
          </div>
          <ol className="process">
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

      {/* 11. JAMOA — to'q */}
      <section id="jamoa" className="dark">
        <div className="wrap">
          <div className="head">
            <div>
              <Eyebrow>{h.team.eyebrow}</Eyebrow>
              <h2>{h.team.h2}</h2>
            </div>
          </div>
          <div className="team-grid">
            {h.team.people.map((p) => (
              <div className="person" key={p.name}>
                <div className="role">{p.role}</div>
                <h3>{p.name}</h3>
                <ul>
                  {p.facts.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. MIJOZLAR — och */}
      <section id="tajriba" className="light">
        <div className="wrap">
          <div className="head">
            <div>
              <Eyebrow>{h.clients.eyebrow}</Eyebrow>
              <h2>{h.clients.h2}</h2>
            </div>
            <p className="lead">{h.clients.lead}</p>
          </div>
          <ClientLogos />
        </div>
      </section>

      {/* 13. SAVOLLAR — to'q */}
      <section id="savollar" className="dark">
        <div className="wrap faq-grid">
          <div>
            <Eyebrow>{h.faq.eyebrow}</Eyebrow>
            <h2>{h.faq.h2}</h2>
          </div>
          <div className="faq">
            {h.faq.items.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 14. ARIZA — och */}
      <CtaSection locale={locale} eyebrow={h.cta.eyebrow} source="home" />
      <JsonLd data={faqLd(h.faq.items)} />
    </>
  );
}
