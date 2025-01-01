import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

const Success = () => {
  React.useEffect(() => {
    // Initialize Calendly widget
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Your Guide is on its Way! 🎉
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Check your email for your Early Retirement Guide. While you're here, why not take the next step?
            </p>
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h2 className="text-2xl font-bold text-navy mb-4">
                Book Your Free Strategy Session
              </h2>
              <p className="text-gray-600 mb-8">
                Let's discuss your retirement goals and create a personalized plan for your journey to financial freedom.
              </p>
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/YOUR_CALENDLY_LINK"
                style={{ minWidth: '320px', height: '700px' }}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Success;