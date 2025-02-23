import { Metadata, ResolvingMetadata } from 'next'; // Metadata ve ResolvingMetadata tipleri

type BlogPageProps = {
  slug: string;
};

// Metadata oluşturuluyor
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }, // params Promise olarak alınır
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params; // params'ı çözümle
  const { slug } = resolvedParams;

  // Başlık oluşturuluyor
  return {
    title: `Blog Post: ${slug}`, // Slug'a göre başlık
  };
}

const BlogPage: React.FC<BlogPageProps> = ({ slug }) => {
  return (
    <div>
      <h1>Blog Post: {slug}</h1>
      <p>Here is the content for the blog post with slug: {slug}</p>
    </div>
  );
};

export default BlogPage;
