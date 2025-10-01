import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "localhost",
      "images.pexels.com",
      "res.cloudinary.com",
      "via.placeholder.com",
      "source.unsplash.com",
      "flagcdn.com",
      "data.gateofafrica.com",
      "gateofafrica.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
