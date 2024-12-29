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
      <section className="relative min-h-screen flex items-center pt-5 bg-white">
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

            <div className="flex justify-center items-center relative">
              <img
                src="/lovable-uploads/3a40dfbc-1371-4b27-afb0-d7e3f48919bf.png"
                alt="Retirement Planning Expert"
                className="w-32 h-32 rounded-full object-cover shadow-lg absolute -top-16 -left-16 z-10"
              />
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;