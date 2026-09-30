import type { Locale } from "@/content/services";
import { contacts, ui } from "@/content/site";
import { Phone, PillButton } from "./ui";

/** Mobil: ekran pastida doim turadigan panel (audit 8.4). Faqat ≤ 960px. Pill + shisha doira. */
export default function MobileCta({ locale }: { locale: Locale }) {
  const t = ui[locale];
  return (
    <div className="mobile-sticky-cta">
      <PillButton href="#ariza" tone="light">
        {t.headerCta}
      </PillButton>
      <a className="glass-pill call" href={contacts.phone1Href} aria-label={contacts.phone1}>
        <Phone size={20} strokeWidth={1.5} />
      </a>
    </div>
  );
}
