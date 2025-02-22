import { Inter } from "next/font/google"; // Inter fontunu import ediyoruz
import "./globals.css";
import Header from "../components/rootlayout/Header";
import React from 'react';
import Footer from "@/components/rootlayout/Footer";
import Head from "next/head";

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
      <body
        className={`${inter.variable} antialiased`} // Inter fontunu burada kullanıyoruz
      >
         <Head>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Diğer global meta etiketler burada yer alabilir */}
      </Head>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
