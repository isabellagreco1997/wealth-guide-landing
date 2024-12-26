import React from 'react';
import { Link } from 'react-router-dom';
import { Flask } from 'lucide-react';

export const Navigation = () => {
  return (
    <nav className="w-full py-6 px-4 md:px-8 bg-[#1A1F2C]/95 backdrop-blur-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2 text-2xl font-playfair font-bold text-white">
          <Flask className="w-6 h-6 text-[#9b87f5]" />
          <span>Retirement Scientist</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="#" className="text-white hover:text-[#9b87f5] transition-colors duration-200">About</Link>
          <Link to="#" className="text-white hover:text-[#9b87f5] transition-colors duration-200">Contact</Link>
          <Link to="#" className="text-white hover:text-[#9b87f5] transition-colors duration-200">Privacy Policy</Link>
        </div>
      </div>
    </nav>
  );
};