import MainParagraph from '@/components/common/MainParagraph'
import PageTitle from '@/components/common/PageTitle'
import QuizCard from '@/components/quiz/QuizCard'
import { quizler } from '@/data/quiz'
import React from 'react'

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