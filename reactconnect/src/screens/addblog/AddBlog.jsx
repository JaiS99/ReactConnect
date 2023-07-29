import React, { useState } from 'react';
import './addblog.css';
import NavBar from '../../components/navbar/Navbar';
import axios from 'axios';


const AddBlog = () => {

  
  

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newBlogData = { title, content, author };
      await axios.post('http://localhost:5000/api/blogs', newBlogData); // Specify the correct server address and port
      console.log('Blog submitted and saved to MongoDB!');
      // Optionally, you can add a success message or redirect the user to a different page.
    } catch (error) {
      console.error('Error while submitting the blog:', error);
      // Handle the error, show an error message, or do whatever you need to do.
    }
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
