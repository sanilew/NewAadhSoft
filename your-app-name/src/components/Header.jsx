import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="header">
      <div className="logo">SACCHSOFT</div>
      <nav className={`nav ${menuActive ? 'active' : ''}`}>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#careers">Careers</a></li>
        </ul>
        <button className="cta-button">Get in touch</button>
      </nav>
      <div className={`hamburger ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
};

export default Header;
