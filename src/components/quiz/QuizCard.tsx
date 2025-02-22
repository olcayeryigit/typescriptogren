import React from "react";
import Link from "next/link";
import { ClipboardList, ArrowRight } from "lucide-react";

interface Quiz {
  id: string;
  title: string;
  slug: string;
  description: string;
}

interface QuizCardProps {
  quiz: Quiz;
  index: number;
}

const QuizCard: React.FC<QuizCardProps> = ({ quiz, index }) => {
  return (
    <div className="group relative rounded-lg transition-all duration-300 border-2 border-custom-gray bg-white hover:border-custom-blue  hover:bg-gray-100 p-6 mb-4 overflow-hidden shadow-sm hover:shadow-md">
      {/* Hover Efekti için Opak Arka Plan */}
      <div className="absolute inset-0 bg-custom-blue opacity-0 transition-all duration-300"></div>

      <Link href={`/quiz/${quiz.slug}`} className="relative z-10 block">
        <div className="flex items-center gap-3">
          <ClipboardList className="text-custom-blue" size={22} />
          <p className="text-lg font-bold text-custom-gray transition-all duration-300">
            Quiz - {index + 1}: <span className="text-custom-blue">{quiz.title}</span>
          </p>
        </div>
        <p className="text-sm text-gray-600 mt-2 transition-all duration-300">
          {quiz.description}
        </p>

        {/* Buton */}
        <div className="inline-flex mt-3 px-3 py-2 items-center gap-2 bg-custom-blue border border-custom-blue text-white rounded-md transition-all duration-300 group-hover:bg-white group-hover:text-custom-blue">
          <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={18} />
          <span>Quiz&apos;e git</span>
        </div>
      </Link>
    </div>
  );
};

export default QuizCard;