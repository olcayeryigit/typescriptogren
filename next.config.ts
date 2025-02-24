import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",  // Tüm yolları kapsar
        has: [
          {
            type: "host",
            value: "typescriptogren.com", // www olmayan alan adı
          },
        ],
        destination: "https://www.typescriptogren.com/:path*", // www'li versiyona yönlendir
        permanent: true, // 301 kalıcı yönlendirme
      },
    ];
  },
};

export default nextConfig;
