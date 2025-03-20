// components/HeroSection.tsx
import React from 'react';
import { FaRocket } from 'react-icons/fa'; // Example icon to match "launch" vibe

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative py-20 px-4"
      style={{
        background: 'linear-gradient(180deg, #1F1F1F 0%, #141414 100%)',
      }}
    >
      {/* Subtle floating icon or background glow (optional) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,_#3B82F6_0%,_transparent_70%)]" />

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center">
        <div className="flex items-center space-x-2 mb-6">
          <FaRocket className="text-blue-500 text-3xl" />
          <h1 className="text-3xl md:text-4xl font-bold">
            Keep your crypto wallets safe with OTPs
          </h1>
        </div>
        <p className="text-lg md:text-xl max-w-2xl mb-8 leading-relaxed text-gray-300">
          Secure your wallet transactions with an extra layer of protection using two-factor authentication (2FA).
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium">
          Get Started Today
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
