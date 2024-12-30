import React from 'react';
import { Users } from 'lucide-react';

export const SocialProofSection = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
        Join Thousands Who Have Already <span className="text-gold">Started Their Journey</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-gold" />
            </div>
            <div className="ml-4">
              <h4 className="font-bold text-navy">Michael S.</h4>
              <p className="text-sm text-gray-500">Software Engineer</p>
            </div>
          </div>
          <p className="text-gray-600">"This guide completely changed my perspective on retirement planning. I've already saved an additional $50,000 in just 6 months using these strategies. I'm now on track to retire 15 years earlier than I originally planned!"</p>
          <p className="mt-4 text-sm text-gold font-semibold">Retired 15 years early</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-gold" />
            </div>
            <div className="ml-4">
              <h4 className="font-bold text-navy">Sarah L.</h4>
              <p className="text-sm text-gray-500">Business Owner</p>
            </div>
          </div>
          <p className="text-gray-600">"The tax optimization strategies alone saved me over $15,000 in the first year. This guide pays for itself many times over. I never knew retirement planning could be this straightforward and effective."</p>
          <p className="mt-4 text-sm text-gold font-semibold">Saved $15,000+ in taxes</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-gold" />
            </div>
            <div className="ml-4">
              <h4 className="font-bold text-navy">David R.</h4>
              <p className="text-sm text-gray-500">Healthcare Professional</p>
            </div>
          </div>
          <p className="text-gray-600">"Finally, a retirement guide that's both comprehensive and easy to understand. I've doubled my investment returns and cut my projected retirement age from 65 to 52. I feel much more confident about my financial future."</p>
          <p className="mt-4 text-sm text-gold font-semibold">Retirement age reduced by 13 years</p>
        </div>
      </div>
    </div>
  </section>
);