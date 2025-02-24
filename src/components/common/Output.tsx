import React from "react";

type OutputProps = {
  title?: string;
  content: string;
  isCode?: boolean;
};

const Output: React.FC<OutputProps> = ({ title, content, isCode = false }) => {
  return (
    <div className="bg-green-200 p-4  mt-4 ">
      {title && <h2 className="text-lg font-semibold mb-2">{title}</h2>}
      {isCode ? (
        <pre className="bg-black text-green-400 p-3  overflow-x-auto">
          <code>{content}</code>
        </pre>
      ) : (
        <p className="text-gray-800">{content}</p>
      )}
    </div>
  );
};
export default Output;
