import { Metadata } from 'next'; // Metadata tipi

type BlogPageProps = {
  slug: string;
};

// Metadata oluşturuluyor
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;

  return {
    title: `Blog Post: ${slug}`, // Slug'a göre başlık oluşturuluyor
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
