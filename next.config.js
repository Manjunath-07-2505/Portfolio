/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Ignore ESLint errors during production builds
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Disable ESM externals for packages that cause vendor-chunk resolution errors
  experimental: {
    esmExternals: false,
  },

  // Transpile packages that ship ESM only or cause server build warnings
  transpilePackages: [
    "framer-motion",
    "react-icons",
    "react-tsparticles",
    "tsparticles",
  ],
};

module.exports = nextConfig;