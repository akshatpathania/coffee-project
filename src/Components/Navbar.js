
import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';

function Navbar() {

    
    return (
        <>
            <nav >
                <div className='left-nav' >
                    <img src='./images/logo.avif' alt='logo'></img>
                    <h1 className='nav-bar-h1'>CoffeeHub</h1>
                </div>
                <div className='right-nav'>

                    <div className='page-links'>
                        <NavLink to="/Home">Home</NavLink>
                        <NavLink to="/ContactUs">Contact Us</NavLink>
                        <NavLink to="/About">About us</NavLink>
                        <NavLink to="/Shop">Shop</NavLink>
                    </div>

                    <div className='nav-btns'>
                       <NavLink to='/CartPage'><img src='./images/cart.png'alt=''></img></NavLink> 
                        <NavLink to='/ProfilePage'><img src='./images/profile.png'alt=''></img></NavLink>
                        <NavLink to='/Login' >Login</NavLink>
                        
                    </div>



                </div>
            </nav>
        </>
    )
}

export default Navbar