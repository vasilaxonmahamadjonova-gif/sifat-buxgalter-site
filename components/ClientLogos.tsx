import fs from "node:fs";
import path from "node:path";
import { clients } from "@/content/site";

/**
 * Mijoz logolari — ikki qator, uzluksiz yuradi: yuqori qator oʻngga, pastki qator chapga.
 * Har qator ikki marta takrorlanadi, shunda halqa uzilmaydi. Hoverda toʻxtaydi, reduced-motion'da qimirlamaydi.
 */
export default function ClientLogos() {
  const dir = path.join(process.cwd(), "public", "clients");
  const items = clients.map((c) => {
    const ext = ["webp", "svg", "png", "jpg"].find((e) => fs.existsSync(path.join(dir, `${c.file}.${e}`)));
    return { ...c, ext };
  });
  const half = Math.ceil(items.length / 2);
  const rows = [items.slice(0, half), items.slice(half)];

  const Item = ({ c, k }: { c: (typeof items)[number]; k: string }) =>
    c.ext ? (
      <span key={k} className="logo-img" title={c.name}>
        <img src={`/clients/${c.file}.${c.ext}`} alt={c.name} loading="lazy" />
      </span>
    ) : (
      <span key={k} className="logo-txt">
        {c.name}
      </span>
    );

  return (
    <div className="marquee" aria-label="Clients">
      {rows.map((row, r) => (
        <div className={"marquee-track" + (r === 0 ? " to-right" : "")} key={r}>
          {[0, 1].map((dup) =>
            row.map((c) => <Item c={c} k={`${c.file}-${dup}`} key={`${c.file}-${dup}`} />),
          )}
        </div>
      ))}
    </div>
  );
}
