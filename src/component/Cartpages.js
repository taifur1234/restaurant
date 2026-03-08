import "./Cartpages.css";
import { useNavigate } from "react-router-dom";


export default function CartPage({ cart, setCart }) {

const navigate = useNavigate();

 const increaseQty = (index) => {
  const updated = [...cart];
  updated[index].qty = Number(updated[index].qty) + 1;
  setCart(updated);
};

const decreaseQty = (index) => {
  const updated = [...cart];
  if (updated[index].qty > 1) {
    updated[index].qty = Number(updated[index].qty) - 1;
    setCart(updated);
  }
};

  const removeItem = (index) => {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
  };

 const subtotal = cart.reduce((total, item) => {
  return total + Number(item.price) * Number(item.qty);
}, 0);

  return (
    <div className="cart-wrapper">
      {cart.length === 0 ? (
          
          <div className="empty-cart">
          <h3>Your Cart is Empty</h3>
        </div>

      ) : (

        <>
          <div className="cart-items">
            <h2>Your <span>Cart</span></h2>
            {cart.map((item, index) => (
              <div className="cart-card" key={index}>

                <div className="top-row">
                  <img src={item.img} alt={item.name} />
                  <div className="cart-details">
                    <h4>{item.name}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>

                <div className="price-row">
                  <div className="cart-price">
                    ₹{item.price}
                  </div>

                  <div className="qty-remove">
                    <div className="qty-box">
                      <button onClick={() => decreaseQty(index)}>-</button>
                      <span>{item.qty}</span>
                      <button onClick={() => increaseQty(index)}>+</button>
                    </div>

                    <button 
                      className="modern-remove"
                      onClick={() => removeItem(index)}
                    >
                      Remove
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

          <div className="cart-bottom">
            <div className="total-box">
              <h4>Cart Total</h4>
              <p>Subtotal <span>₹{subtotal}</span></p>
              <p>Total <span>₹{subtotal}</span></p>
              <button className="checkout-btn"  onClick={() => navigate("/checkout")}>
                Proceed To Checkout →
              </button>
            </div>
          </div>
        </>

      )}

    </div>
  );
}