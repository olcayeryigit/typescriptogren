import React from "react";

interface SubtitleProps {
  text: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ text }) => {
  return (
<h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-custom-blue text-center mt-4 sm:mt-6 mb-2 sm:mb-4">
  {text}
</h2>

  );
};

export default Subtitle;
