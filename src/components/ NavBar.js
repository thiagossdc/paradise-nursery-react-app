import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NavBar() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart ({totalQuantity})</Link>
    </nav>
  );
}

export default NavBar;