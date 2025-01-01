import React from 'react';
import { XCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { LeadFormDialog } from '@/components/LeadFormDialog';

export const CommonMistakesSection = () => (
  <section className="py-16 md:py-24 bg-goldLight">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
        Common <span className="text-gold">Mistakes</span> That Could Cost You Years of Freedom
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <XCircle className="w-6 h-6 text-red-500" />
          </div>
          <h3 className="text-xl font-bold text-navy mb-3">The "4% Rule" Myth</h3>
          <p className="text-gray-600">Why blindly following this outdated rule could leave you short in retirement. Learn the modern approach to sustainable withdrawals.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <XCircle className="w-6 h-6 text-red-500" />
          </div>
          <h3 className="text-xl font-bold text-navy mb-3">Overestimating Returns</h3>
          <p className="text-gray-600">The dangerous assumption that historical market returns will continue. Discover how to plan for multiple scenarios.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <XCircle className="w-6 h-6 text-red-500" />
          </div>
          <h3 className="text-xl font-bold text-navy mb-3">Ignoring Inflation</h3>
          <p className="text-gray-600">The silent wealth destroyer that most retirement calculators overlook. Learn how to inflation-proof your retirement plan.</p>
        </div>
      </div>
    </div>
    <div className="text-center mt-12">
      <LeadFormDialog>
        <Button 
          className="bg-gold hover:bg-gold/90 text-white font-semibold px-8 py-6 text-lg"
        >
          Avoid Mistakes
        </Button>
      </LeadFormDialog>
    </div>
  </section>
);
