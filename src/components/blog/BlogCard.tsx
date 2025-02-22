import Link from "next/link";
import { MessageSquareText, ArrowRight } from "lucide-react";

interface BlogCardProps {
  id: number;
  title: string;
  slug: string;
  description: string;
}

const BlogCard: React.FC<{ post: BlogCardProps }> = ({ post }) => {
  return (
    <Link 
      href={`/blog/${post.slug}`} 
      className="block bg-white border-2 border-custom-blue p-6 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md hover:bg-gray-100 group"
    >
      <div className="flex items-center gap-3">
        <MessageSquareText className="text-custom-blue" size={22} />
        <h2 className="text-xl font-bold text-custom-gray group-hover:text-custom-blue">
          {post.title}
        </h2>
      </div>
      <p className="text-gray-700 mt-2">{post.description}</p>

      <div className="mt-4 inline-flex items-center gap-1 text-custom-blue font-semibold group-hover:text-custom-gray">
        <span>Devamını Oku</span>
        <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={18} />
      </div>
    </Link>
  );
};

export default BlogCard;