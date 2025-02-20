import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <FaShoppingCart size={24} />
      <span style={{ marginLeft: '5px', backgroundColor: 'red', color: 'white', borderRadius: '50%', padding: '2px 6px' }}>3</span>
    </div>
  );
}

export default CartWidget;
