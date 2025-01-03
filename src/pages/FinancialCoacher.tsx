import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';

const FinancialCoacher = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />
      
      <main className="pt-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-16 text-center font-playfair">
            The <span className="text-[#9b87f5]">7 money models</span> we use to help High-Earners & Entrepreneurs achieve Financial Independence <span className="text-[#9b87f5]">fast</span>
          </h1>
          
          <ul className="space-y-8 list-disc pl-8 mb-16">
            <li className="text-lg md:text-xl text-[#403E43] leading-relaxed">
              The secrets that your Financial Adviser doesn't want you to know.
            </li>
            
            <li className="text-lg md:text-xl font-semibold text-[#1A1F2C] leading-relaxed">
              Why High Earners Stay Broke: The Untold Truth About Building Real Wealth.
            </li>
            
            <li className="text-lg md:text-xl text-[#403E43] leading-relaxed">
              The Secret to Building Wealth Isn't in Your Bank Account — It's in Your Brain.
            </li>
          </ul>
          
          <div className="text-center">
            <Button 
              className="bg-[#9b87f5] hover:bg-[#9b87f5]/90 text-white px-12 py-7 text-xl rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.location.href = '#get-guide'}
            >
              Get the Guide
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FinancialCoacher;