// Image optimization pipeline (run with: node scripts/optimize-images.mjs)
// Reads high-res PNG sources from /assets (not web-served) and emits optimized
// WebP files + the 1200x630 social card into /public.
// Requires: npm i -D sharp
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = dirname(fileURLToPath(import.meta.url));
const srcDir = join(root, "..", "assets");
const pubDir = join(root, "..", "public");

const toWebp = async (file, width, quality = 80) => {
  const info = await sharp(join(srcDir, file))
    .resize({ width, withoutEnlargement: true })
    .webp({ quality })
    .toFile(join(pubDir, file.replace(/\.png$/i, ".webp")));
  console.log(`${file} -> .webp  ${(info.size / 1024).toFixed(0)} KB`);
};

// Hero portrait (source is 880x1184)
await toWebp("newimg.png", 1400, 78);
// Project screenshots
await toWebp("GarageNet.png", 1600, 80);
await toWebp("Gita.png", 1600, 80);
await toWebp("RoadRescue.png", 1600, 80);
// Decorative background texture (rendered at 15% opacity -> crush it)
await toWebp("bgdots.png", 1800, 45);
// About-section floating icon
await toWebp("js.png", 200, 80);

// ---- Social share card: 1200x630 branded JPEG ----
const portrait = await sharp(join(srcDir, "newimg.png"))
  .resize({ height: 630, width: 520, fit: "cover", position: "right top" })
  .toBuffer();

const overlay = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#0d0d0f" stop-opacity="1"/>
      <stop offset="0.55" stop-color="#0d0d0f" stop-opacity="0.85"/>
      <stop offset="1" stop-color="#0d0d0f" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect x="500" y="0" width="340" height="630" fill="url(#fade)"/>
  <rect x="20" y="20" width="1160" height="590" rx="28" fill="none" stroke="#34d399" stroke-opacity="0.35" stroke-width="2"/>
  <text x="70" y="240" font-family="Arial, Helvetica, sans-serif" font-size="86" font-weight="bold" fill="#ffffff">Aniket Dede</text>
  <text x="72" y="312" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="bold" fill="#34d399">FULL STACK WEB DEVELOPER</text>
  <text x="72" y="368" font-family="Arial, Helvetica, sans-serif" font-size="26" fill="#a1a1aa">Next.js · React · Node.js · Django</text>
  <text x="72" y="552" font-family="Arial, Helvetica, sans-serif" font-size="22" fill="#71717a">Pune, India  ·  Software Engineer</text>
</svg>`;

await sharp({
  create: { width: 1200, height: 630, channels: 3, background: "#0d0d0f" },
})
  .composite([
    { input: portrait, left: 680, top: 0 },
    { input: Buffer.from(overlay), left: 0, top: 0 },
  ])
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(join(pubDir, "og-image.jpg"));

console.log("og-image.jpg generated");
