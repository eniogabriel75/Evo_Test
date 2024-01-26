/** @type {import('next').NextConfig} */
const nextConfig = {
  babel: {
    presets: ["next/babel"],
    plugins: [],
  },
  images: {
    domains: ["image.tmdb.org"],
  },
};

module.exports = nextConfig;
