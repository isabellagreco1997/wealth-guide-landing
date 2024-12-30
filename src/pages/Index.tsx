import React from 'react';
import { Navigation } from '@/components/Navigation';
import { LeadForm } from '@/components/LeadForm';
import { Footer } from '@/components/Footer';
import { Check, Clock, DollarSign, BookOpen, Target, TrendingUp } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 sm:pt-28 md:pt-24 bg-white px-6 md:px-8 lg:px-12 overflow-x-hidden pb-24 md:pb-32">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="space-y-8 md:space-y-8 text-left">
              <h1 className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 md:mb-0 max-w-full break-words">
                How Anyone Can <span className="text-[#F97316]">Retire Early</span> In 10 Years (Or Less!)
              </h1>

              <div className="flex items-center gap-6 md:gap-8">
                <img
                  src="/lovable-uploads/3a40dfbc-1371-4b27-afb0-d7e3f48919bf.png"
                  alt="Retirement Planning Expert"
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-xl border-4 border-[#F97316]"
                />
                <div className="relative bg-[#FFF4ED] p-4 rounded-lg shadow-md">
                  <div className="absolute left-0 top-1/2 -translate-x-2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-r-[16px] border-r-[#FFF4ED] border-b-8 border-b-transparent"></div>
                  <h2 className="text-lg sm:text-xl md:text-2xl text-[#F97316]">
                    Learn How Retirement Planning <span className="italic">Really</span> Works Before It's Too Late...
                  </h2>
                </div>
              </div>

              {/* Lead Form for mobile only */}
              <div className="md:hidden mt-8 mb-8">
                <LeadForm />
              </div>

              <div className="space-y-8 mb-16 md:mb-24">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FFF4ED] flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <p className="text-base md:text-lg text-gray-700 text-left">
                    The conventional approach to retirement planning is fundamentally flawed. It can lead you to underspend and be miserable or overspend and run out of money.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FFF4ED] flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <p className="text-base md:text-lg text-gray-700 text-left">
                    Get a step-by-step, easy-to-understand plan to calculate your retirement needs with confidence.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FFF4ED] flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <p className="text-base md:text-lg text-gray-700 text-left">
                    You'll discover how to calculate the amount of money you really need to retire on the first try without software, online calculators, or being a math genius.
                  </p>
                </div>

                <div className="hidden md:flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FFF4ED] flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <p className="text-base md:text-lg text-gray-700 text-left">
                    Provides the most empowering solution to figuring out your retirement so you control the outcome.
                  </p>
                </div>
              </div>
            </div>

            {/* Lead Form for desktop only */}
            <div className="hidden md:flex w-full justify-center items-center relative mt-4 md:mt-0">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Why Early Retirement Section */}
      <section className="py-16 md:py-24 bg-goldLight">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
            Why Most People <span className="text-gold">Never Achieve</span> Early Retirement
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Wrong Timing</h3>
              <p className="text-gray-600">Most people start planning too late, missing out on the power of compound interest and strategic investments.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Poor Strategy</h3>
              <p className="text-gray-600">Traditional retirement advice often leads to overspending or living too frugally, neither of which is sustainable.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Limited Knowledge</h3>
              <p className="text-gray-600">Without proper guidance, many make costly mistakes that delay their retirement dreams by years or decades.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
            What You'll Learn in Our <span className="text-gold">Free Guide</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">Calculate Your Magic Number</h3>
                  <p className="text-gray-600">Learn the exact formula to determine how much you need to retire comfortably, tailored to your lifestyle.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">Investment Strategy Blueprint</h3>
                  <p className="text-gray-600">Discover the proven investment approach that can accelerate your path to financial independence.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">Tax Optimization Secrets</h3>
                  <p className="text-gray-600">Learn how to legally minimize your tax burden and keep more of your hard-earned money.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">Risk Management Framework</h3>
                  <p className="text-gray-600">Protect your wealth with our comprehensive approach to managing investment and lifestyle risks.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-navy text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't Wait Another Day to Start Your Journey to <span className="text-gold">Early Retirement</span>
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Join thousands of others who have already discovered the blueprint to achieving financial independence in record time.
          </p>
          <div className="max-w-md mx-auto">
            <LeadForm />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
