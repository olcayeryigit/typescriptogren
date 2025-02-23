import { Metadata } from "next";
import PageTitle from "@/components/common/PageTitle";
import MainParagraph from "@/components/common/MainParagraph";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Bizi Takip Edin! | TypeScript Öğren",
  description: "TypeScript öğrenme yolculuğunuzda bizimle ilerleyin. Twitter ve Instagram hesaplarımızdan içeriklerimizi takip edebilirsiniz.",
  alternates: {
    canonical: "https://www.typescriptogren.com/iletisim"
    },
 
  openGraph: {
    title: "Bizi Takip Edin! | TypeScript Öğren",
    description: "TypeScript ile ilgili güncellemeleri ve dersleri sosyal medya hesaplarımızdan takip edin.",
    url: "https://typescriptogren.com/iletisim",
    siteName: "TypeScript Öğren",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TypeScript Öğren",
  "url": "https://typescriptogren.com",
  "sameAs": [
    "https://x.com/typescriptogren",
    "https://www.instagram.com/typescriptogren/"
  ],
  "logo": {
    "@type": "ImageObject",
    "url": "https://typescriptogren.com/logo.png"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "url": "https://typescriptogren.com/iletisim"
  }
};

const Page = () => {
  return (
    <>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <div className="container mx-auto p-6">
        <PageTitle title="Bizi Takip Edin!" />
        <MainParagraph text="TypeScript öğrenme yolculuğunda bizlerle birlikte ilerleyin. Sosyal medya hesaplarımızdan paylaşımlarımızı takip ederek, yeni dersler ve içerikler hakkında bilgi edinebilirsiniz." />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          <Link href="https://x.com/typescriptogren" target="_blank" rel="noopener noreferrer" className="group block border-2 border-custom-blue rounded-lg p-6 bg-white transition-all duration-300 hover:bg-gray-100 hover:shadow-lg" aria-label="Twitter">
            <div className="flex items-center gap-4">
              <FaXTwitter className="text-4xl text-custom-blue group-hover:text-custom-gray" />
              <div>
                <h3 className="text-lg font-semibold text-custom-gray group-hover:text-custom-blue">X Hesabımız</h3>
                <p className="text-gray-700 text-sm">TypeScript ile ilgili en son haberleri ve ipuçlarını burada bulabilirsiniz.</p>
              </div>
            </div>
          </Link>

          <Link href="https://www.instagram.com/typescriptogren/" target="_blank" rel="noopener noreferrer" className="group block border-2 border-custom-blue rounded-lg p-6 bg-white transition-all duration-300 hover:bg-gray-100 hover:shadow-lg" aria-label="Instagram">
            <div className="flex items-center gap-4">
              <FaInstagram className="text-4xl text-custom-blue group-hover:text-custom-gray" />
              <div>
                <h3 className="text-lg font-semibold text-custom-gray group-hover:text-custom-blue">Instagram Hesabımız</h3>
                <p className="text-gray-700 text-sm">Görsel paylaşımlar, ipuçları ve canlı yayınlarımız için bizi takip edin.</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page;
