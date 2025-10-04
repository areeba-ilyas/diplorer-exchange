import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ❌ REMOVE output: 'export' for API functionality
  images: {
    unoptimized: true,  // Still keep for hosting compatibility
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.coingecko.com',
      },
    ],
  },
};

export default nextConfig;