// components/CTABanner.tsx
import React from 'react';

const CTABanner: React.FC = () => {
  return (
    <section
      className="relative py-16 px-4"
      style={{
        background: 'linear-gradient(180deg, #1F1F1F 0%, #141414 100%)',
      }}
    >
      {/* Subtle floating icon or background glow (optional) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,_#3B82F6_0%,_transparent_70%)]" />
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Ready to Upgrade Your Crypto Security?
          </h2>
          <p className="mt-2 text-gray-300">
            Join thousands of users who trust us to keep their transactions safe.
          </p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium">
          Sign Up Now
        </button>
      </div>
    </section>
  );
};

export default CTABanner;
