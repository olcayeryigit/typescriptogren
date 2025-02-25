import { Metadata } from 'next'
import MainParagraph from '@/components/common/MainParagraph'
import PageTitle from '@/components/common/PageTitle'
import React from 'react'
import QuizPage from '@/components/quiz/QuizPage'
export const metadata: Metadata = {
  title: 'TypeScript Quizleri | TypeScript Öğren',
  description: 'TypeScript becerilerinizi geliştirmek ve ilerlemenizi görmek için çeşitli quizlere katılın. Her seviyeye uygun quizler mevcuttur.',
  keywords: 'TypeScript, quiz, yazılım geliştirme, test, eğitim, beceri geliştirme',
  authors: [{ name: 'TypeScript Öğren', url: 'https://www.typescriptogren.com' }], // Organizasyon olarak düzeltildi
  openGraph: {
    title: 'TypeScript Quizleri | TypeScript Öğren',
    description: 'TypeScript becerilerinizi geliştirmek ve ilerlemenizi görmek için çeşitli quizlere katılın.',
    type: 'website',
    url: 'https://www.typescriptogren.com/quiz',
    images: [
      {
        url: 'https://www.typescriptogren.com/images/logo.png', // SEO uyumlu bir görsel URL'si
        width: 1200,
        height: 630,
        alt: 'TypeScript Quizleri - Quiz çözerek kendinizi test edin.'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TypeScript Quizleri | TypeScript Öğren',
    description: 'TypeScript becerilerinizi geliştirmek ve ilerlemenizi görmek için çeşitli quizlere katılın.',
    images: [
      {
        url: 'https://www.typescriptogren.com/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'TypeScript Quizleri - Quiz çözerek kendinizi test edin.'
      }
    ]
  }
};


const page = () => {
  return (
    <div>
      {/* Quiz Kartları */}
      <div className="container mx-auto py-3 px-5 md:py-6">
        <PageTitle title="TypeScript Quizleri" />
        <MainParagraph text="TypeScript becerilerinizi geliştirmek ve ne kadar ilerlediğinizi görmek için çeşitli quizlere katılabilirsiniz. Aşağıdaki listede, her seviyeye uygun quizler bulunmaktadır. Başlamak için birini seçin ve kendinizi test edin!" />
  <QuizPage/>
      </div>
    </div>
  )
}

export default page
