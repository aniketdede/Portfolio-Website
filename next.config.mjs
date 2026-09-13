/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  output: 'export',
  // Emits resume/index.html style URLs so extensionless links resolve on
  // GitHub Pages (which skips Jekyll permalink magic because of .nojekyll),
  // Vercel, Netlify, and plain static file servers alike.
  trailingSlash: true,
  basePath: basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
