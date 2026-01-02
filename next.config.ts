import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  serverExternalPackages: ['@remotion/renderer'],
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
