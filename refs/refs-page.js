(async () => {
const PAGE_NAME = "Referenslar";
const BASE = "https://raw.githubusercontent.com/vasilaxonmahamadjonova-gif/sifat-buxgalter-site/refs/refs/";

const BLOCKS = [
  ["00 Header", "navbar · sticky header · хедер"],
  ["01 Hero", "hero section · hero with document card · первый экран"],
  ["02 Holatlar (pain points)", "pain points section · боли клиента"],
  ["03 3 savol (self-check)", "checklist section · чек-лист"],
  ["04 Solishtirish jadvali", "comparison table · us vs them · таблица сравнения"],
  ["05 Raqamlar (stats)", "stats section · numbers · цифры и факты"],
  ["06 Yashirin xavf", "risk section · cost of inaction · цена ошибки"],
  ["07 Xizmatlar", "services cards · bento grid · карточки услуг"],
  ["08 Majburiyatlar", "guarantees section · numbered list · гарантии"],
  ["09 Narx", "pricing section · how pricing works · тарифы"],
  ["10 Kim bilan ishlaymiz", "who is it for · for whom / not for whom · для кого"],
  ["11 Jamoa", "team section · team cards · команда"],
  ["12 Mijozlar logolari", "logo cloud · trusted by · нам доверяют"],
  ["13 FAQ", "FAQ accordion · вопрос-ответ"],
  ["14 Ariza formasi (CTA)", "lead form · final CTA · форма заявки"],
  ["15 Footer", "footer · подвал сайта"],
  ["16 Xizmat sahifasi (inner page)", "service page hero · process steps · what's included"],
  ["17 Butun sayt (full page)", "accounting website · dark luxury · сайт бухгалтерских услуг"],
];

// Blok → GitHub papka → rasm nomlari
const IMAGES = {
  "00 Header": ["00-header", [
    "hdr-01-pill-navbar-dark", "hdr-02-ai-companion-light", "hdr-03-travel-asia",
    "hdr-04-lexora-legal-navy-gold", "hdr-05-northstar-bookkeeping", "hdr-06-opax-accounting",
    "hdr-07-dressiyor-fashion", "hdr-08-estate", "hdr-09-spaceo",
    "hdr-10-untitledui-megamenu-a", "hdr-11-untitledui-megamenu-b", "hdr-12-monex-dark",
    "hdr-13-law-x-firm", "hdr-14-tigarian-law-megamenu", "hdr-15-wright-law-erp",
    "hdr-16-n26-finance", "hdr-17-ambitious-minimal", "hdr-18-minimal-template",
    "hdr-19-logopsy-beige", "hdr-20-wallet-tech-dark",
  ]],
  "01 Hero": ["01-hero", [
    "hero-01-meridian-dark-gold-books",
    "hero-02-ai-companion-light",
    "hero-02-wow-affiliate-dark-yellow",
    "hero-03-medtrackr-light-dashboard",
    "hero-03-travel-asia",
    "hero-04-connectly-green-dashboard",
    "hero-04-lexora-legal-navy-gold",
    "hero-05-neura-dark-centered",
    "hero-05-northstar-bookkeeping",
    "hero-06-humaine-hr-light",
    "hero-06-opax-accounting",
    "hero-07-dressiyor-fashion",
    "hero-07-website-dev-portrait-bw",
    "hero-08-daoud-legal-dark-centered",
    "hero-08-estate",
    "hero-09-fintlow-green-cards",
    "hero-09-spaceo",
    "hero-10-moneywise-dark-card-person",
    "hero-11-lcg-capital-green-poster",
    "hero-12-graphic-designer-dark-ru",
    "hero-12-monex-dark",
    "hero-13-buxgalterskie-uslugi-ru-orange",
    "hero-13-law-x-firm",
    "hero-16-n26-finance",
    "hero-17-ambitious-minimal",
    "hero-18-minimal-template",
    "hero-19-logopsy-beige",
    "hero-20-wallet-tech-dark",
  ]],
};

const W = 2400, H = 1400, GAP = 200, COLS = 3;
const IMG_COLS = 5, CELL_W = 460, CELL_H = 520, X0 = 60, Y0 = 240;

await figma.loadFontAsync({ family: "Inter", style: "Bold" });
await figma.loadFontAsync({ family: "Inter", style: "Regular" });

// 1) Sahifa
let page = figma.root.children.find(p => p.name === PAGE_NAME);
if (!page) { page = figma.createPage(); page.name = PAGE_NAME; }
await figma.setCurrentPageAsync(page);

// 2) Boʻlimlar
const sections = {};
BLOCKS.forEach(([name, hint], i) => {
  let s = page.children.find(n => n.type === "SECTION" && n.name === name);
  if (!s) {
    s = figma.createSection();
    s.name = name;
    s.resizeWithoutConstraints(W, H);
    s.fills = [{ type: "SOLID", color: { r: 0.96, g: 0.95, b: 0.92 } }];
    page.appendChild(s);
    const t = figma.createText();
    t.fontName = { family: "Inter", style: "Bold" }; t.fontSize = 64; t.characters = name;
    t.fills = [{ type: "SOLID", color: { r: 0.1, g: 0.1, b: 0.1 } }];
    s.appendChild(t); t.x = 60; t.y = 50;
    const h = figma.createText();
    h.fontName = { family: "Inter", style: "Regular" }; h.fontSize = 32; h.characters = "Qidiruv: " + hint;
    h.fills = [{ type: "SOLID", color: { r: 0.45, g: 0.4, b: 0.3 } }];
    s.appendChild(h); h.x = 60; h.y = 140;
  }
  s.x = 100 + (i % COLS) * (W + GAP);
  s.y = 100 + Math.floor(i / COLS) * (H + GAP);
  sections[name] = s;
});

// 3) Rasmlar
let total = 0;
for (const [blockName, [folder, files]] of Object.entries(IMAGES)) {
  const sec = sections[blockName];
  for (const ch of [...sec.children]) if (ch.type === "RECTANGLE" || (ch.type === "TEXT" && ch.fontSize === 14)) ch.remove();
  let done = 0;
  for (let i = 0; i < files.length; i++) {
    const name = files[i];
    try {
      const res = await fetch(BASE + folder + "/" + name + ".png");
      const bytes = new Uint8Array(await res.arrayBuffer());
      const img = figma.createImage(bytes);
      const { width, height } = await img.getSizeAsync();
      const scale = Math.min(420 / width, 460 / height);
      const r = figma.createRectangle();
      r.name = name;
      r.resize(Math.round(width * scale), Math.round(height * scale));
      r.fills = [{ type: "IMAGE", imageHash: img.hash, scaleMode: "FILL" }];
      r.cornerRadius = 6;
      sec.appendChild(r);
      r.x = X0 + (i % IMG_COLS) * CELL_W;
      r.y = Y0 + Math.floor(i / IMG_COLS) * CELL_H;
      const t = figma.createText();
      t.fontName = { family: "Inter", style: "Regular" }; t.fontSize = 14;
      t.characters = name.replace(/^[a-z]+-\d+-/, "");
      t.fills = [{ type: "SOLID", color: { r: 0.4, g: 0.4, b: 0.4 } }];
      sec.appendChild(t); t.x = r.x; t.y = r.y + r.height + 8;
      done++;
    } catch (e) { console.log("xato:", name, String(e)); }
  }
  const rows = Math.ceil(files.length / IMG_COLS);
  sec.resizeWithoutConstraints(W, Math.max(H, Y0 + rows * CELL_H + 60));
  console.log(blockName + ": " + done + "/" + files.length);
  total += done;
}

figma.viewport.scrollAndZoomIntoView(page.children);
console.log("Tayyor. Rasmlar:", total);
})().catch(e => console.error("XATO:", e));
