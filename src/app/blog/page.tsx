import BlogCard from '@/components/blog/BlogCard'
import { blogPosts } from '@/data/blogPosts'
import React from 'react'

const page = () => {
  return (
    <div>
 <ul className="space-y-6">
        {blogPosts.map((post) => (
          <li key={post.id}>
            <BlogCard post={post} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default page
