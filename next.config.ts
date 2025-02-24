import { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects(): Promise<{ source: string; has?: any[]; destination: string; permanent: boolean }[]> {
    return [
      {
        source: "/:path*", // Tüm yolları kapsar
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
