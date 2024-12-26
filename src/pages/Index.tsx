import React from 'react';
import { Navigation } from '@/components/Navigation';
import { LeadForm } from '@/components/LeadForm';
import { Footer } from '@/components/Footer';
import { Award, Building2, Shield } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
            alt="London Skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Unlock the Secrets to High Net Worth Success in the UK
              </h1>
              <p className="text-xl mb-8">
                Download our exclusive 2025 UK High Net Worth Guide today.
              </p>
              <p className="text-lg font-playfair italic">
                Your Exclusive Guide to Wealth in 2025
              </p>
            </div>
            
            <div className="flex justify-center md:justify-end">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Trust Signals */}
      <section className="py-16 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <Award className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="font-playfair text-xl mb-2">Award Winning</h3>
              <p className="text-gray-600">Recognized excellence in wealth management</p>
            </div>
            <div className="p-6">
              <Building2 className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="font-playfair text-xl mb-2">Industry Leading</h3>
              <p className="text-gray-600">25+ years of market expertise</p>
            </div>
            <div className="p-6">
              <Shield className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="font-playfair text-xl mb-2">Trusted Partner</h3>
              <p className="text-gray-600">Secure and confidential service</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;