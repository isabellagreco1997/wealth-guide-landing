import React from 'react';
import { Target, TrendingUp, Shield, Lightbulb } from 'lucide-react';
import { LeadForm } from '../LeadForm';

export const ValuePropositionSection = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
        What You'll Learn in Our <span className="text-gold">Free Guide</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="space-y-6">
          <div className="flex items-start gap-4 bg-goldLight p-6 rounded-lg transform hover:scale-105 transition-all duration-300">
            <div className="flex-shrink-0 w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
              <Target className="w-6 h-6 text-gold" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy mb-2">Calculate Your Magic Number</h3>
              <p className="text-gray-600">Learn the exact formula to determine how much you need to retire comfortably, tailored to your lifestyle and goals. Our step-by-step process makes it simple.</p>
              <p className="mt-2 text-sm text-gold font-semibold">Value: £49 - Included Free</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-goldLight p-6 rounded-lg transform hover:scale-105 transition-all duration-300">
            <div className="flex-shrink-0 w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-gold" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy mb-2">Investment Strategy Blueprint</h3>
              <p className="text-gray-600">Discover the proven investment approach that can accelerate your path to financial independence, including asset allocation and risk management strategies.</p>
              <p className="mt-2 text-sm text-gold font-semibold">Value: £47 - Included Free</p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex items-start gap-4 bg-goldLight p-6 rounded-lg transform hover:scale-105 transition-all duration-300">
            <div className="flex-shrink-0 w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-gold" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy mb-2">Tax Optimisation Secrets</h3>
              <p className="text-gray-600">Learn advanced tax strategies used by early retirees to legally minimize their tax burden and keep more of their hard-earned money working for them.</p>
              <p className="mt-2 text-sm text-gold font-semibold">Value: £45 - Included Free</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-goldLight p-6 rounded-lg transform hover:scale-105 transition-all duration-300">
            <div className="flex-shrink-0 w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-gold" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy mb-2">Risk Management Framework</h3>
              <p className="text-gray-600">Master the art of protecting your wealth with our comprehensive approach to managing investment and lifestyle risks throughout retirement.</p>
              <p className="mt-2 text-sm text-gold font-semibold">Value: £39 - Included Free</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-12">
        <p className="text-2xl font-bold text-navy">Total Value: <span className="text-gold">£180</span></p>
        <p className="text-xl text-gray-600 mt-2">Yours Free Today</p>
        <button 
          className="mt-6 bg-[#F97316] text-white px-8 py-3 rounded-lg hover:bg-[#F97316]/90 transition-all duration-200 font-semibold transform hover:scale-105"
          onClick={() => {
            const formElement = document.querySelector('.lead-form');
            if (formElement) {
              formElement.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Get the Guide
        </button>
      </div>
    </div>
  </section>
);