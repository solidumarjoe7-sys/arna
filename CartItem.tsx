
import React from 'react';
import { CartItem as CartItemType } from '../types';
import PlusIcon from './icons/PlusIcon';
import MinusIcon from './icons/MinusIcon';
import TrashIcon from './icons/TrashIcon';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (itemId: number, newQuantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity }) => {
  return (
    <div className="flex items-center space-x-4 p-3 bg-white rounded-lg shadow">
      <img src={item.image} alt={item.name} className="w-20 h-20 rounded-md object-cover"/>
      <div className="flex-grow">
        <h4 className="font-bold text-md text-hm-dark">{item.name}</h4>
        <p className="text-sm text-gray-500">₱{item.price.toFixed(2)}</p>
        <div className="flex items-center mt-2 space-x-2">
          <button 
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className="p-1 rounded-full bg-gray-200 hover:bg-hm-yellow transition-colors"
          >
            <MinusIcon className="w-4 h-4 text-gray-700"/>
          </button>
          <span className="font-bold w-8 text-center">{item.quantity}</span>
          <button 
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="p-1 rounded-full bg-gray-200 hover:bg-hm-yellow transition-colors"
          >
            <PlusIcon className="w-4 h-4 text-gray-700"/>
          </button>
        </div>
      </div>
      <div className="flex flex-col items-end">
         <span className="font-bold text-lg text-hm-dark">₱{(item.price * item.quantity).toFixed(2)}</span>
         <button 
            onClick={() => onUpdateQuantity(item.id, 0)}
            className="text-gray-400 hover:text-hm-red mt-2 transition-colors"
            aria-label="Remove item"
        >
            <TrashIcon className="w-5 h-5"/>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
