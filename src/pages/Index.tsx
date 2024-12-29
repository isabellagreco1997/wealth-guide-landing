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
      <section className="relative min-h-screen flex items-center pt-32 md:pt-40 bg-white px-4 md:px-0">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-navy leading-tight">
                How Much Money Do I Need to Retire?
              </h1>
              
              <div className="space-y-2">
                <h2 className="text-xl md:text-3xl font-playfair">
                  Learn How Retirement Planning <span className="italic">Really</span> Works Before It's Too Late...
                </h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E5DEFF] flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#9b87f5]" />
                  </div>
                  <p className="text-base md:text-lg text-gray-700">
                    The conventional approach to retirement planning is fundamentally flawed. It can lead you to underspend and be miserable or overspend and run out of money.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E5DEFF] flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#9b87f5]" />
                  </div>
                  <p className="text-base md:text-lg text-gray-700">
                    Get a step-by-step, easy-to-understand plan to calculate your retirement needs with confidence.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E5DEFF] flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#9b87f5]" />
                  </div>
                  <p className="text-base md:text-lg text-gray-700">
                    You'll discover how to calculate the amount of money you really need to retire on the first try without software, online calculators, or being a math genius.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E5DEFF] flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#9b87f5]" />
                  </div>
                  <p className="text-base md:text-lg text-gray-700">
                    Provides the most empowering solution to figuring out your retirement so you control the outcome.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center relative mt-8 md:mt-0">
              <img
                src="/lovable-uploads/3a40dfbc-1371-4b27-afb0-d7e3f48919bf.png"
                alt="Retirement Planning Expert"
                className="w-40 h-40 rounded-full object-cover shadow-xl absolute -top-12 -left-12 z-10 border-4 border-white"
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