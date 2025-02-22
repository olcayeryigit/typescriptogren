export const quizler: Quiz[] = [
    {
        id: "quiz1",
        title: "TypeScript Temelleri",
        slug: "typescript-temelleri",
        description:"TypeScript'in temel özelliklerini ve sözdizimini test edin. Değişkenler, fonksiyonlar ve daha fazlasını keşfedin.",
        sorular: [
            {
                id: "1",
                soru: "TypeScript'in temel amacı nedir?",
                secenekler: ["Veri tabanı yönetmek", "JavaScript'e statik tipler eklemek", "CSS kodlarını optimize etmek"],
                dogruCevap: "JavaScript'e statik tipler eklemek",
                cozumAciklamasi: "TypeScript, JavaScript'e statik tipler ekleyerek hataları erken yakalamaya yardımcı olur."
            },
            {
                id: "2",
                soru: "TypeScript hangi dilin üzerine inşa edilmiştir?",
                secenekler: ["Python", "Java", "JavaScript"],
                dogruCevap: "JavaScript",
                cozumAciklamasi: "TypeScript, JavaScript'in süper setidir ve onun üzerine inşa edilmiştir."
            },
            {
                id: "3",
                soru: "TypeScript'in uzantısı nedir?",
                secenekler: [".ts", ".tsx", ".js"],
                dogruCevap: ".ts",
                cozumAciklamasi: "TypeScript dosyaları `.ts` uzantısını kullanır, React ile birlikte kullanıldığında `.tsx` olabilir."
            },
            {
                id: "4",
                soru: "TypeScript'te değişken tanımlamak için hangi anahtar kelime kullanılır?",
                secenekler: ["var", "let", "const"],
                dogruCevap: "let",
                cozumAciklamasi: "TypeScript ve modern JavaScript'te `let` değişken tanımlamak için önerilir."
            },
            {
                id: "5",
                soru: "TypeScript'te 'any' türü ne anlama gelir?",
                secenekler: ["Belirsiz bir tür", "Kesinlikle string", "Sadece number"],
                dogruCevap: "Belirsiz bir tür",
                cozumAciklamasi: "`any` türü, değişkenin herhangi bir türde olabileceğini belirtir."
            },
            {
                id: "6",
                soru: "TypeScript'te arayüzler hangi amaçla kullanılır?",
                secenekler: ["CSS stil tanımlamak", "Veri tiplerini belirlemek", "HTTP istekleri yapmak"],
                dogruCevap: "Veri tiplerini belirlemek",
                cozumAciklamasi: "Arayüzler (interface), veri yapılarını tanımlamak için kullanılır."
            },
            {
                id: "7",
                soru: "TypeScript'te 'never' türü neyi ifade eder?",
                secenekler: ["Asla değer dönmeyen fonksiyonları", "Sadece string değerleri", "Boolean türlerini"],
                dogruCevap: "Asla değer dönmeyen fonksiyonları",
                cozumAciklamasi: "`never`, fonksiyonun asla tamamlanmayacağını veya hata fırlatacağını ifade eder."
            },
            {
                id: "8",
                soru: "TypeScript'te enum ne işe yarar?",
                secenekler: ["Fonksiyon çağırmak", "Sabit değerleri tanımlamak", "Hata yönetimi yapmak"],
                dogruCevap: "Sabit değerleri tanımlamak",
                cozumAciklamasi: "Enum, sabit değerleri daha okunaklı hale getirmek için kullanılır."
            },
            {
                id: "9",
                soru: "TypeScript dosyaları JavaScript'e nasıl dönüştürülür?",
                secenekler: ["Babel ile", "TypeScript derleyicisi ile", "Webpack ile"],
                dogruCevap: "TypeScript derleyicisi ile",
                cozumAciklamasi: "`tsc` komutu ile TypeScript dosyaları JavaScript'e çevrilir."
            },
            {
                id: "10",
                soru: "TypeScript'te sınıflar nasıl tanımlanır?",
                secenekler: ["class anahtar kelimesi ile", "interface ile", "const ile"],
                dogruCevap: "class anahtar kelimesi ile",
                cozumAciklamasi: "`class` anahtar kelimesi, TypeScript ve JavaScript'te sınıf tanımlamak için kullanılır."
            }
        ]
    },
    {
        id: "quiz2",
        title: "TypeScript Türleri",
        slug: "typescript-turleri",
        description:" TypeScript'in tür sistemi ve veri türleri hakkında bilginizi sınayın. Primitif türlerden dizilere kadar her şeyi kapsar.",

        sorular: [
            {
                id: "1",
                soru: "Union türleri TypeScript’te nasıl tanımlanır?",
                secenekler: ["| (pipe) operatörü", "& (ampersand) operatörü", "# (hash) operatörü"],
                dogruCevap: "| (pipe) operatörü",
                cozumAciklamasi: "Union türleri, bir değişkenin birden fazla türden birini almasını sağlar ve `|` operatörü ile tanımlanır."
            },
            {
                id: "2",
                soru: "Intersection türleri TypeScript’te nasıl tanımlanır?",
                secenekler: ["| (pipe) operatörü", "& (ampersand) operatörü", "# (hash) operatörü"],
                dogruCevap: "& (ampersand) operatörü",
                cozumAciklamasi: "Intersection türleri, birden fazla türün birleşimini temsil eder ve `&` operatörü ile tanımlanır."
            },
            {
                id: "3",
                soru: "TypeScript'te 'void' türü ne anlama gelir?",
                secenekler: ["Değer döndürmeyen fonksiyonları", "Sadece string değerleri", "Bütün veri türlerini"],
                dogruCevap: "Değer döndürmeyen fonksiyonları",
                cozumAciklamasi: "`void` fonksiyonun herhangi bir değer döndürmediğini belirtir."
            },
            {
                id: "4",
                soru: "TypeScript'te 'readonly' anahtar kelimesi hangi amaçla kullanılır?",
                secenekler: ["Sabit değerleri değiştirilmez yapmak", "Değişkenleri sayı türüne çevirmek", "Metodları çağırmak"],
                dogruCevap: "Sabit değerleri değiştirilmez yapmak",
                cozumAciklamasi: "`readonly` bir özelliğin sadece okunabilir olduğunu belirtir."
            },
            {
                id: "5",
                soru: "TypeScript'te 'Record' türü ne işe yarar?",
                secenekler: ["Anahtar-değer çiftleri oluşturur", "Dizileri sıralar", "Sayısal işlemler yapar"],
                dogruCevap: "Anahtar-değer çiftleri oluşturur",
                cozumAciklamasi: "`Record<K, V>` belirli anahtar ve değer türlerini tanımlamak için kullanılır."
            },
            {
                id: "6",
                soru: "Tuple türü neyi ifade eder?",
                secenekler: ["Farklı türlerden sabit uzunlukta dizi", "Sadece sayı içeren diziler", "Bütün nesneleri kapsayan tür"],
                dogruCevap: "Farklı türlerden sabit uzunlukta dizi",
                cozumAciklamasi: "Tuple, farklı türlerden oluşan sabit uzunluklu dizileri tanımlar."
            },
            {
                id: "7",
                soru: "'Partial<T>' ne işe yarar?",
                secenekler: ["Bir nesnenin tüm alanlarını zorunlu hale getirir", "Bütün türleri siler", "Tüm alanları isteğe bağlı yapar"],
                dogruCevap: "Tüm alanları isteğe bağlı yapar",
                cozumAciklamasi: "`Partial<T>` bir nesnenin tüm alanlarını opsiyonel hale getirir."
            },
            {
                id: "8",
                soru: "'Pick<T, K>' ne işe yarar?",
                secenekler: ["Bir nesneden belirli alanları seçer", "Bütün nesneyi siler", "Sadece sayıları çeker"],
                dogruCevap: "Bir nesneden belirli alanları seçer",
                cozumAciklamasi: "`Pick<T, K>` belirli anahtarları içeren yeni bir nesne türü oluşturur."
            },
            {
                id: "9",
                soru: "'Omit<T, K>' ne işe yarar?",
                secenekler: ["Belirtilen alanları nesneden çıkarır", "Bütün alanları zorunlu yapar", "Sadece string değerleri seçer"],
                dogruCevap: "Belirtilen alanları nesneden çıkarır",
                cozumAciklamasi: "`Omit<T, K>` verilen anahtarları (K) nesneden kaldırır."
            },
            {
                id: "10",
                soru: "'Readonly<T>' ne işe yarar?",
                secenekler: ["Tüm nesneyi değiştirilemez yapar", "Tüm alanları zorunlu yapar", "Sadece sayısal değerleri kabul eder"],
                dogruCevap: "Tüm nesneyi değiştirilemez yapar",
                cozumAciklamasi: "`Readonly<T>` tüm nesne özelliklerini yalnızca okunabilir hale getirir."
            }
            
        ]
    }
];
