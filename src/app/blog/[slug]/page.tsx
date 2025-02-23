// app/products/[slug]/page.tsx
import * as React from 'react';
import { Metadata, ResolvingMetadata } from 'next';
import BlogDetail from '@/components/blog/BlogDetail';

// Dinamik Metadata Generation (slug'a göre)
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // API'den blog verisini alıyoruz
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

type PageProps = {
  params: Promise<{ slug: string }>;
};

const Page: React.FC<PageProps> = ({ params }) => {
  const [realSlug, setRealSlug] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchParams = async () => {
      try {
        const resolvedParams = await params; // params çözümleniyor
        if (resolvedParams && resolvedParams.slug) {
          setRealSlug(resolvedParams.slug); // Slug parametresini state'e set ediyoruz
        } else {
          console.error('Slug parametresi bulunamadı');
        }
      } catch (error) {
        console.error('Parametreler alınırken bir hata oluştu:', error);
      } finally {
        setLoading(false); // Yükleniyor durumu bitiyor
      }
    };

    fetchParams();
  }, [params]);

  if (loading) {
    return <p>Yükleniyor...</p>;
  }

  return (
    <div className="container mx-auto p-6">
      {/* BlogDetail bileşenine dinamik slug bilgisi ile yönlendirme */}
      {realSlug && <BlogDetail detail={realSlug} />}
    </div>
  );
};

export default Page;
