import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleQuantityChange = (e) => {
    dispatch(updateQuantity({ id: item.id, quantity: parseInt(e.target.value, 10) }));
  };

  return (
    <div>
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>Unit Price: ${item.price}</p>
      <input type="number" value={item.quantity} onChange={handleQuantityChange} min="1" />
      <button onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
    </div>
  );
}

export default CartItem;