"use client";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import {  FiX } from "react-icons/fi"; // Menü ve kapanma ikonları
import Image from "next/image";


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-custom-gray  border-b border-white shadow-md" role="banner">
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12 py-4  ">
        {/* Logo */}
        <Link href="/" className="logo text-2xl font-bold text-white hover:text-custom-blue-4 transition duration-300" aria-label="TypeScript Öğren Anasayfa">
          typescriptogren<span className="text-custom-blue">.com</span>
        </Link>
        
        {/* Navigasyon Menüsü */}
        <nav>
          <ul className="hidden lg:flex space-x-8 text-sm font-medium text-gray-100">
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
        <div className="hidden lg:flex space-x-3  ">
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
            aria-label="Instagram"
            title="TypeScript Öğren İnstagram Sayfası"
          >
            <FaInstagram />
          </Link>
        </div>

        {/* Mobil Menü Butonu */}
        <div className="lg:hidden flex items-center space-x-4">
          <button
            onClick={toggleMenu}
            className="text-white  "
            aria-label={isMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
          >
            {isMenuOpen ? <FiX size={44}/> : <Image src="/icons/menu.svg" width={44} height={44} alt="fd"/>
        }
          </button>
        </div>
      </div>

   {/* Mobil Menü İçeriği */}
{/* Mobil Menü İçeriği */}
<div
  id="menu"
  className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} bg-custom-gray border-t border-gray-700 transform transition-all duration-500 ease-in-out`}
  role="menu"
>
  <ul className="text-white text-center text-lg space-y-4 ">
    {/* Menu item */}
    {[
      { href: "/", label: "Anasayfa" },
      { href: "/dersler", label: "Dersler" },
      { href: "/quiz", label: "Quizler" },
      { href: "/kaynaklar", label: "Kaynaklar" },
      { href: "/blog", label: "Blog" },
      { href: "/iletisim", label: "İletişim" },
      { href: "/sik-sorulan-sorular", label: "SSS" },
    ].map((item, index) => (
      <li key={index} className="relative group">
        <Link
          href={item.href}
          className="block py-2 px-6 rounded-md hover:text-custom-blue-4 transition-all duration-300 transform  "
          aria-label={`${item.label} Sayfası`}
        >
          {item.label}
        </Link>
        
      </li>
    ))} {/* Sosyal Medya Bağlantıları */}
         <div className="flex space-x-4 justify-center  pb-2">
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
            aria-label="Instagram"
            title="TypeScript Öğren İnstagram Sayfası"
          >
            <FaInstagram />
          </Link>
        </div>
  </ul>
</div>

    </header>
  );
};

export default Header;
