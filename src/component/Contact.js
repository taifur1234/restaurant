import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div>
       <div className="contact-top">
        <div className='c-first'>
          <h1>Contact</h1>
          <h1>Us</h1>
        </div>
        <div className='c-back'>
         <Link to='/'><span><i className="fa-solid fa-house"></i> Home</span></Link>
         <span><i className="fa-solid fa-chevron-right"></i> Contact</span>
        </div>
        </div>
    </div>
  )
}
