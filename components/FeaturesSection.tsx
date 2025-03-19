import React from 'react';
import { FaLock, FaWallet, FaShieldAlt, FaGlobe } from 'react-icons/fa';

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
          Our Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded shadow hover:shadow-md transition-shadow">
            <FaLock className="text-indigo-600 text-4xl mb-4" />
            <h3 className="text-xl font-medium mb-2">Secure 2FA</h3>
            <p className="text-sm">
              Protect every transaction with real-time OTP verification.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded shadow hover:shadow-md transition-shadow">
            <FaWallet className="text-indigo-600 text-4xl mb-4" />
            <h3 className="text-xl font-medium mb-2">Easy Wallet Integration</h3>
            <p className="text-sm">
              Connect MetaMask, Phantom, and more with a few simple clicks.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded shadow hover:shadow-md transition-shadow">
            <FaShieldAlt className="text-indigo-600 text-4xl mb-4" />
            <h3 className="text-xl font-medium mb-2">Non-Custodial</h3>
            <p className="text-sm">
              Your funds remain under your control, guarded by smart contract gatekeepers.
            </p>
          </div>
          {/* Feature 4 */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded shadow hover:shadow-md transition-shadow">
            <FaGlobe className="text-indigo-600 text-4xl mb-4" />
            <h3 className="text-xl font-medium mb-2">Multi-Chain Support</h3>
            <p className="text-sm">
              Secure transactions on Ethereum, Solana, and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
