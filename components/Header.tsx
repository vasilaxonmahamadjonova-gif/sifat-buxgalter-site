"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { altPathFor } from "@/content/altpath";
import type { Locale } from "@/content/services";
import { contacts, ui } from "@/content/site";
import { homePath, sectionPath } from "@/content/routes";
import Tiles from "./Tiles";

/** Sarlavha doim yuqorida turadi: hero ustida shaffof, skroll qilinganda toʻq fon. */
export default function Header({ locale }: { locale: Locale }) {
  const t = ui[locale];
  const pathname = usePathname();
  const altPath = altPathFor(pathname, locale);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    [sectionPath(locale, "services"), t.nav.services],
    [sectionPath(locale, "pricing"), t.nav.pricing],
    [sectionPath(locale, "team"), t.nav.team],
    [sectionPath(locale, "faq"), t.nav.faq],
    [sectionPath(locale, "contact"), t.nav.contact],
  ];
  return (
    <header className={"header" + (scrolled || open ? " scrolled" : "")}>
      <div className="wrap">
        <Link href={homePath(locale)} className="brand">
          <Tiles className="brand-mark" /> <span>SIFAT</span>&nbsp;BUXGALTER
        </Link>
        <nav className="nav" aria-label="Main">
          {links.map(([href, label]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="header-right">
          <a className="header-phone" href={contacts.phone1Href}>
            {contacts.phone1}
          </a>
          <Link className="lang" href={altPath} hrefLang={locale === "uz" ? "ru" : "uz"}>
            {t.langSwitch}
          </Link>
          <Link className="btn btn-accent btn-sm" href={sectionPath(locale, "contact")}>
            {t.headerCta}
          </Link>
          <button className="menu-btn" aria-expanded={open} aria-label="Menu" onClick={() => setOpen(!open)}>
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
      <div className={"mobile-nav" + (open ? " open" : "")}>
        {links.map(([href, label]) => (
          <Link key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </Link>
        ))}
        <Link href={altPath} hrefLang={locale === "uz" ? "ru" : "uz"} onClick={() => setOpen(false)}>
          {t.langSwitch}
        </Link>
        <a href={contacts.phone1Href}>{contacts.phone1}</a>
        <Link className="mobile-cta" href={sectionPath(locale, "contact")} onClick={() => setOpen(false)}>
          {t.headerCta} →
        </Link>
      </div>
    </header>
  );
}
