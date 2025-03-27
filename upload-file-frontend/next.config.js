/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "http",
          hostname: "localhost",
          port: "3000", // Nếu backend chạy cổng khác, thay số cổng tại đây
          pathname: "/uploads/**",
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  