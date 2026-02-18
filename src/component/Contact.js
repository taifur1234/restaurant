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

        <section className="contact-info">
      <h2>Get in Touch</h2>
      <div className="info-cards">
        <div className="info-card">
          <i className="fa-solid fa-phone"></i>
          <h4>Phone</h4>
          <p>+91 9893274291</p>
        </div>

        <div className="info-card">
          <i className="fa-solid fa-location-dot"></i>
          <h4>Location</h4>
          <p>Khargone, India</p>
        </div>

        <div className="info-card">
          <i className="fa-solid fa-envelope"></i>
          <h4>Email</h4>
          <p>taifurahmad24@gmail.com</p>
        </div>
      </div>

      <div className="contact-bottom">
        <div className="map">
          <iframe
            title="location"
            src="https://www.google.com/maps?q=21.8283745,75.6118825&output=embed"
            loading="lazy"
          ></iframe>
        </div>

        <form className="contact-form">
          <h3>Send Us a Message</h3>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>


      <a
        href="https://wa.me/919893274291"
        className="whatsapp-btn"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </section>
    </div>
  )
}