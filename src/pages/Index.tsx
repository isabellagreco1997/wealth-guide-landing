import React from 'react';
import { Navigation } from '@/components/Navigation';
import { LeadForm } from '@/components/LeadForm';
import { Footer } from '@/components/Footer';
import { Check, Clock, DollarSign, BookOpen, Target, TrendingUp, Shield, Lightbulb, Calculator, PiggyBank, LineChart, Users } from 'lucide-react';

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
              <p className="text-gray-600">Most people start planning too late, missing out on the power of compound interest and strategic investments. The earlier you start, the less you need to save each month.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Poor Strategy</h3>
              <p className="text-gray-600">Traditional retirement advice often leads to overspending or living too frugally. Our guide shows you how to find the perfect balance for sustainable wealth building.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Limited Knowledge</h3>
              <p className="text-gray-600">Without proper guidance, many make costly mistakes. Our comprehensive guide provides the exact blueprint successful early retirees have used.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
            Common <span className="text-gold">Retirement Planning</span> Mistakes
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <PiggyBank className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy mb-2">Underestimating Expenses</h3>
                <p className="text-gray-600">Many people forget to account for healthcare costs, inflation, and lifestyle changes in retirement.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <Calculator className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy mb-2">Wrong Calculations</h3>
                <p className="text-gray-600">Using oversimplified retirement calculators that don't account for your unique situation.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <LineChart className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy mb-2">Poor Investment Strategy</h3>
                <p className="text-gray-600">Failing to diversify investments or taking too much/too little risk with retirement savings.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <Users className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy mb-2">Following Bad Advice</h3>
                <p className="text-gray-600">Taking retirement advice from unqualified sources or following outdated strategies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-16 md:py-24 bg-navy/5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
            What You'll Learn in Our <span className="text-gold">Free Guide</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">Calculate Your Magic Number</h3>
                  <p className="text-gray-600">Learn the exact formula to determine how much you need to retire comfortably, tailored to your lifestyle and goals. Our step-by-step process makes it simple.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">Investment Strategy Blueprint</h3>
                  <p className="text-gray-600">Discover the proven investment approach that can accelerate your path to financial independence, including asset allocation and risk management strategies.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">Tax Optimization Secrets</h3>
                  <p className="text-gray-600">Learn advanced tax strategies used by early retirees to legally minimize their tax burden and keep more of their hard-earned money working for them.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">Risk Management Framework</h3>
                  <p className="text-gray-600">Master the art of protecting your wealth with our comprehensive approach to managing investment and lifestyle risks throughout retirement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
            Join Thousands Who Have Already <span className="text-gold">Started Their Journey</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-gold" />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-navy">Michael S.</h4>
                  <p className="text-sm text-gray-500">Software Engineer</p>
                </div>
              </div>
              <p className="text-gray-600">"This guide completely changed my perspective on retirement planning. I'm now on track to retire 15 years earlier than I originally planned!"</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-gold" />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-navy">Sarah L.</h4>
                  <p className="text-sm text-gray-500">Business Owner</p>
                </div>
              </div>
              <p className="text-gray-600">"The tax optimization strategies alone saved me thousands. This guide pays for itself many times over."</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-gold" />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-navy">David R.</h4>
                  <p className="text-sm text-gray-500">Healthcare Professional</p>
                </div>
              </div>
              <p className="text-gray-600">"Finally, a retirement guide that's both comprehensive and easy to understand. I feel much more confident about my financial future."</p>
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
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of others who have already discovered the blueprint to achieving financial independence in record time.
          </p>
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Get Your Free Early Retirement Guide Today</h3>
            <ul className="text-left space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-gold" />
                <span>Step-by-step retirement calculation formula</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-gold" />
                <span>Proven investment strategies for accelerated wealth building</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-gold" />
                <span>Tax optimization techniques to keep more of your money</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-gold" />
                <span>Risk management framework for lasting wealth</span>
              </li>
            </ul>
            <div className="max-w-md mx-auto">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;