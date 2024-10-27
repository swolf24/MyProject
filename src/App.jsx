import React, { useState } from 'react';
import Header from './components/ComponentUI';
import ProductForm from './components/OrderForm';
import './App.css';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header 
        image="https://media.istockphoto.com/id/1171385777/de/foto/nettes-mädchen-schließen-ihre-augen-im-badezimmer.jpg?s=612x612&w=0&k=20&c=h-svPudCG_feNvf4nuchrPhRbQQuYqLmTS9f3o6IFV0=" 
        title="Produkt-Auswahl" 
      />
      <ProductForm />

      {/* Separate section for Vite and React logos */}
      <div className="logos-section">
      
      </div>
    </div>
  );
}

export default App;