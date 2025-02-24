
import MainParagraph from "@/components/common/MainParagraph";
import PageTitle from "@/components/common/PageTitle";
import Link from "next/link";
import { Metadata } from "next";
import { FaLink } from "react-icons/fa";
import React from "react";

// SEO Metadata
export const metadata: Metadata = {
  title: "En İyi TypeScript Kaynakları – Resmi Dokümantasyon ve Eğitimler",
  description:
    "TypeScript öğrenmek isteyenler için en iyi kaynakları keşfedin. Resmi dokümantasyon, GitHub deposu, bloglar ve ücretsiz kurslarla kendinizi geliştirin.",
  keywords: [
    "TypeScript kaynakları", "TypeScript öğren", "TypeScript kursları",
    "JavaScript geliştirme", "TypeScript dökümantasyon", "TypeScript eğitimleri",
    "TypeScript resmi kaynakları", "Frontend geliştirme", "Web geliştirme", 
    "TypeScript en iyi kaynaklar"
  ], alternates: {
    canonical: "https://www.typescriptogren.com/kaynaklar"
    },
  
  openGraph: {
    title: "En İyi TypeScript Kaynakları – Resmi Dokümantasyon ve Eğitimler",
    description:
      "TypeScript öğrenmek isteyenler için en iyi kaynakları keşfedin. Resmi dokümantasyon, GitHub deposu, bloglar ve ücretsiz kurslarla kendinizi geliştirin.",
    url: "https://www.typescriptogren.com/kaynaklar",
    siteName: "TypeScript Öğren",
    images: [
      {
        url: "https://www.typescriptogren.com/images/kaynaklar-og.jpg",
        width: 1200,
        height: 630,
        alt: "TypeScript Kaynakları – Resmi Dokümantasyon ve Eğitimler",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@typescriptogren",
    creator: "@typescriptogren",
    title: "En İyi TypeScript Kaynakları – Resmi Dokümantasyon ve Eğitimler",
    description:
      "TypeScript öğrenmek isteyenler için en iyi kaynakları keşfedin. Resmi dokümantasyon, GitHub deposu, bloglar ve ücretsiz kurslarla kendinizi geliştirin.",
      images: [
        {
          url: 'https://your-website.com/path_to_image.jpg', // Mutlaka tam URL olmalı
          width: 800,
          height: 600,
          alt: 'Açıklama yazısı', // Opsiyonel
        },
      ],  },
};

// TypeScript Kaynakları
const resources = [
  { name: "TypeScript Resmi Dokümantasyonu", url: "https://www.typescriptlang.org/docs/" },
  { name: "TypeScript GitHub Deposu", url: "https://github.com/microsoft/TypeScript" },
  { name: "TypeScript Handbook (Resmi)", url: "https://www.typescriptlang.org/docs/handbook/intro.html" },
  { name: "TypeScript Kursu - FreeCodeCamp", url: "https://www.freecodecamp.org/news/learn-typescript-beginners-guide/" },
  { name: "TypeScript ESLint Kuralları", url: "https://typescript-eslint.io/" },
  { name: "TypeScript Playground", url: "https://www.typescriptlang.org/play" },
  { name: "TypeScript Blog", url: "https://devblogs.microsoft.com/typescript/" },
];



const TypeScriptResources = () => {
  return (
    <div className="container mx-auto py-3 px-5 md:py-6">

 

      {/* Sayfa Başlığı */}
      <PageTitle title="TypeScript Kaynakları" />
      <MainParagraph text="TypeScript, JavaScript’in güçlü bir üst kümesi olup statik tür sistemine sahiptir. Modern web ve mobil uygulamalarda yaygın olarak kullanılmaktadır. Bu listedeki kaynaklar, TypeScript’i sıfırdan öğrenmek isteyenlerden ileri seviyede kendini geliştirmek isteyenlere kadar herkese hitap eder. Resmi dökümantasyon, GitHub deposu ve bloglar sayesinde güncel kalabilir, online kurslarla kendinizi geliştirebilirsiniz." />

      <MainParagraph text="TypeScript öğrenmek ve güncel gelişmeleri takip etmek için aşağıdaki kaynaklardan faydalanabilirsiniz:" />
{/* Kaynaklar Listesi */}
<ul className="space-y-4">
  {resources.map((resource, index) => (
    <li key={index}>
      <Link
        href={resource.url}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="block border-2 border-custom-gray bg-white hover:bg-gray-100 p-4 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md group text-sm md:text-md  "
      >
        <div className="flex items-center gap-2">
          {/* Link İkonu */}
          <FaLink className="text-custom-blue group-hover:text-custom-gray transition-all duration-300" />

          {/* Link Metni */}
          <span className="font-semibold text-gray-700 group-hover:text-custom-blue transition-all duration-300">
            {resource.name}
          </span>
        </div>
      </Link>
    </li>
  ))}
</ul>

{/* Responsive için düzenlemeler */}

    </div>
  );
};

export default TypeScriptResources;
