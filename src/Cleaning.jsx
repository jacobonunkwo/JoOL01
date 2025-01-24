import React from 'react';
import NavBar from './NavBar';
import './Cleaning.css';
import { FaWhatsapp } from 'react-icons/fa';
import Footer from './Footer';


function Cleaning(props) {
      
  return (
    <>

        <NavBar />
 

        <div className="top-space"></div>

        <section className="Cleaning-services-section">
            <div className='Cleaning-services-div1'>
                <h1 className='Cleaning-services-div1-h1'>Residential & Commercial</h1>
                <h1 className='Cleaning-services-div1-h1'>Cleaning Services</h1>
            </div>

            <div className='Cleaning-services-div2'>
                <div className='Cleaning-services-div2-div'>
                    <div className='Cleaning-services-div2-img-div'>
                        <img className='Cleaning-services-div2-img' src="/image copy 6.png" alt="" />
                        <h2 className='Cleaning-services-div2-h2'>Living Room</h2>
                        <p className='Cleaning-services-div2-p'>We transform your living room into a sparkling and inviting space, creating a warm and welcoming atmosphere for both your family and guests.</p>
                    </div>

                    <div className='Cleaning-services-div2-img-div'>
                        <img className='Cleaning-services-div2-img' src="/image copy 7.png" alt="" />
                        <h2 className='Cleaning-services-div2-h2'>Kitchen cleaning</h2>
                        <p className='Cleaning-services-div2-p'>A spotless kitchen is essential for a healthy home. Let us help you achieve a pristine, spotless kitchen.</p>
                    </div>

                    <div className='Cleaning-services-div2-img-div'>
                        <img className='Cleaning-services-div2-img' src="/image copy 8.png" alt="" />
                        <h2 className='Cleaning-services-div2-h2'>Bathroom Cleaning</h2>
                        <p className='Cleaning-services-div2-p'>Your bathroom requires professional attention to ensure a clean and safe environment, protecting your family from germs and bacteria.</p>
                    </div>

                    <div className='Cleaning-services-div2-img-div'>
                        <img className='Cleaning-services-div2-img' src="/image copy 9.png" alt="" />
                        <h2 className='Cleaning-services-div2-h2'>Janitorial Cleaning</h2>
                        <p className='Cleaning-services-div2-p'>Trust us to provide a thorough deep cleaning, ensuring a safe and healthy environment for both your home and office.</p>
                    </div>
                </div>
            </div>

            <div className='Cleaning-services-div3'>
                <h2 className='Cleaning-services-h2'>Commercial Cleaning Services</h2>
                <p className='Cleaning-services-p'>We offer comprehensive cleaning solutions for offices, retail spaces, and other commercial properties, covering a full range of janitorial services. Our expert team ensures a professional, clean, and inviting environment for your business.</p>
                
                <div className='Cleaning-services-ul-div'>
                    <ul className='Cleaning-services-ul'>
                        <li className='Cleaning-services-ul-li'>Office Cleaning</li>
                        <li className='Cleaning-services-ul-li'>Initial Clean Up</li>
                        <li className='Cleaning-services-ul-li'>Deep Cleaning</li>
                    </ul>

                    <ul className='Cleaning-services-ul'>
                        <li className='Cleaning-services-ul-li'>Sparkle Clean</li>
                        <li className='Cleaning-services-ul-li'>Club House and Halls</li>
                        <li className='Cleaning-services-ul-li'>Courtyard Cleaning</li>
                    </ul>

                    <ul className='Cleaning-services-ul'>
                        <li className='Cleaning-services-ul-li'>Common Floors</li>
                        <li className='Cleaning-services-ul-li'>Washroom Floors</li>
                        <li className='Cleaning-services-ul-li'>Eateries and Kitchens</li>
                    </ul>

                    <ul className='Cleaning-services-ul'>
                        <li className='Cleaning-services-ul-li'>Common Restrooms</li>
                        <li className='Cleaning-services-ul-li'>Containment Area Cleaning</li>
                        <li className='Cleaning-services-ul-li'>Trash Clean up</li>
                    </ul>
                </div>

            </div>

        </section>

        <section className='Cleaning-mid-contact-section'>
            <div className="Cleaning-mid-contact-section-div">
                <a className="Cleaning-mid-contact-section-top-text" href="https://wa.me/+2349034823217">Send Direct Message Now</a>{/* make this Slidein from left */}
                <a className="Cleaning-mid-contact-section-contact" href="https://wa.me/+2349034823217"><FaWhatsapp className="Cleaning-mid-contact-section-icon" /> </a>
            </div>
        </section>

        <section className='Imgs-section'>
            <div className='Imgs-section-div1'>
                <img className='Imgs-section-img1' src="/image copy 8.png" alt="A photo showing person washing a toilet" />
                <img className='Imgs-section-img1' src="/image copy 11.png" alt="A photo of people cleaning a house" />
                <img className='Imgs-section-img1' src="image copy 12.png" alt="Man cleaning floor" />
            </div>

            <div className='Imgs-section-div2'>
                <img className='Imgs-section-img1' src="/image copy 13.png" alt="Two persons washing a big rug" />
                <img className='Imgs-section-img1' src="/image copy 15.png" alt="Photo of a worker sweaping" />
                <img className='Imgs-section-img1' src="/image copy 7.png" alt="A lady cleaning kitchen" />
            </div>

            <div className='Imgs-section-div3'>
                <img className='Imgs-section-img2' src="/image copy 14.png" alt="Photo of a living room" />
                <img className='Imgs-section-img2' src="/image copy 17.png" alt="Photo of a living room" />
            </div>
        </section>

        <Footer/>
    </>
  );
}

export default Cleaning;