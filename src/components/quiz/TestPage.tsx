"use client";
import React, { useState, useEffect } from 'react';
import Test from './Test';

type TestProps = {
  params: Promise<{ slug: string }>; // Parametreyi direkt olarak alıyoruz
};

const TestPage: React.FC<TestProps> = ({ params }) => {
  const [realSlug, setRealSlug] = useState<string | null>(null); // State oluşturuluyor
  const [loading, setLoading] = useState(true); // Yükleniyor durumu ekleniyor

  useEffect(() => {
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
      {realSlug && <Test quizName={realSlug} />}
    </div>
  );
};

export default TestPage;
