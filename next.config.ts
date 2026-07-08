import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/Portfolio-Pandu" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath,
  assetPrefix: isProd ? "/Portfolio-Pandu/" : "",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
