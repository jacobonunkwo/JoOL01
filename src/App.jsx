import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Laundry from './Laundry';
import Cleaning from './Cleaning';
import About from './About';
import Contact from './Contact';
import LoadingPage from './LoadingPage';

function App(props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoading ? <LoadingPage/> : <Home/>} />
        <Route path="/laundry" element={<Laundry/>} />
        <Route path="/cleaning" element={<Cleaning/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;