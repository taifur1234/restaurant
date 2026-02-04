import React from "react";
import "./WeDo.css";

const whyChooseData = [
  {
    id: 1,
   icon: "fa-solid fa-burger",
    title: "Fresh Product",
    desc: "Made with farm-fresh ingredients, ensuring great taste and top quality in every bite.",
  },
  {
    id: 2,
   icon: "fa-solid fa-kitchen-set",
    title: "Skilled Chefs",
    desc: "Expert chefs with a passion for perfection, preparing every meal with fresh ingredients.",
  },
  {
    id: 3,
   icon: "fa-solid fa-martini-glass-empty",
    title: "Top Bars",
    desc: "Our top bar serves handcrafted drinks, premium spirits, and signature cocktails atmosphere.",
  },
  {
    id: 4,
   icon: "fa-solid fa-bowl-food",
    title: "Vegan Cuisine",
    desc: "Delicious plant-based dishes made with fresh ingredients and bold natural flavors.",
  },
];

export default function WeDo() {
  return (
    <div>
        <div className="wedo-container">
        <h1>What We Do</h1>
      <div className="wedo-grid">
        {whyChooseData.map((item) => (
          <div className="wedo-card" key={item.id}>
            <div className="wedo-icon"><i className={item.icon}></i></div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
        </div>
    </div>
    
  );
}
