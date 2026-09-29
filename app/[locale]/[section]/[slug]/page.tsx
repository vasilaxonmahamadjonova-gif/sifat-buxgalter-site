import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaSection from "@/components/CtaSection";
import JsonLd, { breadcrumbLd, faqLd } from "@/components/JsonLd";
import { home } from "@/content/home";
import { homePath, isLocale, kindFromSection, locales, sectionPath, serviceIdFromSlug, servicePath, siteUrl } from "@/content/routes";
import { serviceOrder, services, serviceSlugs, servicesBase } from "@/content/services";
import { contacts, ui } from "@/content/site";
import Tiles from "@/components/Tiles";

type Props = { params: Promise<{ locale: string; section: string; slug: string }> };

export function generateStaticParams() {
  const out: { locale: string; section: string; slug: string }[] = [];
  for (const l of locales) for (const id of serviceOrder) out.push({ locale: l, section: servicesBase[l], slug: serviceSlugs[l][id] });
  return out;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, section, slug } = await params;
  if (!isLocale(locale) || kindFromSection(locale, section) !== "services") return {};
  const id = serviceIdFromSlug(locale, slug);
  if (!id) return {};
  const s = services[locale][id];
  return {
    title: s.title,
    description: s.description,
    alternates: {
      canonical: siteUrl + servicePath(locale, id),
      languages: { uz: siteUrl + servicePath("uz", id), ru: siteUrl + servicePath("ru", id), "x-default": siteUrl + servicePath("uz", id) },
    },
    openGraph: { title: s.title, description: s.description, url: siteUrl + servicePath(locale, id), locale: locale === "uz" ? "uz_UZ" : "ru_RU" },
  };
}

export default async function ServicePage({ params }: Props) {
  const { locale, section, slug } = await params;
  if (!isLocale(locale) || kindFromSection(locale, section) !== "services") notFound();
  const id = serviceIdFromSlug(locale, slug);
  if (!id) notFound();
  const s = services[locale][id];
  const t = ui[locale];
  const h = home[locale];

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.h1,
    serviceType: s.title.split("—")[0].trim(),
    description: s.description,
    url: siteUrl + servicePath(locale, id),
    areaServed: locale === "uz" ? "Toshkent" : "Ташкент",
    provider: { "@type": "AccountingService", name: "Sifat Buxgalter", telephone: contacts.phone1.replace(/\s/g, ""), url: siteUrl + homePath(locale) },
  };
  const crumbs = breadcrumbLd([
    { name: t.breadcrumbHome, url: siteUrl + homePath(locale) },
    { name: t.breadcrumbServices, url: siteUrl + sectionPath(locale, "services") },
    { name: s.h1, url: siteUrl + servicePath(locale, id) },
  ]);

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <Link href={homePath(locale)}>{t.breadcrumbHome}</Link>
            <span>›</span>
            <Link href={sectionPath(locale, "services")}>{t.breadcrumbServices}</Link>
            <span>›</span>
            {s.eyebrow.split("·")[0].trim()}
          </div>
          <div className="eyebrow">
            <Tiles /> {s.eyebrow}
          </div>
          <h1>
            {s.h1}
            {s.urgent && <span className="urgent">{locale === "uz" ? "shoshilinch" : "срочно"}</span>}
          </h1>
          <p className="lead">{s.lead}</p>
          <div className="actions">
            <a className="btn btn-accent" href="#ariza">
              {s.cta}
            </a>
            <a className="btn btn-outline" href={contacts.telegram} target="_blank" rel="noopener">
              Telegram
            </a>
            {s.urgent && (
              <a className="btn btn-outline" href={contacts.phone1Href}>
                {contacts.phone1}
              </a>
            )}
          </div>
          <p className="muted" style={{ maxWidth: 600, fontSize: 15, marginTop: 20 }}>
            {s.ctaNote}
          </p>
        </div>
      </section>

      <section className="light">
        <div className="wrap grid-2">
          <div className="card">
            <h3>{s.forWhomTitle}</h3>
            <ul className="checklist checklist-1">
              {s.forWhom.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h3>{s.includesTitle}</h3>
            <ul className="checklist checklist-1">
              {s.includes.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="dark">
        <div className="wrap">
          <div className="head">
            <div>
              <h2>{s.processTitle}</h2>
            </div>
          </div>
          <ol className="process process-dark">
            {s.process.map((p) => (
              <li key={p.title}>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="light">
        <div className="wrap">
          <div className="head">
            <div>
              <h2>{s.whyTitle}</h2>
            </div>
          </div>
          <ol className="promises promises-light">
            {s.why.map((w, i) => (
              <li key={w.title}>
                <div className="num">0{i + 1}</div>
                <div>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="dark">
        <div className="wrap faq-grid">
          <div>
            <h2>{s.priceTitle}</h2>
            <p className="lead" style={{ margin: "24px 0 32px" }}>{s.price}</p>
            <Link className="link" href={sectionPath(locale, "pricing")}>{t.pricingLink}</Link>
          </div>
          <div className="faq">
            {s.faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="light">
        <div className="wrap">
          <div className="head">
            <div>
              <h2>{t.relatedTitle}</h2>
            </div>
          </div>
          <div className="related">
            {s.related.map((rid) => (
              <Link key={rid} href={servicePath(locale, rid)}>
                <span className="related-name">{services[locale][rid].title.split(/ — |: |, /)[0].trim()}</span>
                <span className="related-h1">{services[locale][rid].h1}</span>
              </Link>
            ))}
          </div>
          <p style={{ marginTop: 40 }}>
            <Link className="link" href={sectionPath(locale, "services")}>{t.allServices} →</Link>
          </p>
        </div>
      </section>

      <CtaSection locale={locale} eyebrow={h.cta.eyebrow} title={s.cta} text={s.ctaNote} source={"service:" + id} />
      <JsonLd data={serviceLd} />
      <JsonLd data={crumbs} />
      <JsonLd data={faqLd(s.faq)} />
    </>
  );
}
