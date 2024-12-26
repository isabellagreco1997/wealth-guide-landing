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

              <div className="pt-4">
                <LeadForm />
              </div>
            </div>

            <div className="flex flex-col items-center space-y-8">
              <img 
                src="/lovable-uploads/683834ae-0735-4a1e-b0b2-217d333fb74b.png" 
                alt="How Much Money Do I Need To Retire? Book Cover" 
                className="w-full max-w-md"
              />
              
              <div className="space-y-4">
                <p className="text-xl font-medium text-center">Available on:</p>
                <div className="grid grid-cols-2 gap-4">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-8 object-contain opacity-60" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Kobo_logo.svg" alt="Kobo" className="h-8 object-contain opacity-60" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Barnes_%26_Noble_logo.svg" alt="Barnes & Noble" className="h-8 object-contain opacity-60" />
                  <div className="bg-gray-800 text-white px-4 py-1 rounded flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    iBooks
                  </div>
                </div>
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