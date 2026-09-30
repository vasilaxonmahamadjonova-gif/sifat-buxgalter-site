import type { Locale } from "@/content/services";
import { contacts, ui } from "@/content/site";

/** Mobil: ekran pastida doim turadigan panel (audit 8.4). Faqat ≤ 960px. */
export default function MobileCta({ locale }: { locale: Locale }) {
  const t = ui[locale];
  return (
    <div className="mobile-sticky-cta">
      <a className="btn btn-accent" href="#ariza">
        {t.headerCta}
        <span className="tile" aria-hidden="true" />
      </a>
      <a className="btn btn-outline" href={contacts.phone1Href} aria-label={contacts.phone1}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
        </svg>
      </a>
    </div>
  );
}
