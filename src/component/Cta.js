import React from "react";
import "./Cta.css";

export default function Cta() {
  return (
    <section className="cta-section">
      <div className="cta-overlay"></div>

      <div className="cta-content">
        <h2>Experience The Taste You’ll Remember</h2>
        <p>
          Fresh ingredients, expert chefs & flavors that make you come back.
          Book your table or order online now!
        </p>

        {/* Stats */}
        <div className="cta-stats">
          <div>
            <h3>10K+</h3>
            <span>Happy Customers</span>
          </div>
          <div>
            <h3>4.9★</h3>
            <span>Customer Rating</span>
          </div>
          <div>
            <h3>50+</h3>
            <span>Dishes</span>
          </div>
        </div>

        {/* Info Row */}
        <div className="cta-info">
          <p>🕒 Open: 11:00 AM – 11:00 PM</p>
          <p>📍 Location: Khargone, MP</p>
          <p>📞 Call Us: +91 98765 43210</p>
        </div>

        {/* Buttons */}
        <div className="cta-buttons">
          <button className="cta-primary">Book a Table</button>
          <button className="cta-secondary">Order Online</button>
        </div>
      </div>
    </section>
  );
}
