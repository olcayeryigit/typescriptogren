import React from "react";
import PageTitle from "@/components/common/PageTitle";
import type { Metadata } from "next";
import MainParagraph from "@/components/common/MainParagraph";
import LessonPage from "@/components/lessonPage/LessonPage";

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
        url: "https://www.typescriptogren.com/images/logo.png",
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
    images: ["https://www.typescriptogren.com/images/logo.png"],
  },
};



const DerslerPage = () => {
  
  return (


<div className="container mx-auto py-3 px-5 md:py-6">
<PageTitle title="TypeScript Dersleri" />
        <MainParagraph text="TypeScript, JavaScript'in tip güvenli bir versiyonudur ve kodunuzu daha hatasız, okunaklı ve ölçeklenebilir hale getirir. Bu derslerde, TypeScript'in temel sözdiziminden gelişmiş kullanım senaryolarına kadar adım adım öğrenerek, daha sağlam ve profesyonel projeler geliştirmeyi keşfedeceksiniz. "/>
  <LessonPage/>
      </div>
  )
};

export default DerslerPage;
