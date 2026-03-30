import React, { useState } from "react";
import "./AdminPanel.css";
import { useNavigate } from "react-router-dom";

export default function AdminPanel() {
  const [sidebar, setSidebar] = useState(false);
  const [page, setPage] = useState("dashboard");
  const [menu, setMenu] = useState([
  { name: "Paneer Tikka", price: 250, category: "Starter" },
  { name: "Butter Chicken", price: 350, category: "Main Course" },
  { name: "Gulab Jamun", price: 120, category: "Dessert" },
]);
const [tables, setTables] = useState([
  {
    number: 1,
    capacity: 2,
    status: "available",
    booking: null
  },
  {
    number: 2,
    capacity: 4,
    status: "booked",
    booking: {
      name: "Rajesh",
      guests: 4,
      time: "10:30"
    }
  },
  {
    number: 3,
    capacity: 6,
    status: "reserved",
    booking: {
      name: "Anjali",
      guests: 5,
      time: "12:00"
    }
  }
]);

const [selected, setSelected] = useState(null);

const [desc, setDesc] = useState("");
const [image, setImage] = useState("");
const [dish, setDish] = useState("");
const [price, setPrice] = useState("");
const [category, setCategory] = useState("Starter");

  const navigate = useNavigate();
  const handleLog = () => {
    navigate("/");
  };


const handleAdd = () => {
  if (!dish || !price || !desc || !image) {
    return alert("Fill all fields");
  }

  setMenu([
    ...menu,
    {
      name: dish,
      price: price,
      category: category,
      desc: desc,
      image: image,
    }
  ]);

  setDish("");
  setPrice("");
  setDesc("");
  setImage("");
};

const handleDelete = (index) => {
  const updated = menu.filter((_, i) => i !== index);
  setMenu(updated);
};


const handleImage = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onloadend = () => {
    setImage(reader.result); // base64
  };
  reader.readAsDataURL(file);
};


const makeAvailable = (num) => {
  const updated = tables.map(t =>
    t.number === num
      ? { ...t, status: "available", booking: null }
      : t
  );
  setTables(updated);
  setSelected(null);
};

const cancelBooking = (num) => {
  const updated = tables.map(t =>
    t.number === num
      ? { ...t, status: "available", booking: null }
      : t
  );
  setTables(updated);
  setSelected(null);
};


  return (
    <div className="rp-admin">

      {/* SIDEBAR */}
      <div className={sidebar ? "rp-sidebar rp-open" : "rp-sidebar"}>

        <div className="rp-logo">
          🍴 Admin Panel
          <span onClick={() => setSidebar(false)}>
            <i className="fa-solid fa-xmark"></i>
          </span>
        </div>

        <ul className="rp-menu">

          <li
            className={page === "dashboard" ? "rp-active" : ""}
            onClick={() => { setPage("dashboard"); setSidebar(false); }}
          >
            Dashboard
          </li>

          <li
            className={page === "reservation" ? "rp-active" : ""}
            onClick={() => { setPage("reservation"); setSidebar(false); }}
          >
            Reservations
          </li>

          <li
            className={page === "menu" ? "rp-active" : ""}
            onClick={() => { setPage("menu"); setSidebar(false); }}
          >
            Menu Management
          </li>

          <li
            className={page === "tables" ? "rp-active" : ""}
            onClick={() => { setPage("tables"); setSidebar(false); }}
          >
            Tables
          </li>

          <li onClick={handleLog}>Logout</li>

        </ul>
      </div>

      {/* MAIN */}
      <div className="rp-main">

        {/* TOPBAR */}
        <div className="rp-topbar">

          <button
            className="rp-hamburger"
            onClick={() => setSidebar(!sidebar)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          <div>
            <h2>Welcome, Admin</h2>
            <p>Manage restaurant reservations & menu</p>
          </div>

        </div>

        {/* ================= DASHBOARD ================= */}
        {page === "dashboard" && (
          <>
            <div className="rp-stats">
              <div className="rp-card">
                <p>Total Bookings</p>
                <h3>128</h3>
              </div>

              <div className="rp-card">
                <p>Today's Revenue</p>
                <h3>₹14,500</h3>
              </div>

              <div className="rp-card">
                <p>Booked Tables</p>
                <h3>5/12</h3>
              </div>
            </div>

            <div className="rp-grid">

              {/* TABLE */}
              <div className="rp-panel">
                <h3>Booking Management</h3>

                <table className="rp-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Guests</th>
                      <th>Time</th>
                      <th>Table</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr><td>Rajesh Patel</td><td>2</td><td>10:30</td><td>5</td></tr>
                    <tr><td>Anjali Verma</td><td>4</td><td>11:30</td><td>7</td></tr>
                    <tr><td>Rajesh Patel</td><td>4</td><td>12:00</td><td>7</td></tr>
                    <tr><td>Anjali Verma</td><td>3</td><td>14:30</td><td>3</td></tr>
                  </tbody>
                </table>
              </div>

            </div>
          </>
        )}

        {/* ================= RESERVATION ================= */}
       {page === "reservation" && (

  <div className="rp-reservation">

    <h2>Reservations</h2>

    {/* FILTER */}
    <div className="rp-filter">
      <input type="date" />
      <select>
        <option>All Tables</option>
        <option>Table 1</option>
        <option>Table 2</option>
        <option>Table 3</option>
      </select>
    </div>

    {/* TABLE VIEW */}
    <table className="rp-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Guests</th>
          <th>Time</th>
          <th>Table</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Rajesh Patel</td>
          <td>2</td>
          <td>10:30 AM</td>
          <td>Table 5</td>
          <td className="rp-status confirmed">Confirmed</td>
        </tr>

        <tr>
          <td>Anjali Verma</td>
          <td>4</td>
          <td>11:30 AM</td>
          <td>Table 7</td>
          <td className="rp-status pending">Pending</td>
        </tr>

        <tr>
          <td>Sameer Khan</td>
          <td>3</td>
          <td>01:00 PM</td>
          <td>Table 3</td>
          <td className="rp-status cancelled">Cancelled</td>
        </tr>
      </tbody>
    </table>

    {/* TABLE STATUS GRID */}
    <div className="rp-table-grid">

      <div className="rp-table-box booked">
        Table 1 <span>Booked</span>
      </div>

      <div className="rp-table-box available">
        Table 2 <span>Available</span>
      </div>

      <div className="rp-table-box booked">
        Table 3 <span>Rajesh - 10:30</span>
      </div>

      <div className="rp-table-box available">
        Table 4 <span>Free</span>
      </div>

      <div className="rp-table-box booked">
        Table 5 <span>Anjali - 11:30</span>
      </div>

    </div>

  </div>

)}

        {/* ================= MENU ================= */}
       {page === "menu" && (

  <div className="rp-menu-page">

    <h2>Menu Management</h2>

    {/* ADD ITEM */}
    <div className="rp-panel rp-form">

  <h3>Add New Item</h3>

  <input
    placeholder="Dish Name"
    value={dish}
    onChange={(e) => setDish(e.target.value)}
  />

  <div className="rp-row">
    <input
      placeholder="Price ₹"
      value={price}
      onChange={(e) => setPrice(e.target.value)}
    />

    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      <option>Starter</option>
      <option>Main Course</option>
      <option>Dessert</option>
    </select>
  </div>

  {/* DESCRIPTION */}
  <textarea
    placeholder="Description"
    value={desc}
    onChange={(e) => setDesc(e.target.value)}
  />

  {/* IMAGE */}
  <input
    type="file"
    accept="image/*"
    onChange={handleImage}
  />

  {/* PREVIEW */}
  {image && <img src={image} className="rp-preview" />}

  <button onClick={handleAdd}>Add Item</button>

</div>

    {/* MENU LIST */}
    <div className="rp-panel">

      <h3>All Menu Items</h3>

      <table className="rp-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {menu.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>₹{item.price}</td>
              <td>{item.category}</td>
              <td>
                <button
                  className="rp-delete"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>

  </div>

)}

        {/* ================= TABLES ================= */}
       {page === "tables" && (

  <div className="rp-tables">

    <h2>Table Management</h2>

    <div className="rp-table-grid">

      {tables.map((t, i) => (
        <div
          key={i}
          className={`rp-table-box ${t.status}`}
          onClick={() => setSelected(t)}
        >
          <h3>Table {t.number}</h3>
          <p>{t.capacity} Seats</p>

          {t.booking && (
            <span>{t.booking.name} - {t.booking.time}</span>
          )}
        </div>
      ))}

    </div>

    {/* DETAIL PANEL */}
    {selected && (
      <div className="rp-panel">
        <h3>Table {selected.number} Details</h3>

        {selected.booking ? (
          <>
            <p>Name: {selected.booking.name}</p>
            <p>Guests: {selected.booking.guests}</p>
            <p>Time: {selected.booking.time}</p>

            <button onClick={() => makeAvailable(selected.number)}>
              Mark Available
            </button>

            <button onClick={() => cancelBooking(selected.number)}>
              Cancel Booking
            </button>
          </>
        ) : (
          <p>No booking</p>
        )}

      </div>
    )}

  </div>

)}

      </div>
    </div>
  );
}