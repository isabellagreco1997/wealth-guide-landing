import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Navigation = () => {
  return (
    <nav className="bg-navy py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="group flex items-center space-x-3 text-2xl font-inter text-white transition-all duration-300 hover:scale-105">
          <div className="relative">
            <ArrowRight className="w-8 h-8 text-[#F97316] transform rotate-0 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#F97316] rounded-full opacity-75 animate-pulse" />
          </div>
          <span className="relative">
            Financial<span className="font-bold">Coacher</span>
          </span>
        </Link>
      </div>
    </nav>
  );
};