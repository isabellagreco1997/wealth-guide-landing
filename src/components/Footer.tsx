import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-playfair text-xl mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#9b87f5] transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-[#9b87f5] transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="hover:text-[#9b87f5] transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
          
          <div className="text-sm">
            <p className="mb-4">
              Your privacy is important to us. We handle all submitted data with strict confidentiality.
            </p>
            <div className="space-x-4">
              <Link to="#" className="text-[#9b87f5] hover:underline">Terms of Service</Link>
              <Link to="/privacy-policy" className="text-[#9b87f5] hover:underline">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};