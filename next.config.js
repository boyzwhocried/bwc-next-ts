/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "i.scdn.co",
      },
      {
        hostname: "uxlubvqtqbjzenptgibh.supabase.co",
      },
    ],
  },
};

module.exports = nextConfig;
