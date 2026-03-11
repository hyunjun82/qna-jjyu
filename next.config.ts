import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/법률/여권-재발급-절차-준비물-수수료",
        destination: "/생활정보/여권-재발급-절차-준비물-수수료",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
