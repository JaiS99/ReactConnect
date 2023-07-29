import React from 'react';
import './home.css';
import Navbar from '../../components/navbar/Navbar';
import MiddlePart from '../../components/middlepart/MiddlePart';

const Home = () => {
  return (
    <>
    <div className="homeContainer">
      <Navbar/>
      <br/>
      <MiddlePart/>
    </div>
    </>
  )
}

export default Home
