/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: process.env.NODE_ENV === "production" ? "/portfolio" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/portfolio" : "",
  // Only use distDir in production
  ...(process.env.NODE_ENV === "production" ? {
    distDir: 'dist',
    cleanDistDir: true,
  } : {}),
};

module.exports = nextConfig; 