import React from "react";
import "./OpenHour.css";

export default function OpeningHours() {
  return (
    <section className="opening-hours">
      <div className="hours-wrapper">
        
        <div className="hours-image">
          <img src="/open-hour.jpg" alt="Restaurant Interior" />
        </div>

        <div className="hours-content">
          <div className="hours-heading">
            <h2>Opening Hours</h2>
            <p>Visit us at the perfect time and enjoy freshly prepared meals in a warm atmosphere.</p>
          </div>
          <div className="hours-card">
            <div className="day">
              <span>Monday – Friday</span>
              <span>11:00 AM – 11:00 PM</span>
            </div>
            <div className="divider"></div>
            <div className="day">
              <span>Saturday</span>
              <span>10:00 AM – 12:00 PM</span>
            </div>
            <div className="divider"></div>
            <div className="day">
              <span>Sunday</span>
              <span className="closed">10:00 AM – 10:00 PM</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
