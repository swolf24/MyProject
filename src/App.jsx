import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/ComponentUI';
import ProductForm from './components/OrderForm';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <div className="content-box">
          <Header 
            image="https://media.istockphoto.com/id/1171385777/de/foto/nettes-mädchen-schließen-ihre-augen-im-badezimmer.jpg?s=612x612&w=0&k=20&c=h-svPudCG_feNvf4nuchrPhRbQQuYqLmTS9f3o6IFV0=" 
            title="Produkt-Auswahl" 
          />
          {/* Navigationslinks */}
          <nav>
            <Link to="/">Home</Link> | <Link to="/products">Products</Link>
          </nav>
          
          {/* Definiere die Routen */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;