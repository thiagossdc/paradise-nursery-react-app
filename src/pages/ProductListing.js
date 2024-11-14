import React from 'react';
import PlantCard from '../components/PlantCard';

const plants = [
  { id: 1, name: 'Aloe Vera', description: 'Medicinal Plant', price: 10, image: '/images/aloe.jpg' },
  { id: 2, name: 'Lavender', description: 'Aromatic Plant', price: 15, image: '/images/lavender.jpg' },
  // Outros dados de plantas
];

function ProductListing() {
  return (
    <div>
      <h2>Aromatic Plants</h2>
      <div>{plants.filter(p => p.description.includes('Aromatic')).map(plant => <PlantCard key={plant.id} plant={plant} />)}</div>
      
      <h2>Medicinal Plants</h2>
      <div>{plants.filter(p => p.description.includes('Medicinal')).map(plant => <PlantCard key={plant.id} plant={plant} />)}</div>
    </div>
  );
}

export default ProductListing;