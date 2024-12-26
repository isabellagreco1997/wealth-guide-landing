import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className="w-full py-6 px-4 md:px-8 bg-white/95 backdrop-blur-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-playfair font-bold">
          HNWI
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="#" className="nav-link">About</Link>
          <Link to="#" className="nav-link">Contact</Link>
          <Link to="#" className="nav-link">Privacy Policy</Link>
        </div>
      </div>
    </nav>
  );
};