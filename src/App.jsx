
import './App.css'
import Logo from './assets/Logo.svg'
import LaptopLogo from './assets/LaptopLogo.png'
import startbtn from './assets/startbtn.svg'
import React from 'react'


function App() {
 

  return (
    <div className='container'>
      <div className="overlay">
        <div id="navbar">
          <div id="logo-container">
            <img src={Logo} alt="" />
          </div>
          <div id='btn-container'>
          <button className='btn homebtn'>Home</button>
          <button className='btn fontbtn'>Services Us</button>
          <button className='btn fontbtn'>Why Us</button>
          <button className='btn fontbtn'>Our Goals</button>
          <button className='btn' id='contactBtn'>Contact Us</button>
          </div>
        </div>
        <div className="main-content">
        <div className="text-content"> <h1>We Create Learning Experience With Excellent Technology.</h1>
        <div className="para">
          <p>Unlimited Access To 100+ World-Class Courses, Hands-On <br /> Projects, And Job-Ready Certificate Programs— <br /> All Included In Your Subscription</p>
        </div>
        <div id="main-content-btn">
          <button id='bookDemo-btn'>Book Demo Class</button>
          <button id='explore-btn'>Explore More <span id='btn-logo'><img width="20" height="20" src="https://img.icons8.com/ios-filled/50/FFFFFF/long-arrow-right.png" alt="long-arrow-right"/></span> </button>
        </div>
        </div>
        <div className="video-content">
          <div className="vedio"><img src={LaptopLogo} alt="" />
          <img id='startbtn' src={startbtn}  alt="" />
         
          </div>

        </div>
        </div>
        
      </div>
    </div>
  )
}

export default App
