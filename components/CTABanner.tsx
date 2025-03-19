import React from 'react';

const CTABanner: React.FC = () => {
  return (
    <section className="bg-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Ready to Upgrade Your Crypto Security?
          </h2>
          <p className="mt-2 text-lg">
            Join thousands of users who trust us to keep their transactions safe.
          </p>
        </div>
        <button className="bg-white text-indigo-600 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors font-medium">
          Sign Up Now
        </button>
      </div>
    </section>
  );
};

export default CTABanner;
