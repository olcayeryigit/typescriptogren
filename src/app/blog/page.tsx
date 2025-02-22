
import { blogPosts } from "@/data/blogPosts";
import PageTitle from "@/components/common/PageTitle";
import BlogCard from "@/components/blog/BlogCard";
import { Metadata } from "next";
import Head from "next/head";

// SEO Metadata
export const metadata: Metadata = {
  title: "TypeScript Blog – En Güncel TypeScript İçerikleri",
  description:
    "TypeScript ile ilgili en güncel yazılar, ipuçları ve rehberler. JavaScript ve TypeScript geliştirme hakkında detaylı içerikler keşfedin.",
  keywords: [
    "TypeScript blog", "TypeScript rehber", "TypeScript makaleler",
    "JavaScript blog", "TypeScript geliştirme", "Frontend geliştirme",
    "Web geliştirme", "TypeScript en iyi kaynaklar", "TypeScript ipuçları",
  ],
  
  openGraph: {
    title: "TypeScript Blog – En Güncel TypeScript İçerikleri",
    description:
      "TypeScript ile ilgili en güncel yazılar, ipuçları ve rehberler. JavaScript ve TypeScript geliştirme hakkında detaylı içerikler keşfedin.",
    url: "https://www.typescriptogren.com/blog",
    siteName: "TypeScript Öğren",
    images: [
      {
        url: "https://www.typescriptogren.com/images/blog-og.jpg",
        width: 1200,
        height: 630,
        alt: "TypeScript Blog – En Güncel TypeScript İçerikleri",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@typescriptogren",
    creator: "@typescriptogren",
    title: "TypeScript Blog – En Güncel TypeScript İçerikleri",
    description:
      "TypeScript ile ilgili en güncel yazılar, ipuçları ve rehberler. JavaScript ve TypeScript geliştirme hakkında detaylı içerikler keşfedin.",
    images: ["https://www.typescriptogren.com/images/blog-og.jpg"],
  },
};

// JSON-LD (Schema.org) Blog Yapısı
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "TypeScript Blog",
  "description": "TypeScript ile ilgili en güncel yazılar, ipuçları ve rehberler.",
  "url": "https://www.typescriptogren.com/blog",
  "mainEntityOfPage": {
    "@type": "WebSite",
    "@id": "https://www.typescriptogren.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "TypeScript Öğren",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.typescriptogren.com/images/logo.png"
    }
  },
  "blogPosts": blogPosts.map(post => ({
    "@type": "BlogPosting",
    "headline": post.title,
    "url": `https://www.typescriptogren.com/blog/${post.slug}`
  }))
};


const BlogList = () => {
  return (
    <div className="container mx-auto p-6">
      <Head>
      <link rel="canonical" href="https://www.typescriptogren.com/blog" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <PageTitle title="TypeScript Blog" />

      <ul className="space-y-6">
        {blogPosts.map((post) => (
          <li key={post.id}>
            <BlogCard post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
