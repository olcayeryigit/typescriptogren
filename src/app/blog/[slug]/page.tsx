'use client'
import BlogPage from '@/components/blog/BlogPage'
import * as React from 'react'

type Props = {
  params: Promise<{ slug: string }>
}

const Page: React.FC<Props> = ({ params }) => {
  const [slug, setSlug] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params; // params'ı çözüme kavuşturuyoruz
      setSlug(resolvedParams.slug); // id'yi state'e set ediyoruz
    };

    fetchParams();
  }, [params]);

  if (slug=== null) {
    return <p>Yükleniyor...</p>;
  }

  return <div>

<BlogPage slug={slug} />

  </div>;
}

export default Page;
