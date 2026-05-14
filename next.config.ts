import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.codigowp.net'
      }
    ],
    //domains: ["www.codigowp.net"],
  }
};

export default nextConfig;
