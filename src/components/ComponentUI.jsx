import React from 'react';
// defines the header of the Page 
function Header({ image, title }) {
  return (
    <header className="header">
      <img src={image} alt="Header" className="header-image" />
      <h1>{title}</h1>
    </header>
  );
}

export default Header; 