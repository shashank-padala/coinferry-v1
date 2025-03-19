// components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="text-2xl font-bold text-blue-600">
          CoinFerry
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-700">
          <a href="#" className="hover:text-blue-600 transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors">
            Features
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors">
            How It Works
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors">
            Blog
          </a>
        </nav>

        {/* Connect Wallet Button */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium">
          Connect Wallet
        </button>
      </div>
    </header>
  );
};

export default Header;
