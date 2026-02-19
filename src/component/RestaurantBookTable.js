import React, { useState } from "react";
import "./RestaurantBookTable.css";

export default function Step1Booking() {
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("2");
  const [type, setType] = useState("Lunch");
  const [loading, setLoading] = useState(false);

  const handleCheck = () => {
    if (!date) {
      alert("Please select a date");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Table is Availabel.");
    }, 2500);
  };

  return (
    <div className="rbt1-wrapper">

      <div className="rbt1-header">
        <h1>BOOK A TABLE</h1>
        <p>Enjoy a family friendly bite to eat</p>

        <div className="rbt1-steps">
          <span className="active"></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="rbt1-form">
        <div className="rbt1-field">
          <label>OCCASION</label>
          <select>
            <option>Casual Dining</option>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>

        <div className="rbt1-field">
          <label>DATE</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="rbt1-field">
          <label>NO' GUESTS</label>
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          >
            {[1,2,3,4,5,6,7,8].map(num => (
              <option key={num}>{num}</option>
            ))}
          </select>
        </div>

        <div className="rbt1-field">
          <label>BOOKING TYPE</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option>Lunch</option>
            <option>Dinner</option>
          </select>
        </div>

      </div>

      <button className="rbt1-btn" onClick={handleCheck}>
        CHECK AVAILABILITY
      </button>
      {loading && (
        <div className="rbt1-loader-overlay">
          <div className="rbt1-loader"></div>
        </div>
      )}

    </div>
  );
}
