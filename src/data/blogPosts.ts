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
  image:string;
}

// Örnek blog verisi
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "typescript-ile-programlama",
    title: "TypeScript ile Programlama: Temel Başlangıç Rehberi",
    description: "TypeScript, JavaScript üzerine güçlü bir statik tür sistemi ekleyen bir dildir. Bu yazıda, TypeScript'i öğrenmeye nasıl başlayacağınızı öğreneceksiniz.",
    content: "TypeScript, Microsoft tarafından geliştirilen, JavaScript'in üzerine statik tip ekleyen bir programlama dilidir. JavaScript kodunun daha güvenli ve okunabilir olmasını sağlar. TypeScript'in en büyük avantajlarından biri, statik tip kontrolü sayesinde hataları erken tespit etmesidir. Ayrıca, büyük projelerde daha düzenli ve sürdürülebilir kod yazmaya yardımcı olur. TypeScript kullanmaya başlamak için öncelikle Node.js’in kurulu olması gerekir. Ardından npm kullanarak TypeScript yüklenebilir. İlk TypeScript dosyanızı oluşturup derlemek için 'tsc dosya.ts' komutunu çalıştırabilirsiniz. TypeScript'in temel özellikleri arasında değişken türleri, fonksiyon parametreleri ve dönüş türleri, arabirimler, sınıflar ve modüller yer alır. Bu yazıda TypeScript'in temel yapılarını ve kullanımlarını detaylı şekilde ele alacağız.",
    publishedAt: "2025-02-22",
    link: "https://www.typescriptogren.com/blog/typescript-ile-programlama",
    image:""
  },
  {
    id: 2,
    slug: "react-ve-redux",
    title: "React ve Redux ile Modern Web Uygulamaları",
    description: "React ve Redux kullanarak, güçlü ve ölçeklenebilir web uygulamaları geliştirmeyi öğrenin.",
    content: "React, kullanıcı arayüzleri geliştirmek için kullanılan popüler bir JavaScript kütüphanesidir. Bileşen yapısı sayesinde tekrar kullanılabilir ve yönetilebilir bir kod yapısı sunar. Redux ise uygulama durumunu yönetmek için kullanılan bir state management aracıdır. Redux, merkezi bir veri deposu sunarak uygulama durumunun tek bir yerden yönetilmesini sağlar. React'te bileşenlerin durum yönetimi için state ve props kavramları kullanılırken, büyük ölçekli uygulamalarda durum yönetimini daha düzenli hale getirmek için Redux tercih edilir. Redux'un temel bileşenleri arasında Store, Actions, Reducers ve Dispatch yer alır. Bir Redux projesi oluşturmak için öncelikle redux ve react-redux kütüphaneleri yüklenmelidir. Redux'un sağladığı avantajlar arasında uygulama içindeki veri akışının düzenli olması, bileşenler arasındaki veri paylaşımının kolaylaşması ve ölçeklenebilir bir yapı sunması yer alır. Bu yazıda React ve Redux'un nasıl entegre edileceğini adım adım inceleyeceğiz.",
    publishedAt: "2025-02-21",
    link: "https://www.typescriptogren.com/blog/react-ve-redux",
    image:""
  },
  {
    id: 3,
    slug: "nextjs-ile-seo-optimizasyonu",
    title: "Next.js ile SEO Optimizasyonu: En İyi Uygulamalar",
    description: "Next.js ile SEO dostu web siteleri oluşturmak için kullanabileceğiniz en iyi teknikler.",
    content: "SEO (Search Engine Optimization), web sitelerinin arama motorlarında daha üst sıralarda yer almasını sağlamak için yapılan optimizasyon çalışmalarını ifade eder. Next.js, SEO açısından güçlü özellikler sunan bir framework'tür. Next.js ile geliştirilen web siteleri, sunucu taraflı render (SSR) ve statik site oluşturma (SSG) gibi özellikler sayesinde hızlı yüklenir ve arama motorları tarafından daha kolay taranır. SEO için önemli olan meta etiketleri, Next.js’in 'next/head' bileşeni ile kolayca yönetilebilir. Sayfa başlıkları, açıklamalar ve yapılandırılmış veriler eklenerek arama motorları için optimize edilmiş içerikler oluşturulabilir. Next.js’in 'next/image' bileşeni ise resimleri otomatik olarak optimize ederek sayfa hızını artırır. Ayrıca, canonical link kullanımı ve sayfa içi bağlantı optimizasyonları da SEO performansını iyileştiren önemli faktörlerdir. Bu yazıda Next.js kullanarak SEO açısından en iyi uygulamaları nasıl hayata geçirebileceğinizi detaylı bir şekilde anlatacağız.",
    publishedAt: "2025-02-20",
    link: "https://www.typescriptogren.com/blog/nextjs-ile-seo-optimizasyonu",
    image:""
  },
];



// Slug'a göre blog yazısını bulan fonksiyon
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}