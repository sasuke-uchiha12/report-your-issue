import React from 'react';
import '../css/header.css';

function Header() {
  const handleHomeClick = (e) => {
    e.preventDefault();

  };

  const handleAboutClick = (e) => {
    e.preventDefault();

  };

  const handleContactClick = (e) => {
    e.preventDefault();

  };

  return (
    <header className="header">
      <div className="logo">MyApp</div>
      <nav>
        <button onClick={handleHomeClick} className="nav-button">Home</button>
        <button onClick={handleAboutClick} className="nav-button">About</button>
        <button onClick={handleContactClick} className="nav-button">Contact</button>
      </nav>
    </header>
  );
}

export default Header;
