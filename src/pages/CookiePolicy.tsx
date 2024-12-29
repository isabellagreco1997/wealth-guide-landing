import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-32 md:py-20">
        <div className="prose max-w-none">
          <h1 className="font-playfair text-4xl md:text-5xl mb-8">Cookie Policy</h1>
          
          <section className="mb-8">
            <h2 className="font-playfair text-2xl mb-4">What Are Cookies</h2>
            <p>Cookies are small text files that are placed on your computer by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.</p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl mb-4">How We Use Cookies</h2>
            <p>We use cookies for the following purposes:</p>
            <ul className="list-disc pl-6">
              <li>Essential cookies: Required for the operation of our website</li>
              <li>Analytics cookies: To analyze how visitors use our website</li>
              <li>Preference cookies: To remember your preferences and settings</li>
              <li>Marketing cookies: To help us deliver more relevant advertisements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl mb-4">Managing Cookies</h2>
            <p>Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies, or to alert you when cookies are being sent. However, please note that disabling cookies may affect the functionality of this and many other websites that you visit.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;