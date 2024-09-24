import React from 'react';
import './ContactUs.css';
import { useEffect } from 'react';
const AOS=window.AOS;
function ContactUs(){
useEffect(()=>{
    AOS.init({
        duration:1000,
    })

})
    return (
<>
        <div className='contact-us-img' data-aos="zoom-out">
            <img src='/images/contactus image.avif'></img>
            <h2 className='contact-h2'>Coffee Store</h2>
            <h1 className='contact-h1'>Contact Us</h1>
        </div>

<div className='contact-us-info'>
    <h3>Let's Spark a Conversation</h3>
    <h1>Get in Touch with Us</h1>
    <p>We are always here to help you with any queries or concerns you may have. Contact our dedicated team for assistance with your order or any other inquiries you may have.</p>

</div>



        <div className="contact-us-container" data-aos="fade-right">
            <div className='left-contact-us'>
                <img src='./images/contact-us image.avif'></img>

            </div>
            <div className='right-contact-us'>
            <h1 className="contact-us-heading">Contact Us</h1>
            <form className="contact-us-form">
                <label className="contact-us-label">
                    Name:
                    <input type="text" className="contact-us-input" required />
                </label>
                <label className="contact-us-label">
                    Email:
                    <input type="email" className="contact-us-input" required />
                </label>
                <label className="contact-us-label">
                    Message:
                    <textarea className="contact-us-textarea" required></textarea>
                </label>
                <button type="submit" className="contact-us-submit">Send Message</button>
            </form>

            </div>
           
        </div>


        <div className="contact-us-map" data-aos="fade-left">
      <div className="left-contact-us-map">
       
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18..."
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>

      <div className="right-contact-us-map">
        <h3>Get In Touch</h3>
        <h1>Contact Us</h1>

        <div className="contact-info-box">
          <div className="info-item">
            <img src='/images/location.png'></img>
            <p>Location: 123 Coffee St., Cityname</p>
          </div>
          <div className="info-item">
            <img src='/images/timetable.png'></img>
            <p>Timetable: Mon - Fri, 9:00 AM - 5:00 PM</p>
          </div>
          <div className="info-item">
            <img src='/images/call.png'></img>
            <p>Call: (123) 456-7890</p>
          </div>
        </div>
      </div>
    </div>
        </>
    );
};

export default ContactUs;
