// BlogPage.tsx
"use client";
import * as React from 'react';
import BlogDetail from './BlogDetail';
import { Metadata, ResolvingMetadata } from 'next';

type BlogPageProps = {
  params: Promise<{ slug: string }>; // Slug parametresi Promise olarak alınıyor
};

// Dinamik Metadata Generation (slug'a göre)
export async function generateMetadata(
  { params }: BlogPageProps, 
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // Burada API'den blog verisini alıyoruz
  const blogPost = await fetch(`https://example.com/api/blog/${slug}`).then(res => res.json());

  // Parent metadata'yı alıyoruz ve üzerine ekleme yapıyoruz
  const previousOpenGraphImages = (await parent).openGraph?.images || [];

  return {
    title: blogPost.title, // Blog başlığı
    description: blogPost.excerpt, // Blog özeti
    openGraph: {
      title: blogPost.title, 
      description: blogPost.excerpt, 
      images: ['/path/to/image.jpg', ...previousOpenGraphImages], // Dinamik görseller
    },
  };
}

const BlogPage: React.FC<BlogPageProps> = ({ params }) => {
  const [realSlug, setRealSlug] = React.useState<string | null>(null); // Slug'u state'de tutuyoruz
  const [loading, setLoading] = React.useState(true); // Yükleniyor durumu

  React.useEffect(() => {
    const fetchParams = async () => {
      try {
        const resolvedParams = await params; // Promise çözülüyor
        if (resolvedParams && resolvedParams.slug) {
          setRealSlug(resolvedParams.slug); // Slug parametresini alıyoruz
        } else {
          console.error('Slug parametresi bulunamadı');
        }
      } catch (error) {
        console.error('Parametreler alınırken bir hata oluştu:', error);
      } finally {
        setLoading(false); // Yükleniyor durumu bitti
      }
    };

    fetchParams();
  }, [params]); // params değiştiğinde yeniden çalışacak

  if (loading) {
    return <p>Yükleniyor...</p>; // Yükleniyor mesajı
  }

  return (
    <div>
      {/* BlogDetail bileşenine dinamik olarak slug bilgisini gönderiyoruz */}
      {realSlug && <BlogDetail detail={realSlug} />}
    </div>
  );
};

export default BlogPage;
