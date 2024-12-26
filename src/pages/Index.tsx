import React from 'react';
import { Navigation } from '@/components/Navigation';
import { LeadForm } from '@/components/LeadForm';
import { Footer } from '@/components/Footer';
import { Check } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-navy">
                How Much Money Do I Need to Retire?
              </h1>
              
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-playfair">
                  Learn How Retirement Planning <span className="italic">Really</span> Works Before It's Too Late...
                </h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#ff6b6b]" />
                  </div>
                  <p className="text-lg text-gray-700">
                    The conventional approach to retirement planning is fundamentally flawed. It can lead you to underspend and be miserable or overspend and run out of money.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#ff6b6b]" />
                  </div>
                  <p className="text-lg text-gray-700">
                    Get a step-by-step, easy-to-understand plan to calculate your retirement needs with confidence.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#ff6b6b]" />
                  </div>
                  <p className="text-lg text-gray-700">
                    You'll discover how to calculate the amount of money you really need to retire on the first try without software, online calculators, or being a math genius.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#ff6b6b]" />
                  </div>
                  <p className="text-lg text-gray-700">
                    Provides the most empowering solution to figuring out your retirement so you control the outcome.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Book Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy">
                How Much Money Do I Need to Retire?
              </h2>
              
              <h3 className="text-xl md:text-2xl font-playfair">
                Learn How Retirement Planning <span className="italic">Really</span> Works Before It's Too Late...
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#ff6b6b]" />
                  </div>
                  <p className="text-lg text-gray-700">
                    The conventional approach to retirement planning is fundamentally flawed. It can lead you to underspend and be miserable or overspend and run out of money.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#ff6b6b]" />
                  </div>
                  <p className="text-lg text-gray-700">
                    Get a step-by-step, easy-to-understand plan to calculate your retirement needs with confidence.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#ff6b6b]" />
                  </div>
                  <p className="text-lg text-gray-700">
                    You'll discover how to calculate the amount of money you really need to retire on the first try without software, online calculators, or being a math genius.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#ff6b6b]" />
                  </div>
                  <p className="text-lg text-gray-700">
                    Provides the most empowering solution to figuring out your retirement so you control the outcome.
                  </p>
                </div>

                <div className="space-y-4 pt-6">
                  <p className="text-lg font-medium text-gray-700">Available on:</p>
                  <div className="flex flex-wrap gap-6">
                    <img src="/lovable-uploads/19159b30-7bb1-4a53-867f-22e81467ff88.png" alt="Book Cover" className="w-32 object-contain" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <img 
                src="/lovable-uploads/19159b30-7bb1-4a53-867f-22e81467ff88.png" 
                alt="Book Cover" 
                className="w-full max-w-md shadow-xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;