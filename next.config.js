/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "uz", "ru"],
    defaultLocale: "en",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
