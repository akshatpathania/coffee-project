import React from 'react'
import './About.css'
import { NavLink } from 'react-router-dom';

function About() {
    return (
        <>

            <div className='about-img' data-aos="zoom-out">
                <img src='/images/about.avif' alt='About Image' />
                <h1 className='about-h1'>About</h1>
            </div>



            <div className='about-container'>
                <div className='left-about'>
                    <img src='/images/about 1.avif' alt='About Image 1' className='about-image' />
                    <img src='/images/about 2.avif' alt='About Image 2' className='about-image' />
                </div>

                <div className='right-about'>
                    <h1>Elevate Your Coffee Game</h1>
                    <p>At Coffee Hub, we are passionate about providing you with the best coffee experience possible. Our premium coffee beans are carefully sourced from around the world, roasted to perfection, and expertly curated for exceptional flavor and aroma. Whether you’re a casual coffee drinker or a coffee connoisseur, we have something for everyone. Shop our collection of premium coffee beans and elevate your coffee game today.</p>

                    <div className="progress-bars">
                        <div className="progress-bar-container">
                            <label htmlFor="coffee-progress">Customer Satisfaction</label>
                            <progress id="coffee-progress" value="80" max="100"></progress>
                        </div>

                        <div className="progress-bar-container">
                            <label htmlFor="quality-progress">Quality</label>
                            <progress id="quality-progress" value="90" max="100"></progress>
                        </div>

                        <div className="progress-bar-container">
                            <label htmlFor="expertise-progress">Expertise</label>
                            <progress id="expertise-progress" value="85" max="100"></progress>
                        </div>
                    </div>

                    <NavLink to="/Shop" className="about-navlink">See Products</NavLink>
                </div>
            </div>




            {/*  */}
            <div className="curation-container">
                <section className="left-section">
                    <div className="curation-header">
                        <h3 className="brand-name">Timeless Glamour</h3>
                        <h1 className="main-heading">Expert Curation</h1>
                        <p className="description">
                            At Coffee Hub, we are committed to providing you with the best coffee
                            experience possible. Our expert curation process ensures that each batch
                            of beans is carefully selected, roasted to perfection, and expertly
                            curated for exceptional flavor and aroma. We take pride in our
                            commitment to quality and freshness, ensuring that each bag of coffee
                            beans you receive is of the highest quality.
                        </p>
                        <a href="#" className="contact-button">
                            Contact Us
                        </a>
                    </div>
                    <div className="features-section">
                        <div className="feature-box">
                            <img src='./images/about 3.avif' alt="Coffee Image" className="feature-image" />
                            <div className="feature-text">
                                <h3>Worldwide Sourcing</h3>
                                <p>
                                    At Coffee Hub, we source our coffee beans from around the world to
                                    provide you with a diverse selection of premium coffee beans. We
                                    work with trusted suppliers and farmers to ensure that each bean is
                                    of the highest quality.
                                </p>
                                <h3>Freshness Guarantee</h3>
                                <p>
                                    We take freshness seriously at Coffee Hub. Our beans are roasted to
                                    order, ensuring that each bag of coffee beans you receive is fresh
                                    and full of flavor. We also guarantee the freshness of our beans,
                                    offering a return policy if you are not satisfied with the freshness
                                    of your beans.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>
                <section className="right-section">
                    <video autoPlay>
                        <source src='./images/about video.mp4'></source>
                    </video>
                </section>
            </div>



        </>
    )
}

export default About;



