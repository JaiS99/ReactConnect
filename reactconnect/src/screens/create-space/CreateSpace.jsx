import React from 'react'
import './createspace.css'
import NavBar from '../../components/navbar/Navbar'

const CreateSpace = () => {
  return (
    <>

    <div className="createSpace">

        <center>
        <NavBar/>
        <br/>
            <h1 className='headingText'>
                Create Virtual Space 🤖
            </h1>

            <br/>

            

            <h4>
                Please enter the following details.
            </h4>   
            <br/>
            <div className="detailsNewContainer">

                <input type='text' placeholder='Space Name' className='textField'/><br/>

                <textarea className='textField' placeholder='Description about space.'></textarea> <br/>

                <div className="buttons">
                <button className='create-space-btn'>
      Create Space
    </button>

    <button className='join-space-btn'>Join Space</button>
                </div>

              

            </div>

        </center>

    </div>

    </>
  )
}

export default CreateSpace
