/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["firebasestorage.googleapis.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "https://firebasestorage.googleapis.com/v0/b/**",
      },
    ],
  },
};

module.exports = nextConfig;
