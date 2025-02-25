import { Metadata } from "next";
import PageTitle from "@/components/common/PageTitle";
import MainParagraph from "@/components/common/MainParagraph";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Bizi Takip Edin! | TypeScript Öğren",
  description:
    "TypeScript öğrenme yolculuğunuzda en güncel içerikler ve ipuçları için bizi Twitter ve Instagram'da takip edin!",
  alternates: {
    canonical: "https://www.typescriptogren.com/iletisim",
  },
  openGraph: {
    title: "Bizi Takip Edin! | TypeScript Öğren",
    description:
      "TypeScript ile ilgili güncellemeleri, ipuçlarını ve rehberleri kaçırmamak için sosyal medya hesaplarımızı takip edin.",
    url: "https://www.typescriptogren.com/iletisim",
    siteName: "TypeScript Öğren",
    type: "website",
    images: [
      {
        url: "https://www.typescriptogren.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "TypeScript Öğren Sosyal Medya",
      },
    ],
  },
};


const Page = () => {
  return (
   

      <div className="container mx-auto py-3 px-5 md:py-6">
        <PageTitle title="TypeScript ve Yazılım Geliştirme İçin Bizi Takip Edin!" />
        <MainParagraph text="TypeScript öğrenme yolculuğunuzda en güncel eğitim içerikleri, ipuçları ve rehberler için bizi takip edin! Yazılım geliştirme trendleri, en iyi uygulamalar ve yeni derslerden haberdar olmak için sosyal medya hesaplarımızdan güncellemeleri kaçırmayın." />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          <Link
            href="https://x.com/typescriptogren"
            target="_blank"
            rel="noopener noreferrer"
            className="group block border-2 border-custom-blue rounded-lg p-6 bg-white transition-all duration-300 hover:bg-gray-100 hover:shadow-lg"
            aria-label="Twitter"
          >
            <div className="flex items-center gap-4">
              <FaXTwitter className="text-4xl text-custom-blue group-hover:text-custom-gray" />
              <div>
                <h3 className="text-lg font-semibold text-custom-gray group-hover:text-custom-blue">
                  X Hesabımız
                </h3>
                <p className="text-gray-700 text-sm">
                  TypeScript ile ilgili en son haberleri ve ipuçlarını burada
                  bulabilirsiniz.
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="https://www.instagram.com/typescriptogren/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block border-2 border-custom-blue rounded-lg p-6 bg-white transition-all duration-300 hover:bg-gray-100 hover:shadow-lg"
            aria-label="Instagram"
          >
            <div className="flex items-center gap-4">
              <FaInstagram className="text-4xl text-custom-blue group-hover:text-custom-gray" />
              <div>
                <h3 className="text-lg font-semibold text-custom-gray group-hover:text-custom-blue">
                  Instagram Hesabımız
                </h3>
                <p className="text-gray-700 text-sm">
                  Görsel paylaşımlar, ipuçları ve canlı yayınlarımız için bizi
                  takip edin.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>

  );
};

export default Page;
