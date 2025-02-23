import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | TypeScript Öğren",
  description:
    "TypeScript Öğren olarak kullanıcı verilerinin gizliliğini önemsiyoruz. Verilerin nasıl işlendiği, çerezler, güvenlik önlemleri ve gizlilik politikası hakkında bilgi edinin.",
    alternates: {
      canonical: "https://www.typescriptogren.com/gizlilik-politikasi"
      },
  openGraph: {
    title: "Gizlilik Politikası | TypeScript Öğren",
    description:
      "Kullanıcı verilerinin nasıl işlendiği, çerez kullanımı, güvenlik önlemleri ve gizlilik politikamız hakkında detaylı bilgi alın.",
    url: "https://typescriptogren.com/gizlilik-politikasi",
    siteName: "TypeScript Öğren",
    type: "website",
  },
};



const GizlilikPolitikasi = () => {
  return (
    <>
   

      <div className="container mx-auto p-6 max-w-3xl">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold text-custom-blue mb-4">Gizlilik Politikası</h1>
          <p className="text-lg text-gray-700 mb-4">
            Bu web sitesi, kullanıcı gizliliğini korumayı taahhüt eder. Toplanan veriler, kullanım amaçları ve haklarınız hakkında 
            detaylı bilgiyi aşağıda bulabilirsiniz.
          </p>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800">1. Hangi Verileri Topluyoruz?</h2>
              <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-2">
                <li><strong>Zorunlu Veriler</strong>: Sitenin temel işlevlerini sağlamak için toplanır.</li>
                <li><strong>Analitik Veriler</strong>: Kullanıcı deneyimini iyileştirmek için Google Analytics gibi araçlarla analiz edilir.</li>
                <li><strong>Reklam Verileri</strong>: Google AdSense tarafından kişiselleştirilmiş reklamlar göstermek için kullanılır.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800">2. Çerezler ve Takip Teknolojileri</h2>
              <p className="text-gray-700 mt-2">
                Web sitemiz, kullanıcı deneyimini geliştirmek ve içerikleri kişiselleştirmek amacıyla çerezleri kullanmaktadır. 
                Çerezleri tarayıcı ayarlarınızdan kontrol edebilir veya devre dışı bırakabilirsiniz.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800">3. Üçüncü Taraf Bağlantılar</h2>
              <p className="text-gray-700 mt-2">
                Web sitemiz, üçüncü taraf web sitelerine yönlendiren bağlantılar içerebilir. Ancak, bu sitelerin gizlilik politikalarından 
                sorumlu değiliz.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800">4. Kişisel Verilerin Güvenliği</h2>
              <p className="text-gray-700 mt-2">
                Kullanıcı bilgilerinin güvenliğini sağlamak için gerekli teknik ve idari önlemler alınmaktadır. Ancak, internet üzerinden 
                aktarılan bilgilerin tamamen güvenli olduğunu garanti edemeyiz.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800">5. Gizlilik Politikası Güncellemeleri</h2>
              <p className="text-gray-700 mt-2">
                Gizlilik politikamız zaman zaman güncellenebilir. Güncellemeler hakkında kullanıcılarımızı bilgilendirmek amacıyla 
                bu sayfa düzenli olarak yenilenecektir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800">6. İletişim</h2>
              <p className="text-gray-700 mt-2">
                Gizlilik politikamız hakkında sorularınız için aşağıdaki bağlantıyı ziyaret edebilirsiniz:<br />
                - <a href="/iletisim" className="text-custom-blue font-semibold hover:underline">İletişim Sayfası</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default GizlilikPolitikasi;
