import React from 'react';

function OrderInfo({ productName, quantity, total }) {
  return (
    <div>
      <h3>Order info</h3>
      <table className="order-info-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{productName}</td>
            <td>{quantity}</td>
            <td>{total}€</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OrderInfo;

