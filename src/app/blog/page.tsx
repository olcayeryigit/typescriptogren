import type { Metadata } from 'next'
import MainParagraph from '@/components/common/MainParagraph'
import PageTitle from '@/components/common/PageTitle'
import BlogPage from '@/components/blog/BlogPage'

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
    <div className="container mx-auto py-3 px-5 md:py-6">
  <PageTitle title="Yazılım Dünyasında Güncel Trendler: TypeScript ve Ötesi"/>  
<MainParagraph text="TypeScript başta olmak üzere, JavaScript, Python, Rust, Go ve diğer popüler programlama dillerindeki en yeni gelişmeleri keşfedin! Güncellenen sürümler, performans iyileştirmeleri ve en iyi geliştirme pratikleriyle yazılım dünyasındaki yenilikleri yakalayın. Bu blogda, modern yazılım trendleri, frameworkler ve en etkili kodlama teknikleriyle ilgili güncel içerikler bulabilirsiniz."/>

 <BlogPage/>
    </div>
  )
}

export default page
