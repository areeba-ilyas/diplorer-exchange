import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    esmExternals: true,
  },
  webpack: (config: any) => {
    // CSS files handle karo
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    });
    return config;
  },
  transpilePackages: ['tw-animate-css'],
}

export default nextConfig;