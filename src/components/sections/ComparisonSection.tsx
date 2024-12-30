import React from 'react';
import { Check, X } from 'lucide-react';

export const ComparisonSection = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
        Why Our Guide is <span className="text-gold">Different</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-navy mb-6">Traditional Retirement Planning</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <X className="w-5 h-5 text-red-500" />
              <span className="text-gray-600">Generic, one-size-fits-all advice</span>
            </div>
            <div className="flex items-center gap-3">
              <X className="w-5 h-5 text-red-500" />
              <span className="text-gray-600">Complex financial jargon</span>
            </div>
            <div className="flex items-center gap-3">
              <X className="w-5 h-5 text-red-500" />
              <span className="text-gray-600">Outdated investment strategies</span>
            </div>
            <div className="flex items-center gap-3">
              <X className="w-5 h-5 text-red-500" />
              <span className="text-gray-600">No clear action steps</span>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-navy mb-6">Our Early Retirement Guide</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-gold" />
              <span className="text-gray-600">Personalized strategies for your situation</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-gold" />
              <span className="text-gray-600">Simple, easy-to-understand language</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-gold" />
              <span className="text-gray-600">Modern investment techniques</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-gold" />
              <span className="text-gray-600">Step-by-step implementation plan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);