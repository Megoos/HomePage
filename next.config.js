/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /entities\/.*\/index.ts/i,
      sideEffects: false,
    });

    return config;
  },
};

module.exports = nextConfig;
