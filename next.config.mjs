/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/WEB-DEVELOPEMENT',
  assetPrefix: '/WEB-DEVELOPEMENT',
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["192.168.56.1", "localhost:3000"],
};

export default nextConfig;
