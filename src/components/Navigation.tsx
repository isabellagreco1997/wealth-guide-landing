import React from 'react';
import { Link } from 'react-router-dom';
import { TestTube } from 'lucide-react';

export const Navigation = () => {
  return (
    <nav className="w-full py-6 px-4 md:px-8 bg-[#1A1F2C]/95 backdrop-blur-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="group flex items-center space-x-3 text-2xl font-playfair font-bold text-white transition-all duration-300 hover:scale-105">
          <div className="relative">
            <TestTube className="w-8 h-8 text-[#F97316] transform rotate-12 transition-transform duration-300 group-hover:rotate-0" strokeWidth={2.5} />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#F97316] rounded-full opacity-75 animate-pulse" />
          </div>
          <span className="relative">
            Retirement
            <span className="text-[#F97316]"> Scientist</span>
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F97316] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </span>
        </Link>
      </div>
    </nav>
  );
};