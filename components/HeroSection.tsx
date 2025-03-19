// components/HeroSection.tsx
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-blue-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-center mb-4">
          2FA for Every Crypto Transaction
        </h1>
        <p className="text-lg md:text-xl max-w-xl text-center mb-6 leading-relaxed">
          Secure your wallet transactions with an extra layer of protection using two-factor authentication.
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors font-medium">
          Get Started Today
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
