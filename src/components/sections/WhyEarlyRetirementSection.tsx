import React from 'react';
import { Clock, DollarSign, BookOpen } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { LeadFormDialog } from '@/components/LeadFormDialog';

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
          <p className="text-gray-600">Most people start planning too late, missing out on the power of early lifestyle optimization and mindset transformation. Starting just 5 years earlier can mean the difference between retiring at 65 vs 55.</p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
              <span>Delayed mindset development</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
              <span>Missed lifestyle optimization</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
              <span>Limited planning window</span>
            </li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
          <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
            <DollarSign className="w-6 h-6 text-gold" />
          </div>
          <h3 className="text-xl font-bold text-navy mb-3">Poor Strategy</h3>
          <p className="text-gray-600">Traditional retirement advice often leads to unbalanced lifestyles. Our guide shows you how to create sustainable cashflow models while maintaining life satisfaction.</p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
              <span>Incomplete cashflow modeling</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
              <span>Inadequate stress testing</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
              <span>Poor lifestyle planning</span>
            </li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
          <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
            <BookOpen className="w-6 h-6 text-gold" />
          </div>
          <h3 className="text-xl font-bold text-navy mb-3">Limited Knowledge</h3>
          <p className="text-gray-600">Without proper guidance, many struggle with mindset transformation. Our comprehensive guide provides the exact blueprint successful early retirees have used.</p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
              <span>Outdated mindset frameworks</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
              <span>Misunderstood fundamentals</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
              <span>Overlooked lifestyle opportunities</span>
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
            Get Free Guide
          </Button>
        </LeadFormDialog>
      </div>
    </div>
  </section>
);
