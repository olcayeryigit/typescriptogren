import * as React from 'react';
import BlogPage from '@/components/blog/BlogPage';
import { Metadata } from 'next';

type PageProps = {
  params: Promise<{ slug: string }>;  // Slug parametresi Promise olarak alınıyor
};

export const metadata: Metadata = {
  title: 'Blog | My Website',  // Sabit başlık
  description: 'Web geliştirme, yazılım, eğitim ve daha fazlası hakkında derinlemesine makaleler ve rehberler. En güncel içerikleri keşfedin ve gelişen teknoloji dünyasında kendinizi geliştirin.',
};

const Page = ({ params }: PageProps) => {
  return (
    <div className="container mx-auto p-6">
      <BlogPage params={params} />
    </div>
  );
};

export default Page;
