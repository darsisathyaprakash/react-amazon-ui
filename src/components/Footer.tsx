import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-300 text-center md:text-left">
              &copy; {new Date().getFullYear()} Darsi Satya Prakash. All rights reserved.
            </p>
          </div>

          <div className="flex items-center">
            <span className="text-gray-600 dark:text-gray-300 mr-2 flex items-center text-sm">
              Made with <Heart size={14} className="mx-1 text-red-500" /> using React & TailwindCSS
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="mt-6 md:mt-0 p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;