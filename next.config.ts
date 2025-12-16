import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    experimental: {
        appDir: true,
    },
  reactCompiler: true,
};

export default nextConfig;
