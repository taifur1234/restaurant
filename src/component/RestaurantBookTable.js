import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./RestaurantBookTable.css";

export default function RestaurantBookTable() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    date: "",
    time: "",
    message: ""
  });

  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateDateTime = () => {
    const now = new Date();
    const selected = new Date(formData.date + "T" + formData.time);

    if (!formData.date || !formData.time) {
      return "Please select date and time";
    }

    if (selected < now) {
      return "Past date/time not allowed";
    }

    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = validateDateTime();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setShowPopup(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      guests: "",
      date: "",
      time: "",
      message: ""
    });
  };

  return (
    <div className="rbt-wrapper">

      <motion.div
        className="rbt-container"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="rbt-title">Book Your Table</h2>

        <form className="rbt-form" onSubmit={handleSubmit}>

          <div className="rbt-row">
            <input className="rbt-input"
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input className="rbt-input"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="rbt-row">
            <input className="rbt-input"
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <select
              className="rbt-input"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              required
            >
              <option value="">Guests</option>
              <option>1 Person</option>
              <option>2 People</option>
              <option>3 People</option>
              <option>4+ People</option>
            </select>
          </div>

          <div className="rbt-row">
            <input
              className="rbt-input"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
            <input
              className="rbt-input"
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            className="rbt-textarea"
            name="message"
            placeholder="Special Request"
            value={formData.message}
            onChange={handleChange}
          />

          {error && <p className="rbt-error">{error}</p>}

          <button className="rbt-button" type="submit">
            Book Now
          </button>
        </form>
      </motion.div>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="rbt-popup-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="rbt-popup-box"
              initial={{ scale: 0.6 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.6 }}
              transition={{ duration: 0.3 }}
            >
              <h3>🎉 Booking Confirmed!</h3>
              <p>Your table has been successfully reserved.</p>
              <button
                className="rbt-popup-btn"
                onClick={() => setShowPopup(false)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
