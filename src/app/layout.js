import "./globals.css";

export const metadata = {
  title: "Aniket Dede | Full Stack Web Developer & Software Engineer",
  description:
    "Portfolio of Aniket Vikas Dede - Full Stack Developer, Software Engineer, B.E. IT Student at Trinity College of Engineering, Pune. Developer of GarageNET and GitaKosh.",
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
  authors: [{ name: "Aniket Vikas Dede", url: "https://github.com/aniketdede" }],
  metadataBase: new URL("https://aniketdede.dev"),
  openGraph: {
    title: "Aniket Dede | Full Stack Web Developer & Software Engineer",
    description:
      "Full Stack Developer specializing in Next.js, React, Node.js, and Django. EY GDS Internship Alumni.",
    url: "https://aniketdede.dev",
    siteName: "Aniket Dede Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/newimg.png",
        width: 1200,
        height: 630,
        alt: "Aniket Vikas Dede - Full Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aniket Dede | Full Stack Web Developer & Software Engineer",
    description:
      "Full Stack Developer specializing in Next.js, React, Node.js, and Django. EY GDS Internship Alumni.",
    images: ["/newimg.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#fbfbfb] text-[#0d0d0d] font-['Plus_Jakarta_Sans',sans-serif] antialiased">
        {children}
      </body>
    </html>
  );
}
