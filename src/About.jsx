import React from 'react';
import NavBar from './NavBar';
import "./About.css"
import { IoCall } from 'react-icons/io5';
import { FaWhatsapp } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLocationDot } from 'react-icons/fa6';
import Footer from './Footer';


function About(props) {
   
    return (
        <div className='about-body'>
     
            <NavBar/>

            <div className="top-space"></div>

            <section className='about-section1'>

               <div className='about-section1-div1'>
                    <h1>About Us</h1>
               </div>

                <div className='about-section1-div2'>

                    <img src="/image copy 19.png" alt="" />

                    <div className='about-section1-div2-div'>
                        <h2>JoOL's Laundry & Cleaning Services Ltd</h2>
                        <p>At JoOL's Laundry Services, we're dedicated to providing top-notch laundry services that make your life easier. Founded on the principles of quality, convenience, and customer satisfaction, we strive to be your go-to laundry solution.</p>
                      
                        <span>Our Story:</span>
                        <p>JoOL's Laundry Services was born out of a passion for innovation and a desire to revolutionize the laundry experience. Our founder, MR JACOB, recognized the need for efficient, reliable, and customer-centric laundry services that cater to busy lifestyles.</p>
                        
                        <span>Our Mission:</span>
                        <p>
                            Our mission is to provide exceptional laundry services that exceed our customers' expectations. We aim to build long-lasting relationships with our clients, founded on trust, reliability, and a commitment to excellence.
                        </p>

                        <span>What Sets Us Apart:</span>
                        <ul>
                            <li>
                                Eco-friendly laundry practices
                            </li>
                            <li>
                                Competitive pricing without compromising on quality
                            </li>
                            
                            <li>
                                Friendly, responsive customer service
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='about-section1-div3'>
                    <a href="tel:+2349067395127"><IoCall className="about-section-icon" /> CALL US NOW</a>
                    <a href="https://wa.me/+2349034823217"><FaWhatsapp className="about-section-icon" /> SEND WHATSAPP</a>
                </div>
                    
            </section>

            <section className='about-section2'>
                <h2>Get in Touch:</h2>
                <p>
                    <b>Ready to experience the JoOL's difference?</b> Contact us today to learn more about our services, schedule a pickup, or ask about our special offers.
                </p>
                
                <div className='about-form-div'>
                    
                    <form action="mailto:jacobonunkwo@gmail.com" method="post" enctype="text/plain">
                        <label for="name">Name:</label>
                        <input type="text" name="name" placeholder='Your Name' required/>

                        <label for="email">Email:</label>
                        <input type="email" name="email" placeholder='example@youremail.com' required/>

                        <label for="message">Message:</label>
                        <textarea name="message" placeholder='Your Message' required></textarea>

                        <button type="submit">Send Message</button>
                    </form>
                    

                    <div className='about-section2-contact-div'>
                        <h3>Our Contacts</h3>
                        
                        <ul>
                            <li><IoCall id='icon'/> 09067395127</li>
                            <li><AiOutlineMail id='icon'/> jacobonunkwo@gmail.com</li>
                            <li><FaWhatsapp id='icon' /> 09034823217</li>
                            <li><FaLocationDot id='icon1' /> Along king of kings road after Ozinny hotel</li>
                            <li><h4>Operating Hours:</h4></li>
                            <li>Days: Monday to Saturday</li>
                            <li>Time: 8:00 AM - 10:00 PM</li>
                        </ul>
                    </div>
                </div>
            
            </section>


             <Footer/>   

        
        </div>

    );
}

export default About;