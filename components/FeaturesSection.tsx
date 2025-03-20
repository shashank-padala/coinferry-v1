// components/FeaturesSection.tsx
import React from 'react';
import { FiShield, FiZap, FiLayers, FiGlobe } from 'react-icons/fi';

const FeaturesSection: React.FC = () => {
  return (
    <section className="section-bg py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
          Our Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="card-bg rounded p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <FiShield className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-xl font-medium mb-2">Secure 2FA</h3>
            <p className="text-sm text-gray-300">
              Protect every transaction with real-time OTP verification.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="card-bg rounded p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <FiZap className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-xl font-medium mb-2">Easy Wallet Integration</h3>
            <p className="text-sm text-gray-300">
              Connect MetaMask, Phantom, and more with a few simple clicks.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="card-bg rounded p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <FiLayers className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-xl font-medium mb-2">Non-Custodial</h3>
            <p className="text-sm text-gray-300">
              Your funds remain under your control, guarded by smart contract gatekeepers.
            </p>
          </div>
          {/* Feature 4 */}
          <div className="card-bg rounded p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <FiGlobe className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-xl font-medium mb-2">Multi-Chain Support</h3>
            <p className="text-sm text-gray-300">
              Secure transactions on Ethereum, Solana, and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
