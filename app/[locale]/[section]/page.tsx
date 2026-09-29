import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ClientLogos from "@/components/ClientLogos";
import CtaSection from "@/components/CtaSection";
import JsonLd, { breadcrumbLd, faqLd } from "@/components/JsonLd";
import { home } from "@/content/home";
import { contactExtra, pages, pricingIncluded, privacyText, servicesRouter, thanksExtra } from "@/content/pages";
import { homePath, isLocale, kindFromSection, locales, sectionPath, sections, servicePath, siteUrl, type PageKind } from "@/content/routes";
import { serviceOrder, services } from "@/content/services";
import { contacts, ui } from "@/content/site";
import PromiseIcon from "@/components/PromiseIcon";
import Tiles from "@/components/Tiles";

type Props = { params: Promise<{ locale: string; section: string }> };

export function generateStaticParams() {
  const out: { locale: string; section: string }[] = [];
  for (const l of locales) for (const s of Object.values(sections[l])) out.push({ locale: l, section: s });
  return out;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, section } = await params;
  if (!isLocale(locale)) return {};
  const kind = kindFromSection(locale, section);
  if (!kind) return {};
  const p = pages[locale][kind];
  return {
    title: p.title,
    description: p.description,
    robots: kind === "thanks" ? { index: false } : undefined,
    alternates: {
      canonical: siteUrl + sectionPath(locale, kind),
      languages: { uz: siteUrl + sectionPath("uz", kind), ru: siteUrl + sectionPath("ru", kind), "x-default": siteUrl + sectionPath("uz", kind) },
    },
    openGraph: { title: p.title, description: p.description, url: siteUrl + sectionPath(locale, kind) },
  };
}

function Hero({ locale, kind }: { locale: "uz" | "ru"; kind: PageKind }) {
  const p = pages[locale][kind];
  const t = ui[locale];
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="breadcrumb">
          <Link href={homePath(locale)}>{t.breadcrumbHome}</Link>
          <span>›</span>
          {p.eyebrow.split("·")[0].trim()}
        </div>
        <div className="eyebrow">
          <Tiles /> {p.eyebrow}
        </div>
        <h1>{p.h1}</h1>
        <p className="lead">{p.lead}</p>
      </div>
    </section>
  );
}

export default async function SectionPage({ params }: Props) {
  const { locale, section } = await params;
  if (!isLocale(locale)) notFound();
  const kind = kindFromSection(locale, section);
  if (!kind) notFound();
  const t = ui[locale];
  const h = home[locale];
  const p = pages[locale][kind];
  const crumbs = breadcrumbLd([
    { name: t.breadcrumbHome, url: siteUrl + homePath(locale) },
    { name: p.h1, url: siteUrl + sectionPath(locale, kind) },
  ]);

  if (kind === "services") {
    const r = servicesRouter[locale];
    return (
      <>
        <Hero locale={locale} kind={kind} />
        <section className="light">
          <div className="wrap wrap-wide">
            <div className="head">
              <div>
                <div className="eyebrow">
                  <Tiles /> {r.title}
                </div>
                <h2>{r.title}</h2>
              </div>
              <p className="lead">{r.lead}</p>
            </div>
            <div className="board">
              {r.items.map((it) => (
                <Link key={it.id} href={servicePath(locale, it.id)} className="board-card">
                  <span className="router-q">{it.situation}</span>
                  <span className="router-a">{it.answer}</span>
                  <span className="more">{t.readMore}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="dark glass">
          <div className="glass-bg" aria-hidden="true">
            <Tiles className="a" />
            <Tiles className="b" />
          </div>
          <div className="wrap wrap-wide">
            <div className="head">
              <div>
                <div className="eyebrow">
                  <Tiles /> {t.allServices}
                </div>
                <h2>{h.services.h2}</h2>
              </div>
            </div>
            <div className="board board-dense">
              {serviceOrder.map((id) => {
                const s = services[locale][id];
                return (
                  <Link key={id} href={servicePath(locale, id)} className="board-card">
                    <span className="related-name">{s.title.split(/ — |: |, /)[0].trim()}</span>
                    <span className="router-q">{s.h1}</span>
                    <span className="router-a">{s.lead.split(". ")[0]}.</span>
                    <span className="more">{t.readMore}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
        <CtaSection locale={locale} eyebrow={h.cta.eyebrow} source="services-hub" />
        <JsonLd data={crumbs} />
      </>
    );
  }

  if (kind === "pricing") {
    return (
      <>
        <Hero locale={locale} kind={kind} />
        <section className="light">
          <div className="wrap wrap-wide">
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
          </div>
        </section>
        <section className="dark">
          <div className="wrap">
            <div className="head">
              <div>
                <h2>{pricingIncluded[locale].title}</h2>
              </div>
              <p className="lead">{pricingIncluded[locale].note}</p>
            </div>
            <ul className="checklist">
              {pricingIncluded[locale].items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </section>
        <section className="light">
          <div className="wrap faq-grid">
            <div>
              <h2>{h.faq.h2}</h2>
            </div>
            <div className="faq faq-light">
              {h.faq.items.slice(-2).map((f) => (
                <details key={f.q} open>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <CtaSection locale={locale} eyebrow={h.cta.eyebrow} text={h.pricing.cta.replace(" →", "")} source="pricing" />
        <JsonLd data={crumbs} />
        <JsonLd data={faqLd(h.faq.items.slice(-2))} />
      </>
    );
  }

  if (kind === "team") {
    return (
      <>
        <Hero locale={locale} kind={kind} />
        <section className="dark">
          <div className="wrap">
            <div className="team-grid">
              {h.team.people.map((pp) => (
                <div className="person" key={pp.name}>
                  <div className="role">{pp.role}</div>
                  <h3>{pp.name}</h3>
                  <ul>
                    {pp.facts.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="light">
          <div className="wrap wrap-wide">
            <div className="head">
              <div>
                <div className="eyebrow">
                  <Tiles /> {h.promises.eyebrow}
                </div>
                <h2>{h.promises.h2}</h2>
              </div>
              <p className="lead">{h.promises.lead}</p>
            </div>
            <ul className="board">
              {h.promises.items.map((pr, i) => (
                <li className="board-card" key={pr.title}>
                  <PromiseIcon i={i} />
                  <h3>{pr.title}</h3>
                  <p>{pr.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="dark">
          <div className="wrap">
            <div className="head">
              <div>
                <div className="eyebrow">
                  <Tiles /> {h.clients.eyebrow}
                </div>
                <h2>{h.clients.h2}</h2>
              </div>
              <p className="lead">{h.clients.lead}</p>
            </div>
            <ClientLogos />
          </div>
        </section>
        <CtaSection locale={locale} eyebrow={h.cta.eyebrow} source="team" />
        <JsonLd data={crumbs} />
      </>
    );
  }

  if (kind === "faq") {
    const all = [
      ...h.faq.items,
      ...serviceOrder.flatMap((id) => services[locale][id].faq),
    ].filter((f, i, arr) => arr.findIndex((x) => x.q === f.q) === i);
    return (
      <>
        <Hero locale={locale} kind={kind} />
        <section className="light">
          <div className="wrap faq faq-light" style={{ maxWidth: 900 }}>
            {all.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>
        <CtaSection locale={locale} eyebrow={h.cta.eyebrow} source="faq" />
        <JsonLd data={crumbs} />
        <JsonLd data={faqLd(all)} />
      </>
    );
  }

  if (kind === "contact") {
    const c = contactExtra[locale];
    return (
      <>
        <Hero locale={locale} kind={kind} />
        <CtaSection locale={locale} eyebrow={h.cta.eyebrow} source="contact" />
        <section className="dark">
          <div className="wrap">
            <div className="head">
              <div>
                <h2>{c.title}</h2>
              </div>
              <p className="lead">{c.noSale}</p>
            </div>
            <ol className="process process-dark">
              {c.steps.map((st) => (
                <li key={st.t}>
                  <div>
                    <h3>{st.t}</h3>
                    <p>{st.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section className="light">
          <div className="wrap grid-2">
            <div className="card">
              <h3>{t.footer.office}</h3>
              <p>{t.footer.address}</p>
              {t.footer.landmark && <p className="muted">{t.footer.landmark}</p>}
              <p style={{ marginTop: 16 }}>
                <a className="link" href={contacts.map} target="_blank" rel="noopener">
                  {t.footer.mapLink}
                </a>
              </p>
            </div>
            <div className="card">
              <h3>{t.footer.contact}</h3>
              <div className="phones">
                <a href={contacts.phone1Href}>{contacts.phone1}</a>
                <a href={contacts.phone2Href}>{contacts.phone2}</a>
              </div>
              <p style={{ marginTop: 16 }}>
                <a className="link" href={contacts.telegram}>Telegram {contacts.telegramHandle}</a>
              </p>
              <p style={{ marginTop: 10 }}>
                <a className="link" href={contacts.instagram}>Instagram @sifatbuxgalter</a>
              </p>
              <p className="muted" style={{ marginTop: 16 }}>{t.footer.online}</p>
            </div>
          </div>
        </section>
        <JsonLd data={crumbs} />
      </>
    );
  }

  if (kind === "privacy") {
    return (
      <>
        <Hero locale={locale} kind={kind} />
        <section className="light prose">
          <div className="wrap">
            {privacyText[locale].map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </section>
      </>
    );
  }

  // thanks
  const th = thanksExtra[locale];
  return (
    <>
      <Hero locale={locale} kind={kind} />
      <section className="light">
        <div className="wrap">
          <div className="card" style={{ maxWidth: 640 }}>
            <h3>{th.title}</h3>
            <ol className="prep">
              {th.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ol>
          </div>
          <p className="muted" style={{ marginTop: 40, marginBottom: 6 }}>{th.telegram}</p>
          <div className="phones">
            <a href={contacts.phone1Href}>{contacts.phone1}</a>
            <a href={contacts.telegram}>Telegram {contacts.telegramHandle}</a>
          </div>
          <p style={{ marginTop: 32 }}>
            <Link className="btn btn-outline" href={homePath(locale)}>
              ← {t.breadcrumbHome}
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
