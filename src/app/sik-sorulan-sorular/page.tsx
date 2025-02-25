// pages/sik-sorulan-sorular.tsx
import { Metadata } from "next";
import PageTitle from "@/components/common/PageTitle";
import React from "react";
import FAQItem from "@/components/sss/FAQItem";
import MainParagraph from "@/components/common/MainParagraph";
import faqs from "@/data/Sorular";

export const metadata: Metadata = {
  title: "TypeScript Sıkça Sorulan Sorular | TypeScript Öğren",
  description: "TypeScript hakkında en çok merak edilen soruların yanıtlarını burada bulabilirsiniz. TypeScript nedir? Kullanmalı mıyım? Zor mu?",
  alternates: {
    canonical: "https://www.typescriptogren.com/sik-sorulan-sorular"
    },
  openGraph: {
    title: "TypeScript Sıkça Sorulan Sorular | TypeScript Öğren",
    description: "TypeScript ile ilgili en yaygın sorular ve cevaplar burada! Hemen öğrenmeye başla.",
    url: "https://www.typescriptogren.com/sik-sorulan-sorular",
    siteName: "TypeScript Öğren",
    type: "website",
  },
  keywords: [
    "TypeScript sıkça sorulan sorular", "TypeScript nedir", "TypeScript mi JavaScript mi",
    "TypeScript avantajları", "TypeScript zor mu", "TypeScript kullanmalı mıyım"
  ],  
};



const FAQPage = () => {
 

  
  return (
    <div className="container mx-auto py-3 px-5 md:py-6">

  
<PageTitle title="TypeScript Hakkında Sıkça Sorulan Sorular (SSS)" />
<MainParagraph text="TypeScript ve modern yazılım geliştirme hakkında merak ettiklerinizi keşfedin! TypeScript'in avantajları, en iyi kullanım senaryoları, hata ayıklama yöntemleri ve performans ipuçları gibi konularda sıkça sorulan soruları burada yanıtlıyoruz." />

      <ul className="space-y-4 p-6">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </ul>
    </div>
  );
};

export default FAQPage;
