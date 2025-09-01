
import React from 'react';
import ShoppingCartIcon from './icons/ShoppingCartIcon';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount, onCartClick }) => {
  return (
    <header className="bg-hm-yellow shadow-md sticky top-0 z-30">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="https://em-content.zobj.net/source/microsoft-teams/363/mango_1f96d.png" alt="Mango Icon" className="h-10 w-10 md:h-12 md:w-12"/>
          <h1 className="text-2xl md:text-4xl font-black text-hm-red tracking-tight" style={{textShadow: '1px 1px 2px #fff'}}>
            Halomango Cebu
          </h1>
        </div>
        <button 
          onClick={onCartClick}
          className="relative text-hm-dark hover:text-hm-red transition-colors duration-300 p-2 rounded-full hover:bg-white/50"
          aria-label="Open Shopping Cart"
        >
          <ShoppingCartIcon className="w-8 h-8" />
          {cartItemCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-hm-red text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-hm-yellow">
              {cartItemCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
