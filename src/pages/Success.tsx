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
      <main className="flex-grow py-8 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4 md:mb-6">
              Your Guide is on its Way! 🎉
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 md:mb-12 px-4">
              Check your email for your Early Retirement Guide. While you're here, why not take the next step?
            </p>
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-xl mx-4 sm:mx-0">
              <h2 className="text-xl sm:text-2xl font-bold text-navy mb-3 md:mb-4">
                Book Your Free Strategy Session
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 md:mb-8">
                Let's discuss your retirement goals and create a personalized plan for your journey to financial freedom.
              </p>
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/YOUR_CALENDLY_LINK"
                style={{ 
                  minWidth: '280px',
                  height: '600px',
                  '@media (min-width: 768px)': {
                    height: '700px'
                  }
                }}
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