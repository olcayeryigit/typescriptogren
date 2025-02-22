// pages/quiz/index.tsx
import MainParagraph from "@/components/common/MainParagraph";
import PageTitle from "@/components/common/PageTitle";
import QuizCard from "@/components/quizPage/QuizCard";
import { quizler } from "@/data/quiz";
import { Metadata } from "next";
import Head from "next/head";
import React from "react";

export const metadata: Metadata = {
  title: "TypeScript Quizleri – Bilginizi Test Edin!",
  description:
    "TypeScript bilginizi ölçmek için quizlere katılın! Değişkenler, türler, fonksiyonlar ve daha fazlasını içeren testler ile kendinizi geliştirin.",
  keywords: [
    "TypeScript quiz", "TypeScript test", "JavaScript quiz", "frontend geliştirme testi", 
    "web geliştirme quiz", "TypeScript türleri", "TypeScript öğren", 
    "JavaScript sınavı", "Kodlama quiz"
  ],

  openGraph: {
    title: "TypeScript Quizleri – Bilginizi Test Edin!",
    description:
      "TypeScript bilginizi ölçmek için quizlere katılın! Değişkenler, türler, fonksiyonlar ve daha fazlasını içeren testler ile kendinizi geliştirin.",
    url: "https://www.typescriptogren.com/quiz",
    siteName: "TypeScript Öğren",
    images: [
      {
        url: "https://www.typescriptogren.com/images/quiz-og.jpg",
        width: 1200,
        height: 630,
        alt: "TypeScript Quizleri – Bilginizi Test Edin!",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@typescriptogren",
    creator: "@typescriptogren",
    title: "TypeScript Quizleri – Bilginizi Test Edin!",
    description:
      "TypeScript bilginizi ölçmek için quizlere katılın! Değişkenler, türler, fonksiyonlar ve daha fazlasını içeren testler ile kendinizi geliştirin.",
    images: ["https://www.typescriptogren.com/images/quiz-og.jpg"],
  },
};

// JSON-LD yapısını basitleştirme
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "TypeScript Quizleri",
  "description": "TypeScript bilginizi test edin! Temel sözdizimi, veri türleri ve daha fazlasını içeren quizler.",
  "url": "https://www.typescriptogren.com/quiz",
  "numberOfItems": quizler.length,
  "itemListElement": quizler.map((quiz, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": quiz.title,
    "url": `https://www.typescriptogren.com/quiz/${quiz.slug}`
  })),
};

const Page = () => {
  return (
    <div className="container mx-auto p-6">
      <Head>
          <link rel="canonical" href="https://www.typescriptogren.com/quiz" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      {/* Sayfa Başlığı */}
      <PageTitle title="TypeScript Quizleri" />
      <MainParagraph text="TypeScript becerilerinizi geliştirmek ve ne kadar ilerlediğinizi görmek için çeşitli quizlere katılabilirsiniz. Aşağıdaki listede, her seviyeye uygun quizler bulunmaktadır. Başlamak için birini seçin ve kendinizi test edin!" />

      {/* Quiz Kartları */}
      <div className="mt-4">
        {quizler.map((quiz, index) => (
          <QuizCard key={quiz.id} quiz={quiz} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Page;
