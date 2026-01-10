import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "./src"),
    };

    if (isServer) {
      config.externals = [...(config.externals || []), "@sparticuz/chromium"];
    }

    return config;
  },
  turbopack: {
    resolveAlias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
};

export default nextConfig;
