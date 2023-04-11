/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["rustika-images.s3.us-west-2.amazonaws.com"],
  },
};

module.exports = nextConfig;
