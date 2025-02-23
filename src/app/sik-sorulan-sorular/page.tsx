// pages/sik-sorulan-sorular.tsx
import { Metadata } from "next";
import PageTitle from "@/components/common/PageTitle";
import React from "react";
import FAQItem from "@/components/sss/FAQItem";

export const metadata: Metadata = {
  title: "TypeScript Sıkça Sorulan Sorular | TypeScript Öğren",
  description: "TypeScript hakkında en çok merak edilen soruların yanıtlarını burada bulabilirsiniz. TypeScript nedir? Kullanmalı mıyım? Zor mu?",
  alternates: {
    canonical: "https://www.typescriptogren.com/sik-sorulan-sorular"
    },
  openGraph: {
    title: "TypeScript Sıkça Sorulan Sorular | TypeScript Öğren",
    description: "TypeScript ile ilgili en yaygın sorular ve cevaplar burada! Hemen öğrenmeye başla.",
    url: "https://typescriptogren.com/sik-sorulan-sorular",
    siteName: "TypeScript Öğren",
    type: "website",
  },
};

const faqs = [
  { question: "TypeScript nedir?", answer: "TypeScript, Microsoft tarafından geliştirilen ve JavaScript'in üzerine inşa edilen, statik tür sistemine sahip bir programlama dilidir." },
  { question: "JavaScript ile TypeScript arasındaki fark nedir?", answer: "JavaScript dinamik türlere sahiptir, TypeScript ise statik tür kontrolü yaparak hataları erken aşamada yakalamayı sağlar." },
  { question: "TypeScript zor mu?", answer: "Eğer JavaScript biliyorsanız, TypeScript öğrenmek çok zor değildir. Statik tipler ve derleyici hatalarına alışmak başlangıçta zor gelebilir, ancak uzun vadede yazılım geliştirmeyi kolaylaştırır." },
  { question: "TypeScript kullanmalı mıyım?", answer: "Eğer büyük ve ölçeklenebilir bir proje yapıyorsanız veya hataları önceden yakalamak istiyorsanız, TypeScript kullanmanız önerilir." },
];

const FAQPage = () => {
 

  
  return (
    <div className="container mx-auto p-6">

  
      <PageTitle title="TypeScript Sıkça Sorulan Sorular (SSS)" />

      <ul className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </ul>
    </div>
  );
};

export default FAQPage;
