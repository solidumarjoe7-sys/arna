
import React from 'react';
import { MenuItem as MenuItemType } from '../types';
import MenuItemCard from './MenuItemCard';

interface MenuProps {
  menuItems: MenuItemType[];
  onAddToCart: (item: MenuItemType) => void;
}

const Menu: React.FC<MenuProps> = ({ menuItems, onAddToCart }) => {
  return (
    <section>
      <h2 className="text-4xl font-extrabold text-center text-hm-dark mb-8">Our Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map(item => (
          <MenuItemCard key={item.id} item={item} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  );
};

export default Menu;
