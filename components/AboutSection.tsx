// components/AboutSection.tsx
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="section-bg py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">
          Our Mission: Empowering Your Crypto Security
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-center leading-relaxed text-gray-300">
          In today’s digital landscape, your assets deserve the highest level of protection.
          We combine state-of-the-art two-factor authentication with secure blockchain technology
          to ensure that even if your wallet credentials are compromised, your funds remain safe.
          With a non-custodial design and multi-chain support, CoinFerry sets a new standard in crypto security.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
