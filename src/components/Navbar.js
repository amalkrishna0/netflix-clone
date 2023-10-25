import React, { useState, useEffect } from 'react';
import './navbar.css';

export default function Navbar() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) { 
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isFixed ? 'fixed' : ''}`}>
      <div className="netflix"></div>
      <div className="list">
        <span className='active'>Homepage</span>
        <span>Series</span>
        <span>Movie</span>
        <span>Popular</span>
      </div>
    </div>
  );
}
