# Aniket Dede — Portfolio Website

Personal portfolio for **Aniket Vikas Dede**, Full Stack Web Developer. Built with
**Next.js 16 (App Router, static export) · React 19 · Tailwind CSS v4** and designed
to deploy anywhere static files can be hosted (GitHub Pages or a custom domain/Vercel).

## Features

- Static HTML export (`output: 'export'`) — no server required
- Sections: Hero, About, Experience & Education, Projects (filterable, with detail modals),
  Skills (click-to-filter projects), Certifications, Résumé, Contact
- Dedicated printable résumé page at [`/resume`](src/app/resume/page.js) with A4 print styles
- Contact form delivered by [Web3Forms](https://web3forms.com), with an honest
  `mailto:` fallback when no key is configured
- Optimized WebP imagery, OG share card, sitemap, robots, web manifest & JSON-LD
- Accessible dialogs (Esc to close, focus management, ARIA roles) and reduced-motion support

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the values (see below)
npm run dev                  # http://localhost:3000
```

## Configuration (build-time env vars)

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Public Web3Forms access key so the contact form delivers to your Gmail. Without it, the form opens the visitor's email app via `mailto:`. |
| `NEXT_PUBLIC_BASE_PATH` | Sub-path for GitHub Pages project sites, e.g. `/Portfolio-Website`. Empty for apex/custom domains. |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL (Open Graph, sitemap, robots). Defaults to `https://aniketdede.github.io<basePath>`. |

See [`.env.example`](.env.example).

## Scripts

- `npm run dev` — local development
- `npm run build` — production static export into `out/`
- `npm run lint` — ESLint
- `npm run optimize-images` — re-encodes PNG sources in [`assets/`](assets) to WebP in
  [`public/`](public) and regenerates `og-image.jpg` (requires the `sharp` dev dependency)
- `npm run deploy:pages` — build with the GitHub Pages base path and publish `out/`
  to the `gh-pages` branch

### Deployment targets

- **GitHub Pages (project site):** `NEXT_PUBLIC_BASE_PATH=/Portfolio-Website npm run build`
  (or use `npm run deploy:pages`), then serve the `out/` directory.
- **Custom domain / Vercel:** build with no `NEXT_PUBLIC_BASE_PATH` and set
  `NEXT_PUBLIC_SITE_URL=https://aniketdede.dev`.

## Project structure

```
assets/     High-res source images (not web-served)
public/     Served assets: optimized WebP, icons, OG card
scripts/    Image optimization pipeline
src/app/    Pages (/ and /resume), metadata, sitemap/robots/manifest, global styles
src/components/  Section components and modals
src/lib/    Central site config (src/lib/site.js)
docs/       Résumé source (Markdown) and architecture/ADR notes
```
