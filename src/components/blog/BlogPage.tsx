"use client";
import React, { useState } from 'react';
import BlogCard from './BlogCard';
import { blogPosts } from '@/data/blogPosts';

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4; // Her sayfada 4 blog yazısı gösterilecek

  // Sayfaya göre blogları filtrele
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Sayfa sayısını hesapla
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  // Sayfa değiştirme fonksiyonu
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5">
        {currentPosts.map((post, index) => (
          <BlogCard key={index} post={post} />
        ))}
      </div>
     

      {/* Sayfalama */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-custom-gray text-white rounded-md disabled:bg-custom-blue"
        >
          Önceki
        </button>

        <span className="flex items-center text-lg font-semibold text-gray-700">
          Sayfa {currentPage} / {totalPages}
        </span>

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="text-sm md:text-md px-3 py-1 md:py-2 bg-custom-gray text-white rounded-md disabled:bg-custom-blue"
        >
          Sonraki
        </button>
      </div>
    </div>
  );
};

export default BlogPage;
