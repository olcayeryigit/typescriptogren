interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "TypeScript nedir?",
    answer: "TypeScript, Microsoft tarafından geliştirilen ve JavaScript'in üzerine inşa edilen, statik tür sistemine sahip bir programlama dilidir."
  },
  {
    question: "JavaScript ile TypeScript arasındaki fark nedir?",
    answer: "JavaScript dinamik türlere sahiptir, TypeScript ise statik tür kontrolü yaparak hataları erken aşamada yakalamayı sağlar."
  },
  {
    question: "TypeScript zor mu?",
    answer: "Eğer JavaScript biliyorsanız, TypeScript öğrenmek çok zor değildir. Statik tipler ve derleyici hatalarına alışmak başlangıçta zor gelebilir, ancak uzun vadede yazılım geliştirmeyi kolaylaştırır."
  },
  {
    question: "TypeScript kullanmalı mıyım?",
    answer: "Eğer büyük ve ölçeklenebilir bir proje yapıyorsanız veya hataları önceden yakalamak istiyorsanız, TypeScript kullanmanız önerilir."
  }
];

export default faqs;
