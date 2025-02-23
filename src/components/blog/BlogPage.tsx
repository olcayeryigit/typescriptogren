import * as React from 'react';
import BlogDetail from './BlogDetail';

type BlogPageProps = {
  pathname: string; // pathname prop olarak alınıyor
};

const BlogPage: React.FC<BlogPageProps> = ({ pathname }) => {
  return (
    <div>
      <BlogDetail detail={pathname}/>
    </div>
  );
};

export default BlogPage;
