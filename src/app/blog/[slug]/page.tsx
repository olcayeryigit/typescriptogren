'use client';

import BlogDetail from '@/components/blog/BlogDetail';
import * as React from 'react';
import { blogPosts } from '@/data/blogPosts';
import Head from 'next/head';

type PageProps = {
  params: Promise<{ slug: string }>;
};

const Page: React.FC<PageProps> = ({ params }) => {
  const [realSlug, setRealSlug] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [blogPost, setBlogPost] = React.useState<any>(null);

  React.useEffect(() => {
    const fetchParams = async () => {
      try {
        const resolvedParams = await params; // params çözümleniyor
        if (resolvedParams && resolvedParams.slug) {
          const slug = resolvedParams.slug;
          setRealSlug(slug); // Slug parametresini state'e set ediyoruz

          // Slug'a göre blog postunu buluyoruz
          const post = blogPosts.find(post => post.slug === slug);
          if (post) {
            setBlogPost(post); // Blog yazısını state'e set ediyoruz
          } else {
            console.error('Blog post bulunamadı');
          }
        } else {
          console.error('Slug parametresi bulunamadı');
        }
      } catch (error) {
        console.error('Parametreler alınırken bir hata oluştu:', error);
      } finally {
        setLoading(false); // Yükleniyor durumu bitiyor
      }
    };

    fetchParams();
  }, [params]);

  if (loading) {
    return <p>Yükleniyor...</p>;
  }

  return (
    <div className="container mx-auto p-6">
      {/* Blog başlığını dinamik olarak set etmek */}
      {blogPost && realSlug && (
        <>
          <Head>
            <title>{blogPost.title}</title>
            <meta name="description" content={blogPost.description} />
            {/* Open Graph Meta Tagları */}
            <meta property="og:title" content={blogPost.title} />
            <meta property="og:description" content={blogPost.description} />
            <meta property="og:image" content="/path/to/image.jpg" />
          </Head>
          <BlogDetail detail={realSlug} />
        </>
      )}
    </div>
  );
};

export default Page;
