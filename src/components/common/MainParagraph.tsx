import React from "react";

interface MainParagraphProps {
  text: string;
}

const MainParagraph: React.FC<MainParagraphProps> = ({ text }) => {
  return (
    <p className="mt-4 text-center text-lg text-gray-700 px-8 py-3 leading-relaxed  bg-gray-50 ">
      {text}
    </p>
  );
};

export default MainParagraph;
