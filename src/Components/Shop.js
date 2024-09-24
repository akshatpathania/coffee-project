// import React from 'react';
// import coffeeData from './CoffeeData';
// import CoffeeCard from './CoffeeCard';
// import './Shop.css';
// import { useEffect } from 'react';

// const AOS=window.AOS;
// const Shop = () => {
//     useEffect(()=>{
//         AOS.init({
//             duration:1000,
//         })
//     },[])

//     return (
//         <div className="shop-container">
//             <h1>Our Coffee Selection</h1>
//             <div data-aos="fade-down" className="coffee-grid">
//                 {coffeeData.map(coffee => (
//                     <CoffeeCard
//                         key={coffee.id}
//                         name={coffee.name}
//                         price={coffee.price}
//                         description={coffee.description}
//                         imageUrl={coffee.imageUrl}
//                     /> 
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Shop;


import React, { useEffect } from 'react';
import coffeeData from './CoffeeData';
import CoffeeCard from './CoffeeCard';
import { useCart } from './Cartcontext';
import './Shop.css';
import { NavLink } from 'react-router-dom';

const AOS = window.AOS;

const Shop = () => {
  const { addToCart } = useCart(); // Access addToCart function

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="shop-container">
      <h1>Our Coffee Selection</h1>
      <div className="coffee-grid" data-aos="fade-down">
        {coffeeData.map((coffee) => (
          <CoffeeCard
            key={coffee.id}
            name={coffee.name}
            price={coffee.price}
            description={coffee.description}
            imageUrl={coffee.imageUrl}
            onAddToCart={() => addToCart(coffee)} // Add to cart
          />
        ))}
      </div>

      {/* Link to the Cart Page */}
      <div className="cart-link">
        <NavLink to="/Cartpage">Go to Cart</NavLink>
      </div>
    </div>
  );
};

export default Shop;
