
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-hm-dark text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Halomango Cebu. All Rights Reserved.</p>
        <p className="text-sm text-yellow-200 mt-1">Taste the Sunshine of Cebu</p>
      </div>
    </footer>
  );
};

export default Footer;
