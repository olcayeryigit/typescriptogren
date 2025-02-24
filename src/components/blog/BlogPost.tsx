"use client";
import { useEffect, useState } from 'react'
import { getBlogPostBySlug } from '@/data/blogPosts'
import PageTitle from '../common/PageTitle';
import MainParagraph from '../common/MainParagraph';
import Subtitle from '../common/SubTitle';

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
    <div className='container mx-auto p-6'>
      <PageTitle title={blogPost.title} />
      <Subtitle text={blogPost.description}/>
      <p>{blogPost.content}</p>
      <p className="text-end text-xs text-gray-300 ">{blogPost.publishedAt}</p>

    </div>
  )
}
