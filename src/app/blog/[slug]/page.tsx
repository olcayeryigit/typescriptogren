// app/blog/[slug]/page.tsx

"use client"; // Bu satır, sadece client-side kod için

import * as React from 'react';
import { blogPosts } from '@/data/blogPosts'; // Blog verileri

type Props = {
  params: { slug: string }; // params.slug, URL'den alınacak slug
};

// Sayfa bileşeni
export default function Page({ params }: Props) {
  const [post, setPost] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Sluga göre blog yazısını buluyoruz
    const foundPost = blogPosts.find(post => post.slug === params.slug);

    if (foundPost) {
      setPost(foundPost); // Bulunan post'u state'e kaydediyoruz
    }
    setLoading(false); // Yükleme bitti
  }, [params.slug]);

  if (loading) {
    return <p>Yükleniyor...</p>;
  }

  if (!post) {
    return <p>Blog yazısı bulunamadı.</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
