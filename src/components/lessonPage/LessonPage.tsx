"use client";
import React, { useState } from 'react';
import LessonCard from './LessonCard';
import { dersler } from '@/data/dersler';

const LessonPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const lessonsPerPage = 4; // Her sayfada 4 ders gösterilecek

  // Sayfaya göre dersleri filtrele
  const indexOfLastLesson = currentPage * lessonsPerPage;
  const indexOfFirstLesson = indexOfLastLesson - lessonsPerPage;
  const currentLessons = dersler.slice(indexOfFirstLesson, indexOfLastLesson);

  // Sayfa sayısını hesapla
  const totalPages = Math.ceil(dersler.length / lessonsPerPage);

  // Sayfa değiştirme fonksiyonu
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      {currentLessons.map((ders, index) => (
        <LessonCard key={index} lesson={ders} index={indexOfFirstLesson + index} />
      ))}

      {/* Sayfalama */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-custom-gray text-white rounded-md disabled:bg-custom-blue"
        >
          Önceki
        </button>

        <span className="flex items-center text-lg font-semibold text-gray-700">
          Sayfa {currentPage} / {totalPages}
        </span>

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="text-sm md:text-md px-3 py-1 md:py-2 bg-custom-gray text-white rounded-md disabled:bg-custom-blue"
        >
          Sonraki
        </button>
      </div>
    </div>
  );
};

export default LessonPage;
