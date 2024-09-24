import React, { useState } from 'react';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Espresso', price: 3.5, quantity: 2 },
    { id: 2, name: 'Latte', price: 4.0, quantity: 1 },
    { id: 3, name: 'Cappuccino', price: 4.5, quantity: 3 }
  ]);

  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    zip: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({
      ...shippingInfo,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!shippingInfo.name) newErrors.name = 'Name is required';
    if (!shippingInfo.address) newErrors.address = 'Address is required';
    if (!shippingInfo.city) newErrors.city = 'City is required';
    if (!shippingInfo.zip) newErrors.zip = 'Zip Code is required';
    if (!shippingInfo.phone) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(shippingInfo.phone)) newErrors.phone = 'Phone number must be 10 digits';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCheckout = () => {
    if (validateForm()) {
      // Handle checkout logic here (e.g., API call to process the order)
      alert('Order placed successfully!');
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>

      <div className="cart-summary">
        <h2>Cart Summary</h2>
        <ul className="cart-items">
          {cartItems.map(item => (
            <li key={item.id} className="cart-item">
              <span className="item-name">{item.name}</span>
              <span className="item-quantity">{item.quantity}</span>
              <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="order-total">
          <h2>Total: ${calculateTotal()}</h2>
        </div>
      </div>

      <div className="shipping-info">
        <h2>Shipping Information</h2>
        <form>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={shippingInfo.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={shippingInfo.address}
              onChange={handleChange}
              className={errors.address ? 'error' : ''}
            />
            {errors.address && <span className="error-message">{errors.address}</span>}
          </div>

          <div className="form-group">
            <label>City:</label>
            <input
              type="text"
              name="city"
              value={shippingInfo.city}
              onChange={handleChange}
              className={errors.city ? 'error' : ''}
            />
            {errors.city && <span className="error-message">{errors.city}</span>}
          </div>

          <div className="form-group">
            <label>Zip Code:</label>
            <input
              type="text"
              name="zip"
              value={shippingInfo.zip}
              onChange={handleChange}
              className={errors.zip ? 'error' : ''}
            />
            {errors.zip && <span className="error-message">{errors.zip}</span>}
          </div>

          <div className="form-group">
            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              value={shippingInfo.phone}
              onChange={handleChange}
              className={errors.phone ? 'error' : ''}
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>

          <button type="button" className="checkout-button" onClick={handleCheckout}>
            Complete Purchase
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
