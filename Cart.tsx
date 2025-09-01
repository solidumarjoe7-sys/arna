import React from 'react';
import { CartItem as CartItemType } from '../types';
import CartItem from './CartItem';
import CloseIcon from './icons/CloseIcon';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItemType[];
  onUpdateQuantity: (itemId: number, newQuantity: number) => void;
  onPlaceOrder: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, cartItems, onUpdateQuantity, onPlaceOrder }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      ></div>
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-6 border-b-2 border-gray-200 bg-hm-yellow">
            <h2 className="text-2xl font-bold text-hm-dark">Your Order</h2>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-white/50 text-hm-dark hover:text-hm-red transition-colors">
              <CloseIcon className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex-grow p-6 overflow-y-auto">
            {cartItems.length === 0 ? (
              <div className="text-center text-gray-500 mt-10">
                <p className="text-lg">Your cart is empty.</p>
                <p>Add some delicious treats!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map(item => (
                  <CartItem key={item.id} item={item} onUpdateQuantity={onUpdateQuantity} />
                ))}
              </div>
            )}
          </div>
          
          {cartItems.length > 0 && (
            <div className="p-6 border-t-2 border-gray-200 bg-gray-50">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-gray-700">Subtotal:</span>
                <span className="text-2xl font-bold text-hm-dark">₱{subtotal.toFixed(2)}</span>
              </div>
              <button 
                onClick={onPlaceOrder}
                className="w-full bg-hm-red text-white font-bold py-4 px-6 rounded-lg hover:bg-red-700 transition-colors duration-300 shadow-lg text-lg"
              >
                Order
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;