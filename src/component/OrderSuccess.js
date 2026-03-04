import React from "react";
import { Link } from "react-router-dom";
import "./OrderSuccess.css";

export default function OrderSuccess() {
  return (
    <div className="success-container">
      <h2>🎉 Order Placed Successfully!</h2>
      <p>Your delicious food is on the way 🚚</p>

      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}