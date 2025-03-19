import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Navigation Links */}
          <div className="mb-6 md:mb-0">
            <nav className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                Home
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Features
              </a>
              <a href="#" className="hover:text-white transition-colors">
                How It Works
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a href="#" className="hover:text-white transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <FaGithub />
            </a>
          </div>

          {/* Newsletter Signup */}
          <div>
            <form className="flex flex-col sm:flex-row items-center">
              <input
                type="email"
                placeholder="Your email"
                className="w-full sm:w-auto px-4 py-2 rounded-md mb-4 sm:mb-0 sm:mr-2 focus:outline-none text-gray-900"
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          © {new Date().getFullYear()} CoinFerry. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
