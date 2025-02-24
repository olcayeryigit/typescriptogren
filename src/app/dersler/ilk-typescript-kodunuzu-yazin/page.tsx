import type { Metadata } from "next";
import CodeBlock from "@/components/common/CodeBlock";
import MainParagraph from "@/components/common/MainParagraph";
import PageTitle from "@/components/common/PageTitle";
import Subtitle from "@/components/common/SubTitle";
import SummaryBox from "@/components/common/SummaryBox";
import { CircleCheck, Code } from "lucide-react";
import React from "react";
import Output from "@/components/common/Output";

export const metadata: Metadata = {
  title: "İlk TypeScript Kodunuzu Yazın",
  description:
    "Bu rehberde, TypeScript ile ilk kodunuzu nasıl yazacağınızı, derleyip çalıştıracağınızı adım adım öğreneceksiniz.",
  keywords: [
    "TypeScript",
    "JavaScript",
    "TypeScript dersleri",
    "TypeScript başlangıç",
    "TypeScript öğrenme",
    "tsc",
    "TypeScript nedir",
  ],
  alternates: {
    canonical: "https://www.typescriptogren.com/dersler/ilk-typescript-kodunuzu-yazin"
    },
  openGraph: {
    title: "İlk TypeScript Kodunuzu Yazın",
    description:
      "TypeScript ile ilk programınızı yazın ve çalıştırın! Adım adım rehberimizi takip edin.",
    url: "https://www.typescriptogren.com/dersler/ilk-typescript-kodunuzu-yazin",
    type: "article",
    images: [
      {
        url: "https://seninsiten.com/static/images/typescript-guide.png",
        alt: "TypeScript öğrenme rehberi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "İlk TypeScript Kodunuzu Yazın",
    description:
      "TypeScript'e giriş yapmak isteyenler için adım adım ilk kod yazma rehberi!",
    images: ["https://seninsiten.com/static/images/typescript-guide.png"],
  },
  authors: [{ name: "Olcay", url: "https://seninsiten.com" }],
  robots: {
    index: true,
    follow: true,
  },
};

const IlkTypeScriptKodu = () => {
  const sampleCode = `function selamVer(isim: string): string {
  return \`Merhaba, \${isim}! TypeScript öğrenmeye hoş geldin.\`;
}

console.log(selamVer("Ahmet"));`;

  return (
    <div className="container mx-auto p-6">
      <PageTitle title="İlk TypeScript Kodunuzu Yazın" />
<Subtitle text="TypeScript ile güçlü ve güvenli kod yazmaya başlayın!" />
<MainParagraph text="TypeScript'in gücünü keşfetmeye hazır mısınız? Bu bölümde, ilk TypeScript dosyanızı oluşturacak, temel sözdizimini öğrenecek ve kodlarınızı nasıl derleyebileceğinizi adım adım göreceksiniz. Hemen başlayın ve modern yazılım geliştirmeye sağlam bir adım atın!" />

      {/* Adım 1: Yeni Bir Dosya Oluşturma */}
      <div className="mt-8 bg-white p-2 border-2 border-custom-gray">
        <h3 className="flex items-center text-xl font-semibold text-custom-blue mb-2">
          <CircleCheck className="text-custom-blue mr-2" size={22} />
          1. Yeni Bir Dosya Açın
        </h3>
        <p><code>index.ts</code> adında bir dosya oluşturun ve aşağıdaki kodu yazın:</p>
        <CodeBlock code={sampleCode} />
      </div>
      <Output title="Output" content="Merhaba, Ahmet! TypeScript öğrenmeye hoş geldin.
" isCode={true} />


      {/* Adım 2: TypeScript'i JavaScript'e Dönüştürme */}
      <div className="mt-8 bg-white p-2 border-2 border-custom-gray">
        <h3 className="flex items-center text-xl font-semibold text-custom-blue mb-2">
          <Code className="text-custom-blue mr-2" size={22} />
          2. TypeScript Kodunuzu JavaScript&apos;e Dönüştürün
        </h3>
        <p>Terminalde şu komutu çalıştırarak dosyanızı derleyin:</p>
        <CodeBlock code={`tsc index.ts`} />
        <p>Bu işlem sonucunda <code>index.js</code> adlı bir dosya oluşur.</p>
      </div>

      {/* Adım 3: JavaScript Dosyasını Çalıştırma */}
      <div className="mt-8 bg-white p-2 border-2 border-custom-gray">
        <h3 className="flex items-center text-xl font-semibold text-custom-blue mb-2">
          <Code className="text-custom-blue mr-2" size={22} />
          3. JavaScript Dosyanızı Çalıştırın
        </h3>
        <p>Oluşan <code>index.js</code> dosyasını şu komut ile çalıştırabilirsiniz:</p>
        <CodeBlock code={`node index.js`} />
      </div>

      {/* Özet */}
      <SummaryBox text="Bu adımları tamamladıktan sonra ilk TypeScript programınızı başarıyla çalıştırmış olacaksınız." />
    </div>
  );
};

export default IlkTypeScriptKodu;
