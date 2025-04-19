/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: "/portfolio",
  assetPrefix: "/portfolio",
};

module.exports = nextConfig; 