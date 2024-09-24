import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './Cartcontext';
import './Cartpage.css';

const Cartpage = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleCheckout = () => {
    navigate('/CheckoutPage');
  };

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      <ul className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <span className="item-name">{item.name}</span>
              <span className="item-price">${item.price.toFixed(2)}</span>
              <div className="item-quantity">
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
              <span className="item-total">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
              <button onClick={() => removeFromCart(item.id)} className="remove-button">
                Remove
              </button>
            </li>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </ul>
      {cartItems.length > 0 && (
        <div className="cart-summary">
          <h2>Total: ${calculateTotal()}</h2>
          <button className="checkout-button" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cartpage;
