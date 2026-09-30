import Link from "next/link";

/** 404: ildiz layout html/body bermaydi, shuning uchun bu yerda oʻzi. Ikki tilda, bosh sahifaga yoʻl bilan. */
export default function NotFound() {
  return (
    <html lang="uz">
      <body>
        <main className="page-hero" style={{ minHeight: "100svh", display: "flex", alignItems: "center", paddingTop: 96 }}>
          <div className="wrap">
            <p className="eyebrow">404</p>
            <h1>Bunday sahifa yoʻq</h1>
            <p className="lead" style={{ marginTop: 20 }}>
              Manzil oʻzgargan yoki xato yozilgan boʻlishi mumkin.
            </p>
            <p className="lead" lang="ru" style={{ marginTop: 8 }}>
              Такой страницы нет. Возможно, адрес изменился или в нём опечатка.
            </p>
            <div className="actions" style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 40 }}>
              <Link className="btn btn-accent" href="/uz">
                Bosh sahifa
              </Link>
              <Link className="btn btn-outline" href="/ru">
                На главную
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
