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

// CocktailFinder Komponente
function CocktailFinder() {
  const [ingredient, setIngredient] = useState(''); // State für die Zutat
  const [cocktails, setCocktails] = useState([]);   // State für Cocktails
  const [error, setError] = useState(null);         // State für Fehler
  
  const pI = "https://media.istockphoto.com/id/1303977605/de/foto/fünf-cocktails-in-den-händen-in-feierlichem-toast-verbunden.jpg?s=612x612&w=0&k=20&c=-j_G6Dm8mma1lOJdI0l-M5vNmwv1LQZuHES38lcQHVs=";

  async function Search() {
    if (ingredient.trim() !== '') {
      try {
        const query = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
        const response = await fetch(query);

        // Log the response status and data for debugging
        console.log('Response Status:', response.status);
        const data = await response.json(); 
        console.log('API Response:', data); 

        // Check if drinks property exists
        if (!data.drinks) {
          setError('No cocktails found. Please try different ingredients.'); 
          setCocktails([]);  
        } else if (data.drinks.length === 0) {
          setError('No cocktails found. Please try different ingredients.'); 
          setCocktails([]);  
        } else {
          setCocktails(data.drinks);  
          setError(null);    
        }
      } catch (err) {
        console.error('Fetch Error:', err);
        setError(`Error: ${err.message}`);  
        setCocktails([]);         
      }
    } else {
      alert('Please add an ingredient');
    }
  }

  return (
    <div className="container">
      <Header image={pI} title="Welcome to the Cocktail Finder!" />

      <input
        type="text"
        placeholder="Enter ingredient"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}  // save the Input
      />

      <button onClick={Search}>Search Cocktails</button>

      <div>
        <h2>Search results:</h2>
        {error && <p className="error">{error}</p>}
        {cocktails.length > 0 ? (     
          <ul>                
            {
              cocktails.map((c) => (   
                <li key={c.idDrink}>   
                  <h3>{c.strDrink}</h3> 
                  {c.strDrinkThumb && <img src={c.strDrinkThumb} alt={c.strDrink} style={{ width: '200px' }} />} 
                </li>
              ))
            }
          </ul>
        ) : (
          !error && <p>No results found</p>  
        )}
      </div>   
    </div>
  );
}

export default CocktailFinder;