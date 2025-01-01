import React from 'react';
import { Check } from 'lucide-react';
import { Button } from "@/components/ui/button";

export const GuideBenefitsSection = () => (
  <section className="py-16 md:py-24 bg-navy text-white">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Why This Guide Is <span className="text-gold">Different</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center mt-1">
              <Check className="w-5 h-5 text-gold" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Practical Over Theory</h3>
              <p className="text-gray-300">No complex jargon or theoretical concepts. Every strategy is explained with real-world examples and actionable steps.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center mt-1">
              <Check className="w-5 h-5 text-gold" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Lifestyle-First Approach</h3>
              <p className="text-gray-300">Learn how to maintain and even improve your quality of life while accelerating your path to early retirement.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center mt-1">
              <Check className="w-5 h-5 text-gold" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Proven Success Stories</h3>
              <p className="text-gray-300">Based on real case studies of people who achieved early retirement using these exact principles.</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center mt-1">
              <Check className="w-5 h-5 text-gold" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Personalised Planning</h3>
              <p className="text-gray-300">Learn how to adapt the framework to your unique situation, goals, and timeline.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="text-center mt-12">
      <Button 
        className="bg-gold hover:bg-gold/90 text-white font-semibold px-8 py-6 text-lg"
        onClick={() => {
          const formElement = document.querySelector('.lead-form');
          if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        Get Your Free Guide Today
      </Button>
    </div>
  </section>
);
