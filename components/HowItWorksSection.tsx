import React from 'react';
import { FaPlug, FaMobileAlt, FaCheckCircle } from 'react-icons/fa';

const HowItWorksSection: React.FC = () => {
  return (
    <section className="bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
          How It Works
        </h2>
        <div className="flex flex-col space-y-8">
          {/* Step 1 */}
          <div className="flex items-start">
            <div className="text-indigo-600 mr-4 text-3xl">
              <FaPlug />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Connect Your Wallet</h3>
              <p className="text-sm">
                Link your MetaMask, Phantom, or other supported wallets in just a few clicks.
              </p>
            </div>
          </div>
          {/* Step 2 */}
          <div className="flex items-start">
            <div className="text-indigo-600 mr-4 text-3xl">
              <FaMobileAlt />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Set Up 2FA</h3>
              <p className="text-sm">
                Enter your phone number and email to enable OTP verification for every transaction.
              </p>
            </div>
          </div>
          {/* Step 3 */}
          <div className="flex items-start">
            <div className="text-indigo-600 mr-4 text-3xl">
              <FaCheckCircle />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Confirm Transactions</h3>
              <p className="text-sm">
                Each transaction requires a one-time passcode, ensuring maximum security.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
