import { Metadata } from 'next'
import MainParagraph from '@/components/common/MainParagraph'
import PageTitle from '@/components/common/PageTitle'
import QuizCard from '@/components/quiz/QuizCard'
import { quizler } from '@/data/quiz'
import React from 'react'

export const metadata: Metadata = {
  title: 'TypeScript Quizleri | My Website',
  description: 'TypeScript becerilerinizi geliştirmek ve ilerlemenizi görmek için çeşitli quizlere katılın. Her seviyeye uygun quizler mevcuttur.',
  keywords: 'TypeScript, quiz, yazılım geliştirme, test, eğitim, beceri geliştirme',
  authors: [{ name: 'Adınız Soyadınız', url: 'https://your-website.com' }],
  openGraph: {
    title: 'TypeScript Quizleri | My Website',
    description: 'TypeScript becerilerinizi geliştirmek ve ilerlemenizi görmek için çeşitli quizlere katılın.',
    type: 'website',
    url: 'https://your-website.com/quizler',
    images: [
      {
        url: 'https://your-website.com/path_to_image.jpg', // Mutlaka tam URL olmalı
        width: 800,
        height: 600,
        alt: 'Açıklama yazısı', // Opsiyonel
      },
    ],  },
  twitter: {
    card: 'summary_large_image',
    title: 'TypeScript Quizleri | My Website',
    description: 'TypeScript becerilerinizi geliştirmek ve ilerlemenizi görmek için çeşitli quizlere katılın.',
    images: [
      {
        url: 'https://your-website.com/path_to_image.jpg', // Mutlaka tam URL olmalı
        width: 800,
        height: 600,
        alt: 'Açıklama yazısı', // Opsiyonel
      },
    ],  },
}

const page = () => {
  return (
    <div>
      {/* Quiz Kartları */}
      <div className="p-6 container mx-auto">
        <PageTitle title="TypeScript Quizleri" />
        <MainParagraph text="TypeScript becerilerinizi geliştirmek ve ne kadar ilerlediğinizi görmek için çeşitli quizlere katılabilirsiniz. Aşağıdaki listede, her seviyeye uygun quizler bulunmaktadır. Başlamak için birini seçin ve kendinizi test edin!" />

        {quizler.map((quiz, index) => (
          <QuizCard key={quiz.id} quiz={quiz} index={index} />
        ))}
      </div>
    </div>
  )
}

export default page
