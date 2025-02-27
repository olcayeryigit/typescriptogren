import React from "react";

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-custom-gray tracking-tight text-center my-6">
    {title} - Typescript Öğren
  </h1>
  
  );
};

export default PageTitle;
