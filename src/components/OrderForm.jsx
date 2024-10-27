import React, { useState } from 'react';
import OrderInfo from './OrderInfo'; 

function ProductForm() {
  const nameP = [
    'Hairdryer Dyson',
    'Revlon RVDR5222E',
    'BaByliss Air Wand',
  ];

  const priceP = [
    449,
    35,
    106,
  ];

  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  function handleProductChange(event) {
    setSelectedProductIndex(Number(event.target.value));
  }

  function incrementQuantity() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }

  function decrementQuantity() {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  }

  const selectedProductPrice = priceP[selectedProductIndex];
  const total = selectedProductPrice * quantity;

  return (
    <div className="product-form">
      <h2>Select product</h2>
      <div className="product-selection">
        <label>Product: </label>
        <select value={selectedProductIndex} onChange={handleProductChange}>
          {nameP.map((product, index) => (
            <option key={index} value={index}>
              {product} ({priceP[index]}€)
            </option>
          ))}
        </select>
      </div>
      <div className="quantity-selection">
        <label>Quantity: </label>
        <button onClick={decrementQuantity} className="quantity-button">-</button>
        <span className="quantity-display">{quantity}</span>
        <button onClick={incrementQuantity} className="quantity-button">+</button>
      </div>
      <OrderInfo productName={nameP[selectedProductIndex]} quantity={quantity} total={total} />
    </div>
  );
}

export default ProductForm;