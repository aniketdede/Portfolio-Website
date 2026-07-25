# Stage 5 Deployment & Infrastructure Guide

This guide provides step-by-step instructions for deploying **Aniket Vikas Dede's Portfolio Website** to production edge platforms, binding custom domains, and setting up performance analytics.

---

## 1. Deploying on Vercel (Recommended)

Vercel provides instant zero-config deployments directly from your GitHub repository with edge CDN distribution and built-in performance monitoring.

### Step-by-Step Instructions:

1. **Commit and Push Code to GitHub:**
   ```bash
   git add .
   git commit -m "Deploy production portfolio"
   git push origin main
   ```
2. **Log into Vercel:**
   - Visit [vercel.com](https://vercel.com) and log in with your GitHub account.
3. **Import Repository:**
   - Click **"Add New Project"** &rarr; **"Project"**.
   - Select your repository: `aniketdede/Portfolio-Website`.
4. **Configure Project Settings:**
   - Framework Preset: **Other** (Static HTML/JS/CSS).
   - Root Directory: `./`
   - Click **Deploy**.
5. **Deployment Complete:**
   - Vercel will deploy your site and provide an SSL URL (e.g. `aniket-portfolio.vercel.app`).

---

## 2. Deploying on GitHub Pages

1. Navigate to your GitHub repository: `https://github.com/aniketdede/Portfolio-Website`.
2. Go to **Settings** &rarr; **Pages** (under Code and automation).
3. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main` branch and `/ (root)` folder.
4. Click **Save**.
5. Your site will be live at `https://aniketdede.github.io/Portfolio-Website`.

---

## 3. Custom Domain Setup (e.g., `aniketdede.dev` or `aniketdede.com`)

1. **In Vercel / GitHub Pages:**
   - Go to **Project Settings** &rarr; **Domains**.
   - Enter your domain name (e.g. `aniketdede.dev`).
2. **In your DNS Provider (Cloudflare / GoDaddy / Namecheap):**
   - Add an **A Record**:
     - Host: `@` | Points to Vercel IP: `76.76.21.21`
   - Add a **CNAME Record**:
     - Host: `www` | Points to: `cname.vercel-dns.com`
3. SSL certificates will be generated automatically.

---

## 4. Telemetry & Analytics Setup

To track visitor count and performance metrics:

### Vercel Speed Insights:
1. In Vercel Dashboard, go to **Analytics** or **Speed Insights**.
2. Click **Enable**.

### Google Analytics 4 (GA4):
Add the following script block to the `<head>` of `index.html`:
```html
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-YOUR_MEASUREMENT_ID');
</script>
```
