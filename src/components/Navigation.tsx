import React from 'react';
import { Link } from 'react-router-dom';
import { TestTube } from 'lucide-react';

export const Navigation = () => {
  return (
    <nav className="w-full py-6 px-4 md:px-8 bg-[#1A1F2C]/95 backdrop-blur-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-2xl font-playfair font-bold text-white">
          <TestTube className="w-6 h-6 text-[#F97316]" />
          <span>Retirement Scientist</span>
        </Link>
      </div>
    </nav>
  );
};