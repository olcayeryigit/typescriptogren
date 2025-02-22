import CodeBlock from "@/components/common/CodeBlock";
import MainParagraph from "@/components/common/MainParagraph";
import PageTitle from "@/components/common/PageTitle";
import Subtitle from "@/components/common/SubTitle";
import SummaryBox from "@/components/common/SummaryBox";
import { CircleCheck, Code } from "lucide-react";
import React from "react";

const IlkTypeScriptKodu = () => {
  const sampleCode = `function selamVer(isim: string): string {
  return \`Merhaba, \${isim}! TypeScript öğrenmeye hoş geldin.\`;
}

console.log(selamVer("Ahmet"));`;

  return (
    <div className="container mx-auto p-6">
      <PageTitle title="İlk TypeScript Kodunuzu Yazın" />
      <Subtitle text="TypeScript ile ilk uygulamanızı oluşturun." />
      <MainParagraph text="TypeScript ile basit bir uygulama oluşturmayı adım adım öğrenin." />

      {/* Adım 1: Yeni Bir Dosya Oluşturma */}
      <div className="mt-8 bg-white p-2 border-2 border-custom-gray">
        <h3 className="flex items-center text-xl font-semibold text-custom-blue mb-2">
          <CircleCheck className="text-custom-blue mr-2" size={22} />
          1. Yeni Bir Dosya Açın
        </h3>
        <p><code>index.ts</code> adında bir dosya oluşturun ve aşağıdaki kodu yazın:</p>
        <CodeBlock code={sampleCode} />
      </div>

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
