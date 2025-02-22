import MainParagraph from '@/components/common/MainParagraph';
import PageTitle from '@/components/common/PageTitle';
import Subtitle from '@/components/common/SubTitle';
import SummaryBox from '@/components/common/SummaryBox';
import CodeBlock from '@/components/common/CodeBlock';
import React from 'react';

const Page = () => {
  return (
    <div className="container mx-auto p-6">
      <PageTitle title="TypeScript Veri Türleri" />
      <Subtitle text="TypeScript'teki temel veri türlerini öğrenin" />
      <MainParagraph text="TypeScript, değişkenlerin türünü belirleyerek daha güvenli kod yazmamızı sağlar. İşte temel veri türleri:" />
      
      <div className='mt-8 bg-white p-2 border-2 border-custom-gray'>
      <h3 className="font-bold text-custom-blue">1. String (Metin)</h3>
      <p className="text-custom-gray">Metin değerleri için <code>string</code> kullanılır.</p>
      <CodeBlock code={`let mesaj: string = "Merhaba, TypeScript!";`} />
</div>

<div className='mt-6 bg-white p-2 border-2 border-custom-gray'>
      <h3 className="font-bold text-custom-blue">2. Number (Sayı)</h3>
      <p className="text-custom-gray">Sayılar için <code>number</code> türü kullanılır.</p>
      <CodeBlock code={`let yas: number = 30;`} />
      </div>

      <div className='mt-6 bg-white p-2 border-2 border-custom-gray'>
      <h3 className="font-bold text-custom-blue">3. Boolean (Mantıksal Değer)</h3>
      <p className="text-custom-gray">Mantıksal değerler <code>true</code> veya <code>false</code> olabilir.</p>
      <CodeBlock code={`let aktif: boolean = true;`} />
      </div>


      <div className='mt-6 bg-white p-2 border-2 border-custom-gray'>
      <h3 className="font-bold text-custom-blue">4. Array (Dizi)</h3>
      <p className="text-custom-gray">Birden fazla değeri tutmak için <code>array</code> kullanılır.</p>
      <CodeBlock code={`let sayilar: number[] = [10, 20, 30];`} />
      </div>



      <div className='mt-6 bg-white p-2 border-2 border-custom-gray'>
      <h3 className="font-bold text-custom-blue">5. Tuple (Dizinin Tipi Belirtilmiş Hali)</h3>
      <p className="text-custom-gray">Bazı diziler belirli türlerde olabilir.</p>
      <CodeBlock code={`let kisi: [string, number] = ["Ahmet", 25];`} />
      </div>



      <div className='mt-6 bg-white p-2 border-2 border-custom-gray'>
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

      <SummaryBox text="TypeScript veri türleri, kodunuzun daha düzenli ve güvenli olmasını sağlar." />
    </div>
  );
};

export default Page;
