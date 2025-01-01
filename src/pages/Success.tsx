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

  // Use window.matchMedia to handle responsive height
  const [widgetHeight, setWidgetHeight] = React.useState('600px');

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    
    const handleResize = (e: MediaQueryListEvent | MediaQueryList) => {
      setWidgetHeight(e.matches ? '700px' : '600px');
    };

    // Initial check
    handleResize(mediaQuery);

    // Add listener for changes
    mediaQuery.addListener(handleResize);

    return () => mediaQuery.removeListener(handleResize);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-offwhite">
      <Navigation />
      <main className="flex-grow pt-20 pb-8 md:pt-28 md:pb-16 lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-4 mb-8 md:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy font-playfair">
                Your Guide is on its Way! 🎉
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                Check your email for your Early Retirement Guide. While you're here, why not take the next step?
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl mx-4 sm:mx-0 overflow-hidden">
              <div className="p-6 sm:p-8 md:p-10">
                <div className="space-y-4 mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-navy font-playfair">
                    Book Your Free Strategy Session
                  </h2>
                  <p className="text-gray-600 text-base sm:text-lg">
                    Let's discuss your retirement goals and create a personalized plan for your journey to financial freedom.
                  </p>
                </div>
                
                <div 
                  className="calendly-inline-widget rounded-lg overflow-hidden"
                  data-url="https://calendly.com/YOUR_CALENDLY_LINK"
                  style={{ 
                    minWidth: '280px',
                    height: widgetHeight,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Success;