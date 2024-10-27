import React from 'react';
import Header from './components/Header';
import ProductForm from './components/ProductForm';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="content-box">
        <Header 
          image="https://example.com/image.jpg" 
          title="Produkt-Auswahl" 
        />
        <ProductForm />
      </div>
    </div>
  );
}

export default App;