"use client";

import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-custom-gray text-white py-10 mt-12">
      <div className="container mx-auto px-6 md:px-12 text-center">
        
        {/* Başlık */}
        <div className="logo text-3xl font-semibold text-white mb-6">typescriptogren
          <span className="text-custom-blue">.com</span>
        </div>

        {/* Navigasyon Menüsü */}
        <nav className="mb-8">
          <ul className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
            <li>
              <Link href="/" className="hover:text-white transition">Ana Sayfa</Link>
            </li>
            <li>
              <Link href="/dersler" className="hover:text-white transition">Dersler</Link>
            </li>
            <li>
              <Link href="/quiz" className="hover:text-white transition">Quizler</Link>
            </li>
            <li>
              <Link href="/kaynaklar" className="hover:text-white transition">Kaynaklar</Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white transition">Blog</Link>
            </li>
            <li>
              <Link href="/iletisim" className="hover:text-white transition">İletişim</Link>
            </li>
            <li>
              <Link href="/sik-sorulan-sorular" className="hover:text-white transition">SSS</Link>
            </li>
            <li>
              <Link href="/gizlilik-politikasi" className="hover:text-white transition">Gizlilik Politikası</Link>
            </li>
            <li>
              <Link href="/cerez-politikasi" className="hover:text-white transition">Çerez Politikası</Link>
            </li>
          </ul>
        </nav>

        {/* Sosyal Medya Bağlantıları */}
        <div className="flex justify-center space-x-6 mb-8">
          <Link
            href="https://x.com/typescriptogren"
            target="_blank"
            rel="noopener noreferrer"
            className="text-custom-gray text-2xl hover:text-custom-blue-2 border-2 hover:border-custom-blue-2  transition bg-white rounded-md p-1"
            aria-label="Twitter"

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
            aria-label="Instagram"

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
