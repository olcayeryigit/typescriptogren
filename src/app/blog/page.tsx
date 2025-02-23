import { blogPosts } from '@/data/blogPosts'
import BlogCard from '@/components/blog/BlogCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | My Website',
  description: 'Blog sayfasında en güncel yazılarımızı bulabilirsiniz.',
  keywords: 'blog, yazılar, teknoloji, yazılım, geliştirici',
  authors: [{ name: 'Adınız Soyadınız', url: 'https://your-website.com' }], // authors dizisine yazar nesnesi ekliyoruz
  openGraph: {
    title: 'Blog | My Website',
    description: 'Blog sayfasında en güncel yazılarımızı bulabilirsiniz.',
    type: 'website',
    url: 'https://your-website.com/blog',
    images: [
      {
        url: 'https://your-website.com/path_to_image.jpg', // Mutlaka tam URL olmalı
        width: 800,
        height: 600,
        alt: 'Açıklama yazısı', // Opsiyonel
      },
    ],
    },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | My Website',
    description: 'Blog sayfasında en güncel yazılarımızı bulabilirsiniz.',
    images: [
      {
        url: 'https://your-website.com/path_to_image.jpg', // Mutlaka tam URL olmalı
        width: 800,
        height: 600,
        alt: 'Açıklama yazısı', // Opsiyonel
      },
    ],
  },
}

const page = () => {
  return (
    <div className='container mx-auto'>
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
