import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ['jsx', 'js', 'tsx', 'ts'],
  images: {
    unoptimized: false,
  },
};

export default nextConfig;
