import "./envConfig";
import type { NextConfig } from "next";
//const API_URL = process.env.API_URL;
const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
  /* config options here */
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       destination: "https://jsonplaceholder.typicode.com/:path*",
  //     },
  //   ];
  // },
};

export default nextConfig;
