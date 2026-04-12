import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "thetexascustomoutdoors.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "http",
        hostname: "thetexascustomoutdoors.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
