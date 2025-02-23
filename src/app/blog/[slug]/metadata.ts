// app/blog/[slug]/metadata.ts (Server-side meta verisi için)

import { blogPosts } from '@/data/blogPosts'; // Blog verileri

type Props = {
  params: { slug: string }; // params.slug, URL'den alınacak slug
};

// Meta verisini sunucu tarafında oluşturmak için kullanılıyor
export async function generateMetadata({ params }: Props) {
  const { slug } = params;

  // Sluga göre blog yazısını buluyoruz
  const post = blogPosts.find(post => post.slug === slug);

  if (post) {
    return {
      title: post.title,
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        images: [post.link],
      },
    };
  }

  return {
    title: "Blog Yazısı Bulunamadı",
    description: "Bu blog yazısına ait içerik bulunamadı.",
    openGraph: {
      title: "Blog Yazısı Bulunamadı",
      description: "Bu blog yazısına ait içerik bulunamadı.",
      images: [],
    },
  };
}
