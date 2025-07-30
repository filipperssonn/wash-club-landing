import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Säkerhetsheaders
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Content Security Policy
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://maps.googleapis.com https://maps.gstatic.com; style-src 'self' 'unsafe-inline' fonts.googleapis.com https://maps.googleapis.com; font-src 'self' fonts.gstatic.com; img-src 'self' data: https: https://maps.googleapis.com https://maps.gstatic.com https://streetviewpixels-pa.googleapis.com; connect-src 'self' https://maps.googleapis.com; frame-src 'self' https://www.google.com https://maps.google.com https://maps.googleapis.com;"
          },
          // Säkerhetsheaders
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self)'
          },
          // HSTS (endast för produktion)
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          }
        ]
      }
    ];
  },

  // Prestandaoptimeringar
  compress: true,
  poweredByHeader: false,
  
  // Bildoptimering
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // 1 år
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Experimental features för bättre prestanda
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },

  // Webpack-optimeringar
  webpack: (config, { dev, isServer }) => {
    // Produktionsoptimeringar
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      };
    }
    return config;
  },
};

export default nextConfig;