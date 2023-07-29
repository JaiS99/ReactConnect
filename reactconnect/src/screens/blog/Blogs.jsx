import React from 'react';
import BlogList from '../../components/bloglist/BlogList'; // Replace with the actual path to the BlogList component
import './blogs.css';
import NavBar from '../../components/navbar/Navbar';
import { Link } from 'react-router-dom';

const Blogs = () => {
  return (
    <div className="amazing-blog-page">
        <NavBar/>
        <hr/>
        <br/>
      <h1>Blogs by fellow developers! 💫</h1>
      <BlogList />
      <br/><br/>
      <Link to="/add-blog"><button className="add-blog-button">Add a blog</button></Link>
    </div>
  );
};

export default Blogs;
