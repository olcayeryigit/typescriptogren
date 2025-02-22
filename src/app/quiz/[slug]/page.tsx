// pages/blog/[slug].tsx

import { quizler } from "@/data/quiz";
import QuizPage from "@/components/quizPage/QuizPage";
import React from "react";
import Head from "next/head";

// SEO Metadata
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const slug = params?.slug;
  const quiz = quizler.find((q) => q.slug === slug);

  if (!quiz) {
    return {
      title: "Quiz Bulunamadı",
      description: "Üzgünüz, bu quiz mevcut değil.",
      keywords: "quiz, test, bulunamadı",
    };
  }

  const title = `${quiz.title} - Quiz`;
  const description = quiz.description || `${quiz.title} quizi ile bilginizi test edin.`;
  const keywords = `${quiz.title}, quiz, test, bilgi, öğren`;



  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `https://www.typescriptogren.com/quiz/${quiz.slug}`,
      images: [
        {
          url: quiz.image || "https://www.typescriptogren.com/images/quiz-og.jpg", // Quiz'e özgü görsel
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [quiz.image || "https://www.typescriptogren.com/images/quiz-og.jpg"], // Quiz'e özgü görsel
    },
  };
}

// Sayfa bileşeni
const Page = ({ params }: { params: { slug: string } }) => {
  const slug = params?.slug;
  const quiz = quizler.find((q) => q.slug === slug);

  if (!quiz) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-red-500">Bu quiz bulunamadı!</h1>
      </div>
    );
  }

  // JSON-LD verisini sayfaya dahil et
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Quiz",
    "name": quiz.title,
    "description": quiz.description,
    "url": `https://www.typescriptogren.com/quiz/${quiz.slug}`,
    "image": quiz.image || "https://www.typescriptogren.com/images/quiz-og.jpg",
    "mainEntityOfPage": `https://www.typescriptogren.com/quiz/${quiz.slug}`,
  };

  return (
    <div>
      <Head>
        <title>{`${quiz.title} - Quiz`}</title>
        <link rel="canonical" href={`https://www.typescriptogren.com/quiz/${quiz.slug}`} />

        <meta name="description" content={quiz.description || `${quiz.title} quizi ile bilginizi test edin.`} />
        <meta name="keywords" content={`${quiz.title}, quiz, test, bilgi, öğren`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <QuizPage quiz={quiz} />
    </div>
  );
};

export default Page;
