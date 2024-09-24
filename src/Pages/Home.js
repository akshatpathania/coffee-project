import React from 'react'
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css'
const AOS = window.AOS;
function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  return (
    <>
      <div className="coffee-container">
        {/* Left Container */}
        <div className="left-container">
          <h2>Welcome to Coffee Haven</h2>
          <h1>Great Coffee Starts Here</h1>
          <p>Explore our coffee beans store, where we offer a diverse selection of high-quality coffee beans sourced from around the world. Discover various roasting profiles, including light, medium, and dark roasts, to suit every palate. Each batch is carefully curated to ensure freshness and exceptional flavor. Whether you're a casual drinker or a coffee connoisseur, our beans cater to all preferences and brewing methods. Experience the rich aromas and unique tasting notes that our premium coffee beans provide. Shop now and elevate your coffee experience today!</p>
          <button className="login-btn">Login</button>
        </div>

        {/* Right Container */}
        <div className="right-container" data-aos="fade-left">
          <video className="coffee-image" autoPlay muted loop>
            <source src='./images/home coffee.mp4'></source>
          </video>

        </div>
      </div>

      <div className='home-third-container'>
        <div class="slider-wrapper" data-aos="fade-up">
          <div class="slider-container">
            <div class="slider">
              <img src="./images/first-coffee-slider.avif" alt="Coffee 1"></img>
              <img src="./images/second-coffee-slider.avif" alt="Coffee 2"></img>
              <img src="./images/third-coffee-slider.avif" alt="Coffee 3"></img>
              <img src="./images/fourth-coffee-slider.avif" alt="Coffee 4"></img>
            </div>
          </div>
        </div>
      </div>
      {/* shop container */}

      <div className="shop-section-container">
        <div className="shop-container top-left" data-aos="fade-right">
          <h2>Richness</h2>
        </div>
        <div className="shop-container center" >
          <h2>Indulge in the rich aroma and unique tasting notes of our premium coffee beans. Shop now and elevate your coffee experience today!</h2>
          <button>Shop Now</button>
        </div>
        <div data-aos="fade-left" className="shop-container bottom-right" >
          <h2>Flavor</h2>
        </div>
      </div>



      {/* buy container */}
      <div className="buy-container-home" data-aos="fade-right">
        <h1>Special Coffee</h1>
        <div className="content">
          <div className="left-container">
            <img src="./images/home coffee.avif" alt="Special Coffee" className="coffee-imagee" />
          </div>

          <div className="right-containerr">
            <h2>Coffee Name</h2>
            <p className="coffee-info">
              Information about the coffee. This coffee is special because it has unique flavors and is prepared with the finest beans.
            </p>
            <p className="coffee-price">$12.99</p>
            <NavLink to="/shop" className="shop-now-button"> Shop Now</NavLink>
          </div>

        </div>
      </div>


      <div className="buy-container" data-aos="fade-left">
        <h1 className="heading">Special Coffee</h1>
        <div className="content-wrapper">
          <div className="info-container">
            <h2 className="coffee-title">Coffee Name</h2>
            <p className="coffee-description">
              Information about the coffee. This coffee is special because it has unique flavors and is prepared with the finest beans.
            </p>
            <p className="coffee-cost">$12.99</p>
            <NavLink to="/shop" className="shop-button">
              Shop Now
            </NavLink>
          </div>
          <div className="image-container">
            <img src="./images/home coffee.avif" alt="Special Coffee" className="coffee-img" />
          </div>
        </div>
      </div>

    </>



  )
}

export default Home;