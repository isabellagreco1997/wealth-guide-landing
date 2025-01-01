import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

export const CalculatorSection = () => {
  const [currentSavings, setCurrentSavings] = useState<number>(0);
  const [monthlyIncome, setMonthlyIncome] = useState<number>(0);

  const calculateYearsToRetirement = () => {
    if (!monthlyIncome || !currentSavings) return "Calculate Now";
    const roughEstimate = Math.max(25 - (currentSavings / (monthlyIncome * 12)), 0);
    return roughEstimate > 0 ? `~${Math.ceil(roughEstimate)} years` : "Ready now!";
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
          Quick Retirement <span className="text-gold">Calculator</span>
        </h2>
        <div className="max-w-2xl mx-auto bg-goldLight p-8 rounded-lg shadow-xl">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center">
              <Calculator className="w-8 h-8 text-gold" />
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <label className="block text-navy font-semibold mb-2">Current Savings (£)</label>
              <input
                type="number"
                value={currentSavings}
                onChange={(e) => setCurrentSavings(Number(e.target.value))}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                placeholder="Enter your current savings"
              />
            </div>
            <div>
              <label className="block text-navy font-semibold mb-2">Monthly Income (£)</label>
              <input
                type="number"
                value={monthlyIncome}
                onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                placeholder="Enter your monthly income"
              />
            </div>
            <div className="text-center mt-8">
              <p className="text-lg font-semibold text-navy">Estimated Time to Early Retirement:</p>
              <p className="text-3xl font-bold text-gold mt-2">{calculateYearsToRetirement()}</p>
              <p className="text-sm text-gray-600 mt-4">
                *This is a simplified calculation. Download our guide for a detailed personalised analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};