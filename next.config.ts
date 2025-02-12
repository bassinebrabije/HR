import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Allows production build even with ESLint errors
  },
};

export default nextConfig;
