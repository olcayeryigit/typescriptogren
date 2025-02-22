import CodeBlock from "@/components/common/CodeBlock";
import PageTitle from "@/components/common/PageTitle";
import Subtitle from "@/components/common/SubTitle";
import SummaryBox from "@/components/common/SummaryBox";
import {  Terminal, Wrench } from "lucide-react";
import React from "react";

const TypeScriptKurulumu = () => {
  
  return (
    <div className="container mx-auto  p-6">
      <PageTitle title="TypeScript Kurulumu" />
      <Subtitle text="Bilgisayarınıza TypeScript'i nasıl kuracağınızı öğrenin." />

      {/* Node.js ve npm Kontrolü */}
      <div className="mt-8 bg-white p-2 border-2 border-custom-gray">
        <h3 className="flex items-center text-xl font-semibold text-custom-blue mb-2">
          <Terminal className="text-custom-blue mr-2" size={22} />
          Node.js ve npm&apos;in Kurulu Olduğundan Emin Olun
        </h3>
        <p className="text-gray-700">TypeScript&apos;i kullanabilmek için öncelikle <strong>Node.js</strong> ve <strong>npm</strong> kurulu olmalıdır. Terminal veya komut satırına aşağıdaki komutları yazarak kontrol edebilirsiniz:</p>
        <CodeBlock code={`node -v\nnpm -v`} />
      </div>

      {/* TypeScript Kurulumu */}
      <div className="mt-8 bg-white p-2 border-2 border-custom-gray">
        <h3 className="flex items-center text-xl font-semibold text-custom-blue mb-2">
          <Wrench className="text-custom-blue mr-2" size={22} />
          TypeScript&apos;i Global Olarak Yükleyin
        </h3>
        <p className="text-gray-700">TypeScript&apos;i npm ile yüklemek için şu komutu çalıştırın:</p>
        <CodeBlock code={`npm install -g typescript`} />
        <p className="text-gray-700">Yüklemenin başarılı olup olmadığını kontrol etmek için:</p>
        <CodeBlock code={`tsc -v`} />
      </div>

      {/* Proje Başlatma */}
      <div className="mt-8 bg-gray-50 p-3 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-xl font-semibold text-custom-blue mb-3">TypeScript Projesi Başlatma</h3>
        <p className="text-gray-700">Yeni bir TypeScript projesi oluşturmak için aşağıdaki adımları takip edin:</p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Yeni bir proje klasörü oluşturun:</strong> <code>mkdir typescript-projem && cd typescript-projem</code></li>
          <li><strong>TypeScript yapılandırma dosyasını oluşturun:</strong> <code>tsc --init</code></li>
          <li><strong>Bir <code>index.ts</code> dosyası oluşturup içerisine TypeScript kodları yazabilirsiniz.</strong></li>
        </ul>
      </div>

      {/* Derleme */}
      <div className="mt-8 bg-white p-2 border-2 border-custom-gray">
        <h3 className="text-xl font-semibold text-custom-blue mb-2">TypeScript Kodlarını Derleme</h3>
        <p className="text-gray-700">TypeScript dosyanızı JavaScript&apos;e çevirmek için şu komutu çalıştırabilirsiniz:</p>
        <CodeBlock code={`tsc index.ts`} />
        <p className="text-gray-700">Bu işlem sonucunda <code>index.js</code> dosyası oluşacaktır.</p>
      </div>

      {/* Özet */}

      <SummaryBox text="Bu adımları takip ederek bilgisayarınıza TypeScript'i kurabilir ve ilk TypeScript projenizi oluşturabilirsiniz." />

  
    </div>
  );
};

export default TypeScriptKurulumu;
