import type { Metadata } from "next";
import MainParagraph from "@/components/common/MainParagraph";
import PageTitle from "@/components/common/PageTitle";
import Subtitle from "@/components/common/SubTitle";
import CodeBlock from "@/components/common/CodeBlock";
import SummaryBox from "@/components/common/SummaryBox";
import React from "react";

export const metadata: Metadata = {
  title: "TypeScript Union ve Intersection Types | TypeScript Öğrenin",
  description: "TypeScript'te Union ve Intersection Types ile veri modellerini daha esnek hale getirmeyi öğrenin. Farklı türleri bir araya getirerek güçlü tip sistemleri oluşturun.",
  keywords: ["TypeScript", "Union Types", "Intersection Types", "TypeScript Type", "TypeScript Öğren", "Frontend Geliştirme"],
  alternates: {
    canonical: "https://www.typescriptogren.com/dersler/typescript-union-intersection"
    },
  openGraph: {
    title: "TypeScript Union ve Intersection Types | TypeScript Öğrenin",
    description: "TypeScript Union ve Intersection Types ile değişkenlerinizi nasıl daha esnek hale getireceğinizi öğrenin. Pratik örneklerle açıklamalar!",
    url: "https://typescriptogren.com/typescript-union-intersection",
    type: "article"
  }
};

const Page = () => {
  return (
    <div className="container mx-auto p-6">
      <PageTitle title="TypeScript Union ve Intersection Types" />
      <Subtitle text="TypeScript'te farklı veri türlerini nasıl bir arada kullanabileceğinizi öğrenin." />
      <MainParagraph text="TypeScript'te farklı veri türlerini nasıl bir arada kullanabileceğinizi öğrenin." />

      <h3 className="font-bold mt-4 text-custom-gray">1. Union Type</h3>
      <p className="text-custom-gray">
        <strong>Union Type</strong>, bir değişkenin birden fazla türde olmasına izin verir.
      </p>
      <CodeBlock
        code={`let skor: string | number;
skor = 95;      // ✅ Geçerli
skor = "A+";    // ✅ Geçerli`}
      />

      <h3 className="font-bold mt-4 text-custom-gray">2. Intersection Type</h3>
      <p className="text-custom-gray">
        <strong>Intersection Type</strong>, birden fazla türü birleştirerek daha karmaşık veri yapıları oluşturmanıza olanak tanır.
      </p>
      <CodeBlock
        code={`interface Kisi {
  isim: string;
}

interface Calisan {
  sirket: string;
}

type KisiCalisan = Kisi & Calisan;

const calisan: KisiCalisan = {
  isim: "Ahmet",
  sirket: "OpenAI"
};`}
      />

      <SummaryBox text="Union Types, değişkenlerin birden fazla türde olmasını sağlar. Intersection Types ise iki veya daha fazla türü birleştirerek esnek veri modelleri oluşturmanıza yardımcı olur." />
    </div>
  );
};

export default Page;
