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
<PageTitle title="TypeScript Nedir? – Güçlü ve Güvenli JavaScript" />
<Subtitle text="JavaScript'in güçlü bir süper seti olan TypeScript'i keşfedin!" />
<MainParagraph text="TypeScript, JavaScript'in güçlü ve statik tür destekli bir sürümüdür. Microsoft tarafından geliştirilmiş olup, büyük ölçekli projelerde hata oranını azaltır, kod okunabilirliğini artırır ve daha güvenli bir geliştirme süreci sunar. TypeScript ile modern yazılım geliştirmede bir adım öne geçin!" />

<div className="mt-8 bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
  <h3 className="flex items-center text-xl font-semibold text-custom-blue mb-3">
    <CircleCheck className="text-custom-blue mr-2" size={22} />
    TypeScript’in Öne Çıkan Avantajları
  </h3>
  <ul className="list-disc list-inside text-gray-700 space-y-2 text-base">
    <li><strong>Statik Tür Desteği:</strong> Hataları daha kod yazım aşamasında tespit eder, daha güvenilir ve hata oranı düşük projeler oluşturmanıza yardımcı olur.</li>
    <li><strong>Modern JavaScript Desteği:</strong> ES6, ES7 ve daha yeni JavaScript özellikleriyle tamamen uyumludur ve geliştiricilere en güncel sözdizimi avantajlarını sunar.</li>
    <li><strong>Daha Okunabilir ve Ölçeklenebilir Kod:</strong> Büyük projelerde kod organizasyonunu iyileştirerek, ekip çalışmasını kolaylaştırır ve sürdürülebilirliği artırır.</li>
    <li><strong>Gelişmiş IDE ve Otomatik Tamamlama:</strong> Visual Studio Code gibi popüler editörlerde daha iyi hata yakalama, otomatik tamamlama (autocomplete) ve refactoring desteği sağlar.</li>
    <li><strong>Güçlü OOP Desteği:</strong> Sınıflar, arayüzler ve soyutlamalar (abstraction) gibi nesne yönelimli programlama (OOP) prensiplerini destekleyerek temiz ve yapılandırılmış kod yazmayı teşvik eder.</li>
    <li><strong>JavaScript ile Tam Uyum:</strong> Mevcut JavaScript projelerine kolayca entegre edilebilir ve esnek kullanım sunar.</li>
    <li><strong>Topluluk ve Sürekli Güncellenme:</strong> Microsoft tarafından aktif olarak geliştirildiği için düzenli güncellemeler alır ve büyük bir topluluk tarafından desteklenir.</li>
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
