/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.coingecko.com',
      },
    ],
  },
  
  // ✅ YEH ADD KAREIN
  experimental: {
    esmExternals: false
  }
}

module.exports = nextConfig