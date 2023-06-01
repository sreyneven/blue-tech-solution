
/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

const nextConfig =  withPWA({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["wp7.z1flexiblesolution.com"],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  reactStrictMode: true,

  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
});
module.exports = nextConfig


