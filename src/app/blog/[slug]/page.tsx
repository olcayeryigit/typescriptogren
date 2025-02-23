import * as React from 'react';
import BlogPage from '@/components/blog/BlogPage';

type PageProps = {
  params: Promise<{ slug: string }>;  // Slug parametresi Promise olarak alınıyor
};



const Page = ({ params }: PageProps) => {
  return (
    <div className="container mx-auto p-6">
      <BlogPage params={params} />
    </div>
  );
};

export default Page;
