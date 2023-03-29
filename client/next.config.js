/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "media-cdn.tripadvisor.com",
      "editorialtelevisa.brightspotcdn.com",
      "1.bp.blogspot.com",
      "www.mexicoenmicocina.com",
    ],
  },
};

module.exports = nextConfig;
