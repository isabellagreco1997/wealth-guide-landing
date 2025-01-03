import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Navigation = () => {
  return (
    <nav className="bg-white py-4 px-6 fixed w-full top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="group flex items-center space-x-2 text-2xl font-inter text-gray-900 transition-all duration-300">
          <span className="relative font-bold">
            Financial<span className="text-[#FF4D4D]">Coaching</span>
          </span>
          <ArrowRight className="w-6 h-6 text-black transform transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
        </Link>
      </div>
    </nav>
  );
};