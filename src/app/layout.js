// Self-hosted variable fonts (no build-time network fetch, no third-party requests)
import "@fontsource-variable/plus-jakarta-sans";
import "@fontsource-variable/space-grotesk";
import "./globals.css";
import { siteConfig, siteUrl, withBase } from "@/lib/site";

const title = "Aniket Dede | Full Stack Web Developer & Software Engineer";
const description =
  "Portfolio of Aniket Vikas Dede - Full Stack Developer, Software Engineer, B.E. IT Student at Trinity College of Engineering, Pune. Developer of GarageNET and GitaKosh.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Aniket Dede",
  },
  description,
  keywords: [
    "Aniket Dede",
    "Aniket Vikas Dede",
    "Full Stack Developer",
    "Software Engineer",
    "Next.js Developer",
    "React Developer",
    "Django Developer",
    "GarageNET",
    "GitaKosh",
    "Pune IT Engineer",
  ],
  authors: [{ name: "Aniket Vikas Dede", url: siteConfig.github }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description:
      "Full Stack Developer specializing in Next.js, React, Node.js, and Django. EY GDS Internship Alumni.",
    url: siteUrl,
    siteName: "Aniket Dede Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        // metadataBase already embeds the base path, so use a root-relative URL
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aniket Vikas Dede - Full Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Full Stack Developer specializing in Next.js, React, Node.js, and Django. EY GDS Internship Alumni.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: withBase("/favicon.ico") },
      { url: withBase("/icon-192.png"), sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: withBase("/apple-touch-icon.png"), sizes: "180x180" }],
  },
};

export const viewport = {
  themeColor: "#0d0d0d",
  colorScheme: "light",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteUrl,
  image: `${siteUrl}/og-image.jpg`,
  jobTitle: "Full Stack Web Developer",
  email: `mailto:${siteConfig.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  sameAs: [siteConfig.github, siteConfig.linkedin],
  knowsAbout: [
    "Next.js",
    "React",
    "Node.js",
    "Django",
    "MongoDB",
    "Full Stack Development",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#fbfbfb] text-[#0d0d0d] antialiased">
        <noscript>
          {/* Reveal content immediately when JS is unavailable */}
          <style>{`.reveal-on-scroll{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
