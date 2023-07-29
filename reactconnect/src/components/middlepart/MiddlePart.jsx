import React from 'react'
import './middlepart.css';

const MiddlePart = () => {
  return (
    <>
        <div className="middlePart">
            <center>
                <h2 className='homeHeadingText'>Welcome to ReactConnect!👋🏻</h2>
                <br/>
                <br/>
                <br/>
                <div className="detailsContainer">
                <h3 className='paraText'>"ReactConnect" is a cutting-edge collaborative real-time code editor that revolutionizes the way developers work together on coding projects. Inspired by the fluidity of Google Docs, this platform empowers multiple developers to connect to the same React codebase simultaneously, enabling seamless collaboration and instant feedback like never before.</h3>
                <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="ReactConnect" className='devImage'/>
                </div>
               
            </center>
        </div>
    </>
  )
}

export default MiddlePart
