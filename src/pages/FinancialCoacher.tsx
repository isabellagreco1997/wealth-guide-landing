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
          <div className="space-y-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-center md:text-left">
              The <span className="text-[#FF4D4D]">7 money models</span> we use to help High-Earners & Entrepreneurs achieve Financial Independence <span className="text-[#FF4D4D]">fast</span>
            </h1>
            
            <div className="space-y-8">
              <p className="text-xl md:text-2xl text-gray-900">
                The secrets that your Financial Adviser doesn't want you to know.
              </p>
              
              <p className="text-xl md:text-2xl text-gray-900">
                Why High Earners Stay Broke: The Untold Truth About Building Real Wealth.
              </p>
              
              <p className="text-xl md:text-2xl text-gray-900">
                The Secret to Building Wealth Isn't in Your Bank Account — It's in Your Brain.
              </p>
            </div>
            
            <div className="flex justify-center md:justify-start">
              <Button 
                className="bg-[#FF4D4D] hover:bg-[#FF4D4D]/90 text-white px-12 py-6 text-xl rounded-full"
                onClick={() => window.location.href = '#get-guide'}
              >
                Get the Guide
              </Button>
            </div>
          </div>
          
          {/* Right Column - Book Image */}
          <div className="flex justify-center items-center">
            <img 
              src="/lovable-uploads/376e469a-9e03-4dfb-80a8-8371d8851522.png" 
              alt="The 7 Money Models Book" 
              className="max-w-[500px] w-full h-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default FinancialCoacher;