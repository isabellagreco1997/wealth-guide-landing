import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Twitter } from 'lucide-react';
import { TikTokIcon } from './icons/TikTokIcon';

export const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <a href="#" className="hover:text-[#9b87f5] transition-colors">
                <TikTokIcon size={24} />
              </a>
            </div>
          </div>
          
          <div className="text-sm">
            <h3 className="font-playfair text-xl mb-4">Legal</h3>
            <div className="space-y-2">
              <div>
                <Link to="/terms-of-use" className="text-[#9b87f5] hover:underline">Terms of Use</Link>
              </div>
              <div>
                <Link to="/privacy-policy" className="text-[#9b87f5] hover:underline">Privacy Policy</Link>
              </div>
              <div>
                <Link to="/cookie-policy" className="text-[#9b87f5] hover:underline">Cookie Policy</Link>
              </div>
            </div>
          </div>

          <div className="text-sm">
            <h3 className="font-playfair text-xl mb-4">Get in Touch</h3>
            <div className="space-y-2">
              <p>Have questions? We're here to help.</p>
              <div>
                <Link to="/contact" className="text-[#9b87f5] hover:underline">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};