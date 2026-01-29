import React from "react";
import "./WhyChooseFood.css";

const whyChooseData = [
  {
    id: 1,
   img: "pr.png",
    title: "Premium Quality",
    desc: "Fresh ingredients & authentic recipes prepared by expert chefs.",
  },
  {
    id: 2,
   img: "fastcook.jpg",
    title: "Fast Cooking",
    desc: "Hygienic kitchen with quick preparation & timely delivery.",
  },
  {
    id: 3,
   img: "topr.png",
    title: "Top Rated",
    desc: "Loved by thousands of customers with excellent ratings.",
  },
  {
    id: 4,
   img: "bestp.png",
    title: "Best Price",
    desc: "Delicious food at affordable prices with great offers.",
  },
];

export default function WhyChooseFood() {
  return (
    <section className="why-choose">
        <div className="last-word">
      <h2>Why Choose Our</h2>
      <h2 style={{color:'#E55F60'}}>Food</h2>

        </div>
      <p>----- We serve quality food with love & care -----</p>

      <div className="why-grid">
        {whyChooseData.map((item) => (
          <div className="why-card" key={item.id}>
            <div className="icon"><img src={item.img} alt=""/></div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
