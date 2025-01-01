import React from 'react';
import { Target, Brain, BarChart3, Lightbulb } from 'lucide-react';
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
              <h3 className="text-xl font-bold text-navy mb-2">Master the Fundamentals</h3>
              <p className="text-gray-600">Discover the core principles of early retirement planning that most people overlook. Learn how to build a solid foundation for your financial future.</p>
              <p className="mt-2 text-sm text-gold font-semibold"><span className="line-through">£49</span> - Now £0</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-goldLight p-6 rounded-lg transform hover:scale-105 transition-all duration-300">
            <div className="flex-shrink-0 w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
              <Brain className="w-6 h-6 text-gold" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy mb-2">Mindset Transformation</h3>
              <p className="text-gray-600">Learn how to develop the mindset of successful early retirees. Break free from limiting beliefs and develop habits that accelerate your path to financial freedom.</p>
              <p className="mt-2 text-sm text-gold font-semibold"><span className="line-through">£47</span> - Now £0</p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex items-start gap-4 bg-goldLight p-6 rounded-lg transform hover:scale-105 transition-all duration-300">
            <div className="flex-shrink-0 w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-gold" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy mb-2">Cashflow Modeling</h3>
              <p className="text-gray-600">Master advanced cashflow modeling techniques to forecast your financial future with confidence. Learn how to stress test your retirement plan against various scenarios.</p>
              <p className="mt-2 text-sm text-gold font-semibold"><span className="line-through">£45</span> - Now £0</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-goldLight p-6 rounded-lg transform hover:scale-105 transition-all duration-300">
            <div className="flex-shrink-0 w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-gold" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy mb-2">Lifestyle Planning</h3>
              <p className="text-gray-600">Design your ideal retirement lifestyle and learn how to align your financial strategy with your life goals. Create a sustainable plan that brings fulfillment.</p>
              <p className="mt-2 text-sm text-gold font-semibold"><span className="line-through">£39</span> - Now £0</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-12">
        <p className="text-2xl font-bold text-navy">Total Value: <span className="line-through text-gold">£180</span> <span className="text-gold">£0</span></p>
        <p className="text-xl text-gray-600 mt-2">Yours Free Today</p>
        <button 
          className="btn-primary mt-6"
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
