import React from 'react';

export const FormSpeechBubble = () => (
  <div className="relative bg-[#E5DEFF] p-6 rounded-[20px] mb-8 text-center w-full max-w-md shadow-lg transform hover:scale-105 transition-transform duration-200 before:content-[''] before:absolute before:bottom-0 before:left-[48px] before:w-4 before:h-4 before:bg-[#E5DEFF] before:transform before:translate-y-1/2 before:rotate-45">
    <p className="text-sm md:text-base font-playfair text-navy">
      Enter your Name, Email Address, and Mobile, and we'll send you your <strong>free guide</strong>.
    </p>
  </div>
);