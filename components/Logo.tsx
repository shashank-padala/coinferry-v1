// components/Logo.tsx
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      {/* Lock Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6 text-blue-600"
      >
        <path d="M12 1C9.238 1 7 3.238 7 6v3H6c-1.654 0-3 1.346-3 3v7c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3v-7c0-1.654-1.346-3-3-3h-1V6c0-2.762-2.238-5-5-5zm3 9h1c.551 0 1 .448 1 1v7c0 .552-.449 1-1 1H6c-.552 0-1-.448-1-1v-7c0-.552.448-1 1-1h1V6c0-1.654 1.346-3 3-3s3 1.346 3 3v4zm-2 4v2c0 .552-.448 1-1 1s-1-.448-1-1v-2c0-.552.448-1 1-1s1 .448 1 1z"/>
      </svg>

      {/* Brand Text */}
      <span className="text-xl font-bold text-gray-900">
        <span className="text-blue-600">Coin</span>Ferry
      </span>
    </div>
  );
};

export default Logo;
