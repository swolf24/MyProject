import React, { useState } from 'react';
import './App.css';

// Header Komponente
function Header({ image, title }) {
  return (
    <header className="header">
      <img src={image} alt="Header" className="header-image" />
      <h1>{title}</h1>
    </header>
  );
}
