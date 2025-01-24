import React from 'react';
import "./LoadingPage.css"

function LoadingPage(props) {
    return (
        <div className="loading-container">
            <div className='loading-div'>
                <span>Welcome To</span>
                <img className='loading-logo' src="/WhatsApp Image 2025-01-17 at 00.00.06_4ca9787e.jpg" alt="" />
                
                <div className='logo-name-div'>
                    <h1>JoOL's LAUNDRY &</h1>
                    <h1>CLEANING SERVICES LTD</h1>
                </div>
            </div>

            <div className='spinner-div'>
                <div className="spinner"></div>
                <p>Loading...</p>
            </div>
        </div>
    );
}

export default LoadingPage;