import type { Metadata } from "next";
import CodeBlock from "@/components/common/CodeBlock";
import MainParagraph from "@/components/common/MainParagraph";
import PageTitle from "@/components/common/PageTitle";
import Subtitle from "@/components/common/SubTitle";
import SummaryBox from "@/components/common/SummaryBox";
import { CircleCheck, Code } from "lucide-react";
import React from "react";

export const metadata: Metadata = {
  title: "TypeScript Nedir? | TypeScript Öğrenin",
  description: "TypeScript'in ne olduğunu, özelliklerini ve JavaScript'ten farklarını keşfedin. Statik tipleme ve modern JavaScript desteği ile kod kalitenizi artırın.",
  keywords: ["TypeScript", "TypeScript nedir", "JavaScript vs TypeScript", "Statik Tipleme", "Frontend", "Web Geliştirme"],
  alternates: {
    canonical: "https://www.typescriptogren.com/dersler/typescript-nedir"
    },
  openGraph: {
    title: "TypeScript Nedir? | TypeScript Öğrenin",
    description: "TypeScript, JavaScript'in güçlü bir süper setidir. Statik tipleme, ES6+ desteği ve okunabilir kod avantajlarıyla projelerinizi daha sağlam hale getirin.",
    url: "https://www.typescriptogren.com/dersler/typescript-nedir",
    type: "article"
  }
};

const TypeScriptNedir = () => {
  const sampleCode = `// JavaScript'te bir değişken
let isim = "Ahmet";  // Hata vermez, ama yanlışlıkla sayı da atanabilir!

// TypeScript ile daha güvenli bir yaklaşım
let isimTS: string = "Ahmet";  // Artık sadece string olabilir!`;

  return (
    <div className="container mx-auto p-6">
      <PageTitle title="TypeScript Nedir?" />
      <Subtitle text="JavaScript'in güçlü bir süper seti olan TypeScript'i keşfedin!" />
      <MainParagraph text="TypeScript, JavaScript'in daha güçlü ve güvenli bir sürümüdür. Microsoft tarafından geliştirilmiş olup, büyük ölçekli projelerde kod kalitesini artırmaya yardımcı olur." />

      <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="flex items-center text-xl font-semibold text-custom-blue mb-3">
          <CircleCheck className="text-custom-blue mr-2" size={22} />
          TypeScript’in Öne Çıkan Özellikleri
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Statik Tipleme:</strong> Hataları daha erken yakalarsınız.</li>
          <li><strong>Modern ES6+ Desteği:</strong> Yeni nesil JavaScript özelliklerini kullanabilirsiniz.</li>
          <li><strong>Daha Okunabilir Kod:</strong> Büyük projelerde sürdürülebilirlik sağlar.</li>
        </ul>
      </div>

      <div className="mt-8 bg-white p-2 border-2 border-custom-gray">
        <h3 className="flex items-center text-xl font-semibold text-custom-blue mb-2">
          <Code className="text-custom-blue mr-2" size={22} />
          Kod Örneği
        </h3>
        <CodeBlock code={sampleCode} />
      </div>

      <SummaryBox text="TypeScript, hataları minimize eder, kodunuzu daha sağlam ve güvenli hale getirir." />
    </div>
  );
};

export default TypeScriptNedir;
