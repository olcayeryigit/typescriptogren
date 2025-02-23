import BlogPost from '@/components/blog/BlogPost'
import { getBlogPostBySlug } from '@/data/blogPosts'
import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params; // params'ı çözümle
  const slug = resolvedParams.slug;

  // Blog verisini al
  const blog = getBlogPostBySlug(slug);

  return {
    title: blog?.title || 'Blog Post', // Başlık varsa onu al
  }
}


export default async function Page({ params }: Props) {
  // Burada params'ı çözümleyip BlogPost'a gönderiyoruz
  const resolvedParams = await params; // params'ı çözümle
  const slug = resolvedParams.slug;

  return (
    <div>
      {/* Slug'ı BlogPost bileşenine prop olarak gönderiyoruz */}
      <BlogPost slug={slug} />
    </div>
  )
}
