import type { NextConfig } from "next";
import path from "node:path";

console.log("===current path===", path.join(__dirname))
const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  serverExternalPackages: ['@remotion/renderer'],
  outputFileTracingRoot: path.join(__dirname),
  outputFileTracingIncludes: {
    '/api/renderers': ['./node_modules/.remotion'],
  },
};

export default nextConfig;
