import React from 'react';
import NavBar from './NavBar';
import './Laundry.css';
import { IoCall } from 'react-icons/io5';
import { FaWhatsapp } from 'react-icons/fa';
import Footer from './Footer';

function Laundry(props) {
    return (
        <div className='laundry-body'>
            <NavBar/>
                        
            <section className="laundry-services-section">
                <div className='laundry-services-div1'>
                    <h1 className='laundry-services-div1-h1'>Entrust Your Laundry Needs to</h1>
                    <h1 className='laundry-services-div1-h1'>Our Expert Hands</h1>
                </div>

                <div className='laundry-services-div2'>
                    <div className='laundry-services-div2-div'>
                        <div className='laundry-services-div2-img-div-box1'>
                            <div className='laundry-services-div2-img-div'>
                                <img className='laundry-services-div2-img' src="/1b4b9177c57ded9ca2185314a40efd79.jpg" alt="" />
                                <h2 className='laundry-services-div2-h2'>Laundry Service</h2>
                                <p className='laundry-services-div2-p'>Comprehensive washing, drying, and folding services for everyday clothing. Expert cleaning for delicate fabrics and garments. We treat your most cherished pieces with the utmost care and attention to detail.</p>
                            </div>

                            <div className='laundry-services-div2-img-div'>
                                <img className='laundry-services-div2-img' src="/fa59b3d7fde3a3ef15a2183a966752be.jpg" alt="" />
                                <h2 className='laundry-services-div2-h2'>Dry Cleaning</h2>
                                <p className='laundry-services-div2-p'>Specialized dry cleaning services for suits, dresses, and other delicate garments. Maintain a polished appearance with our expert care.</p>
                            </div>
                        </div>

                        <div className='laundry-services-div2-img-div-box2'>
                            <div className='laundry-services-div2-img-div'>
                                <img className='laundry-services-div2-img' src="/c809583626fd1f4e85d7fc044e17935e.jpg" alt="" />
                                <h2 className='laundry-services-div2-h2'>Stain Removal</h2>
                                <p className='laundry-services-div2-p'>Your ultimate solution for eliminating even the most stubborn stains! Our specialized stain removal services are expertly designed to restore your fabrics to their original brilliance.</p>
                            </div>

                            <div className='laundry-services-div2-img-div'>
                                <img className='laundry-services-div2-img' src="/56cd87194b55772bf6e0721c3fc3372a.jpg" alt="" />
                                <h2 className='laundry-services-div2-h2'>Wash/fold/Ironing</h2>
                                <p className='laundry-services-div2-p'>We excel in professional ironing, comprehensive washing, and meticulous folding. Our skilled team ensures each garment receives precise care, delivering a crisp, polished appearance and a refreshing feel.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='laundry-services-div3'>
                    <h2 className='laundry-services-h2'>Comprehensive Laundry Services for All Your Needs</h2>
                    <p className='laundry-services-p'>JoOL's Laundry & Cleaning Services Ltd: Where exceptional care meets unparalleled convenience for all your laundry and dry cleaning needs. Our expert team utilizes advanced techniques and eco-friendly products to ensure your garments receive the highest level of precision and care. From everyday essentials to delicate fabrics, we provide a seamless experience that consistently delivers pristine results. Trust us to handle your clothes with the utmost service and attention to detail. Discover the difference with JoOL's Laundry & Cleaning Services Ltd—where quality and satisfaction are always guaranteed!</p>
                </div>

            </section>

            <section className='laundry-mid-contact-section'>
                <div className="laundry-mid-contact-section-div">
                    <a className="laundry-mid-contact-section-top-text" href="tel:+2349067395127">CALL US NOW</a>
                    <div className='laundry-mid-contact-section-icon-div'>
                        <a className="laundry-mid-contact-section-contact" href="tel:+2349067395127"><IoCall className="laundry-mid-contact-section-icon" /></a>
                        <a className="laundry-mid-contact-section-contact" href="https://wa.me/+2349034823217"><FaWhatsapp className="laundry-mid-contact-section-icon" /></a>
                    </div>                
                </div>
              
            </section>

            <section className='image-section'>
                <div className='image-section-div'>
                    <img className='image-section-img' src="/3de7fb664246b92817930085588ed665.jpg" alt="Lady in a Laundry room" />
                    <span className='image-section-span'>Laundry Services</span>
                </div>

                <div className='image-section-div'>
                    <img className='image-section-img' src="/024-08-30-at-20.23.49-1.jpeg" alt="Photo of a lady washing" />
                    <span className='image-section-span'>Hand Washing</span>
                </div>

                <div className='image-section-div'>
                    <img className='image-section-img' src="/image copy 5.png" alt="A girl placing folded clothes in dryer" />
                    <span className='image-section-span'>Clothes Drying</span>
                </div>

                <div className='image-section-div'>
                    <img className='image-section-img' src="/6a776d4b7160bd0470804e3d683487d0.jpg" alt="A photo of shirt and iron on a table" />
                    <span className='image-section-span'>Clothes Ironing</span>
                </div>

                <div className='image-section-div'>
                    <img className='image-section-img' src="/8b09f8cb21114f5f555151f7d25b3a10.jpg" alt="White shoes" />
                    <span className='image-section-span'>Shoe Cleaning</span>
                </div>

                <div className='image-section-div'>
                    <img className='image-section-img' src="/image.png" alt="Folded towels and washing machine" />
                    <span className='image-section-span'>Towel Washing</span>
                </div>

                <div className='image-section-div'>
                    <img className='image-section-img' src="/image copy.png" alt="Photo of gray Duvet " />
                    <span className='image-section-span'>Duvet Washing</span>
                </div>

                <div className='image-section-div'>
                    <img className='image-section-img' src="image copy 2.png" alt="A photo of folded clothes" />
                    <span className='image-section-span'>Wash and Fold</span>
                </div>

                <div className='image-section-div'>
                    <img className='image-section-img' src="/image copy 3.png" alt="photo of multiple clothes" />
                    <span className='image-section-span'>Dry cleaning</span>
                </div>

                <div className='image-section-div'>
                    <img className='image-section-img' src="/image copy 4.png" alt="Photo of multiple Suites" />
                    <span className='image-section-span'>Suite Cleaning</span>
                </div>
                
            </section>
            
            <Footer/>
        </div>
    );
}

export default Laundry;