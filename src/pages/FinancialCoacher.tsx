import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';

const FinancialCoacher = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-12">
            The <span className="text-[#FF4D4D]">7 money models</span> we use to help High-Earners & Entrepreneurs achieve Financial Independence <span className="text-[#FF4D4D]">fast</span>
          </h1>
          
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-gray-800">
              The secrets that your Financial Adviser doesn't want you to know.
            </p>
            
            <p className="text-lg md:text-xl font-semibold text-gray-900">
              Why High Earners Stay Broke: The Untold Truth About Building Real Wealth.
            </p>
            
            <p className="text-lg md:text-xl text-gray-800">
              The Secret to Building Wealth Isn't in Your Bank Account — It's in Your Brain.
            </p>
          </div>
          
          <Button 
            className="bg-[#FF4D4D] hover:bg-[#FF4D4D]/90 text-white px-8 py-6 text-xl rounded-full mt-8"
            onClick={() => window.location.href = '#get-guide'}
          >
            Get the Guide
          </Button>
        </div>
      </main>
    </div>
  );
};

export default FinancialCoacher;