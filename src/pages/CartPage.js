import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';

function CartPage() {
  const items = useSelector((state) => state.cart.items);

  return (
    <div>
      <h2>Your Cart</h2>
      {items.map(item => <CartItem key={item.id} item={item} />)}
      <button>Continue Shopping</button>
      <button>Checkout</button>
    </div>
  );
}

export default CartPage;