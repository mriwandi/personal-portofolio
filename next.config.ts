import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'www.static-src.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'klinikoo.id',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'tobacalderaresort.id',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'dppkb.bandung.go.id',
        port: '',
        pathname: '/**'
      },
    ],
  },
};

export default nextConfig;
