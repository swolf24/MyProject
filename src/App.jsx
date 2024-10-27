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

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src="/assets/react.svg" className="logo react" alt="React logo" />
        </a>
      </div>
      
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;