import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {},
  },
  webpack: (config) => {
    config.resolve.fullySpecified = false;
    return config;
  },
};

export default nextConfig;
