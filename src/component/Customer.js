import React from "react";
import "./Customer.css";

const reviews = [
  {
    id: 1,
    name: "Aman Verma",
    rating: 5,
    comment:
      "Amazing food quality! Paneer Butter Masala was super delicious 😍",
  },
  {
    id: 2,
    name: "Sneha Sharma",
    rating: 4,
    comment:
      "Fast service and great taste. Definitely ordering again!",
  },
  {
    id: 3,
    name: "Rahul Verma",
    rating: 5,
    comment:
      "Best restaurant in town. Highly recommended 👍",
  },
];

export default function Customer() {
  return (
    <section className="reviews">
        <div className="last-word">
      <h2>What Our Customers</h2>
      <h2 style={{color: '#E55F60'}}>Say</h2>

        </div>
      <p>----- Real reviews from our happy food lovers -----</p>

      <div className="review-grid">
        {reviews.map((review) => (
          <div className="review-card" key={review.id}>
            <div className="stars">
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </div>
            <p className="comment">"{review.comment}"</p>
            <h4>{review.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
