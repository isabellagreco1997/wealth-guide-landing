import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

const TermsOfUse = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-32 md:py-20">
        <div className="prose max-w-none">
          <h1 className="font-playfair text-4xl md:text-5xl mb-8">Terms of Use</h1>
          
          <section className="mb-8">
            <h2 className="font-playfair text-2xl mb-4">1. Acceptance of Terms</h2>
            <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl mb-4">2. Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on Retirement Scientist's website for personal, non-commercial transitory viewing only.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl mb-4">3. Disclaimer</h2>
            <p>The materials on Retirement Scientist's website are provided on an 'as is' basis. Retirement Scientist makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl mb-4">4. Limitations</h2>
            <p>In no event shall Retirement Scientist or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Retirement Scientist's website.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl mb-4">5. Revisions and Errata</h2>
            <p>The materials appearing on Retirement Scientist's website could include technical, typographical, or photographic errors. Retirement Scientist does not warrant that any of the materials on its website are accurate, complete or current.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfUse;