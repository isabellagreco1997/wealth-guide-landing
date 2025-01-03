import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';

const FinancialCoacher = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
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
              className="bg-[#FF4D4D] hover:bg-[#FF4D4D]/90 text-white px-8 py-6 text-xl rounded-full"
              onClick={() => window.location.href = '#get-guide'}
            >
              Get the Guide
            </Button>
          </div>
          
          {/* Right Column - Book Image */}
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/376e469a-9e03-4dfb-80a8-8371d8851522.png" 
              alt="The 7 Money Models Book" 
              className="max-w-[400px] w-full h-auto shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default FinancialCoacher;