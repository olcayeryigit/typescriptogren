"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { blogPosts } from "@/data/blogPosts"; // blogPosts verisini içe aktar
import { quizler } from "@/data/quiz";
import { dersler } from "@/data/dersler";

const getJsonLdData = (pathname: string) => {


 // Ders sayfası URL'ini kontrol et
 if (pathname.startsWith("/dersler/")) {
  const slug = pathname.split("/dersler/")[1]; // slug kısmını al

  // Burada slug'ı kullanarak derse ait bilgiyi bulup JSON-LD'yi oluşturabilirsiniz
  const ders = dersler.find(ders => ders.slug === slug);

  if (ders) {
    return {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": ders.baslik,
      "url": `https://your-website.com/dersler/${ders.slug}`,
      "description": ders.aciklama,
      "provider": {
        "@type": "Organization",
        "name": "TypeScript Öğren",
        "url": "https://www.typescriptogren.com"
      },
    };
  }
}







  if (pathname.startsWith("/blog/")) {
    const slug = pathname.split("/blog/")[1]; // slug kısmını al

    // Burada slug'ı kullanarak blog verisini bulup JSON-LD'yi oluşturabilirsiniz
    const post = blogPosts.find(post => post.slug === slug);

    if (post) {
      return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "url": `https://your-website.com/blog/${post.slug}`,
        "author": {
          "@type": "Person",
          "name": "Adınız Soyadınız",
          "url": "https://your-website.com"
        },
        "datePublished": post.publishedAt,
        "description": post.description,
      };
    }
  }


  if (pathname.startsWith("/quiz/")) {
    const slug = pathname.split("/quiz/")[1]; // slug kısmını al

    // Burada slug'ı kullanarak quiz verisini bulup JSON-LD'yi oluşturabilirsiniz
    const quiz = quizler.find(quiz => quiz.slug === slug);

    if (quiz) {
      return {
        "@context": "https://schema.org",
        "@type": "Quiz",
        "name": quiz.title,
        "url": `https://your-website.com/quiz/${quiz.slug}`,
        "description": quiz.description,
        "author": {
          "@type": "Person",
          "name": "Adınız Soyadınız",
          "url": "https://your-website.com"
        },
        "mainEntityOfPage": `https://your-website.com/quiz/${quiz.slug}`,
      };
    }
  }

  switch (pathname) {
    case "/":
      return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "TypeScript Öğren",
        "url": "https://www.typescriptogren.com/",
        "description": "TypeScript öğren! Modern JavaScript’in avantajlarını keşfet, güçlü ve güvenli kod yaz. Dersler, projeler ve kaynaklarla becerilerini geliştir.",
        "keywords": [
          "TypeScript", "TypeScript öğren", "TypeScript dersleri", "TypeScript kursu", "JavaScript",
          "Yazılım geliştirme", "Frontend geliştirme", "Backend geliştirme", "Web geliştirme",
          "Kodlama öğrenme", "React ile TypeScript", "Node.js ve TypeScript", "TypeScript projeleri"
        ],
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.typescriptogren.com/"
        },
        "publisher": {
          "@type": "Organization",
          "name": "TypeScript Öğren",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.typescriptogren.com/logo.jpg"
          }
        },
        "openGraph": {
          "title": "TypeScript Öğren – Modern JavaScript ile Tip Güvenliği ve Performans",
          "description": "TypeScript öğrenmeye başla! Modern JavaScript’in avantajlarını keşfet, güvenli kod yaz ve projelerini geliştir.",
          "url": "https://www.typescriptogren.com/",
          "siteName": "TypeScript Öğren",
          "images": [
            {
              "url": "https://www.typescriptogren.com/images/og-image.jpg",
              "width": 1200,
              "height": 630,
              "alt": "TypeScript Öğren – Modern JavaScript ve Güvenli Kodlama"
            }
          ],
          "locale": "tr_TR",
          "type": "website"
        },
        "twitter": {
          "card": "summary_large_image",
          "site": "@typescriptogren",
          "creator": "@typescriptogren",
          "title": "TypeScript Öğren – Modern JavaScript ile Tip Güvenliği ve Performans",
          "description": "TypeScript öğrenmeye başla! Modern JavaScript’in avantajlarını keşfet, güçlü ve güvenli kod yaz.",
          "images": ["https://www.typescriptogren.com/images/og-image.jpg"]
        },
        "instagram:site": "https://www.instagram.com/typescriptogren"
      };

    case "/dersler":
      return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "url": "https://www.typescriptogren.com/dersler",
        "name": "TypeScript Dersleri",
        "description": "TypeScript diline dair temel ve ileri seviye derslerle, dilin tüm temellerini öğrenin.",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.typescriptogren.com/dersler"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Ana Sayfa",
              "item": "https://www.typescriptogren.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Dersler",
              "item": "https://www.typescriptogren.com/dersler"
            }
          ]
        },
        "openGraph": {
          "title": "TypeScript Dersleri – Temel ve İleri Seviye Derslerle TypeScript Öğren",
          "description": "TypeScript dilinin temellerinden ileri seviyeye kadar öğrenebileceğiniz kapsamlı dersler.",
          "url": "https://www.typescriptogren.com/dersler",
          "siteName": "TypeScript Öğren",
          "images": [
            {
              "url": "https://www.typescriptogren.com/images/og-dersler.jpg",
              "width": 1200,
              "height": 630,
              "alt": "TypeScript Dersleri"
            }
          ],
          "locale": "tr_TR",
          "type": "website"
        }
      };
      

    
    case "/sik-sorulan-sorular":
      return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "url": "https://www.typescriptogren.com/sik-sorulan-sorular",
        "name": "TypeScript Sıkça Sorulan Sorular",
        "description": "TypeScript hakkında en çok merak edilen soruların yanıtlarını burada bulabilirsiniz. TypeScript nedir? Kullanmalı mıyım? Zor mu?",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.typescriptogren.com/sik-sorulan-sorular"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Ana Sayfa",
              "item": "https://www.typescriptogren.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Sıkça Sorulan Sorular",
              "item": "https://www.typescriptogren.com/sik-sorulan-sorular"
            }
          ]
        },
        "mainEntity": {
          "@type": "FAQPage",
          "name": "TypeScript Sıkça Sorulan Sorular",
          "acceptedAnswer": [
            {
              "@type": "Question",
              "name": "TypeScript nedir?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "TypeScript, Microsoft tarafından geliştirilen ve JavaScript'in üzerine inşa edilen, statik tür sistemine sahip bir programlama dilidir."
              }
            },
            {
              "@type": "Question",
              "name": "JavaScript ile TypeScript arasındaki fark nedir?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "JavaScript dinamik türlere sahiptir, TypeScript ise statik tür kontrolü yaparak hataları erken aşamada yakalamayı sağlar."
              }
            },
            {
              "@type": "Question",
              "name": "TypeScript zor mu?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Eğer JavaScript biliyorsanız, TypeScript öğrenmek çok zor değildir. Statik tipler ve derleyici hatalarına alışmak başlangıçta zor gelebilir, ancak uzun vadede yazılım geliştirmeyi kolaylaştırır."
              }
            },
            {
              "@type": "Question",
              "name": "TypeScript kullanmalı mıyım?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Eğer büyük ve ölçeklenebilir bir proje yapıyorsanız veya hataları önceden yakalamak istiyorsanız, TypeScript kullanmanız önerilir."
              }
            }
          ]
        },
        "openGraph": {
          "title": "TypeScript Sıkça Sorulan Sorular | TypeScript Öğren",
          "description": "TypeScript ile ilgili en yaygın sorular ve cevaplar burada! Hemen öğrenmeye başla.",
          "url": "https://www.typescriptogren.com/sik-sorulan-sorular",
          "siteName": "TypeScript Öğren",
          "type": "website"
        }
      };
      
      case "/kaynaklar":
        return {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Ana Sayfa",
                "item": "https://www.typescriptogren.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Kaynaklar",
                "item": "https://www.typescriptogren.com/kaynaklar"
              }
            ]
          },
          "mainEntityOfPage": "https://www.typescriptogren.com/kaynaklar",
          "name": "En İyi TypeScript Kaynakları – Resmi Dokümantasyon ve Eğitimler",
          "description": "TypeScript öğrenmek isteyenler için en iyi kaynakları keşfedin. Resmi dokümantasyon, GitHub deposu, bloglar ve ücretsiz kurslarla kendinizi geliştirin.",
          "url": "https://www.typescriptogren.com/kaynaklar",
          "publisher": {
            "@type": "Organization",
            "name": "TypeScript Öğren",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.typescriptogren.com/logo.png"
            }
          },
          "sameAs": [
            "https://www.facebook.com/typescriptogren",
            "https://www.twitter.com/typescriptogren",
            "https://www.linkedin.com/company/typescriptogren"
          ],
          "about": {
            "@type": "Thing",
            "name": "TypeScript",
            "url": "https://www.typescriptlang.org/"
          },
          "potentialAction": {
            "@type": "ReadAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://www.typescriptogren.com/kaynaklar"
            }
          },
          "articleBody": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "TypeScript Resmi Dokümantasyonu",
              "url": "https://www.typescriptlang.org/docs/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "TypeScript GitHub Deposu",
              "url": "https://github.com/microsoft/TypeScript"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "TypeScript Handbook (Resmi)",
              "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "TypeScript Kursu - FreeCodeCamp",
              "url": "https://www.freecodecamp.org/news/learn-typescript-beginners-guide/"
            },
            {
              "@type": "ListItem",
              "position": 5,
              "name": "TypeScript ESLint Kuralları",
              "url": "https://typescript-eslint.io/"
            },
            {
              "@type": "ListItem",
              "position": 6,
              "name": "TypeScript Playground",
              "url": "https://www.typescriptlang.org/play"
            },
            {
              "@type": "ListItem",
              "position": 7,
              "name": "TypeScript Blog",
              "url": "https://devblogs.microsoft.com/typescript/"
            }
          ]
        };
        
        
        case "/iletisim":
          return {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Bizi Takip Edin! | TypeScript Öğren",
            "description": "TypeScript öğrenme yolculuğunuzda bizimle ilerleyin. Twitter ve Instagram hesaplarımızdan içeriklerimizi takip edebilirsiniz.",
            "url": "https://www.typescriptogren.com/iletisim",
            "mainEntityOfPage": "https://www.typescriptogren.com/iletisim",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Ana Sayfa",
                  "item": "https://www.typescriptogren.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "İletişim",
                  "item": "https://www.typescriptogren.com/iletisim"
                }
              ]
            },
            "openGraph": {
              "title": "Bizi Takip Edin! | TypeScript Öğren",
              "description": "TypeScript ile ilgili güncellemeleri ve dersleri sosyal medya hesaplarımızdan takip edin.",
              "url": "https://typescriptogren.com/iletisim",
              "siteName": "TypeScript Öğren",
              "type": "website"
            },
            "twitter": {
              "card": "summary_large_image",
              "site": "@typescriptogren",
              "creator": "@typescriptogren",
              "title": "Bizi Takip Edin! | TypeScript Öğren",
              "description": "TypeScript ile ilgili güncellemeleri ve dersleri sosyal medya hesaplarımızdan takip edin.",
              "images": [
                "https://www.typescriptogren.com/images/iletisim-og.jpg"
              ]
            }
          };

          case "/gizlilik-politikasi":
            return {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Gizlilik Politikası | TypeScript Öğren",
              "description": "TypeScript Öğren olarak kullanıcı verilerinin gizliliğini önemsiyoruz. Verilerin nasıl işlendiği, çerezler, güvenlik önlemleri ve gizlilik politikası hakkında bilgi edinin.",
              "url": "https://www.typescriptogren.com/gizlilik-politikasi",
              "mainEntityOfPage": "https://www.typescriptogren.com/gizlilik-politikasi",
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Ana Sayfa",
                    "item": "https://www.typescriptogren.com/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Gizlilik Politikası",
                    "item": "https://www.typescriptogren.com/gizlilik-politikasi"
                  }
                ]
              },
              "openGraph": {
                "title": "Gizlilik Politikası | TypeScript Öğren",
                "description": "Kullanıcı verilerinin nasıl işlendiği, çerez kullanımı, güvenlik önlemleri ve gizlilik politikamız hakkında detaylı bilgi alın.",
                "url": "https://typescriptogren.com/gizlilik-politikasi",
                "siteName": "TypeScript Öğren",
                "type": "website"
              },
              "twitter": {
                "card": "summary_large_image",
                "site": "@typescriptogren",
                "creator": "@typescriptogren",
                "title": "Gizlilik Politikası | TypeScript Öğren",
                "description": "Kullanıcı verilerinin nasıl işlendiği, çerez kullanımı, güvenlik önlemleri ve gizlilik politikamız hakkında detaylı bilgi alın.",
                "images": [
                  "https://www.typescriptogren.com/images/gizlilik-politikasi-og.jpg"
                ]
              }
            };
            
            
            case "/sik-sorulan-sorular":
              return {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "Çerez Politikası | TypeScript Öğren",
                "description": "Çerez politikamız hakkında detaylı bilgi edinin. Kullanıcı deneyimini geliştirmek ve reklamları kişiselleştirmek amacıyla çerezleri nasıl kullandığımızı öğrenin.",
                "url": "https://www.typescriptogren.com/cerez-politikasi",
                "mainEntityOfPage": "https://www.typescriptogren.com/cerez-politikasi",
                "breadcrumb": {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Ana Sayfa",
                      "item": "https://www.typescriptogren.com/"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Çerez Politikası",
                      "item": "https://www.typescriptogren.com/cerez-politikasi"
                    }
                  ]
                },
                "openGraph": {
                  "title": "Çerez Politikası | TypeScript Öğren",
                  "description": "Çerez kullanımımız ve nasıl yönetileceği hakkında ayrıntılı bilgiye buradan ulaşabilirsiniz.",
                  "url": "https://typescriptogren.com/cerez-politikasi",
                  "siteName": "TypeScript Öğren",
                  "type": "website"
                },
                "twitter": {
                  "card": "summary_large_image",
                  "site": "@typescriptogren",
                  "creator": "@typescriptogren",
                  "title": "Çerez Politikası | TypeScript Öğren",
                  "description": "Çerez kullanımımız ve nasıl yönetileceği hakkında ayrıntılı bilgiye buradan ulaşabilirsiniz.",
                  "images": [
                    "https://www.typescriptogren.com/images/cerez-politikasi-og.jpg"
                  ]
                }
              };
            
              case "/quiz":
                return  {
                    "@context": "https://schema.org",
                    "@type": "Quiz",
                    "name": "TypeScript Quizleri",
                    "description": "TypeScript becerilerinizi geliştirmek ve ilerlemenizi görmek için çeşitli quizlere katılın. Her seviyeye uygun quizler mevcuttur.",
                    "url": "https://your-website.com/quizler",
                    "mainEntityOfPage": "https://your-website.com/quizler",
                    "author": {
                      "@type": "Person",
                      "name": "Adınız Soyadınız",
                      "url": "https://your-website.com"
                    },
                    "keywords": "TypeScript, quiz, yazılım geliştirme, test, eğitim, beceri geliştirme",
                    "breadcrumb": {
                      "@type": "BreadcrumbList",
                      "itemListElement": [
                        {
                          "@type": "ListItem",
                          "position": 1,
                          "name": "Ana Sayfa",
                          "item": "https://your-website.com"
                        },
                        {
                          "@type": "ListItem",
                          "position": 2,
                          "name": "Quizler",
                          "item": "https://your-website.com/quizler"
                        }
                      ]
                    },
                    "quiz": [
                      {
                        "@type": "Quiz",
                        "name": "TypeScript Başlangıç Seviye Quiz",
                        "url": "https://your-website.com/quizler/baslangic-seviye"
                      },
                      {
                        "@type": "Quiz",
                        "name": "TypeScript Orta Seviye Quiz",
                        "url": "https://your-website.com/quizler/orta-seviye"
                      },
                      {
                        "@type": "Quiz",
                        "name": "TypeScript İleri Seviye Quiz",
                        "url": "https://your-website.com/quizler/ileri-seviye"
                      }
                    ]
                  };
                  
                
                  case "/blog":
                    return {
                      "@context": "https://schema.org",
                      "@type": "Blog",
                      "name": "Blog Başlığı",
                      "description": "Web gelişim, yazılım ve diğer teknolojiler hakkında içerikler bulabileceğiniz blog sayfası.",
                      "url": "https://your-website.com/blog",
                      "mainEntityOfPage": "https://your-website.com/blog",
                      "author": {
                        "@type": "Person",
                        "name": "Adınız Soyadınız",
                        "url": "https://your-website.com"
                      },
                      "keywords": "blog, yazılım, web geliştirme, teknoloji, eğitim, yazılım geliştirme",
                      "breadcrumb": {
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                          {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Ana Sayfa",
                            "item": "https://your-website.com"
                          },
                          {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "Blog",
                            "item": "https://your-website.com/blog"
                          }
                        ]
                      },
                      "blogPost": blogPosts.map((post) => ({
                        "@type": "BlogPosting",
                        "headline": post.title,
                        "url": post.link,
                        "author": {
                          "@type": "Person",
                          "name": "Adınız Soyadınız"
                        },
                        "datePublished": post.publishedAt,
                        "description": post.description,
                        "image": "https://your-website.com/path/to/image.jpg", // Opsiyonel: Her blog yazısına özel görsel ekleyebilirsiniz
                      }))
                    };


               
            
    default:
      return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "TypeScript Öğren",
        "url": `https://www.typescriptogren.com${pathname}`,
        "description": "TypeScript hakkında bilgi edinmek için doğru yerdesiniz.",
      };
  }
};

export default function JsonLd() {
  const pathname = usePathname();
  const [jsonLdData, setJsonLdData] = useState(getJsonLdData(pathname));

  useEffect(() => {
    setJsonLdData(getJsonLdData(pathname));
  }, [pathname]);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  );
}
