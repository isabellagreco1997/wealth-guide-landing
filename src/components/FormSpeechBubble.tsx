import React from 'react';

export const FormSpeechBubble = () => {
  return (
    <div className="relative">
      <div className="relative bg-[#FFF4ED] p-4 rounded-[20px] mb-6 text-center w-full max-w-sm shadow-lg transform hover:scale-105 transition-transform duration-200 before:content-[''] before:absolute before:bottom-0 before:left-[48px] before:w-3 before:h-3 before:bg-[#FFF4ED] before:transform before:translate-y-1/2 before:rotate-45">
        <p className="text-base sm:text-lg md:text-xl font-playfair text-[#F97316]">
          Enter your Name, Email Address, and Mobile, and we'll send you your <strong className="text-[#F97316]">free guide</strong>.
        </p>
      </div>
    </div>
  );
};