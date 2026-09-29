import fs from "node:fs";
import path from "node:path";
import { clients } from "@/content/site";

/** Mijoz logolari — statik setka, animatsiya yo'q. Rasm bo'lsa rasm, bo'lmasa matn. */
export default function ClientLogos() {
  const dir = path.join(process.cwd(), "public", "clients");
  return (
    <div className="logos" aria-label="Clients">
      {clients.map((c) => {
        const ext = ["webp", "svg", "png", "jpg"].find((e) => fs.existsSync(path.join(dir, `${c.file}.${e}`)));
        if (!ext)
          return (
            <span key={c.name} className="logo-txt">
              {c.name}
            </span>
          );
        return (
          <span key={c.name} className="logo-img" title={c.name}>
            <img src={`/clients/${c.file}.${ext}`} alt={c.name} />
          </span>
        );
      })}
    </div>
  );
}
