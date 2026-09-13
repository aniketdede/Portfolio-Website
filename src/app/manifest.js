import { withBase } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest() {
  return {
    name: "Aniket Dede — Full Stack Web Developer",
    short_name: "Aniket Dede",
    description:
      "Portfolio of Aniket Vikas Dede, Full Stack Web Developer specializing in Next.js, React, Node.js and Django.",
    start_url: withBase("/"),
    display: "standalone",
    background_color: "#fbfbfb",
    theme_color: "#0d0d0d",
    icons: [
      {
        src: withBase("/icon-192.png"),
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: withBase("/icon-512.png"),
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: withBase("/icon-512.png"),
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  };
}
