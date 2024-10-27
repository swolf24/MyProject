import React, { useState } from 'react';
import './App.css';


function Header({ image, title }) {
  return (
    <header className="header">
      <img src={image} alt="Header" className="header-image" />
      <h1>{title}</h1>
    </header>
  );
}


function CocktailFinder() {
  const [ingredient, setIngredient] = useState(''); 
  const [cocktails, setCocktails] = useState([]);   
  const [error, setError] = useState(null);         
  
  const pI = "https://media.istockphoto.com/id/1303977605/de/foto/fünf-cocktails-in-den-händen-in-feierlichem-toast-verbunden.jpg?s=612x612&w=0&k=20&c=-j_G6Dm8mma1lOJdI0l-M5vNmwv1LQZuHES38lcQHVs=";

  async function Search() {
    if (ingredient.trim() !== '') {
      setError(null); // Fehlerzustand zurücksetzen bei neuer Suche
      setCocktails([]); // Cocktails zurücksetzen bei neuer Suche
  
      try {
        const query = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
        console.log('API query:', query); // Debug-Ausgabe: Zeigt die URL der API-Abfrage
  
        const response = await fetch(query);
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json(); 
        console.log('API response data:', data); // Debug-Ausgabe: Zeigt die erhaltenen Daten an
  
        // Zusätzliche Prüfung: Falls `data.drinks` nicht existiert oder kein Array ist
        if (!data.drinks || !Array.isArray(data.drinks) || data.drinks.length === 0) {
          setError(`No cocktails found for "${ingredient}". Please try a different ingredient.`);
          setCocktails([]);
        } else {
          setCocktails(data.drinks);
          setError(null);
          console.log('Cocktails found:', data.drinks); // Debug-Ausgabe: Zeigt die Cocktail-Daten an
        }
      } catch (err) {
        console.error('Error fetching data:', err);
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
        onChange={(e) => setIngredient(e.target.value)}  
        onKeyDown={(e) => e.key === 'Enter' && Search()} 
      />

      <button onClick={Search}>Search Cocktails</button>

      <div>
        <h2>Search results:</h2>
        
      
        {error && <p className="error">{error}</p>}
        
        
        {cocktails.length > 0 ? (
          <ul>
            {cocktails.map((c) => (
              <li key={c.idDrink}>
                <h3>{c.strDrink}</h3>
                {c.strDrinkThumb && (
                  <img src={c.strDrinkThumb} alt={c.strDrink} style={{ width: '200px' }} />
                )}
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