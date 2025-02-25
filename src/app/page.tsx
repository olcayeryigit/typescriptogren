import type { Metadata } from "next";
import React from "react";
import HomeCard from "@/components/homePage/HomeCard";
import PageTitle from "@/components/common/PageTitle";
import MainParagraph from "@/components/common/MainParagraph";
import { Book, ListChecks, Layers, PenSquare, HelpCircle, Terminal, Globe } from "lucide-react";


export const metadata: Metadata = {
  title: "TypeScript Öğren – Modern JavaScript ile Tip Güvenliği ve Performans",
  description:
    "TypeScript öğren! Modern JavaScript’in avantajlarını keşfet, güçlü ve güvenli kod yaz. Dersler, projeler ve kaynaklarla becerilerini geliştir.",
  keywords: [
    "TypeScript", "TypeScript öğren", "TypeScript dersleri", "TypeScript kursu", "JavaScript",
    "Yazılım geliştirme", "Frontend geliştirme", "Backend geliştirme", "Web geliştirme",
    "Kodlama öğrenme", "React ile TypeScript", "Node.js ve TypeScript", "TypeScript projeleri"
  ],
  alternates: {
    canonical: "https://www.typescriptogren.com/",
  },
  openGraph: {
    title: "TypeScript Öğren – Modern JavaScript ile Tip Güvenliği ve Performans",
    description:
      "TypeScript öğrenmeye başla! Modern JavaScript’in avantajlarını keşfet, güvenli kod yaz ve projelerini geliştir.",
    url: "https://www.typescriptogren.com/",
    siteName: "TypeScript Öğren",
    images: [
      {
        url: "https://www.typescriptogren.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "TypeScript Öğren – Modern JavaScript ve Güvenli Kodlama",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@typescriptogren",
    creator: "@typescriptogren",
    title: "TypeScript Öğren – Modern JavaScript ile Tip Güvenliği ve Performans",
    description:
      "TypeScript öğrenmeye başla! Modern JavaScript’in avantajlarını keşfet, güçlü ve güvenli kod yaz.",
    images: [
      {
        url: "https://www.typescriptogren.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "TypeScript Öğren – Modern JavaScript ve Güvenli Kodlama",
      },
    ],
  },
};


const cardData = [
  { href: "/dersler", icon: <Book size={40} />, title: "Dersler", description: "TypeScript diline dair temel ve ileri seviye derslerle, dilin tüm temellerini öğrenin." },
  { href: "/quiz", icon: <ListChecks size={40} />, title: "Quizler", description: "Hazırladığımız quizlerle bilginizi test edin, eksik olduğunuz alanları keşfedin." },
  { href: "/kaynaklar", icon: <Layers size={40} />, title: "Kaynaklar", description: "En iyi TypeScript kaynaklarını ve araçlarını bir arada bulabilirsiniz." },
  { href: "/blog", icon: <PenSquare size={40} />, title: "Blog", description: "TypeScript ile ilgili güncel haberler, ipuçları ve en iyi uygulamaları okuyun." },
  { href: "/sik-sorulan-sorular", icon: <HelpCircle size={40} />, title: "SSS", description: "Kullanıcılar tarafından sıkça sorulan sorulara göz atın." },
  { href: "https://www.typescriptlang.org/play", icon: <Terminal size={40} />, title: "TypeScript Playground", description: "Kod yazmaya hemen başlayın! TypeScript Playground'da anında kod yazıp çalıştırabilirsiniz.", isExternal: true },
  { href: "https://www.typescriptlang.org/", icon: <Globe size={40} />, title: "Resmi TypeScript Sitesi", description: "TypeScript'in resmi web sitesinde, dilin resmi dokümantasyonunu bulabilirsiniz.", isExternal: true },
];

export default function Page() {




  
  
  return (
    <>

      <div className="container mx-auto py-3 px-5 md:py-6">
        <PageTitle title="TypeScript ile Modern ve Tip Güvenli Kodlama" />
        <MainParagraph text="TypeScript dünyasına adım atın ve daha güvenilir, okunabilir ve ölçeklenebilir kodlar yazmayı öğrenin!" />
        <HomeCard cardData={cardData} />
      </div>
    </>
  );
}