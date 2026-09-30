import Link from "next/link";
import type { Locale } from "@/content/services";
import { services, serviceOrder } from "@/content/services";
import { contacts, ui } from "@/content/site";
import { homePath, sectionPath, servicePath } from "@/content/routes";
import Tiles from "./Tiles";

export default function Footer({ locale }: { locale: Locale }) {
  const t = ui[locale];
  const top = serviceOrder.slice(0, 6);
  return (
    <footer className="footer">
      <div className="pattern-bg" aria-hidden="true">
        <Tiles />
      </div>
      <div className="wrap" style={{ position: "relative" }}>
        <Link href={homePath(locale)} className="brand">
          <Tiles className="brand-mark" />
          <span className="brand-text">
            <b>SIFAT</b> BUXGALTER
          </span>
        </Link>
        <div className="online">{t.footer.online}</div>
        <div className="footer-grid">
          <div>
            <h4>{t.footer.office}</h4>
            <div>{t.footer.address}</div>
            {t.footer.landmark && <div>{t.footer.landmark}</div>}
            <a href={contacts.map} target="_blank" rel="noopener">
              {t.footer.mapLink}
            </a>
          </div>
          <div>
            <h4>{t.footer.contact}</h4>
            <a href={contacts.phone1Href}>{contacts.phone1}</a>
            <a href={contacts.phone2Href}>{contacts.phone2}</a>
            <a href={contacts.telegram} target="_blank" rel="noopener">
              Telegram
            </a>
            <a href={contacts.instagram} target="_blank" rel="noopener">
              Instagram
            </a>
          </div>
          <div>
            <h4>{t.footer.services}</h4>
            {top.map((id) => (
              <Link key={id} href={servicePath(locale, id)}>
                {services[locale][id].eyebrow.split("·")[0].trim()}
              </Link>
            ))}
            <Link href={sectionPath(locale, "services")}>{t.allServices} →</Link>
          </div>
          <div>
            <h4>Sifat Buxgalter</h4>
            <Link href={sectionPath(locale, "pricing")}>{t.nav.pricing}</Link>
            <Link href={sectionPath(locale, "team")}>{t.nav.team}</Link>
            <Link href={sectionPath(locale, "faq")}>{t.nav.faq}</Link>
            <Link href={sectionPath(locale, "contact")}>{t.nav.contact}</Link>
            <Link href={sectionPath(locale, "privacy")}>{t.form.privacyLink}</Link>
          </div>
        </div>
        <div className="copy">{t.footer.copyright}</div>
      </div>
    </footer>
  );
}
