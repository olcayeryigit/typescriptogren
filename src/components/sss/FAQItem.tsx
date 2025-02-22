"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <li className="border-2 border-custom-blue rounded-lg overflow-hidden transition-all duration-300">
      <button
        onClick={toggleFAQ}
        className="flex justify-between items-center w-full text-left p-4 bg-gray-100 hover:bg-gray-200 transition-all duration-300"
      >
        <span className="text-lg font-semibold">{question}</span>
        <FaChevronDown className={`text-custom-blue transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100 p-4" : "grid-rows-[0fr] opacity-0 p-0"}`}>
        <p className="text-custom-gray overflow-hidden">{answer}</p>
      </div>
    </li>
  );
};

export default FAQItem;
