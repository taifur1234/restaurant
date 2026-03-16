import React, { useState } from "react";
import "./AdminPanel.css";
import { useNavigate } from "react-router-dom";

export default function AdminPanel() {

const [sidebar,setSidebar]=useState(false);
const [page,setPage]=useState("dashboard");
const navigate = useNavigate();
const handleLog = () => {
 navigate("/");
} 

return(

<div className="rp-admin">

{/* SIDEBAR */}

<div className={sidebar ? "rp-sidebar rp-open" : "rp-sidebar"}>

<div className="rp-logo">🍴 Admin Panel <span onClick={()=> setSidebar(false)}> <i class="fa-solid fa-xmark" style={{cursor:'pointer'}}></i></span></div>

<ul className="rp-menu">

<li
className={page==="dashboard"?"rp-active":""}
onClick={()=>{setPage("dashboard");setSidebar(false)}}
>
Dashboard
</li>

<li
className={page==="reservation"?"rp-active":""}
onClick={()=>{setPage("reservation");setSidebar(false)}}
>
Reservations
</li>

<li
className={page==="menu"?"rp-active":""}
onClick={()=>{setPage("menu");setSidebar(false)}}
>
Menu Management
</li>

<li>Tables</li>
<li onClick={handleLog}>Logout</li>

</ul>

<div className="rp-profile">

<img src="https://i.pravatar.cc/40" alt="admin"/>

<div>
<p>Rajesh Sharma</p>
<span>Admin</span>
</div>

</div>

</div>


{/* MAIN */}

<div className="rp-main">

{/* TOPBAR */}

<div className="rp-topbar">

<button
className="rp-hamburger"
onClick={()=>setSidebar(!sidebar)}
>
<i class="fa-solid fa-bars"></i>
</button>

<div>
<h2>Welcome, Rajesh 👋</h2>
<p>Manage restaurant reservations & menu</p>
</div>

</div>


{/* DASHBOARD */}

{page==="dashboard" && (

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

{/* BOOKING TABLE */}

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

<tr>
<td>Rajesh Patel</td>
<td>2</td>
<td>10:30</td>
<td>5</td>
</tr>

<tr>
<td>Anjali Verma</td>
<td>4</td>
<td>11:30</td>
<td>7</td>
</tr>

<tr>
<td>Rajesh Patel</td>
<td>4</td>
<td>12:00</td>
<td>7</td>
</tr>

<tr>
<td>Anjali Verma</td>
<td>3</td>
<td>14:30</td>
<td>3</td>
</tr>

</tbody>

</table>

</div>


{/* ADD MENU */}

<div className="rp-panel rp-form">

<h3>Add New Menu Item</h3>

<input placeholder="Dish Name"/>

<div className="rp-row">

<input placeholder="₹"/>

<select>
<option>Category</option>
<option>Starter</option>
<option>Main Course</option>
<option>Dessert</option>
</select>

</div>

<textarea placeholder="Description"></textarea>

<button>Add Item</button>

</div>

</div>

</>

)}

</div>

</div>

)

}