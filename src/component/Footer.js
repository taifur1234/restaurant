import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-col">
          <h3 className="footer-logo">Flavour Hub</h3>
          <p>
            Serving delicious food made with love.  
            Fresh ingredients, expert chefs & unforgettable taste.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Book Table</li>
            <li>Order Online</li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div className="footer-col">
          <h4>Opening Hours</h4>
          <ul>
            <li>Mon – Fri : 11 AM – 11 PM</li>
            <li>Saturday : 10 AM – 12 AM</li>
            <li>Sunday : 10 AM – 10 PM</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>📍 Khargone, MP</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ support@flavourhub.com</p>

          <div className="socials">
            <span><i class="fa-brands fa-instagram"></i></span>
            <span><i class="fa-brands fa-whatsapp"></i></span>
            <span><i class="fa-brands fa-facebook-f"></i></span>
            <span><i class="fa-brands fa-twitter"></i></span>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Flavour Hub. All Rights Reserved.
      </div>
    </footer>
  );
}
