import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto prose prose-slate">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-navy mb-8">Privacy Policy</h1>
          
          <p className="text-lg mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-navy mb-4">Introduction</h2>
            <p>At Retirement Scientist, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our retirement planning services.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-navy mb-4">Information We Collect</h2>
            <p>We collect information that you voluntarily provide to us when you:</p>
            <ul>
              <li>Fill out forms on our website</li>
              <li>Create an account</li>
              <li>Subscribe to our newsletter</li>
              <li>Request retirement planning assistance</li>
              <li>Contact us directly</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-navy mb-4">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide personalized retirement planning advice</li>
              <li>Communicate with you about our services</li>
              <li>Send you important updates and notifications</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-navy mb-4">Data Security</h2>
            <p>We implement appropriate technical and organizational security measures to protect your personal information. However, please note that no method of transmission over the internet is 100% secure.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-navy mb-4">Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at:</p>
            <p>Email: privacy@retirementscientist.com</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;