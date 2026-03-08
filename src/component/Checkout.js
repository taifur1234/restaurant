import "./Checkout.css";

export default function CheckoutPage({ cart }) {

  const subtotal = cart.reduce((total, item) => {
    return total + Number(item.price) * Number(item.qty);
  }, 0);

  return (
    <div className="checkout-wrapper">

      <h2 className="checkout-title">Secure Checkout</h2>

      <div className="checkout-container">

        <div className="checkout-form">

          <h3>Delivery Details</h3>

          <div className="input-group">
            <input type="text" required />
            <label>Full Name</label>
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

          <button className="place-order-btn">
            Place Order
          </button>

        </div>

      </div>

    </div>
  );
}