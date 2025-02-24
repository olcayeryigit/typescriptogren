"use client";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Menü ve kapanma ikonları

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-custom-gray py-4" role="banner">
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12">
        {/* Logo*/}
          <Link href="/" className="logo text-xl font-semibold text-white" aria-label="TypeScript Öğren Anasayfa">typescriptogren<span className="text-custom-blue">.com</span>

          </Link>
 
    
        {/* Başlık */}
       
        {/* Navigasyon Menüsü */}
        <nav>
          <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-100">
            <li>
              <Link href="/" className="hover:text-white transition" aria-label="Ana Sayfa">Anasayfa</Link>
            </li>
            <li>
              <Link href="/dersler" className="hover:text-white transition" aria-label="Dersler Sayfası">Dersler</Link>
            </li>
            <li>
              <Link href="/quiz" className="hover:text-white transition" aria-label="Quizler Sayfası">Quizler</Link>
            </li>
            <li>
              <Link href="/kaynaklar" className="hover:text-white transition" aria-label="Kaynaklar Sayfası">Kaynaklar</Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white transition" aria-label="Blog Sayfası">Blog</Link>
            </li>
            <li>
              <Link href="/iletisim" className="hover:text-white transition" aria-label="İletişim Sayfası">İletişim</Link>
            </li>
            <li>
              <Link href="/sik-sorulan-sorular" className="hover:text-white transition" aria-label="SSS Sayfası">SSS</Link>
            </li>
          </ul>
        </nav>

        {/* Sosyal Medya Bağlantıları */}
        <div className="flex space-x-4">
          <Link
            href="https://x.com/typescriptogren"
            target="_blank"
            rel="noopener noreferrer"
            className="text-custom-gray text-2xl hover:text-custom-blue-2 border-2  transition bg-white rounded-md p-1"
            aria-label="Twitter"
             title="TypeScript Öğren Twitter Sayfası"
          >
            <FaXTwitter />
          </Link>
          <Link
            href="https://www.instagram.com/typescriptogren/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-custom-gray text-2xl hover:text-custom-blue-2 border-2   transition bg-white rounded-md p-1"
            aria-label="Instagram"
            title="TypeScript Öğren İnstagram Sayfası"

          >
            <FaInstagram />
          </Link>
        </div>

        {/* Mobil Menü Butonu */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleMenu}
            className="text-white"
            aria-label={isMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobil Menü İçeriği */}
      <div
  id="menu"
  className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-custom-pink py-4`}
  role="menu"
>
        <ul className="space-y-4 text-white text-center">
          <li>
            <Link href="/" className="hover:text-custom-gray transition" aria-label="Ana Sayfa">
              Anasayfa
            </Link>
          </li>
          <li>
            <Link href="/dersler" className="hover:text-custom-gray transition" aria-label="Dersler Sayfası">
              Dersler
            </Link>
          </li>
          <li>
            <Link href="/quiz" className="hover:text-custom-gray transition" aria-label="Quizler Sayfası">
              Quizler
            </Link>
          </li>
          <li>
            <Link href="/kaynaklar" className="hover:text-custom-gray transition" aria-label="Kaynaklar Sayfası">
              Kaynaklar
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-custom-gray transition" aria-label="Blog Sayfası">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/iletisim" className="hover:text-custom-gray transition" aria-label="İletişim Sayfası">
              İletişim
            </Link>
          </li>
          <li>
            <Link href="/sik-sorulan-sorular" className="hover:text-custom-gray transition" aria-label="SSS Sayfası">
              SSS
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
