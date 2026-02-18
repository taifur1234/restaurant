import React from "react";
import "./ChefSpecial.css";

export default function ChefSpecial() {

  const specialItems = [
    { id:1, name:"Golden Crispy Prawns", desc:"Crispy prawns with garlic dip.", price:"₹499", img:"g-prawns.jpg" },
    { id:3, name:"Royal Butter Chicken", desc:"Creamy rich tomato gravy.", price:"₹599", img:"r-butter.jpg" },
    { id:5, name:"Chocolate Lava Cake", desc:"Warm molten chocolate center.", price:"₹299", img:"c-lava.jpg" },
    { id:8, name:"Mango Lassi", desc:"Refreshing yogurt drink blended with fresh mango pulp.", price:"₹180", img:"m-lassi.jpg" },
    { id:9, name:"Cold Coffee", desc:"Chilled creamy coffee topped with whipped foam.", price:"₹220", img:"cc-coffee.jpeg" },
    {id:10,category:"Beverages",name:"Fresh Lime Soda",desc:"Sweet & salted lime soda for a refreshing taste.",price:"₹150",img:"ff-lime.jpg"}
  ];

  return (
    <section className="chefss-section">
      <div className="chefss-header">
        <h2>Chef's Special</h2>
        <div className="goldss-line"></div>
      </div>

      <div className="chefss-grid">
        {specialItems.map(item => (
          <div key={item.id} className="chefss-card">
            <img src={item.img} alt={item.name} />
            <div className="chefss-info">
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <span>{item.price}</span>
            </div>
            <div className="specialss-badge">Chef Recommends</div>
          </div>
        ))}
      </div>
    </section>
  );
}
