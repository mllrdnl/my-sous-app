/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: {
    experiments: {
      topLevelAwait: true,
    },
  },
  // reactStrictMode: false,
};

module.exports = nextConfig;
