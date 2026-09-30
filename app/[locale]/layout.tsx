import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobileCta from "@/components/MobileCta";
import Motion from "@/components/Motion";
import JsonLd from "@/components/JsonLd";
import { isLocale, locales, siteUrl } from "@/content/routes";
import { contacts, ui } from "@/content/site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = { themeColor: "#1B1B27" };

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  openGraph: { siteName: "Sifat Buxgalter", type: "website", images: ["/og.png"] },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/icon.png" },
};

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = ui[locale];
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  const business = {
    "@context": "https://schema.org",
    "@type": ["AccountingService", "LocalBusiness"],
    name: "Sifat Buxgalter",
    url: siteUrl + "/" + locale,
    telephone: contacts.phone1.replace(/\s/g, ""),
    image: siteUrl + "/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: locale === "uz" ? "Yakkasaroy tumani, Muqimiy koʻchasi" : "Яккасарайский район, ул. Мукими",
      addressLocality: locale === "uz" ? "Toshkent" : "Ташкент",
      addressCountry: "UZ",
    },
    areaServed: locale === "uz" ? "Toshkent va Toshkent viloyati" : "Ташкент и Ташкентская область",
    openingHours: "Mo-Su 09:00-19:00",
    sameAs: [contacts.instagram, contacts.telegram],
    priceRange: "$$",
  };

  return (
    <html lang={locale}>
      <body>
        <a href="#main" className="skip">
          {t.skip}
        </a>
        <Header locale={locale} />
        <main id="main">{children}</main>
        <Footer locale={locale} />
        <MobileCta locale={locale} />
        <Motion />
        <JsonLd data={business} />
        {gaId && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config','${gaId}');`,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}
