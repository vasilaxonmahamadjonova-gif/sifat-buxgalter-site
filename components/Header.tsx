"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { altPathFor } from "@/content/altpath";
import type { Locale } from "@/content/services";
import { contacts, ui } from "@/content/site";
import { homePath, sectionPath } from "@/content/routes";
import Tiles from "./Tiles";
import { ArrowUpRight, Close, MenuIcon, Phone } from "./ui";

/**
 * Sarlavha (64px): hero ustida shaffof, pastida 1px chiziq; skrollda grafit fon + blur.
 * Chap — logo. Oʻrta — shisha pill «☰ Xizmatlar» + havolalar. Oʻng — nuqta + telefon,
 * ish vaqti, UZ/RU pill, «Qoʻngʻiroq buyurtma qilish ↗» (vkladka, tugma emas).
 */
export default function Header({ locale }: { locale: Locale }) {
  const t = ui[locale];
  const pathname = usePathname();
  const altPath = altPathFor(pathname, locale);
  const other: Locale = locale === "uz" ? "ru" : "uz";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const links: [string, string][] = [
    [sectionPath(locale, "pricing"), t.nav.pricing],
    [sectionPath(locale, "team"), t.nav.team],
    [sectionPath(locale, "faq"), t.nav.faq],
    [sectionPath(locale, "contact"), t.nav.contact],
  ];

  return (
    <header className={"hd" + (scrolled || open ? " hd-scrolled" : "")}>
      <div className="hd-row">
        <Link href={homePath(locale)} className="brand" aria-label="Sifat Buxgalter">
          <Tiles className="brand-mark" />
          <span className="brand-text">
            <b>SIFAT</b> BUXGALTER
          </span>
        </Link>

        <nav className="hd-nav" aria-label="Main">
          <Link href={sectionPath(locale, "services")} className="glass-pill">
            <MenuIcon size={14} strokeWidth={1.5} />
            {t.nav.services}
          </Link>
          <ul className="hd-links">
            {links.map(([href, label]) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hd-right">
          <a className="hd-phone" href={contacts.phone1Href}>
            <span className="hd-phone-num">
              <i className="dot" aria-hidden="true" />
              {contacts.phone1}
            </span>
            <span className="hd-phone-sub">{t.headerHours}</span>
          </a>
          <a className="hd-phone-icon glass-pill" href={contacts.phone1Href} aria-label={contacts.phone1}>
            <Phone size={16} strokeWidth={1.5} />
          </a>

          <Link className="lang-pill" href={altPath} hrefLang={other} aria-label={other.toUpperCase()}>
            <span className={locale === "uz" ? "on" : undefined}>UZ</span>
            <span className="sep" aria-hidden="true" />
            <span className={locale === "ru" ? "on" : undefined}>RU</span>
          </Link>

          <Link className="hd-tab" href={sectionPath(locale, "contact")}>
            {t.headerCall}
            <ArrowUpRight size={14} strokeWidth={1.5} />
          </Link>

          <button className="menu-pill glass-pill" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
            {open ? <Close size={14} /> : <MenuIcon size={14} />}
            {t.menu}
          </button>
        </div>
      </div>

      <div id="mobile-nav" className={"mobile-nav" + (open ? " open" : "")}>
        <Link href={sectionPath(locale, "services")} onClick={() => setOpen(false)}>
          {t.nav.services}
        </Link>
        {links.map(([href, label]) => (
          <Link key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </Link>
        ))}
        <Link href={altPath} hrefLang={other} onClick={() => setOpen(false)}>
          {t.langSwitch}
        </Link>
        <a href={contacts.phone1Href}>{contacts.phone1}</a>
        <Link className="mobile-cta" href={sectionPath(locale, "contact")} onClick={() => setOpen(false)}>
          {t.headerCall}
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </header>
  );
}
