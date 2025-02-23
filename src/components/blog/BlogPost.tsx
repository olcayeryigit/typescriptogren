"use client";
import { useEffect, useState } from 'react'
import { getBlogPostBySlug } from '@/data/blogPosts'

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
    <div>
      <h1>{blogPost.title}</h1>
      <p>{blogPost.content}</p> {/* Blog post içeriğini burada gösteriyoruz */}
    </div>
  )
}
