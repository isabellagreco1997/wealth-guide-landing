import React from 'react';
import { Shield, Clock, ArrowRight } from 'lucide-react';

export const GuaranteeSection = () => (
  <section className="py-16 md:py-24 bg-goldLight">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
        Try It <span className="text-gold">Risk-Free</span> Today
      </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
          <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
            <Shield className="w-6 h-6 text-gold" />
          </div>
          <h3 className="text-xl font-bold text-navy mb-4">100% Money-Back Guarantee</h3>
          <p className="text-gray-600">
            If you're not completely satisfied with the strategies and insights provided in this guide, 
            we'll refund every penny. No questions asked.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
          <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
            <Clock className="w-6 h-6 text-gold" />
          </div>
          <h3 className="text-xl font-bold text-navy mb-4">Limited Time Offer</h3>
          <p className="text-gray-600">
            This comprehensive guide is currently available for free, but this offer won't last forever. 
            Secure your copy now before this opportunity expires.
          </p>
        </div>
      </div>
    </div>
  </section>
);