import React from 'react';
import BlogCard from '../blogcard/Blogcard';

const BlogList = () => {
  const blogs = [
    {
      title: 'idk',
      content: 'flutter is better',
      author: 'not armaan',
    },
    {
      title: 'flutter is the best',
      content: 'there is content',
      author: 'ghost',
    },
    // Add more blog objects as needed
  ];

  return (
    <div className="blog-list">
      {blogs.map((blog, index) => (
        <BlogCard key={index} title={blog.title} content={blog.content} author={blog.author} />
      ))}
    </div>
  );
};

export default BlogList;
