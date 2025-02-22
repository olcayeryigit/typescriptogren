'use client';
import * as React from 'react';

type PageProps = {
  params: Promise<{ slug: string }>;  // Slug parametresi Promise olarak alınıyor
};

const Page = ({ params }: PageProps) => {
  const [id, setId] = React.useState<string | null>(null); // State oluşturuluyor
  const [loading, setLoading] = React.useState(true); // Yükleniyor durumu ekleniyor

  React.useEffect(() => {
    const fetchParams = async () => {
      try {
        const resolvedParams = await params; // params artık Promise olduğu için await ediyoruz
        if (resolvedParams && resolvedParams.slug) {
          setId(resolvedParams.slug); // Slug parametresini alıyoruz
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

  return <p>ID: {id}</p>; // Slug'ı gösteriyoruz
};

export default Page;
