import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

function PlantCard({ plant }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(plant));
  };

  return (
    <div>
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>{plant.description}</p>
      <p>Price: ${plant.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default PlantCard;