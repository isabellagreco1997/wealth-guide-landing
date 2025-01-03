import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { WhyEarlyRetirementSection } from '@/components/sections/WhyEarlyRetirementSection';
import { GuideApproachSection } from '@/components/sections/GuideApproachSection';
import { GuideBenefitsSection } from '@/components/sections/GuideBenefitsSection';
import { ValuePropositionSection } from '@/components/sections/ValuePropositionSection';
import { SocialProofSection } from '@/components/sections/SocialProofSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';
import { CommonMistakesSection } from '@/components/sections/CommonMistakesSection';
import { RetirementMathSection } from '@/components/sections/RetirementMathSection';
import { FAQSection } from '@/components/sections/FAQSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <HeroSection />
      <WhyEarlyRetirementSection />
      <RetirementMathSection />
      <GuideApproachSection />
      <CommonMistakesSection />
      <GuideBenefitsSection />
      <ValuePropositionSection />
      <SocialProofSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;