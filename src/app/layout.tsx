import { Inter } from "next/font/google"; // Inter fontunu import ediyoruz
import "./globals.css";
import Header from "../components/rootlayout/Header";
import React from 'react';
import Footer from "@/components/rootlayout/Footer";
import JsonLd from "@/components/rootlayout/JsonLd";

// Inter fontunu 400 ağırlığında alıyoruz
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400"], // Burada ağırlık belirtiyoruz
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">      
      <head>
         <JsonLd /> {/* JSON-LD verisi head içinde yer alacak */}
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
