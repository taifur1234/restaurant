import React, { useEffect } from "react";
import "./Chef.css";

const chefsData = [
  {
    id: 1,
    name: "Chef Arjun",
    role: "Head Chef",
    desc: "Expert in authentic recipes with years of culinary excellence.",
    img: "chef1.jpg",
  },
  {
    id: 2,
    name: "Chef Aman",
    role: "Pastry Specialist",
    desc: "Creates delightful desserts with modern presentation.",
    img: "chef22.jpg",
  },
  {
    id: 3,
    name: "Chef Riya",
    role: "Vegan Cuisine Expert",
    desc: "Specialist in healthy and flavorful plant-based dishes.",
    img: "chef3.jpg",
  },
  {
    id: 4,
    name: "Chef Neha",
    role: "Sous Chef",
    desc: "Expert in modern fusion dishes with perfect taste balance.",
    img: "chef44.jpg",
  },
];

const Chef = () => {

  // scroll animation
  useEffect(() => {
    const cards = document.querySelectorAll(".chef-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <section className="chefs-section dark-theme">
      <div className="chefs-heading">
        <h2>Our Master Chefs</h2>
        <p>Meet the experts behind our delicious creations</p>
      </div>

      <div className="chefs-container">
        {chefsData.map((chef) => (
          <div className="chef-card" key={chef.id}>
            <div className="chef-img">
              <img src={chef.img} alt={chef.name} />
              <div className="chef-social">
                <i className="fab fa-instagram"></i>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
              </div>
            </div>

            <h3>{chef.name}</h3>
            <span>{chef.role}</span>
            <p>{chef.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Chef;
