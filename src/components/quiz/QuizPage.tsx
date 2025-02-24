"use client";
import { quizler } from '@/data/quiz'
import React, { useState } from 'react'
import QuizCard from './QuizCard'

const QuizPage = () => {
  const quizzesPerPage = 4// Her sayfada 4 quiz gösterilecek
  const [currentPage, setCurrentPage] = useState(1) // Şu anki sayfa numarası

  // Total pages hesaplanıyor
  const totalPages = Math.ceil(quizler.length / quizzesPerPage)

  // Şu anki sayfaya göre slice edilen quiz listesi
  const currentQuizzes = quizler.slice(
    (currentPage - 1) * quizzesPerPage,
    currentPage * quizzesPerPage
  )

  // Sayfa değiştirme fonksiyonu
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div>
      <div>
        {currentQuizzes.map((quiz, index) => (
          <QuizCard key={quiz.id} quiz={quiz} index={index} />
        ))}
      </div>

      {/* Pagination kısmı */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-custom-gray text-white rounded-md disabled:bg-custom-blue"
        >
          Önceki
        </button>
        
        <span className="flex items-center text-lg font-semibold text-gray-700">
          Sayfa {currentPage} / {totalPages}
        </span>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="text-sm md:text-md px-3 py-1 md:py-2 bg-custom-gray text-white rounded-md disabled:bg-custom-blue"
        >
          Sonraki
        </button>
      </div>
    </div>
  )
}

export default QuizPage
