// Central, build-time-driven site configuration.
// Override at build time with environment variables:
//   NEXT_PUBLIC_BASE_PATH=/Portfolio-Website   (GitHub Pages project sites)
//   NEXT_PUBLIC_SITE_URL=https://aniketdede.dev (custom domain / Vercel)
//   NEXT_PUBLIC_WEB3FORMS_KEY=xxxx             (contact form delivery)
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (basePath ? `https://aniketdede.github.io${basePath}` : "http://localhost:3000")
).replace(/\/$/, "");

export const withBase = (path) => `${basePath}${path}`;

export const siteConfig = {
  name: "Aniket Vikas Dede",
  shortName: "Aniket Dede",
  role: "Full Stack Web Developer & Software Engineer",
  email: "aniketdede12@gmail.com",
  phone: "+91 94045 02631",
  phoneHref: "+919404502631",
  location: "Pune, India",
  github: "https://github.com/aniketdede",
  linkedin: "https://www.linkedin.com/in/aniket-dede-a642b0295/",
  web3formsKey: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "",
};
