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
      <section className="relative min-h-screen flex items-center pt-32 sm:pt-28 md:pt-24 bg-white px-6 md:px-8 lg:px-12 overflow-x-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="space-y-8 md:space-y-8 text-center md:text-left">
              <h1 className="font-playfair text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 md:mb-0 max-w-full break-words">
                How Much Money Do I Need to Retire?
              </h1>

              <div className="flex items-center gap-6 md:gap-8">
                <img
                  src="/lovable-uploads/3a40dfbc-1371-4b27-afb0-d7e3f48919bf.png"
                  alt="Retirement Planning Expert"
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-xl border-4 border-white"
                />
                <div className="relative bg-[#E5DEFF] p-4 rounded-lg shadow-md">
                  <div className="absolute left-0 top-1/2 -translate-x-2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-r-[16px] border-r-[#E5DEFF] border-b-8 border-b-transparent"></div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-playfair text-navy">
                    Learn How Retirement Planning <span className="italic">Really</span> Works Before It's Too Late...
                  </h2>
                </div>
              </div>

              {/* Lead Form for mobile only */}
              <div className="md:hidden mt-8 mb-8">
                <LeadForm />
              </div>

              <div className="space-y-8">
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

            {/* Lead Form for desktop only */}
            <div className="hidden md:flex w-full justify-center items-center relative mt-4 md:mt-0">
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