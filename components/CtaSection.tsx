import type { Locale } from "@/content/services";
import { contacts, ui } from "@/content/site";
import LeadForm from "./LeadForm";
import Tiles from "./Tiles";

export default function CtaSection({
  locale,
  eyebrow,
  title,
  text,
  source,
}: {
  locale: Locale;
  eyebrow: string;
  title?: string;
  text?: string;
  source: string;
}) {
  const t = ui[locale];
  return (
    <section className="cta light" id="ariza-section">
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
