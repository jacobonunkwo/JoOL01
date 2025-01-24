import React, { useState } from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";


function NavBar(props) {

    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <>
            <nav className="navbar">
                <div className="logo-div">
                    <img src="/WhatsApp Image 2025-01-17 at 00.00.06_4ca9787e.jpg" alt="" />
                    <span>
                        <span className='span-in-span' >JoOL's LAUNDRY & </span>
                        <span className='span-in-span' >CLEANING SERVICES LTD</span>
                    </span>
                </div>

                <ul className={menuOpen ? "open" : ""}>
                    <li><NavLink className="navbar-link" to={"/"} href="/">Home</NavLink></li>
                    <li><NavLink className="navbar-link" to={"/laundry"} href="/laundry">Laundry</NavLink></li>
                    <li><NavLink className="navbar-link" to={'/cleaning'} href="/cleaning">Cleaning</NavLink></li>
                    <li><NavLink className="navbar-link" to={"/about"} href="/about">About</NavLink></li>
                    <li><NavLink className="navbar-link" to={"/contact"} href="/contact">Contact</NavLink></li>
                    
                </ul>

               
                <IoMenu className="menu-icon" onClick={() => {
                    setMenuOpen(!menuOpen)
                }}/>
               
            </nav>

        </>
    );
}

export default NavBar;