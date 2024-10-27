import React, { useState } from 'react';
import './App.css';

// Header Component
function Header({ image, title }) {
  return (
    <header className="header">
      <img src={image} alt="Header" className="header-image" />
      <h1>{title}</h1>
    </header>
  );
}

// CocktailFinder Component
function CocktailFinder() {
  const [ingredient, setIngredient] = useState(''); // State for ingredient
  const [cocktails, setCocktails] = useState([]);   // State for cocktails
  const [error, setError] = useState(null);         // State for errors
  const [order, setOrder] = useState({});           // State to track cocktail orders

  const pI = "https://media.istockphoto.com/id/1303977605/de/foto/fünf-cocktails-in-den-händen-in-feierlichem-toast-verbunden.jpg?s=612x612&w=0&k=20&c=-j_G6Dm8mma1lOJdI0l-M5vNmwv1LQZuHES38lcQHVs=";

  async function Search() {
    if (ingredient.trim() !== '') {
      try {
        const query = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
        const response = await fetch(query);
        const data = await response.json();

        if (data.drinks === null) {
          setError('No cocktails found. Please try different ingredients.');
          setCocktails([]);
        } else {
          setCocktails(data.drinks);
          setError(null);
        }
      } catch (err) {
        setError(`Error: ${err.message}`);
        setCocktails([]);
      }
    } else {
      alert('Please add an ingredient');
    }
  }

  // Function to handle ordering a cocktail
  const orderCocktail = (cocktail) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      [cocktail.idDrink]: (prevOrder[cocktail.idDrink] || 0) + 1,
    }));
    alert(`Ordered one more ${cocktail.strDrink}`);
  };

  return (
    <div className="container">
      <Header image={pI} title="Welcome to the Cocktail Finder!" />

      <div style={{ margin: '20px 0' }}>
        <input
          type="text"
          placeholder="Enter ingredient"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          style={{ padding: '10px', marginRight: '10px' }}
        />
        <button onClick={Search} style={{ padding: '10px 20px' }}>Search Cocktails</button>
      </div>

      <div style={{ margin: '20px 0' }}>
        <h2>Search results:</h2>
        {error && <p className="error" style={{ color: 'red' }}>{error}</p>}
        {cocktails.length > 0 ? (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {cocktails.map((cocktail) => (
              <li key={cocktail.idDrink} style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px' }}>
                <h3>{cocktail.strDrink}</h3>
                {cocktail.strDrinkThumb && (
                  <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} style={{ width: '200px', borderRadius: '8px' }} />
                )}
                <div style={{ marginTop: '10px' }}>
                  <button onClick={() => orderCocktail(cocktail)} style={{ padding: '5px 10px' }}>
                    Order
                  </button>
                  <p>Ordered: {order[cocktail.idDrink] || 0}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          !error && <p>No results found</p>
        )}
      </div>
    </div>
  );
}

export default CocktailFinder;

