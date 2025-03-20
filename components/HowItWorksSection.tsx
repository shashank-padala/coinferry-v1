// components/HowItWorksSection.tsx
import React from 'react';
import { FiArrowRightCircle } from 'react-icons/fi';

const HowItWorksSection: React.FC = () => {
  return (
    <section
      className="relative py-16 px-4"
      style={{
        background: 'linear-gradient(180deg, #1F1F1F 0%, #141414 100%)',
      }}
    >
      {/* Subtle floating icon or background glow (optional) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_center,_#3B82F6_0%,_transparent_70%)]" />
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Step 1 */}
          <div className="flex flex-col items-center card-bg rounded p-6 hover:shadow-lg transition-shadow">
            <FiArrowRightCircle className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-xl font-medium mb-2">Connect Your Wallet</h3>
            <p className="text-sm text-gray-300">
              Link your MetaMask, Phantom, or other supported wallets in just a few clicks.
            </p>
          </div>
          {/* Step 2 */}
          <div className="flex flex-col items-center card-bg rounded p-6 hover:shadow-lg transition-shadow">
            <FiArrowRightCircle className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-xl font-medium mb-2">Set Up 2FA</h3>
            <p className="text-sm text-gray-300">
              Enter your phone number and email to enable OTP verification for every transaction.
            </p>
          </div>
          {/* Step 3 */}
          <div className="flex flex-col items-center card-bg rounded p-6 hover:shadow-lg transition-shadow">
            <FiArrowRightCircle className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-xl font-medium mb-2">Confirm Transactions</h3>
            <p className="text-sm text-gray-300">
              Each transaction requires a one-time passcode, ensuring maximum security.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
