// components/blog/BlogDetail.tsx
import React from "react";
import { blogPosts } from "@/data/blogPosts";
import PageTitle from "../common/PageTitle";
import MainParagraph from "../common/MainParagraph";
import Subtitle from "../common/SubTitle";
import { Metadata } from "next";

interface BlogDetailProps {
  detail: string;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // Slug ile eşleşen postu buluyoruz
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Blog yazısı bulunamadı",
      description: "Aradığınız blog yazısı bulunamadı.",
    };
  }

  return {
    title: `${post.title} - TypeScript Öğren`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://your-website.com/blog/${post.slug}`,
    },
    twitter: {
      title: post.title,
      description: post.description,
    },
  };
}

const BlogDetail = ({ detail }: BlogDetailProps) => {
  // blogPosts dizisinden slug ile eşleşen postu buluyoruz
  const post = blogPosts.find((p) => p.slug === detail);

  if (!post) {
    return <div>Blog yazısı bulunamadı!</div>;
  }

  return (
    <div>
      <PageTitle title={post.title} />
      <Subtitle text={post.description} />
      <MainParagraph text={post.content} />
    </div>
  );
};

export default BlogDetail;
