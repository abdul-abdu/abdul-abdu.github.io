/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "img.shields.io",
      },
    ],
  },
  i18n: {
    locales: ["en", "uz", "ru"],
    defaultLocale: "en",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
