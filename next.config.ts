/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['sahconstructions.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  trailingSlash: true,
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
}

module.exports = nextConfig