import React from 'react';
import './CoffeeCard.css';
import coffeeData from './CoffeeData';
const CoffeeCard = ({ name, price, description, imageUrl, onAddToCart }) => {
  return (
    <div className="coffee-card">
      <img src={imageUrl} alt={name} className="coffee-image" />
      <div className="coffee-info">
        <h2 className="coffee-name">{name}</h2>
        <p className="coffee-description">{description}</p>
        <p className="coffee-price">${Number(price).toFixed(2)}</p>
        <button onClick={onAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default CoffeeCard;
