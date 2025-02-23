// blogTypes.ts

// Blog yazısı için gerekli olan veri tipi
export interface BlogPost {
  id: number; // Her blog yazısının benzersiz ID'si
  slug: string; // Blog yazısının URL'deki parametresi
  title: string; // Blog yazısının başlığı
  description: string; // Blog yazısının kısa açıklaması
  content: string; // Blog yazısının içeriği
  publishedAt: string; // Yayınlanma tarihi
  link: string; // Blog yazısının tam bağlantısı
}

// Örnek blog verisi
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "typescript-ile-programlama",
    title: "TypeScript ile Programlama: Temel Başlangıç Rehberi",
    description: "TypeScript, JavaScript üzerine güçlü bir statik tür sistemi ekleyen bir dildir. Bu yazıda, TypeScript'i öğrenmeye nasıl başlayacağınızı öğreneceksiniz.",
    content: "TypeScript'in temelleri, türler, tip güvenliği ve diğer özellikler hakkında detaylı bilgiler.",
    publishedAt: "2025-02-22",
    link: "https://www.typescriptogren.com/blog/typescript-ile-programlama",
  },
  {
    id: 2,
    slug: "react-ve-redux",
    title: "React ve Redux ile Modern Web Uygulamaları",
    description: "React ve Redux kullanarak, güçlü ve ölçeklenebilir web uygulamaları geliştirmeyi öğrenin.",
    content: "Redux ile durum yönetimi, React ile bileşen yapısı ve diğer önemli konular.",
    publishedAt: "2025-02-21",
    link: "https://www.typescriptogren.com/blog/react-ve-redux",
  },
  {
    id: 3,
    slug: "nextjs-ile-seo-optimizasyonu",
    title: "Next.js ile SEO Optimizasyonu: En İyi Uygulamalar",
    description: "Next.js ile SEO dostu web siteleri oluşturmak için kullanabileceğiniz en iyi teknikler.",
    content: "SEO, sayfa yükleme süresi, ve Next.js ile SEO'yu iyileştirmek için en iyi uygulamalar.",
    publishedAt: "2025-02-20",
    link: "https://www.typescriptogren.com/blog/nextjs-ile-seo-optimizasyonu",
  },
];


// Slug'a göre blog yazısını bulan fonksiyon
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}