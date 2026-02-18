import React, { useState } from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'

export default function Menu() {

  const [activeCategory, setActiveCategory] = useState("All");

  const menuItems = [
    { id: 1, category: "Starters", name: "Golden Crispy Prawns", desc: "Crispy prawns with garlic dip.", price: "₹499", img: "g-prawns.jpg" },
    { id: 2, category: "Starters", name: "Stuffed Mushrooms", desc: "Cheese stuffed baked mushrooms.", price: "₹349", img: "s-mush.jpg" },
    { id: 3, category: "Main Course", name: "Royal Butter Chicken", desc: "Creamy rich tomato gravy.", price: "₹599", img: "r-butter.jpg" },
    { id: 4, category: "Main Course", name: "Paneer Lababdar", desc: "Premium North Indian curry.", price: "₹449", img: "p-labab.jpg" },
    { id: 5, category: "Desserts", name: "Chocolate Lava Cake", desc: "Warm molten chocolate center.", price: "₹299", img: "c-lava.jpg" },
    { id: 6, category: "Desserts", name: "Royal Rasmalai", desc: "Soft dumplings in sweet milk.", price: "₹249", img: "r-rasmalai.jpg" }
  ];

  const categories = ["All", "Starters", "Main Course", "Desserts"];

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter(item => item.category === activeCategory);

  return (
    <div>
      <div className="menu-top">
        <div className='m-first'>
          <h1>Our</h1>
          <h1>Menu</h1>
        </div>
        <div className='m-back'>
         <Link to='/'><span><i className="fa-solid fa-house"></i> Home</span></Link>
         <span><i className="fa-solid fa-chevron-right"></i> Menu</span>
        </div>
      </div>
        <div className="menu-container">
            <div className="filter-wrapper">
             {categories.map((cat) => (
             <button
             key={cat}
             className={activeCategory === cat ? "active" : ""}
             onClick={() => setActiveCategory(cat)}
             >
             {cat}
             </button>
             ))}
            </div>

            <div className="menu-grid">
             {filteredItems.map((item) => (
                <div className="menu-box fade-in" key={item.id}>
                  <img src={item.img} alt={item.name} />
                    <div className="menu-content">
                     <h4>{item.name}</h4>
                     <p>{item.desc}</p>
                      <button className="add-btn">
                       Add to Cart
                      </button>
                    </div>
                    <div className="menu-price">
                     <span className="price-line"></span>
                     {item.price}
                    </div>
                </div>
                ))}
            </div>

        </div>


    </div>
  )
}
