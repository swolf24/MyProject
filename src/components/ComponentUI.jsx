import React from 'react';

function Header({ image, title }) {
  return (
    <div className="header">
      <img className="header-image" src={image} alt="Header" />
      <h1>{title}</h1>
    </div>
  );
}

export default Header;