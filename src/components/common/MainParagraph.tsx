import React from "react";

interface MainParagraphProps {
  text: string;
}

const MainParagraph: React.FC<MainParagraphProps> = ({ text }) => {
  return (
    <p className="text-sm  md:text-lg text-custom-gray text-center px-6 sm:px-8 py-3 sm:py-4 leading-relaxed bg-custom-blue-3 my-4 sm:my-6">
    {text}
  </p>
  
  );
};

export default MainParagraph;
