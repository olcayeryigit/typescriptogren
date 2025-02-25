import Link from "next/link";
import { MessageSquareText, ArrowRight } from "lucide-react";
import Image from "next/image";
import { formatDateToTurkish } from "@/data/blogPosts";

interface BlogCardProps {
  id: number;
  title: string;
  slug: string;
  description: string;
  content:string;
  image:string;
  publishedAt:string;
}

const BlogCard: React.FC<{ post: BlogCardProps }> = ({ post }) => {
  return (
    <Link 
      href={`/blog/${post.slug}`} 
      className="relative block bg-white border-2 border-custom-blue p-3 md:p-5 mb-4 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md hover:bg-gray-100 group flex flex-col justify-between"
    >
      <div className="flex items-center gap-3">
        <h2 className="text-sm md:text-base font-bold text-custom-gray group-hover:text-custom-blue mb-1 ">
          {post.title}
        </h2>
      </div>
      <div className="relative w-full h-44">
              <Image src={post.image} fill className="object-cover rounded-md" alt={post.title}/>
              <div className="inset absolute w-full h-full bg-custom-blue opacity-20 transition-all duration-300 group-hover:bg-transparent"></div>
      </div>

      <p className="text-sm md:text-md text-custom-blue-2  mt-2">{post.description}</p>
      <p className="mb-6 text-sm md:text-md text-gray-700 mt-2 line-clamp-2">{post.content}</p>
<div className="flex items-center justify-between ">
      <div className=" inline-flex items-center gap-1 text-custom-blue font-semibold group-hover:text-custom-gray">
        <span className="text-sm md:text-md" >Devamını Oku</span>
        <MessageSquareText  className="transition-transform duration-300 group-hover:translate-x-1" size={18} />

      </div>
      <div className=" text-xs text-gray-300 ">
{    formatDateToTurkish(post.publishedAt) }
      </div>
</div>
    </Link>
  );
};

export default BlogCard;