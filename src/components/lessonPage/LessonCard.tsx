import React from "react";
import Link from "next/link";
import { NotebookPen, ArrowRight } from "lucide-react";

interface Lesson {
  baslik: string;
  link: string;
  aciklama: string;
}

interface LessonCardProps {
  lesson: Lesson;
  index: number;
}

const LessonCard: React.FC<LessonCardProps> = ({ lesson, index }) => {

  return (
    <div className="group bg-white rounded-lg transition-all duration-300 border-2 border-custom-gray hover:border-custom-blue p-5 mb-4 relative overflow-hidden">
      {/* Hover Arka Plan Efekti */}
      <div className="absolute inset-0 bg-custom-blue opacity-0 group-hover:opacity-10 transition-all duration-300"></div>

      <Link href={lesson.link} prefetch={false} className="relative z-10 block">
        <div className="flex items-center gap-3">
          <NotebookPen className="text-custom-blue" size={22} />
          <span className="text-lg font-semibold text-custom-blue">{index + 1}.</span>
          <h2 className="text-lg font-semibold text-custom-gray">{lesson.baslik}</h2>
        </div>
        <p className="text-sm text-gray-600 mt-2 group-hover:text-gray-800 transition-all duration-300">
          {lesson.aciklama}
        </p>

        {/* Buton */}
        <div className="inline-flex mt-3 px-3 py-2 items-center gap-2 bg-custom-blue border-2 border-custom-blue text-white rounded-md transition-all duration-300 group-hover:bg-white group-hover:text-custom-blue shadow-sm hover:shadow-md">
          <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={18} />
          <span>Derse git</span>
        </div>
      </Link>
    </div>
  );
};

export default LessonCard;
