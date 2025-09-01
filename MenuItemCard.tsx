import React from 'react';
import { MenuItem } from '../types';

interface MenuItemCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, onAddToCart }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transform hover:scale-105 transition-transform duration-300 border-4 border-transparent hover:border-hm-red">
      <img className="w-full h-56 object-cover" src={item.image} alt={item.name} />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-hm-dark mb-2">{item.name}</h3>
        <p className="text-gray-600 flex-grow">{item.description}</p>
        <div className="mt-6 flex justify-between items-center">
          <span className="text-3xl font-extrabold text-hm-dark">₱{item.price}</span>
          <button 
            onClick={() => onAddToCart(item)}
            className="bg-hm-red text-white font-bold py-2 px-6 rounded-full hover:bg-red-700 transition-colors duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-hm-yellow focus:ring-opacity-75"
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;