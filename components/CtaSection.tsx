import type { Locale } from "@/content/services";
import { contacts, ui } from "@/content/site";
import LeadForm from "./LeadForm";
import Tiles from "./Tiles";

/** Ariza bloki. tone="dark" — toʻq fon, forma maydonlari --bg-dark-2 (brief 7-band); toʻq/och navbat buzilmasligi uchun sahifaga qarab tanlanadi. */
export default function CtaSection({
  locale,
  eyebrow,
  title,
  text,
  source,
  tone = "light",
}: {
  locale: Locale;
  eyebrow: string;
  title?: string;
  text?: string;
  source: string;
  tone?: "light" | "dark";
}) {
  const t = ui[locale];
  return (
    <section className={"cta " + tone} id="ariza-section">
      <div className="wrap cta-grid">
        <div>
          <div className="eyebrow">
            <Tiles /> {eyebrow}
          </div>
          <h2>{title ?? t.ctaTitle}</h2>
          <p className="lead">{text ?? t.ctaText}</p>
          <p className="muted">{t.orCall}</p>
          <div className="phones">
            <a href={contacts.phone1Href}>{contacts.phone1}</a>
            <a href={contacts.phone2Href}>{contacts.phone2}</a>
          </div>
          <p className="cta-tg">
            <a className="link" href={contacts.telegram} target="_blank" rel="noopener">
              {t.telegramLine}
            </a>
          </p>
        </div>
        <LeadForm locale={locale} source={source} />
      </div>
    </section>
  );
}
