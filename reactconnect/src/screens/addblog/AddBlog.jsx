import React, { useState } from 'react';
import './addblog.css';
import NavBar from '../../components/navbar/Navbar';

const AddBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code to handle form submission and blog creation here
    console.log('Blog submitted!');
  };

  return (
    <div className="add-blog-screen">
        <NavBar/>
      <h1>Add a Blog</h1>
      <form className="blog-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <button type="submit" className='publishButton'>Publish</button>
      </form>
      <br/>
      <br/>
    </div>
  );
};

export default AddBlog;
