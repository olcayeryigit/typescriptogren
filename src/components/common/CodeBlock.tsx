import React from "react";

interface CodeBlockProps {
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  // Yorum satırlarını yeşil yapacak şekilde işliyoruz
  const kodHtml = code.replace(/(\/\/.*)/g, '<span class="comment">$1</span>');

  return (
    <pre className="code-block">
      <code dangerouslySetInnerHTML={{ __html: kodHtml }} />
    </pre>
  );
};

export default CodeBlock;
