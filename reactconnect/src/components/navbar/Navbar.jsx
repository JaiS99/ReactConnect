import React from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {

    

  return (
    <>
    <div className="navbar">
      <nav class="navbar navbar-expand-lg" id="navbarr">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" style={{fontWeight: "bold"}}>ReactConnect</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Leaderboard</a>
        </li>

        <li class="nav-item">
          <Link to="/blogs" class="nav-link">Blogs</Link>
        </li>
        <li class="nav-item">
            <Link to='/create-space'><button className="createSpaceBtn" >Create Space</button>
            </Link>
        </li>
        
        <div className="spacer"></div>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/20625/avatar-bg.png" height="30px" width="30px" className='myProfile'/>
          </a>
        </li>
      </ul>
      
    
    </div>
    
  </div>
</nav>
</div>
    
    </>
  )
}

export default NavBar;
