import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

const nextConfig: NextConfig = {
  compiler: {
    emotion: true,
  },
  // Remove the experimental optimizeCss that's causing issues
  experimental: {
    // Remove optimizeCss: true,
  },
};

export default withNextIntl(nextConfig);