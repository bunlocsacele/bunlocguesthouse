import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

const nextConfig: NextConfig = {
  compiler: {
    emotion: true,
  },

  // Ensure CSS modules work properly
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Find existing CSS rule
    const cssRule = config.module.rules.find(
      (rule: { test: { toString: () => string | string[]; }; }) => rule.test && rule.test.toString().includes('\\.css$')
    );

    if (cssRule && Array.isArray(cssRule.use)) {
      cssRule.use.forEach((use: { loader: string | string[]; options: { modules?: any; }; }) => {
        if (use.loader && use.loader.includes('css-loader')) {
          if (!use.options) use.options = {};
          // Ensure CSS modules are enabled for .module.css files
          if (use.options.modules === undefined) {
            use.options.modules = {
              auto: true, // Enable CSS modules for .module.css files
              localIdentName: dev
                ? '[name]__[local]--[hash:base64:5]'
                : '[hash:base64:8]',
            };
          }
        }
      });
    }

    return config;
  },

  // Alternative: Use experimental CSS config
  experimental: {
    optimizeCss: true,
  },
};

export default withNextIntl(nextConfig);