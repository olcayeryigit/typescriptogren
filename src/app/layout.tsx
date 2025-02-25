import { Inter } from "next/font/google"; // Inter fontunu import ediyoruz
import "./globals.css";
import Header from "../components/rootlayout/Header";
import React from 'react';
import Footer from "@/components/rootlayout/Footer";
import JsonLd from "@/components/rootlayout/JsonLd";
import Script from "next/script";

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
           {/* Google Analytics */}
           <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-YXBQ4L57GD"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YXBQ4L57GD', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
       
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
