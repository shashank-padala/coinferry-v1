// components/TestimonialsSection.tsx
import React from 'react';
import { FiStar } from 'react-icons/fi';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="section-bg py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="card-bg rounded p-6 flex flex-col hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-2 text-blue-500">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className="mr-1" />
              ))}
            </div>
            <p className="text-m text-gray-300 mb-4">
              “This platform gave me the peace of mind I needed to keep my investments safe. The OTP feature is a game changer!”
            </p>
            <div className="mt-auto text-gray-400">
              — Alex, Crypto Trader
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="card-bg rounded p-6 flex flex-col hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-2 text-blue-500">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className="mr-1" />
              ))}
            </div>
            <p className="text-m text-gray-300 mb-4">
              “Simple, effective, and secure. I love how easy it is to set up and use!”
            </p>
            <div className="mt-auto text-gray-400">
              — Jamie, Blockchain Enthusiast
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="card-bg rounded p-6 flex flex-col hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-2 text-blue-500">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className="mr-1" />
              ))}
            </div>
            <p className="text-m text-gray-300 mb-4">
              “I can finally sleep easy knowing my wallet has an extra layer of security. Highly recommended!”
            </p>
            <div className="mt-auto text-gray-400">
              — Taylor, Software developer
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
