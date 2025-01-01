import React from 'react';
import { BookOpen, Target, Brain, BarChart3 } from 'lucide-react';

export const GuideApproachSection = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
        A <span className="text-gold">Revolutionary Approach</span> to Early Retirement
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div className="bg-goldLight p-6 rounded-lg transform hover:scale-105 transition-all duration-300">
          <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mb-4">
            <BookOpen className="w-6 h-6 text-gold" />
          </div>
          <h3 className="text-xl font-bold text-navy mb-3">Beyond Traditional Planning</h3>
          <p className="text-gray-600">Discover why conventional retirement planning falls short and how our approach changes everything.</p>
        </div>
        
        <div className="bg-goldLight p-6 rounded-lg transform hover:scale-105 transition-all duration-300">
          <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mb-4">
            <Target className="w-6 h-6 text-gold" />
          </div>
          <h3 className="text-xl font-bold text-navy mb-3">Proven Framework</h3>
          <p className="text-gray-600">Follow our step-by-step framework that has helped thousands achieve early retirement successfully.</p>
        </div>
        
        <div className="bg-goldLight p-6 rounded-lg transform hover:scale-105 transition-all duration-300">
          <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mb-4">
            <Brain className="w-6 h-6 text-gold" />
          </div>
          <h3 className="text-xl font-bold text-navy mb-3">Mindset Transformation</h3>
          <p className="text-gray-600">Learn the psychological principles that separate early retirees from those who work into their 70s.</p>
        </div>
        
        <div className="bg-goldLight p-6 rounded-lg transform hover:scale-105 transition-all duration-300">
          <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mb-4">
            <BarChart3 className="w-6 h-6 text-gold" />
          </div>
          <h3 className="text-xl font-bold text-navy mb-3">Advanced Planning Tools</h3>
          <p className="text-gray-600">Access sophisticated cashflow modeling and lifestyle planning tools simplified for everyone.</p>
        </div>
      </div>
    </div>
  </section>
);