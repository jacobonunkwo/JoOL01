import React from 'react';
import NavBar from './NavBar';
import { FaWhatsapp } from 'react-icons/fa';
import './Contact.css';
import { MdAccessTime } from 'react-icons/md';
import { IoCall } from 'react-icons/io5';
import Footer from './Footer';

function Contact(props) {
    return (
        <>
        <header>
            <NavBar/>
        </header>
        
        <section className='top-space'>

        </section>

        <section className='Contact-section1'> 

            <div className='Contact-section1-div1'>
                <h1>Contact Us</h1>
            </div>

            <div className='Contact-section1-div2'>
                <div className='Contact-section1-div2-div'>
                    <div className='Contact-section1-card'>
                        <MdAccessTime className='Contact-section1-card1-icon' />
                        <span className='Contact-section1-card1-span'>Saves Your Time</span>
                        <p className='Contact-section1-card-p' >Your time is important! save it while we work for you</p>
                    </div>
                    
                    <div className='Contact-section1-card'>
                        <p className='Contact-section1-card-p'>Click here to chart with us</p>
                        <a href="https://wa.me/+2349034823217"><FaWhatsapp className="Contact-section1-whatsapp-icon" /></a>
                        <a className='Contact-section1-whatsapp-link' href='https://wa.me/+2349034823217'>WHATSAPP</a>
                    </div>

                    <div className='Contact-section1-card'>
                        <p className='Contact-section1-card-p'>Click here to Call us</p>
                        <a href="tel:+2349067395127"><IoCall className="Contact-section1-phone-icon" /> </a>
                        <a className='Contact-section1-whatsapp-link' href="tel:+2349067395127">090 6739 5127</a>
                    </div>
                </div>
            </div>
            
        </section>

        <section className='Contact-section3'>
            <h2>E-Mail Us</h2>

            <form className='Contact-section3-form' action="mailto:jacobonunkwo@gmail.com" method="post" encType="text/plain">
                        <label className='Contact-section3-form-label' htmlFor="name">Name:</label>
                        <input className='Contact-section3-form-input' type="text" name="name" placeholder='Your Name' required/>

                        <label className='Contact-section3-form-label' htmlFor="email">Email:</label>
                        <input className='Contact-section3-form-input' type="email" name="email" placeholder='example@youremail.com' required/>

                        <label className='Contact-section3-form-label' htmlFor="message">Message:</label>
                        <textarea className='Contact-section3-form-textarea' name="message" placeholder='Your Message' title='' required></textarea>

                        <button className='Contact-section3-form-button' type="submit">Send Message</button>
            </form>
        </section>

        <section className='Contact-section2'>
            <address className='Contact-section2-address'>
                <h2>Location:</h2>
                <p>Along king of kings road after Ozinny hotel.</p>
            </address>
        </section>

        <section className='Contact-section4'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d15763.258719794529!2d7.356231!3d8.989194!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwNTknMjEuMSJOIDfCsDIxJzMxLjciRQ!5e0!3m2!1sen!2sng!4v1737592354712!5m2!1sen!2sng" allowFullscreen="" loading="lazy">
        </iframe>        
        </section>

        <Footer/>
            
        </>
    );
}

export default Contact;