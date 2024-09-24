import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Coffee Shop</h3>
                    <p>At Coffee Hub, we believe that great coffee starts with great beans. Thats why we source only the highest quality beans from around the world and roast them to perfection to ensure exceptional flavor and freshness. Shop our selection today and elevate your coffee experience.</p>
                </div>


                <div className='contact-footer'>
                    <h4>Contact:</h4>
                    <p>reactwebsite2372aj@gmail.com</p>
                    <p>413561355115555</p>
                    <p>reactothermail@gmail.com</p>
                </div>


                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                        <li><a href="/about">About Us</a></li>
                    </ul>
                </div>


                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-links">
                        <img src='./images/facebook image.png'></img>
                        <img src='./images/instagram logo.png'></img>
                        <img src='./images/twitter logo.png'></img>

                    </div>


                    <div className="social-links">
                        <NavLink to="https://facebook.com">Facebook</NavLink>
                        <NavLink to="https://instagram.com">Instagram</NavLink>
                        <NavLink to="https://twitter.com">Twitter</NavLink>
                    </div>
                </div>

            </div>


            <div className="footer-bottom">
                <p>&copy; 2024 Coffee Shop. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
