// metadata.ts
import { blogPosts } from '@/data/blogPosts';
import { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // `slug`'a göre blog verisini bulma
  const blogPost = blogPosts.find(post => post.slug === slug);

  if (!blogPost) {
    throw new Error(`Blog post with slug "${slug}" not found.`);
  }

  // Parent metadata'yı alıyoruz ve üzerine ekleme yapıyoruz
  const previousOpenGraphImages = (await parent).openGraph?.images || [];

  return {
    title: blogPost.title, // Blog başlığı
    description: blogPost.description, // Blog özeti
    openGraph: {
      title: blogPost.title,
      description: blogPost.description,
      images: ['/path/to/image.jpg', ...previousOpenGraphImages], // Dinamik görseller
    },
  };
}
