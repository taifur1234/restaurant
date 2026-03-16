import React from "react";
import "./PopularFood.css";

export default function PopularFood({addToCart}) {

  const popularFoods = [
  {
    id: 1,
    name: "Paneer Butter Masala",
    description: "Creamy paneer cooked in rich buttery gravy.",
    price: 299,
    img: "paneer.jpg",
    type: "veg",
    rating: 4.5,
    time: "25 min",
  },
  {
    id: 2,
    name: "Chicken Biryani",
    description: "Aromatic rice with spicy chicken & herbs.",
    price: 349,
    img: "biryani.jpg",
    type: "nonveg",
    rating: 4.7,
    time: "35 min",
  },
  {
    id: 3,
    name: "Cheese Pizza",
    description: "Loaded with mozzarella & fresh toppings.",
    price: 399,
    img: "pizza.jpg",
    type: "veg",
    rating: 4.2,
    time: "20 min",
  },
];

  return (
    <section className="popular-food">
      <div className="last-word">
      <h2>Our Most Popular</h2>
      <h2 style={{color: '#E55F60'}}>Food</h2>
      </div>
      <p>----- Delicious dishes loved by our customers -----</p>

      <div className="food-grid">
        {popularFoods.map((food) => (
          <div className="food-card" key={food.id}>
            <span className={`food-badge ${food.type}`}>
              {food.type === "veg" ? "VEG" : "NON-VEG"}
            </span>
            <img src={food.img} alt={food.name} />
            <div className="content">
              <h3>{food.name}</h3>
              <div className="meta">
                <span className="rating">⭐ {food.rating}</span>
                <span className="time">⏱️ {food.time}</span>
              </div>
              <p>{food.description}</p>
              <div className="bottom">
                <span className="price">{food.price}</span>
                <button className="card-btn" onClick={()=> addToCart(food)}> 
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
