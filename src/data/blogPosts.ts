// blogPosts.ts
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  description: string;
  content: string;
  datePublished: string; // Yayınlanma tarihi
  dateModified: string;  // Son güncelleme tarihi
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "TypeScript'e Giriş: Temeller ve Faydaları",
    slug: "typescript-temelleri",
    description: "TypeScript nedir? Neden kullanmalıyız? Temel özelliklerine hızlı bir bakış.",
    content: "TypeScript, JavaScript'in bir üst kümesi olup statik tip desteği sunar...",
    datePublished: "2025-02-22T00:00:00Z", // Yayınlanma tarihi
    dateModified: "2025-02-22T00:00:00Z",  // Son güncelleme tarihi
  },
  {
    id: 2,
    title: "TypeScript ve JavaScript Arasındaki Farklar",
    slug: "typescript-vs-javascript",
    description: "TypeScript ile JavaScript arasındaki temel farklar ve avantajlar.",
    content: "JavaScript dinamik türlere sahipken, TypeScript statik tür desteği sunar...",
    datePublished: "2025-02-21T00:00:00Z",
    dateModified: "2025-02-21T00:00:00Z",
  },
  {
    id: 3,
    title: "Next.js ile TypeScript Kullanımı",
    slug: "nextjs-typescript",
    description: "Next.js projelerinde TypeScript nasıl kullanılır? En iyi uygulamalar nelerdir?",
    content: "Next.js projelerinde TypeScript kullanmak, daha güvenli ve ölçeklenebilir bir yapı oluşturmanıza yardımcı olur...",
    datePublished: "2025-02-20T00:00:00Z",
    dateModified: "2025-02-20T00:00:00Z",
  },
];
