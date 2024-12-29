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
      <section className="relative min-h-screen flex items-center pt-32 md:pt-5 bg-white px-4 md:px-0">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-4 md:gap-12 items-center">
            <div className="space-y-8 md:space-y-8 text-center md:text-left">
              <h1 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 md:mb-0">
                How Much Money Do I Need to Retire?
              </h1>
              
              {/* Portrait image for mobile only */}
              <div className="block md:hidden w-full flex justify-center">
                <img
                  src="/lovable-uploads/3a40dfbc-1371-4b27-afb0-d7e3f48919bf.png"
                  alt="Retirement Planning Expert"
                  className="w-32 h-32 rounded-full object-cover shadow-xl border-4 border-white"
                />
              </div>
              
              <div className="space-y-2 mt-8 md:mt-0">
                <h2 className="text-xl md:text-3xl font-playfair">
                  Learn How Retirement Planning <span className="italic">Really</span> Works Before It's Too Late...
                </h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E5DEFF] flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#9b87f5]" />
                  </div>
                  <p className="text-base md:text-lg text-gray-700 text-left">
                    The conventional approach to retirement planning is fundamentally flawed. It can lead you to underspend and be miserable or overspend and run out of money.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E5DEFF] flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#9b87f5]" />
                  </div>
                  <p className="text-base md:text-lg text-gray-700 text-left">
                    Get a step-by-step, easy-to-understand plan to calculate your retirement needs with confidence.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E5DEFF] flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#9b87f5]" />
                  </div>
                  <p className="text-base md:text-lg text-gray-700 text-left">
                    You'll discover how to calculate the amount of money you really need to retire on the first try without software, online calculators, or being a math genius.
                  </p>
                </div>

                <div className="hidden md:flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E5DEFF] flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#9b87f5]" />
                  </div>
                  <p className="text-base md:text-lg text-gray-700 text-left">
                    Provides the most empowering solution to figuring out your retirement so you control the outcome.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center items-center relative mt-4 md:mt-0">
              <div className="relative w-full">
                {/* Portrait image for desktop only */}
                <img
                  src="/lovable-uploads/3a40dfbc-1371-4b27-afb0-d7e3f48919bf.png"
                  alt="Retirement Planning Expert"
                  className="hidden md:block absolute -top-16 -left-4 w-32 h-32 rounded-full object-cover shadow-xl border-4 border-white z-10"
                />
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;