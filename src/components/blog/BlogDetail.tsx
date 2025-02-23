// components/blog/BlogDetail.tsx
import React from "react";
import { blogPosts } from "@/data/blogPosts";
import PageTitle from "../common/PageTitle";
import MainParagraph from "../common/MainParagraph";
import Subtitle from "../common/SubTitle";

interface BlogDetailProps {
  detail: string;
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
