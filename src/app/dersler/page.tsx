import React from "react";
import LessonCard from "@/components/lessonPage/LessonCard";
import PageTitle from "@/components/common/PageTitle";
import type { Metadata } from "next";
import Script from "next/script";
import { dersler } from "@/data/dersler";

export const metadata: Metadata = {
  title: "TypeScript Dersleri – Başlangıçtan İleri Seviyeye Öğrenin",
  description:
    "TypeScript dersleri ile JavaScript'in güçlü yönlerini keşfedin! Adım adım eğitimler, kod örnekleri ve proje odaklı içeriklerle öğrenmeye başlayın.",
  keywords: [
    "TypeScript dersleri", "TypeScript kursu", "TypeScript eğitimi", 
    "TypeScript anlatımı", "TypeScript tutorial", "TypeScript başlangıç", 
    "TypeScript ileri seviye", "React TypeScript dersleri", "Node.js TypeScript dersleri",
    "Frontend geliştirme", "Backend geliştirme", "JavaScript öğrenme"
  ],
  alternates: {
    canonical: "https://www.typescriptogren.com/dersler"
    },
  openGraph: {
    title: "TypeScript Dersleri – Sıfırdan Uzmanlığa Eğitim Kaynakları",
    description:
      "TypeScript öğrenmeye başla! Modern JavaScript’in avantajlarını keşfet, güvenli kod yaz ve projelerini geliştir.",
    url: "https://www.typescriptogren.com/dersler",
    siteName: "TypeScript Öğren",
    images: [
      {
        url: "https://www.typescriptogren.com/images/og-dersler.jpg",
        width: 1200,
        height: 630,
        alt: "TypeScript Dersleri – Sıfırdan Uzmanlığa Eğitim Kaynakları",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@typescriptogren",
    creator: "@typescriptogren",
    title: "TypeScript Dersleri – Sıfırdan Uzmanlığa Eğitim Kaynakları",
    description:
      "TypeScript öğrenmeye başla! Modern JavaScript’in avantajlarını keşfet, güçlü ve güvenli kod yaz.",
    images: ["https://www.typescriptogren.com/images/og-dersler.jpg"],
  },
};



const DerslerPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "TypeScript Dersleri – Başlangıçtan İleri Seviyeye Öğrenin",
    "url": "https://www.typescriptogren.com/dersler",
    "description": "TypeScript derslerini keşfedin! Başlangıçtan ileri seviyeye kadar adım adım dersler ve projelerle öğrenin.",
    "inLanguage": "tr",
    "publisher": {
      "@type": "Organization",
      "name": "TypeScript Öğren",
      "url": "https://www.typescriptogren.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.typescriptogren.com/logo.png",
        "width": 512,
        "height": 512,
      },
      "sameAs": [
        "https://www.instagram.com/typescriptogren",
        "https://twitter.com/typescriptogren",
      ],
    },
   
  };

  return (
    <>
        <Script
         key="jsonld" 
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>

      <div className="container mx-auto p-6">
        <PageTitle title="TypeScript Dersleri" />

        <div>
          {dersler.map((ders, index) => (
            <LessonCard key={index} lesson={ders} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default DerslerPage;
