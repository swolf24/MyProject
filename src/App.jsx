import React from 'react';
import Header from './components/ComponentUI';
import ProductForm from './components/OrderForm';
import './App.css';

function App() {
  return (
    <div className="container"> 
      <div className="content-box"> 
        <Header 
          image="https://media.istockphoto.com/id/1171385777/de/foto/nettes-mädchen-schließen-ihre-augen-im-badezimmer.jpg?s=612x612&w=0&k=20&c=h-svPudCG_feNvf4nuchrPhRbQQuYqLmTS9f3o6IFV0=" 
          title="Produkt-Auswahl" 
        />
        <ProductForm />
      </div>
    </div>
  );
}

export default App;