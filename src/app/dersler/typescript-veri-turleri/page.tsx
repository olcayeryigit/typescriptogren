import type { Metadata } from "next";
import MainParagraph from "@/components/common/MainParagraph";
import PageTitle from "@/components/common/PageTitle";
import Subtitle from "@/components/common/SubTitle";
import SummaryBox from "@/components/common/SummaryBox";
import CodeBlock from "@/components/common/CodeBlock";
import React from "react";
import Output from "@/components/common/Output";

export const metadata: Metadata = {
  title: "TypeScript Veri Türleri | TypeScript Öğrenin",
  description: "TypeScript'in güçlü tip sistemi ile temel veri türlerini keşfedin ve daha güvenli kod yazın.",
  keywords: ["TypeScript veri türleri", "TypeScript string", "TypeScript number", "TypeScript boolean", "Statik tipleme"],
  alternates: { canonical: "https://www.typescriptogren.com/dersler/typescript-veri-turleri" },
  openGraph: {
    title: "TypeScript Veri Türleri | TypeScript Öğrenin",
    description: "TypeScript veri türleriyle kodunuzu daha güvenli hale getirin. String, number, boolean ve daha fazlasını öğrenin.",
    url: "https://www.typescriptogren.com/dersler/typescript-veri-turleri",
    type: "article"
  }
};

const Page = () => {
  return (
    <div className="container mx-auto p-6">
 <PageTitle title="TypeScript Veri Türleri: Temelleri Keşfedin" />
<Subtitle text="TypeScript'teki veri türleri hakkında bilgi edinin" />
<MainParagraph text="TypeScript, değişkenlerin türünü belirleyerek kodunuzu daha güvenilir hale getirir. Şimdi, TypeScript'teki en temel veri türlerine göz atalım:" />

<div className="mt-8 bg-white p-2 border-2 border-custom-gray">
  <h3 className="font-bold text-custom-blue">1. String (Metin)</h3>
  <p className="text-custom-gray">Metin değerleri için <code>string</code> kullanılır.</p>
  <CodeBlock code={`let mesaj: string = "Merhaba, TypeScript!";`} />
</div>

<div className="mt-6 bg-white p-2 border-2 border-custom-gray">
  <h3 className="font-bold text-custom-blue">2. Number (Sayı)</h3>
  <p className="text-custom-gray">Sayılar için <code>number</code> türü kullanılır.</p>
  <CodeBlock code={`let yas: number = 30;`} />
</div>

<div className="mt-6 bg-white p-2 border-2 border-custom-gray">
  <h3 className="font-bold text-custom-blue">3. Boolean (Mantıksal Değer)</h3>
  <p className="text-custom-gray">Mantıksal değerler <code>true</code> veya <code>false</code> olabilir.</p>
  <CodeBlock code={`let aktif: boolean = true;`} />
</div>

<div className="mt-6 bg-white p-2 border-2 border-custom-gray">
  <h3 className="font-bold text-custom-blue">4. Array (Dizi)</h3>
  <p className="text-custom-gray">Birden fazla değeri tutmak için <code>array</code> kullanılır.</p>
  <CodeBlock code={`let sayilar: number[] = [10, 20, 30];`} />
</div>

<div className="mt-6 bg-white p-2 border-2 border-custom-gray">
  <h3 className="font-bold text-custom-blue">5. Tuple (Dizinin Tipi Belirtilmiş Hali)</h3>
  <p className="text-custom-gray">Bazı diziler belirli türlerde olabilir.</p>
  <CodeBlock code={`let kisi: [string, number] = ["Ahmet", 25];`} />
</div>

<div className="mt-6 bg-white p-2 border-2 border-custom-gray">
  <h3 className="font-bold text-custom-blue">6. Enum (Sıralı Sabitler)</h3>
  <p className="text-custom-gray">Enum ile belirli değerleri isimlendirerek yönetebilirsiniz.</p>
  <CodeBlock
    code={`enum Renk {
  Kirmizi,
  Yesil,
  Mavi
}
let benimRenk: Renk = Renk.Yesil;`}
  />
</div>

<div className="mt-6 bg-white p-2 border-2 border-custom-gray">
  <h3 className="font-bold text-custom-blue">7. Any (Her Tür)</h3>
  <p className="text-custom-gray">Herhangi bir türde değer alabilecek bir değişken için <code>any</code> kullanılır.</p>
  <CodeBlock code={`let herhangiBirDeger: any = "Merhaba";`} />
</div>

<div className="mt-6 bg-white p-2 border-2 border-custom-gray">
  <h3 className="font-bold text-custom-blue">8. Void (Boş Değer)</h3>
  <p className="text-custom-gray">Bir fonksiyon herhangi bir değer döndürmediğinde <code>void</code> kullanılır.</p>
  <CodeBlock code={`function yazdir(): void {
  console.log("Merhaba");
}`} />
</div>

<div className="mt-6 bg-white p-2 border-2 border-custom-gray">
  <h3 className="font-bold text-custom-blue">9. Null ve Undefined</h3>
  <p className="text-custom-gray"><code>null</code> ve <code>undefined</code> her ikisi de belirli bir değerin olmadığını belirtir, ancak farklı anlamlara gelirler.</p>
  <CodeBlock code={`let degersiz: null = null;
let tanimsiz: undefined = undefined;`} />
</div>

<div className="mt-6 bg-white p-2 border-2 border-custom-gray">
  <h3 className="font-bold text-custom-blue">10. Object (Nesne)</h3>
  <p className="text-custom-gray">Bir nesne oluşturmak için <code>object</code> türü kullanılır.</p>
  <CodeBlock code={`let kisi: object = { ad: "Ahmet", yas: 30 };`} />
</div>

<div className="mt-6 bg-white p-2 border-2 border-custom-gray">
  <h3 className="font-bold text-custom-blue">11. Unknown (Bilinmeyen Tip)</h3>
  <p className="text-custom-gray">Bir değişkenin türü bilinmediğinde <code>unknown</code> kullanılır. Ancak bu tür ile çalışmadan önce türünü doğrulamak gereklidir.</p>
  <CodeBlock code={`let bilinmeyen: unknown = "Merhaba";
if (typeof bilinmeyen === "string") {
  console.log(bilinmeyen.length);
}`} />
</div>
<Output title="Output" content="7
" isCode={true} />

<SummaryBox text="TypeScript veri türleri, kodunuzun daha düzenli ve güvenli olmasını sağlar." />

    </div>
  );
};

export default Page;
