import React, { useState, useEffect } from 'react';
import BlogCard from '../blogcard/Blogcard';
import axios from 'axios';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/blogs') // Use the correct server address and port
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => {
        console.error('Error while fetching blogs:', error);
      });
  }, []); 
  

  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <BlogCard key={blog._id} title={blog.title} content={blog.content} author={blog.author} />
      ))}
    </div>
  );
};

export default BlogList;
