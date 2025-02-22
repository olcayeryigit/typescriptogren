// pages/blog/[slug].tsx
import BlogDetail from "@/components/blog/BlogDetail";
import { blogPosts } from "@/data/blogPosts";
import Head from "next/head";

interface PageProps {
  params: { slug: string };
}

export function generateMetadata({ params }: PageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Blog Yazısı Bulunamadı",
      description: "Aradığınız blog yazısı mevcut değil.",
      keywords: "TypeScript, JavaScript, Next.js, React, blog",
      openGraph: {
        title: "Blog Yazısı Bulunamadı",
        description: "Aradığınız blog yazısı mevcut değil.",
        url: "https://typescriptogren.com/blog/not-found",
        images: [
          {
            url: "https://typescriptogren.com/blog-image.jpg",
            width: 1200,
            height: 630,
            alt: "Blog Yazısı Bulunamadı",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "Blog Yazısı Bulunamadı",
        description: "Aradığınız blog yazısı mevcut değil.",
        images: ["https://typescriptogren.com/blog-image.jpg"],
      },
    };
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Person",
      name: "TypeScript Öğren",
    },
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    mainEntityOfPage: `https://typescriptogren.com/blog/${post.slug}`,
    image: "https://typescriptogren.com/blog-image.jpg",
    url: `https://typescriptogren.com/blog/${post.slug}`,
  };

  return {
    title: `${post.title} - TypeScript Öğren`,
    description: post.description,
    keywords: ["TypeScript", "JavaScript", "Next.js", "React", "Blog"],
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://typescriptogren.com/blog/${post.slug}`,
      images: [
        {
          url: "https://typescriptogren.com/blog-image.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["https://typescriptogren.com/blog-image.jpg"],
    },
    jsonLd,
  };
}

const Page = ({ params }: PageProps) => {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div>
        <Head>
          <title>Blog Yazısı Bulunamadı</title>
          <meta name="description" content="Aradığınız blog yazısı mevcut değil." />
          <meta name="keywords" content="TypeScript, JavaScript, Next.js, React, blog" />
        </Head>
        <h1>Blog Yazısı Bulunamadı</h1>
        <p>Aradığınız blog yazısı mevcut değil.</p>
      </div>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Person",
      name: "TypeScript Öğren",
    },
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    mainEntityOfPage: `https://typescriptogren.com/blog/${post.slug}`,
    image: "https://typescriptogren.com/blog-image.jpg",
    url: `https://typescriptogren.com/blog/${post.slug}`,
  };

  return (
    <div>
      <Head>
        <title>{`${post.title} - TypeScript Öğren`}</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content="TypeScript, JavaScript, Next.js, React, Blog" />
        <link rel="canonical" href={`https://typescriptogren.com/blog/${post.slug}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <BlogDetail slug={params.slug} />
    </div>
  );
};

export default Page;
