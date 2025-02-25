"use client";

import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-custom-gray text-white py-6 md:py-10 mt-4 md:mt-12">
      <div className="container mx-auto px-6 md:px-12 text-center">
        
        {/* Başlık */}
        <div className="logo text-3xl font-semibold text-white mb-6">typescriptogren
          <span className="text-custom-blue">.com</span>
        </div>

        {/* Navigasyon Menüsü */}
        <nav className="mb-8"  aria-label="Footer Menü">
   
  <ul className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
    {[
      { href: "/", label: "Ana Sayfa" },
      { href: "/dersler", label: "Dersler" },
      { href: "/quiz", label: "Quizler" },
      { href: "/kaynaklar", label: "Kaynaklar" },
      { href: "/blog", label: "Blog" },
      { href: "/iletisim", label: "İletişim" },
      { href: "/sik-sorulan-sorular", label: "SSS" },
      { href: "/gizlilik-politikasi", label: "Gizlilik Politikası" },
      { href: "/cerez-politikasi", label: "Çerez Politikası" }
    ].map((item, index) => (
      <li key={index} className="group relative">
        <Link
          href={item.href}
          className="transition-all text-gray-300 hover:text-white  rounded-lg group-hover:text-custom-blue-6"
          aria-label={`${item.label} Sayfası`}
        >
          {item.label}
        </Link>
        {/* Alt Çizgi Efekti */}
        <div className="absolute bottom-0 left-0 w-0 h-1 bg-custom-blue-6 group-hover:w-full transition-all duration-300"></div>
      </li>
    ))}
  </ul>
</nav>

        {/* Sosyal Medya Bağlantıları */}
        <div className="flex justify-center space-x-6 mb-8">
          <Link
            href="https://x.com/typescriptogren"
            target="_blank"
            rel="noopener noreferrer"
            className="text-custom-gray text-2xl hover:text-custom-blue-2 border-2 hover:border-custom-blue-2  transition bg-white rounded-md p-1"
            aria-label="TypeScript Öğren X Twitter Hesabı"

            title="TypeScript Öğren Twitter Sayfası" 

          >
            <FaXTwitter />
          </Link>
          <Link
            href="https://www.instagram.com/typescriptogren/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-custom-gray text-2xl hover:text-custom-blue-2 border-2 hover:border-custom-blue-2  transition bg-white rounded-md p-1"
            title="TypeScript Öğren İnstagram Sayfası"
            aria-label="TypeScript Öğren Twitter Hesabı"

          >
            <FaInstagram />
          </Link>
        </div>

        {/* Telif Hakkı */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} TypeScript Öğren. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
