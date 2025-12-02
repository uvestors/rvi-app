import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true, // 忽略 TypeScript 错误
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
