"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { blogPosts } from "@/data/blogPosts"; // blogPosts verisini içe aktar
import { quizler } from "@/data/quiz";
import { dersler } from "@/data/dersler";
import faqs from "@/data/Sorular";
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
      "url": `https://www.typescriptogrenm/dersler/${ders.slug}`,
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
      return{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post?.title || "TypeScript Öğren - Blog Post",
        "description": post?.description || "Bu blog yazısını okuyun.",
        "url": `https://www.typescriptogren.com/blog/${post?.slug}`,
        "author": {
          "@type": "Organization",
          "name": "TypeScript Öğren",
          "url": "https://www.typescriptogren.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "TypeScript Öğren",
          "url": "https://www.typescriptogren.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.typescriptogren.com/images/logo.png"
          }
        },
        "datePublished": post?.publishedAt,
        "dateModified":  post?.publishedAt,
        "image": post?.image ,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://www.typescriptogren.com/blog/${post?.slug}`
        },
        "articleSection": "Genel",
        "keywords": ["TypeScript", "JavaScript", "Yazılım", "Blog"]
      }      
      
    }
  }


  if (pathname.startsWith("/quiz/")) {
    const slug = pathname.split("/quiz/")[1]; // "something" kısmını al
  
    if (slug && !slug.includes("/")) { // slug varsa ve içinde ekstra "/" yoksa devam et
      return {
        "@context": "https://schema.org",
  "@type": "Quiz",
  "name": "TypeScript Quiz - Test",
  "description": "TypeScript konularını öğrenirken, bilginizi pekiştirmenize ve geliştirmenize yardımcı olacak zorlu ve etkileşimli quizler.",
  "author": {
    "@type": "Organization",
    "name": "TypeScript Öğren",
    "url": "https://www.typescriptogren.com"
  },
  "mainEntityOfPage": "https://www.typescriptogren.com/quiz"
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
            "url": "https://www.typescriptogren.com/images/logo.png"
          }
        },
        "sameAs": [
          "https://twitter.com/typescriptogren",
          "https://www.instagram.com/typescriptogren"
        ]
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
        "dersler": {
          "@type": "ItemList",
          "name": "TypeScript Dersleri Listesi",
          "description": "TypeScript öğrenmeye başlayın! Aşağıda temel ve ileri seviye dersler bulunmaktadır.",
          "itemListElement": dersler.map((ders, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": ders.baslik,
            "url": ders.link,
            "description": ders.aciklama,
          }))
        }};
      
   
    case "/sik-sorulan-sorular":
      return {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "name": "TypeScript Sıkça Sorulan Sorular | TypeScript Öğren",
            "description": "TypeScript hakkında en çok merak edilen soruların yanıtlarını burada bulabilirsiniz. TypeScript nedir? Kullanmalı mıyım? Zor mu?",
            "url": "https://www.typescriptogren.com/sik-sorulan-sorular",
            "keywords": [
              "TypeScript sıkça sorulan sorular", "TypeScript nedir", "TypeScript mi JavaScript mi",
              "TypeScript avantajları", "TypeScript zor mu", "TypeScript kullanmalı mıyım"
            ],
            "inLanguage": "tr",
            "isPartOf": { "@type": "Website", "name": "TypeScript Öğren", "url": "https://www.typescriptogren.com" }
          },
          {
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          }
        ]
      };
      
      case "/kaynaklar":
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "En İyi TypeScript Kaynakları – Resmi Dokümantasyon ve Eğitimler",
          "description": "TypeScript öğrenmek isteyenler için en iyi kaynakları keşfedin. Resmi dokümantasyon, GitHub deposu, bloglar ve ücretsiz kurslarla kendinizi geliştirin.",
          "keywords": [
            "TypeScript kaynakları", "TypeScript öğren", "TypeScript kursları",
            "JavaScript geliştirme", "TypeScript dokümantasyon", "TypeScript eğitimleri",
            "TypeScript resmi kaynakları", "Frontend geliştirme", "Web geliştirme",
            "En iyi TypeScript kaynakları", "Ücretsiz TypeScript kursları"
          ],
          "url": "https://www.typescriptogren.com/kaynaklar",
          "author": {
            "@type": "Person",
            "name": "TypeScript Öğren",
            "url": "https://www.typescriptogren.com"
          },
          "publisher": {
            "@type": "Organization",
            "name": "TypeScript Öğren",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.typescriptogren.com/images/logo.png",
              "width": 1200,
              "height": 630
            }
          },
          "image": {
            "@type": "ImageObject",
            "url": "https://www.typescriptogren.com/images/logo.png",
            "width": 1200,
            "height": 630
          },
          "datePublished": "2025-02-25",
          "dateModified": "2025-02-25",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.typescriptogren.com/kaynaklar"
          }
        };
        
        
        case "/iletisim":
          return {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Bizi Takip Edin!",
            "description":
              "TypeScript öğrenme yolculuğunuzda en güncel eğitim içerikleri, ipuçları ve rehberler için bizi Twitter ve Instagram'da takip edin!",
            "url": "https://www.typescriptogren.com/iletisim",
            "publisher": {
              "@type": "Organization",
              "name": "TypeScript Öğren",
              "url": "https://www.typescriptogren.com",
            },
            "sameAs": [
              "https://x.com/typescriptogren",
              "https://www.instagram.com/typescriptogren/"
            ],
          };

          case "/gizlilik-politikasi":
            return{
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Gizlilik Politikası",
              "description":
                "Kullanıcı verilerinin nasıl işlendiği, çerez kullanımı, güvenlik önlemleri ve gizlilik politikamız hakkında detaylı bilgi alın.",
              "url": "https://www.typescriptogren.com/gizlilik-politikasi",
              "publisher": {
                "@type": "Organization",
                "name": "TypeScript Öğren",
                "url": "https://www.typescriptogren.com",
              },
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
                  "url": "https://www.typescriptogren.com/cerez-politikasi",
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
                    "https://www.typescriptogren.com/images/logo.png"
                  ]
                }
              };
            




                
            case "/cerez-politikasi":
              return{
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "Çerez Politikası",
                "url": "https://www.typescriptogren.com/cerez-politikasi",
                "description": "Çerez politikamız hakkında detaylı bilgi edinin. Kullanıcı deneyimini geliştirmek ve reklamları kişiselleştirmek amacıyla çerezleri nasıl kullandığımızı öğrenin.",
                "breadcrumb": {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Ana Sayfa",
                      "item": "https://www.typescriptogren.com"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Çerez Politikası",
                      "item": "https://www.typescriptogren.com/cerez-politikasi"
                    }
                  ]
                }
              }
              



              case "/quiz":
                return  {
                  "@context": "https://schema.org",
                  "@type": "Quiz",
                  "name": "TypeScript Quizleri",
                  "description": "TypeScript becerilerinizi geliştirmek ve ilerlemenizi görmek için çeşitli quizlere katılın. Her seviyeye uygun quizler mevcuttur.",
                  "url": "https://www.typescriptogren.com/quiz",
                  "mainEntityOfPage": "https://www.typescriptogren.com/quiz",
                  "author": {
                    "@type": "Organization",
                    "name": "TypeScript Öğren",
                    "url": "https://www.typescriptogren.com"
                  },
                  "keywords": "TypeScript, quiz, yazılım geliştirme, test, eğitim, beceri geliştirme",
                  "image": {
                    "@type": "ImageObject",
                    "url": "https://www.typescriptogren.com/images/logo.png",
                    "width": 1200,
                    "height": 630
                  },
                  "breadcrumb": {
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                      { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://www.typescriptogren.com" },
                      { "@type": "ListItem", "position": 2, "name": "Quizler", "item": "https://www.typescriptogren.com/quiz" }
                    ]
                  },
                  "hasPart": quizler.map((quiz) => ({
                    "@type": "Quiz",
                    "name": quiz.title,
                    "url":  `https://www.typescriptogren.com/quiz/${quiz.slug}`
                  }))
                };
                
                
                  case "/blog":
                    return {
                        "@context": "https://schema.org",
                        "@type": "Blog",
                        "name": "Blog | TypeScript Öğren",
                        "description": "Web gelişim, yazılım ve diğer teknolojiler hakkında içerikler bulabileceğiniz blog sayfası.",
                        "url": "https://www.typescriptogren.com/blog",
                        "mainEntityOfPage": "https://www.typescriptogren.com/blog",
                        "author": {
                          "@type": "Organization",
                          "name": "TypeScript Öğren",
                          "url": "https://www.typescriptogren.com"
                        },
                        "keywords": "blog, yazılım, web geliştirme, teknoloji, eğitim, yazılım geliştirme",
                        "breadcrumb": {
                          "@type": "BreadcrumbList",
                          "itemListElement": [
                            {
                              "@type": "ListItem",
                              "position": 1,
                              "name": "Ana Sayfa",
                              "item": "https://www.typescriptogren.com"
                            },
                            {
                              "@type": "ListItem",
                              "position": 2,
                              "name": "Blog",
                              "item": "https://www.typescriptogren.com/blog"
                            }
                          ]
                        },
                        "blogPost": blogPosts.map((post) => ({
                          "@type": "BlogPosting",
                          "headline": post.title,
                          "url": `https://www.typescriptogren.com/blog/${post.slug}`,
                          "author": {
                            "@type": "Organization",
                            "name": "TypeScript Öğren",
                            "url": "https://www.typescriptogren.com"
                          },
                          "datePublished": post.publishedAt,
                          "description": post.description,
                          "image": post.image || "https://www.typescriptogren.com/images/logo.png"
                      
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
