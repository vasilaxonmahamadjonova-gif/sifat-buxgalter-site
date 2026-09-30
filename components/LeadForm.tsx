"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Locale } from "@/content/services";
import { ui } from "@/content/site";
import { sectionPath } from "@/content/routes";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function phoneLooksValid(v: string) {
  const d = v.replace(/\D/g, "");
  return d.length === 9 || (d.length >= 10 && d.length <= 15);
}

/** Ariza: 3 maydon + rozilik (audit 8.3). Xato maydon ostida, aria-live bilan. */
export default function LeadForm({ locale, source }: { locale: Locale; source: string }) {
  const t = ui[locale].form;
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<"" | "phone" | "consent" | "send">("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const body = Object.fromEntries(fd.entries()) as Record<string, string>;
    if (!phoneLooksValid(body.phone || "")) {
      setErr("phone");
      return;
    }
    if (!body.consent) {
      setErr("consent");
      return;
    }
    setBusy(true);
    setErr("");
    try {
      const r = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...body, locale, source, page: typeof window !== "undefined" ? window.location.pathname : "" }),
      });
      if (!r.ok) {
        const j = await r.json().catch(() => ({}));
        setErr(j?.reason === "phone" ? "phone" : "send");
        setBusy(false);
        return;
      }
      window.gtag?.("event", "generate_lead", { source, locale });
      router.push(sectionPath(locale, "thanks"));
    } catch {
      setErr("send");
      setBusy(false);
    }
  }

  return (
    <form className="form cut" onSubmit={onSubmit} id="ariza" noValidate>
      <label htmlFor="name">{t.name}</label>
      <input id="name" name="name" type="text" required autoComplete="name" maxLength={100} />

      <label htmlFor="phone">{t.phone}</label>
      <input
        id="phone"
        name="phone"
        type="tel"
        required
        autoComplete="tel"
        inputMode="tel"
        placeholder="+998 __ ___ __ __"
        maxLength={20}
        aria-invalid={err === "phone" || undefined}
        aria-describedby="phone-err"
        onChange={() => err === "phone" && setErr("")}
      />
      <p id="phone-err" className="err" role="alert" aria-live="polite" hidden={err !== "phone"}>
        {t.errorPhone}
      </p>

      <label htmlFor="company">{t.company}</label>
      <input id="company" name="company" type="text" autoComplete="organization" maxLength={120} />

      {/* honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" style={{ position: "absolute", left: -9999 }} aria-hidden="true" />

      <label className="consent">
        <input type="checkbox" name="consent" value="1" onChange={() => err === "consent" && setErr("")} />
        <span>
          {t.consent} <Link href={sectionPath(locale, "privacy")}>{t.privacyLink}</Link>
        </span>
      </label>
      <p className="err" role="alert" aria-live="polite" hidden={err !== "consent"}>
        {t.errorConsent}
      </p>

      <button className="btn btn-accent" type="submit" disabled={busy}>
        {busy ? t.sending : t.submit}
        <span className="tile" aria-hidden="true" />
      </button>
      <p className="err" role="alert" aria-live="polite" hidden={err !== "send"}>
        {t.error}
      </p>
      <div className="privacy">{t.privacy}</div>
    </form>
  );
}
