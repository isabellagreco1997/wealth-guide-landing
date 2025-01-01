import React from 'react';
import { Check } from 'lucide-react';
import { LeadForm } from '../LeadForm';

export const FinalCTASection = () => (
  <section className="py-16 md:py-24 bg-navy text-white">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Don't Wait Another Day to Start Your Journey to <span className="text-gold">Early Retirement</span>
      </h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Join thousands of others who have already discovered the blueprint to achieving financial independence in record time.
      </p>
      <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold mb-6">Get Your Free Early Retirement Guide Today</h3>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-gold" />
              <span>Master the fundamentals</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-gold" />
              <span>Transform your mindset</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-gold" />
              <span>Advanced cashflow modeling</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-gold" />
              <span>Lifestyle planning blueprint</span>
            </div>
          </div>
        </div>
        <div className="text-center mb-8">
          <p className="text-2xl font-bold">Total Value: <span className="line-through text-gold">£180</span> <span className="text-gold">£0</span></p>
          <p className="text-xl mt-2">Yours Free Today</p>
          <p className="text-sm text-gold mt-4">Limited Time Offer - Get It Now Before It's Gone!</p>
        </div>
        <div className="max-w-md mx-auto">
          <LeadForm />
        </div>
      </div>
    </div>
  </section>
);