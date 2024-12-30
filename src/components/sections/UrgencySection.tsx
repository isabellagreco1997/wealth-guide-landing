import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { LeadForm } from '../LeadForm';

export const UrgencySection = () => (
  <section className="py-16 md:py-24 bg-navy text-white">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Clock className="w-8 h-8 text-gold" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Don't Wait to Start Your Journey to <span className="text-gold">Financial Freedom</span>
        </h2>
        <p className="text-xl mb-8">
          Every day you delay is another day you're missing out on powerful strategies that could accelerate your path to early retirement.
        </p>
        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="text-left">
              <h3 className="text-xl font-bold mb-4">What You're Missing:</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-gold" />
                  <span>Tax-saving strategies worth $1,000s</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-gold" />
                  <span>Investment optimization techniques</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-gold" />
                  <span>Risk management frameworks</span>
                </li>
              </ul>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold mb-4">What You'll Gain:</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-gold" />
                  <span>Clear path to early retirement</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-gold" />
                  <span>Confidence in your financial future</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-gold" />
                  <span>Peace of mind for your family</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-md mx-auto">
            <LeadForm />
          </div>
        </div>
      </div>
    </div>
  </section>
);