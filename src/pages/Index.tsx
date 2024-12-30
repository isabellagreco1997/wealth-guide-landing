import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { WhyEarlyRetirementSection } from '@/components/sections/WhyEarlyRetirementSection';
import { ValuePropositionSection } from '@/components/sections/ValuePropositionSection';
import { SocialProofSection } from '@/components/sections/SocialProofSection';
import { ComparisonSection } from '@/components/sections/ComparisonSection';
import { GuaranteeSection } from '@/components/sections/GuaranteeSection';
import { UrgencySection } from '@/components/sections/UrgencySection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <HeroSection />
      <WhyEarlyRetirementSection />
      <ValuePropositionSection />
      <ComparisonSection />
      <SocialProofSection />
      <GuaranteeSection />
      <UrgencySection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;