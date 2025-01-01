import React from 'react';
import { Calculator, Clock, Brain, Target } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { LeadFormDialog } from '@/components/LeadFormDialog';

export const RetirementMathSection = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
        The <span className="text-gold">Simple Math</span> Behind Early Retirement
      </h2>
      
      <div className="max-w-3xl mx-auto mb-12">
        <p className="text-lg text-gray-700 mb-6">
          Let's break down how anyone can achieve early retirement with a practical example:
        </p>
        
        <div className="bg-goldLight p-8 rounded-lg shadow-lg mb-8">
          <h3 className="text-2xl font-bold text-navy mb-4">Example Scenario:</h3>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <Calculator className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
              <span>Starting with £48,000 annual income (£4,000 monthly)</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
              <span>Saving 70% (£2,800 monthly) at 8% return</span>
            </li>
            <li className="flex items-start gap-3">
              <Target className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
              <span>Result: £515,000 after 10 years</span>
            </li>
            <li className="flex items-start gap-3">
              <Brain className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
              <span>Generating £15,450 annual passive income (3% withdrawal rate)</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-navy mb-4">Key Principles</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
              <span>The critical factor is the percentage saved from earnings</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
              <span>Every 10% increase in spending adds roughly 3+ years to the process</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
              <span>Investment returns matter less with shorter time periods</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-navy mb-4">Why It Works</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
              <span>No special skills or luck required</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
              <span>Based on proven mathematical principles</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
              <span>Repeatable and predictable strategy</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    <div className="text-center mt-12">
      <LeadFormDialog>
        <Button 
          className="bg-gold hover:bg-gold/90 text-white font-semibold px-8 py-6 text-lg"
        >
          Download Your Free Guide Now
        </Button>
      </LeadFormDialog>
    </div>
  </section>
);
