'use client';
import * as React from 'react';
import BlogDetail from './BlogDetail';

type BlogPageProps = {
  params: Promise<{ slug: string }>;  // Slug parametresi Promise olarak alınıyor
};

const BlogPage: React.FC<BlogPageProps> = ({ params }) => {
  const [realSlug, setRealSlug] = React.useState<string | null>(null); // State oluşturuluyor
  const [loading, setLoading] = React.useState(true); // Yükleniyor durumu ekleniyor

  React.useEffect(() => {
    const fetchParams = async () => {
      try {
        const resolvedParams = await params; // params artık Promise olduğu için await ediyoruz
        if (resolvedParams && resolvedParams.slug) {
          setRealSlug(resolvedParams.slug); // Slug parametresini alıyoruz
        } else {
            
          console.error('Params ya da slug bulunamadı');
        }
      } catch (error) {
        console.error('Parametreler alınırken bir hata oluştu:', error);
      } finally {
        setLoading(false); // Yükleniyor durumunu false yapıyoruz
      }
    };

    fetchParams();
  }, [params]); // params değeri değiştiğinde çalışacak

  if (loading) {
    return <p>Yükleniyor...</p>; // Yükleniyor mesajı gösteriyoruz
  }

  return (
    <div>
      {/* BlogDetail bileşenine slug bilgisini gönderiyoruz */}
      {realSlug && <BlogDetail detail={realSlug} />}
    </div>
  );
};

export default BlogPage;
