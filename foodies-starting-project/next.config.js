/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.BUCKET_URL,
        port: "",
        pathname: "/**",
      },
    ],
  },
};
https: module.exports = nextConfig;
