import TestPage from '@/components/quiz/TestPage';
import { Metadata } from 'next';
import * as React from 'react';

type PageProps = {
  params: Promise<{ slug: string }>;  // Slug parametresi Promise olarak alınıyor
};

export const metadata: Metadata = {
  title: 'TypeScript Quiz - Test | TypeScript Öğren',
  description: 'TypeScript konularını öğrenirken, bilginizi pekiştirmenize ve geliştirmenize yardımcı olacak zorlu ve etkileşimli quizler. Her quiz, teorik bilgilerinizi pratikte uygulamanız için fırsatlar sunar.',
  keywords: 'TypeScript, quiz, test, yazılım geliştirme, frontend, backend, eğitim, yazılım',
  authors: [{ name: 'TypeScript Öğren', url: 'https://www.typescriptogren.com' }],
  openGraph: {
    title: 'TypeScript Quiz - Test | TypeScript Öğren',
    description: 'TypeScript bilginizi test edin ve geliştirin!',
    type: 'website',
    images: [
      {
        url: 'https://www.typescriptogren.com/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'TypeScript Quizleri - Kendinizi Test Edin'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TypeScript Quiz - Test | TypeScript Öğren',
    description: 'TypeScript bilginizi test edin ve geliştirin!',
    images: [
      {
        url: 'https://www.typescriptogren.com/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'TypeScript Quizleri - Kendinizi Test Edin'
      }
    ]
  }
};



const Page = ({ params }: PageProps) => {
  return (
    <div className="container mx-auto py-3 px-5 md:py-6">
      <TestPage params={params} />
    </div>
  );
};

export default Page;
