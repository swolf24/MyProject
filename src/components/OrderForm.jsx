import React, { useState } from 'react';
import OrderInfo from './OrderInfo'; // Importiere OrderInfo-Komponente

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
    setQuantity(prevQuantity => prevQuantity + 1);
  }

  function decrementQuantity() {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  }
}