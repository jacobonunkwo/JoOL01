import React, { useState, useEffect } from 'react';
import './Home.css';
import NavBar from './NavBar';
import { FaWhatsapp } from 'react-icons/fa';
import { IoCall } from "react-icons/io5";
import Footer from './Footer';




function Home(props) {
    const images = [
        '/socks-5379808_1920.jpg',
        '/iron-1178062_1920.jpg',
        '/felix-prado-nbKaLT4cmRM-unsplash.jpg',
        '/towel-3156896_1280.jpg',
        '/washing-machine-2668472_1280.jpg',

    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); 

        return () => clearInterval(interval);
    }, [images.length]);

    const [isSolutionVisible, setIsSolutionVisible] = useState(false);

    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsSolutionVisible(true);
                }
            },
            { threshold: 0.2 } 
        );

        const solutionElement = document.querySelector('.solution-section');
        if (solutionElement) {
            observer.observe(solutionElement);
        }

        return () => {
            if (solutionElement) {
                observer.unobserve(solutionElement);
            }
        };
    }, []);




    
    const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
            });
        }, { threshold: 0.1 });
        
        
        document.querySelectorAll('.slidein, .popin').forEach((el) => {
            observer.observe(el);
        });
          


    return (
        < div className='home-body'> 
            <NavBar />

           
            <section className='slider-section'>
                <div 
                    className="slider-container"
                    style={{
                        backgroundImage: `url(${images[currentImageIndex]})`, 
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}  
                >
                    <div className="slider-content">
                        <h1>Experience the Ultimate Clean for Your Home</h1>
                        <h1>and Laundry, Delivered by Experts</h1>
                    </div>
                </div>
            </section>

            <section className={`solution-section ${isSolutionVisible ? 'visible' : ''}`}>
                <div className="solution-text-div">
                    <h2>We are your premier laundry and cleaning solution.</h2>
                    <p>
                        Welcome to JoOL's Laundry & Cleaning Services Ltd - Your trusted partner for outstanding laundry and cleaning services! 
                        <br />At JoOL's Laundry & Cleaning Services Ltd, we're dedicated to providing top-notch laundry services that make your life easier. Founded on the principles of quality, convenience, and customer satisfaction, we strive to be your go-to laundry solution.
                    </p>
                </div>

                <div className="solution-contacts-btn-div">
                    <a className="solution-top-text" href="tel:+2349067395127">Call Us!</a>
                    <a className="solution-btn1" href="tel:+2349067395127"><IoCall className="phone-icon" /> 090 673 95127</a>
                    <a className="solution-btn2" href="https://wa.me/+2349034823217"><FaWhatsapp className="whatsapp-icon" /> SEND WHATSAPP</a>
                </div>
            </section>

            <section className="whatwedo-section">
                <h2 className="whatwedo-section-h2 slidein">What We Do</h2>
                <span className="whatwedo-section-span slidein">At JoOL's Laundry & Cleaning Services Ltd, we provide expert solutions in the following areas:</span>

                <div className="whatwedo-section-top-div">
                    <div className="whatwedo-section-top-div-card slidein">
                    <img className='whatwedo-section-top-div-card-img' src="/washing-machine-2668472_1280.jpg" alt="Laundry & Dry Cleaning"/>
                    <h3 className='whatwedo-section-top-div-card-title'>Laundry & Dry Cleaning</h3>
                    <p className='whatwedo-section-top-div-card-body'>Our laundry services are designed to make your life easier. We provide expert solutions for all your laundry needs, from washing and drying to folding and ironing.</p>
                    </div>

                    <div className="whatwedo-section-top-div-card slidein">
                    <img className='whatwedo-section-top-div-card-img' src="/6a406f365947b174cce0d310013716c5.jpg" alt="Residential Cleaning"/>
                    <h3 className='whatwedo-section-top-div-card-title'>Residential Cleaning</h3>
                    <p className='whatwedo-section-top-div-card-body'>Our residential cleaning services are designed to make your home sparkle. We provide expert solutions for all your cleaning needs, from dusting, vacuuming, upholstery cleaning, Rug and carpet, glasses and tiles and general home cleaning and sanitizing. Enjoy a spotless living space with our reliable service.</p>
                    </div>

                    <div className="whatwedo-section-top-div-card slidein">
                    <img className='whatwedo-section-top-div-card-img' src='/lotus-design-n-print-UDDULE_eIBY-unsplash.jpg' alt="Commercial Cleaning Services"/>
                    <h3 className='whatwedo-section-top-div-card-title'>Commercial Cleaning Services</h3>
                    <p className='whatwedo-section-top-div-card-body'>Our commercial cleaning services are designed to make your business shine. We provide expert solutions for all your cleaning needs, from office cleaning and janitorial services to industrial cleaning and floor care.</p>
                    </div>
                </div>

                <a className='whatwedo-section-div-whatsapp-link slidein' href="https://wa.me/+2349034823217"><FaWhatsapp className="whatwedo-section-whatsapp-icon" /> BOOK AN APPOINTMENT</a>

                <div className='whatwedo-section-img-list'>
                    <img className='whatwedo-section-img-list-img popin' src="/6150df030a93b17d3a85ae8a0b1acf0e.jpg" alt="Image 1"/>
                    <img className='whatwedo-section-img-list-img popin' src="/d85bb421e5b7606eed3310347da4cb51.jpg" alt="Image 2"/>
                    <img className='whatwedo-section-img-list-img popin' src="e4ceb30faad6e81743242a6359cb1654.jpg" alt="Image 3"/>
                    <img className='whatwedo-section-img-list-img popin' src="/22679eb6cd65c24b2d14f7910980ec95.jpg" alt="Image 4"/>
                    <img className='whatwedo-section-img-list-img popin' src="/862c6beeaa5353907079327a385b1d67.jpg" alt="Image 5"/>
                    <img className='whatwedo-section-img-list-img popin' src="/29a758e28ef5554ef4c68ab9f54935f9.jpg" alt="Image 6"/>
                </div>
            </section>


            <section className='our-Mission-container'>
                <h2 className='our-Mission-h2'>Our Mission</h2>
                <p className='our-Mission-p1'>At JoOL's Laundry & Cleaning Services Ltd, Our mission is to Get Your Place Cleaned and Healthy and also provide <br />exceptional laundry services that exceed our customers' expectations.</p>
                
                <ul className='our-Mission-ul'>
                    <li className='our-Mission-li'>
                        <b>Impeccable Quality:</b> We treat your laundry and home with the utmost care, paying attention to every detail for a spotless result.
                    </li>

                    <li className='our-Mission-li'>
                        <b>Ultimate Convenience:</b> Enjoy flexible scheduling and dependable pickup and delivery, designed to fit seamlessly into your busy lifestyle.
                    </li>

                    <li className='our-Mission-li'>
                        <b>Eco-Friendly Practices:</b> We use only environmentally safe cleaning products and methods, protecting both you and the planet.
                    </li>

                    <li className='our-Mission-li'>
                        <b>Affordable Excellence:</b> Experience premium service at competitive prices, with no hidden fees—just outstanding value.
                    </li>

                    <li className='our-Mission-li'>
                        <b>Dedicated to You:</b> Our passionate team is here to ensure your complete satisfaction, offering personalized service tailored to your needs.
                    </li>
                </ul>

                <p className='our-Mission-p2'>We aim to build long-lasting relationships with our clients, founded on trust, reliability, and a commitment to excellence.</p>
            
            </section>         
                       

            <Footer/>
        </div>
    );
}

export default Home;
