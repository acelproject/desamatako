/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        // hostname: "fakestoreapi.com",
        hostname: "static.nike.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
