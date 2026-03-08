import { useState } from "react";
import "./Checkout.css";

export default function CheckoutPage({ cart }) {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const subtotal = cart.reduce((total, item) => {
    return total + Number(item.price) * Number(item.qty);
  }, 0);

 const handlePlaceOrder = () => {

  const inputs = document.querySelectorAll("input");
  let isEmpty = false;

  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      isEmpty = true;
    }
  });

  if (isEmpty) {
    alert("Please fill all the fields");
  } else {
    setOrderPlaced(true);
  }

};

  return (
    <div className="checkout-wrapper">

      <h2 className="checkout-title">Secure Checkout</h2>

      <div className="checkout-container">

        {/* LEFT SIDE FORM */}

        <div className="checkout-form">

          <h3>Delivery Details</h3>

          <div className="input-group">
            <input type="text" required />
            <label>Full Name</label>
          </div>

          <div className="input-group">
            <input type="email" required />
            <label>Email Address</label>
          </div>

          <div className="input-group">
            <input type="text" required />
            <label>Phone Number</label>
          </div>

          <div className="input-group">
            <input type="text" required />
            <label>Delivery Address</label>
          </div>

          <div className="input-group">
            <input type="text" required />
            <label>City</label>
          </div>

          <textarea placeholder="Order Notes (optional)"></textarea>

        </div>


        {/* RIGHT SIDE ORDER SUMMARY */}

        <div className="order-summary">

          <h3>Your Order</h3>

          {cart.map((item, index) => (
            <div className="order-item" key={index}>
              <span>{item.name} × {item.qty}</span>
              <span>₹{item.price * item.qty}</span>
            </div>
          ))}

          <div className="divider"></div>

          <div className="summary-line">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="summary-line total">
            <span>Total</span>
            <span>₹{subtotal}</span>
          </div>

          <button
            className="place-order-btn"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>

        </div>

      </div>


      {/* ORDER SUCCESS POPUP */}

      {orderPlaced && (

        <div className="order-popup">

          <div className="popup-card">

            <div className="success-icon">✔</div>

            <h2>Order Placed!</h2>

            <p>Your food is being prepared 👨‍🍳</p>

            <button
              className="continue-btn"
              onClick={() => window.location.href="/"}
            >
              Continue Shopping
            </button>

          </div>

        </div>

      )}

    </div>
  );
}