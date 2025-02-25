"use client";
import { useEffect, useState } from 'react'
import { getBlogPostBySlug, formatDateToTurkish } from '@/data/blogPosts'
import Image from 'next/image';

type BlogPostProps = {
  slug: string // Slug parametresini prop olarak alıyoruz
}

export default function BlogPost({ slug }: BlogPostProps) {
  const [blogPost, setBlogPost] = useState<any>(null)

  useEffect(() => {
    const fetchData = async () => {
      const post = getBlogPostBySlug(slug) // Slug ile veri çekiyoruz
      setBlogPost(post)
    }
    fetchData()
  }, [slug]) // Slug değiştiğinde veriyi yeniden alıyoruz

  if (!blogPost) {
    return <div>Loading...</div> // Veri henüz gelmemişse "Loading..." mesajı gösteriyoruz
  }

  return (
<div className="container mx-auto max-w-4xl p-6">
  {/* Kapak Görseli */}
  <div className="w-full h-64 md:h-96 relative">
    <Image
      src={blogPost.image}

      alt="Blog Cover"
      fill
      className="object-cover rounded-lg"
    />
  </div>

  {/* Başlık ve Meta Bilgiler */}
  <div className="mt-6 text-center">
    <h1 className="text-3xl md:text-5xl font-extrabold text-custom-gray tracking-tight">
      {blogPost.title}
    </h1>

  </div>

  {/* Açıklama */}
  <h2 className="text-xl md:text-2xl font-semibold text-custom-blue mt-6 text-center">
    {blogPost.description}
  </h2>

  {/* İçerik */}
  <div className="text-sm md:text-md text-custom-gray leading-relaxed mt-6">
    <p>{blogPost.content}</p>
  </div>

  {/* Yazar Bilgisi (İsteğe Bağlı) */}
  <div className="flex items-center justify-between items-center mt-12 border-t pt-4">
   <div className='flex items-center gap-4'>

    <div>
      <p className="text-sm md:text-md font-semibold">Yazar: www.typescriptogren.com</p>
    </div>

   
    </div>  <p className="text-sm md:text-md text-gray-500 ">
{    formatDateToTurkish(blogPost.publishedAt) }
    </p>
  </div>
</div>


  )
}
