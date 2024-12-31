import React from 'react';
import { Clock, DollarSign, BookOpen } from 'lucide-react';

export const WhyEarlyRetirementSection = () => (
  <section className="py-16 md:py-24 bg-goldLight">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
        Why Most People <span className="text-gold">Never Achieve</span> Early Retirement
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
          <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
            <Clock className="w-6 h-6 text-gold" />
          </div>
          <h3 className="text-xl font-bold text-navy mb-3">Wrong Timing</h3>
          <p className="text-gray-600">Most people start planning too late, missing out on the power of compound interest and strategic investments. Starting just 5 years earlier can mean the difference between retiring at 65 vs 55.</p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
              <span>Lost compound interest opportunity</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
              <span>Missed market growth cycles</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
              <span>Reduced investment timeline</span>
            </li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
          <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
            <DollarSign className="w-6 h-6 text-gold" />
          </div>
          <h3 className="text-xl font-bold text-navy mb-3">Poor Strategy</h3>
          <p className="text-gray-600">Traditional retirement advice often leads to overspending or living too frugally. Our guide shows you how to find the perfect balance for sustainable wealth building.</p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
              <span>Inefficient tax strategies</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
              <span>Suboptimal investment choices</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
              <span>Inadequate risk management</span>
            </li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
          <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
            <BookOpen className="w-6 h-6 text-gold" />
          </div>
          <h3 className="text-xl font-bold text-navy mb-3">Limited Knowledge</h3>
          <p className="text-gray-600">Without proper guidance, many make costly mistakes. Our comprehensive guide provides the exact blueprint successful early retirees have used.</p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
              <span>Outdated retirement concepts</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
              <span>Misunderstood market dynamics</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
              <span>Overlooked optimisation opportunities</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);