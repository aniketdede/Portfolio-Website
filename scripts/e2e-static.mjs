// Static-export end-to-end checker.
// Serves `out/` with a plain file server (no extensionless-URL magic, like
// GitHub Pages with .nojekyll) and verifies that every local asset, page
// link, anchor fragment, font and metadata reference actually resolves.
//
// Usage:
//   node scripts/e2e-static.mjs [basePath]      e.g. /Portfolio-Website
import { spawn } from "node:child_process";
import { readdir, mkdir, symlink, rm } from "node:fs/promises";
import { join, dirname, resolve } from "node:path";
import { tmpdir } from "node:os";

const basePath = (process.argv[2] || "").replace(/\/$/, "");
const outDir = resolve("out");
const port = 8800 + Math.floor(Math.random() * 200);
const origin = `http://127.0.0.1:${port}`;

let failures = 0;
const fail = (msg) => {
  failures++;
  console.error("  ✗", msg);
};
const ok = (msg) => console.log("  ✓", msg);

const walk = async (dir) => {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((e) => {
      const p = join(dir, e.name);
      return e.isDirectory() ? walk(p) : [p];
    })
  );
  return files.flat();
};

const textLike = /\.(html?|css|js|txt|xml|webmanifest|json|svg|ico)$/i;

async function main() {
  // ---- server setup: for a basePath, expose out/ under that path via a symlink ----
  let serveDir = outDir;
  let tmpServe = null;
  if (basePath) {
    tmpServe = join(tmpdir(), `portfolio-e2e-${process.pid}`);
    await rm(tmpServe, { recursive: true, force: true });
    await mkdir(dirname(join(tmpServe, basePath)), { recursive: true });
    await symlink(outDir, join(tmpServe, basePath), "dir");
    serveDir = tmpServe;
  }
  const server = spawn("python3", ["-m", "http.server", String(port), "--bind", "127.0.0.1"], {
    cwd: serveDir,
    stdio: "ignore",
  });
  server.on("error", (e) => fail(`test server failed to start: ${e.message}`));
  await new Promise((r) => setTimeout(r, 1200));
  const probe = await fetch(origin + basePath + "/").catch(() => null);
  if (!probe || probe.status >= 400) {
    fail(`test server not serving ${origin}${basePath}/ (status ${probe?.status})`);
    server.kill("SIGKILL");
    process.exit(1);
  }

  const fetched = new Set();
  const fetchRef = async (ref, source) => {
    if (!ref || fetched.has(ref)) return;
    fetched.add(ref);
    try {
      const res = await fetch(origin + ref, { redirect: "manual" });
      if (res.status >= 400) fail(`${res.status} ${ref}  (referenced by ${source})`);
      else if (res.status >= 300 && res.status < 400) {
        // directory redirects (e.g. /resume -> /resume/) are acceptable static-host behaviour
        const loc = res.headers.get("location") || "";
        if (!loc.endsWith("/") && !loc.includes("."))
          fail(`${res.status} redirect ${ref} -> ${loc}  (from ${source})`);
      }
    } catch (e) {
      fail(`fetch error ${ref} (${e.message}) from ${source}`);
    }
  };

  try {
    const all = await walk(outDir);
    const pages = all.filter((f) => f.endsWith(".html"));

    console.log(`\n▶ Crawling ${pages.length} HTML pages (basePath: "${basePath || "/"}")`);

    const localAttrs = /(?:src|href)=["']([^"']+)["']/gi;
    const cssUrl = /url\((['"]?)(?!data:|https?:|#)([^'")]+)\1\)/gi;
    const idsByPage = new Map();

    for (const page of pages) {
      const rel = page.slice(outDir.length).replace(/\\/g, "/");
      const urlPath =
        basePath + (rel.endsWith("/index.html") ? rel.slice(0, -10) || "/" : rel.replace(/\.html$/, "/"));
      const content = await (await fetch(origin + urlPath)).text();
      if (!content || content.length < 1000) fail(`page ${urlPath} looks empty (${content?.length} bytes)`);
      idsByPage.set(urlPath, [...content.matchAll(/\sid=["']([^"']+)["']/g)].map((m) => m[1]));

      // local src/href references
      for (const m of content.matchAll(localAttrs)) {
        let ref = m[1];
        if (/^(https?:|mailto:|tel:|data:)/i.test(ref) || ref.startsWith("#")) {
          if (ref.startsWith("#")) {
            const target = ref.slice(1);
            if (!idsByPage.get(urlPath)?.includes(target))
              fail(`anchor ${ref} on ${urlPath} has no matching id`);
          }
          continue;
        }
        ref = ref.split("#")[0].split("?")[0];
        if (!ref) continue;
        const resolved = ref.startsWith("/") ? ref : new URL(ref, origin + urlPath).pathname;
        await fetchRef(resolved, urlPath);
      }

      // <script type="application/ld+json"> must parse
      for (const m of content.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
        try {
          const json = JSON.parse(m[1]);
          if (json["@type"] !== "Person") fail(`JSON-LD on ${urlPath} is not a Person`);
          else ok(`JSON-LD Person on ${urlPath}`);
        } catch (e) {
          fail(`invalid JSON-LD on ${urlPath}: ${e.message}`);
        }
      }
    }

    // CSS url() references (fonts etc.)
    const cssFiles = all.filter((f) => /\.css$/i.test(f));
    for (const css of cssFiles) {
      const rel = css.slice(outDir.length).replace(/\\/g, "/");
      const urlPath = basePath + rel;
      const content = await (await fetch(origin + urlPath)).text();
      for (const m of content.matchAll(cssUrl)) {
        const ref = m[2].replace(/\\/g, "/");
        const resolved = new URL(ref, origin + urlPath).pathname;
        await fetchRef(resolved, rel);
      }
      for (const needle of ["Plus Jakarta Sans Variable", "Space Grotesk Variable", "reveal-on-scroll", "animate-float"]) {
        if (!content.includes(needle)) fail(`CSS ${rel} missing "${needle}"`);
      }
    }
    ok("CSS contains self-hosted fonts + reveal/float animations");

    // ---- page content expectations ----
    const get = async (p) => (await fetch(origin + basePath + p)).text();
    const home = await get("/");
    let missingSections = 0;
    for (const id of ["home", "about", "experience", "projects", "skills", "certifications", "docs"]) {
      if (!new RegExp(`id=["']${id}["']`).test(home)) { fail(`home missing section #${id}`); missingSections++; }
    }
    if (!missingSections) ok("home contains all 7 sections");
    let missingImgs = 0;
    for (const img of ["newimg.webp", "GarageNet.webp", "Gita.webp", "RoadRescue.webp", "bgdots.webp"]) {
      if (!home.includes(img)) { fail(`home does not reference ${img}`); missingImgs++; }
    }
    const ogRes = await fetch(origin + basePath + "/og-image.jpg");
    if (ogRes.status !== 200) fail("og-image.jpg not served");
    if (!missingImgs && ogRes.status === 200) ok("home references optimized WebP imagery; OG card serves 200");
    if (home.includes("/api/contact")) fail("home still references the removed /api/contact route");

    const resume = await get("/resume/");
    let missingResume = 0;
    for (const s of ["ANIKET VIKAS DEDE", "90198abf", "NG26_55729", "188973", "+91 94045 02631"]) {
      if (!resume.includes(s)) { fail(`/resume/ missing "${s}"`); missingResume++; }
    }
    if (!missingResume) ok("resume page contains name, phone and all 3 credential IDs");

    // ---- metadata endpoints ----
    const robots = await get("/robots.txt");
    const sitemap = await get("/sitemap.xml");
    let metaFail = false;
    if (!/^User-Agent: \*/m.test(robots) || !/sitemap:/i.test(robots)) { fail("robots.txt invalid"); metaFail = true; }
    if (!sitemap.includes("/resume/") || !sitemap.includes("<urlset")) { fail("sitemap.xml invalid"); metaFail = true; }
    if (!metaFail) ok("robots.txt + sitemap.xml served");
    let manifest;
    try {
      manifest = JSON.parse(await get("/manifest.webmanifest"));
    } catch (e) {
      fail(`manifest.webmanifest is not valid JSON: ${e.message}`);
      manifest = { icons: [] };
    }
    if (manifest.start_url !== `${basePath}/`) fail(`manifest start_url "${manifest.start_url}" !== "${basePath}/"`);
    let iconFails = 0;
    for (const ic of manifest.icons || []) {
      const before = failures;
      await fetchRef(ic.src, "manifest");
      if (failures > before) iconFails++;
    }
    if (manifest.start_url === `${basePath}/` && !iconFails) ok("manifest valid, start_url + icons resolve");

    // contact form logic present in client chunks
    const chunks = await walk(join(outDir, "_next", "static", "chunks"));
    const bundle = (await Promise.all(chunks.filter((f) => f.endsWith(".js")).map(async (f) =>
      (await (await fetch(origin + basePath + f.slice(outDir.length).replace(/\\/g, "/"))).text())
    ))).join("\n");
    if (!bundle.includes("api.web3forms.com")) fail("client bundle missing Web3Forms endpoint");
    if (!bundle.includes("mailto:")) fail("client bundle missing mailto fallback");
    ok("contact form bundle has Web3Forms endpoint + mailto fallback");

    // ---- metadata files explicitly fetched ----
    for (const p of ["/robots.txt", "/sitemap.xml", "/manifest.webmanifest", "/favicon.ico",
      "/icon-192.png", "/icon-512.png", "/apple-touch-icon.png", "/og-image.jpg"]) {
      await fetchRef(basePath + p, "metadata");
    }

    console.log(`\n${failures === 0 ? "✅ ALL CHECKS PASSED" : `❌ ${failures} FAILURE(S)`} — ${fetched.size} unique requests\n`);
    process.exit(failures === 0 ? 0 : 1);
  } finally {
    server.kill("SIGKILL");
    if (tmpServe) await rm(tmpServe, { recursive: true, force: true });
    await new Promise((r) => setTimeout(r, 300));
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
