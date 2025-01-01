import React from 'react';
import { LeadForm } from '../LeadForm';
import { Check } from 'lucide-react';

export const HeroSection = () => (
  <section className="relative min-h-screen flex items-center pt-32 sm:pt-28 md:pt-24 bg-white px-6 md:px-8 lg:px-12 overflow-x-hidden pb-24 md:pb-32">
    <div className="container mx-auto max-w-7xl">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
        <div className="space-y-8 md:space-y-8 text-center md:text-left">
          <div className="space-y-4">
            <p className="text-[#F97316] font-semibold tracking-wide uppercase text-sm md:text-base">
              Retire Decades Ahead of Schedule
            </p>
            <h1 className="text-xl sm:text-3xl md:text-3xl lg:text-4xl font-normal text-navy mb-6 md:mb-0 max-w-full break-words leading-tight">
              Free Retirement Roadmap: How to <span className="font-bold">Retire Early</span> in <span className="font-bold">10 Years</span> or <span className="font-bold">Less</span>. (Without Extreme Frugality or Taking Unnecessary Risks)
            </h1>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 justify-center md:justify-start">
            <img
              src="/lovable-uploads/3a40dfbc-1371-4b27-afb0-d7e3f48919bf.png"
              alt="Retirement Planning Expert"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-xl border-4 border-[#F97316]"
            />
            <div className="relative bg-[#FFF4ED] p-4 rounded-lg shadow-md text-center md:text-left">
              <h2 className="text-lg sm:text-xl md:text-2xl text-[#F97316]">
                Learn How Retirement Planning <span className="italic">Really</span> Works Before It's Too Late...
              </h2>
            </div>
          </div>

          <div className="md:hidden mt-8 mb-8">
            <LeadForm />
          </div>

          <div className="space-y-8 mb-16 md:mb-24">
            {[
              "The conventional approach to retirement planning is fundamentally flawed. It can lead you to underspend and be miserable or overspend and run out of money.",
              "Get a step-by-step, easy-to-understand plan to calculate your retirement needs with confidence.",
              "You'll discover how to calculate the amount of money you really need to retire on the first try without software, online calculators, or being a math genius.",
              "Provides the most empowering solution to figuring out your retirement so you control the outcome."
            ].map((text, index) => (
              <div key={index} className="flex items-start gap-4 text-center md:text-left">
                <div className="hidden md:flex flex-shrink-0 w-8 h-8 rounded-full bg-[#FFF4ED] items-center justify-center">
                  <Check className="w-5 h-5 text-[#F97316]" />
                </div>
                <p className="text-base md:text-lg text-gray-700">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:flex w-full justify-center items-center relative mt-4 md:mt-0">
          <LeadForm />
        </div>
      </div>
    </div>
  </section>
);