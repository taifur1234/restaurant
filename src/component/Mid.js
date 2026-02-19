import { useState } from 'react';
import './Mid.css'
import { Link } from 'react-router-dom'

export default function Mid() {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen);
  return (
    <div>
        <div className="hero-details">
          <h1>We Serve</h1>

          <div className="h-detail-flex">
            <h1>Delicious</h1>
            <h1>Food</h1>
          </div>

          <p>
            At Flavour Hub, we believe great food brings people together.
            Our restaurant offers rich flavors, fresh ingredients, and an warms and goods, welcoming ambiance for every occasion.
          </p>

         <Link  onClick={() => setMenuOpen(false)} to='/book'>
          <button className="book-btn-mid">Book a Table</button>
         </Link>
        </div>
    </div>
  )
}
