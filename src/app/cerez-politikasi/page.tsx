import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Çerez Politikası | TypeScript Öğren",
  description: "Çerez politikamız hakkında detaylı bilgi edinin. Kullanıcı deneyimini geliştirmek ve reklamları kişiselleştirmek amacıyla çerezleri nasıl kullandığımızı öğrenin.",
  alternates: {
    canonical: "https://www.typescriptogren.com/cerez-politikasi"
    },
  openGraph: {
    title: "Çerez Politikası | TypeScript Öğren",
    description: "Çerez kullanımımız ve nasıl yönetileceği hakkında ayrıntılı bilgiye buradan ulaşabilirsiniz.",
    url: "https://typescriptogren.com/cerez-politikasi",
    siteName: "TypeScript Öğren",
    type: "website",
  },
};



const CerezPolitikasi = () => {
  return (
    <>
    



      <div className="container mx-auto p-6 max-w-3xl">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold text-custom-blue mb-4">Çerez Politikası</h1>
          <p className="text-lg text-gray-700 mb-4">
            Bu web sitesi, kullanıcı deneyimini geliştirmek ve reklamları kişiselleştirmek amacıyla çerezleri kullanmaktadır. 
            Çerezlerin nasıl kullanıldığı ve nasıl devre dışı bırakılabileceği aşağıda açıklanmaktadır.
          </p>
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800">1. Çerez Nedir?</h2>
              <p className="text-gray-700 mt-2">
                Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınıza kaydedilen küçük metin dosyalarıdır. Kullanıcı tercihlerini hatırlamak, 
                oturum yönetimi yapmak ve reklamları özelleştirmek için kullanılır.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-gray-800">2. Hangi Çerezleri Kullanıyoruz?</h2>
              <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-2">
                <li><strong>Zorunlu Çerezler</strong>: Sitenin temel işlevlerini sağlamak için gereklidir.</li>
                <li><strong>Analitik Çerezler</strong>: Google Analytics gibi araçlar aracılığıyla kullanıcı davranışlarını analiz eder.</li>
                <li><strong>Reklam Çerezleri</strong>: Google AdSense tarafından kişiselleştirilmiş reklamlar sunmak için kullanılır.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-gray-800">3. Çerezleri Nasıl Yönetebilirsiniz?</h2>
              <p className="text-gray-700 mt-2">
                Çerezleri tarayıcı ayarlarınızdan kontrol edebilir veya devre dışı bırakabilirsiniz. Tarayıcınıza bağlı olarak 
                çerezleri tamamen kapatma veya belirli çerezleri engelleme seçenekleri sunulmaktadır.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-gray-800">4. Çerezlerin Devre Dışı Bırakılması</h2>
              <p className="text-gray-700 mt-2">
                Çerezleri devre dışı bırakmak için aşağıdaki bağlantıları ziyaret edebilirsiniz:
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="https://support.google.com/chrome/answer/95647?hl=tr" target="_blank" rel="noopener noreferrer" className="text-custom-blue font-semibold hover:underline">
                    Google Chrome Çerez Ayarları
                  </a>
                </li>
                <li>
                  <a href="https://support.mozilla.org/tr/kb/cerezleri-engelleme" target="_blank" rel="noopener noreferrer" className="text-custom-blue font-semibold hover:underline">
                    Mozilla Firefox Çerez Ayarları
                  </a>
                </li>
                <li>
                  <a href="https://support.microsoft.com/tr-tr/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer" className="text-custom-blue font-semibold hover:underline">
                    Internet Explorer Çerez Ayarları
                  </a>
                </li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-gray-800">5. Güncellemeler</h2>
              <p className="text-gray-700 mt-2">
                Çerez politikamız zaman zaman güncellenebilir. Güncellemeler hakkında kullanıcılarımızı bilgilendirmek için 
                bu sayfa düzenli olarak yenilenecektir.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default CerezPolitikasi;
