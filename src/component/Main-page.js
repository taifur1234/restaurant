import React, { useEffect, useState } from "react";
import "./Main-page.css";
import { Link } from "react-router-dom";

export default function Main_page() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(".nav-list");

      if (window.scrollY > 50) {
        nav.classList.add("glass");
      } else {
        nav.classList.remove("glass");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);




useEffect(() => {
  const handleScroll = () => {
    const secGlass = document.querySelector(".sec-glass");
    const width = window.innerWidth;

    if (!secGlass) return;
    
    if (width >= 320 && width <= 768) {
      if (window.scrollY > 50 && !menuOpen) {
        secGlass.classList.add("glass");
      } else {
        secGlass.classList.remove("glass");
      }
    } else {
      secGlass.classList.remove("glass");
    }
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", handleScroll);
  };
}, [menuOpen]);




useEffect(() => {
  const secGlass = document.querySelector(".sec-glass");


  if (menuOpen && window.scrollY > 50) {
    secGlass.classList.remove("glass");
  } else if (!menuOpen && window.scrollY > 50){
    secGlass.classList.add("glass");
    
  }
}, [menuOpen]);



  return (
    <div className="main-page-container">
      <nav className="navbar">
        <div className="sec-glass">
        <p className="logo-p"> Flavour Hub</p>
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          >
          <span></span>
          <span></span>
          <span></span>
        </div>
          </div>
        <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
          <li className="logo">Flavour Hub</li>
          <Link to='/'><li className="nav-item">Home</li></Link>
          <Link to='/menu'><li className="nav-item">Main Menu</li></Link>
          <Link to='/about'><li className="nav-item">About Us</li></Link>
          <Link to='/contact'><li className="nav-item">Contact Us</li></Link>
          <li className="nav-item">Your Food</li>
          <li>
            <button className="book-btn">Book a Table</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
