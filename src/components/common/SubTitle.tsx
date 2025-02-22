import React from "react";

interface SubtitleProps {
  text: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ text }) => {
  return (
    <h2 className="text-xl font-semibold text-custom-blue text-center mt-4 mb-2">
      {text}
    </h2>
  );
};

export default Subtitle;
