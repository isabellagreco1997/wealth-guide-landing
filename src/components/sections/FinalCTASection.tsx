import React from 'react';
import { Check } from 'lucide-react';
import { LeadForm } from '../LeadForm';

export const FinalCTASection = () => (
  <section className="py-12 md:py-24 bg-navy text-white">
    <div className="container mx-auto px-4 md:px-6 text-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
        Don't Wait Another Day to Start Your Journey to <span className="text-gold">Early Retirement</span>
      </h2>
      <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
        Join thousands of others who have already discovered the blueprint to achieving financial independence in record time.
      </p>
      <div className="bg-white/5 backdrop-blur-sm p-4 md:p-8 rounded-lg max-w-2xl mx-auto">
        <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Get Your Free Early Retirement Guide Today</h3>
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8">
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-center gap-2 md:gap-3">
              <Check className="w-4 h-4 md:w-5 md:h-5 text-gold" />
              <span className="text-sm md:text-base">Master the fundamentals</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <Check className="w-4 h-4 md:w-5 md:h-5 text-gold" />
              <span className="text-sm md:text-base">Transform your mindset</span>
            </div>
          </div>
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-center gap-2 md:gap-3">
              <Check className="w-4 h-4 md:w-5 md:h-5 text-gold" />
              <span className="text-sm md:text-base">Advanced cashflow modeling</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <Check className="w-4 h-4 md:w-5 md:h-5 text-gold" />
              <span className="text-sm md:text-base">Lifestyle planning blueprint</span>
            </div>
          </div>
        </div>
        <div className="text-center mb-6 md:mb-8">
          <p className="text-xl md:text-2xl font-bold">Total Value: <span className="line-through text-gold">£180</span> <span className="text-gold">£0</span></p>
          <p className="text-lg md:text-xl mt-2">Yours Free Today</p>
          <p className="text-xs md:text-sm text-gold mt-3 md:mt-4">Limited Time Offer - Get It Now Before It's Gone!</p>
        </div>
        <div className="max-w-md mx-auto">
          <LeadForm />
        </div>
      </div>
    </div>
  </section>
);