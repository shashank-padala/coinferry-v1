import React from 'react';
import { FaStar } from 'react-icons/fa';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white rounded shadow p-6 flex flex-col">
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-indigo-500 mr-1" />
              ))}
            </div>
            <p className="text-sm mb-4">
              “This platform gave me the peace of mind I needed to keep my investments safe. The OTP feature is a game changer!”
            </p>
            <div className="mt-auto">
              <span className="font-medium">— Alex, Crypto Trader</span>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-white rounded shadow p-6 flex flex-col">
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-indigo-500 mr-1" />
              ))}
            </div>
            <p className="text-sm mb-4">
              “Simple, effective, and secure. I love how easy it is to set up and use!”
            </p>
            <div className="mt-auto">
              <span className="font-medium">— Jamie, Blockchain Enthusiast</span>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="bg-white rounded shadow p-6 flex flex-col">
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-indigo-500 mr-1" />
              ))}
            </div>
            <p className="text-sm mb-4">
              “I can finally sleep easy knowing my wallet has an extra layer of security. Highly recommended!”
            </p>
            <div className="mt-auto">
              <span className="font-medium">— Taylor, NFT Collector</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
