import React from 'react';
import './About.css';
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
       <div className="about-top">
        <div className='a-first'>
          <h1>About</h1>
          <h1>Us</h1>
        </div>
        <div className='a-back'>
         <Link to='/'><span><i className="fa-solid fa-house"></i> Home</span></Link>
         <span><i className="fa-solid fa-chevron-right"></i> About</span>
        </div>
        </div>
    </div>
  )
}
