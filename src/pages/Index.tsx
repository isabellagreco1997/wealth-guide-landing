import React from 'react';
import { Navigation } from '@/components/Navigation';
import { LeadForm } from '@/components/LeadForm';
import { Footer } from '@/components/Footer';
import { TestTube, Microscope, Binary } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
            alt="Scientific Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Retirement Planning Science: Four Key Steps to Secure a Better Retirement in the UK
              </h1>
              <p className="text-xl mb-8">
                Download our research-backed 2025 Retirement Analysis Guide.
              </p>
              <p className="text-lg font-playfair italic text-[#9b87f5]">
                Empirical Methods for Wealth Preservation
              </p>
            </div>
            
            <div className="flex justify-center md:justify-end">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Trust Signals */}
      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <TestTube className="w-12 h-12 text-[#9b87f5] mx-auto mb-4" />
              <h3 className="font-playfair text-xl mb-2 text-white">Research-Based</h3>
              <p className="text-gray-300">Methodically tested retirement strategies</p>
            </div>
            <div className="p-6">
              <Microscope className="w-12 h-12 text-[#9b87f5] mx-auto mb-4" />
              <h3 className="font-playfair text-xl mb-2 text-white">Data Analysis</h3>
              <p className="text-gray-300">25+ years of market research</p>
            </div>
            <div className="p-6">
              <Binary className="w-12 h-12 text-[#9b87f5] mx-auto mb-4" />
              <h3 className="font-playfair text-xl mb-2 text-white">Algorithmic Precision</h3>
              <p className="text-gray-300">Advanced planning algorithms</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;