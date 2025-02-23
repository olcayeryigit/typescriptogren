// page.tsx

// Client tarafı için 'use client' direktifi ekleniyor
'use client'; 

import BlogDetail from '@/components/blog/BlogDetail';
import * as React from 'react';

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
