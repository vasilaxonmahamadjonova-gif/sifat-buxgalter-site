(async () => {
const PAGE_NAME = "Referenslar";
const OWNER = "vasilaxonmahamadjonova-gif", REPO = "sifat-buxgalter-site", BRANCH = "refs";
const RAW = `https://raw.githubusercontent.com/${OWNER}/${REPO}/${BRANCH}/refs/`;

const BLOCKS = [
  ["00 Header", "00-header", "navbar · sticky header · хедер"],
  ["01 Hero", "01-hero", "hero section · hero with document card · первый экран"],
  ["02 Xizmatlar", "02-xizmatlar", "services cards · bento grid · карточки услуг"],
  ["03 Narxlar", "03-narxlar", "pricing section · comparison table · тарифы · таблица сравнения"],
  ["04 Jamoa", "04-jamoa", "team section · team cards · команда"],
  ["05 Savollar (FAQ)", "05-savollar", "FAQ accordion · вопрос-ответ"],
  ["06 Aloqa (ariza + footer)", "06-aloqa", "lead form · final CTA · footer · форма заявки"],
];

const W = 2400, MIN_H = 900, GAP = 200, COLS = 2;
const IMG_COLS = 5, CELL_W = 460, CELL_H = 520, X0 = 60, Y0 = 240;

await figma.loadFontAsync({ family: "Inter", style: "Bold" });
await figma.loadFontAsync({ family: "Inter", style: "Regular" });

const MANIFEST = await fetch(RAW + "manifest.json?t=" + Date.now()).then(r => r.json()).catch(() => null);
if (!MANIFEST) { console.error("manifest.json yuklanmadi — hech narsa oʻzgartirilmadi"); return; }
async function listFolder(folder) { return MANIFEST[folder] || []; }

let page = figma.root.children.find(p => p.name === PAGE_NAME);
if (!page) { page = figma.createPage(); page.name = PAGE_NAME; }
await figma.setCurrentPageAsync(page);

const keep = new Set(BLOCKS.map(b => b[0]));
for (const n of [...page.children]) if (n.type === "SECTION" && !keep.has(n.name)) n.remove();
const secs = [];
let total = 0;
for (const [name, folder, hint] of BLOCKS) {
  let s = page.children.find(n => n.type === "SECTION" && n.name === name);
  if (!s) {
    s = figma.createSection(); s.name = name;
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
  const files = await listFolder(folder);
  const want = new Set(files.map(f => f.replace(/\.\w+$/, "")));
  for (const ch of [...s.children]) {
    if (ch.type === "RECTANGLE" && !want.has(ch.name)) ch.remove();
    if (ch.type === "TEXT" && ch.fontSize === 14) ch.remove();
  }
  let done = 0;
  for (let i = 0; i < files.length; i++) {
    const base = files[i].replace(/\.\w+$/, "");
    let r = s.children.find(n => n.type === "RECTANGLE" && n.name === base);
    try {
      if (!r) {
        const res = await fetch(RAW + folder + "/" + files[i]);
        const bytes = new Uint8Array(await res.arrayBuffer());
        const img = figma.createImage(bytes);
        const { width, height } = await img.getSizeAsync();
        const sc = Math.min(420 / width, 460 / height);
        r = figma.createRectangle(); r.name = base;
        r.resize(Math.round(width * sc), Math.round(height * sc));
        r.fills = [{ type: "IMAGE", imageHash: img.hash, scaleMode: "FILL" }];
        r.cornerRadius = 6;
        s.appendChild(r);
      }
      r.x = X0 + (i % IMG_COLS) * CELL_W;
      r.y = Y0 + Math.floor(i / IMG_COLS) * CELL_H;
      const t = figma.createText();
      t.fontName = { family: "Inter", style: "Regular" }; t.fontSize = 14;
      t.characters = base.replace(/^[a-z]+-\d+-/, "");
      t.fills = [{ type: "SOLID", color: { r: 0.4, g: 0.4, b: 0.4 } }];
      s.appendChild(t); t.x = r.x; t.y = r.y + r.height + 8;
      done++;
    } catch (e) { console.log("xato:", base, String(e)); }
  }
  const rows = Math.ceil(files.length / IMG_COLS);
  s.resizeWithoutConstraints(W, Math.max(MIN_H, Y0 + rows * CELL_H + 60));
  secs.push(s);
  console.log(name + ": " + done + "/" + files.length);
  total += done;
}

let y = 100;
for (let i = 0; i < secs.length; i += COLS) {
  const row = secs.slice(i, i + COLS);
  row.forEach((s, j) => { s.x = 100 + j * (W + GAP); s.y = y; });
  y += Math.max(...row.map(s => s.height)) + GAP;
}
figma.viewport.scrollAndZoomIntoView(page.children);
console.log("Tayyor. Rasmlar:", total);
})().catch(e => console.error("XATO:", e));
