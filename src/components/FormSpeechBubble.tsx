import React from 'react';

export const FormSpeechBubble = () => {
  return (
    <div className="relative">
      <div className="relative bg-[#FFF4ED] p-4 rounded-[20px] mb-6 text-center w-full max-w-sm shadow-lg transform hover:scale-105 transition-transform duration-200 before:content-[''] before:absolute before:bottom-0 before:left-[48px] before:w-3 before:h-3 before:bg-[#FFF4ED] before:transform before:translate-y-1/2 before:rotate-45">
        <p className="text-sm sm:text-base md:text-lg font-bold text-[#F97316]">
          Enter your Name, Email Address, and Mobile, and we'll send you your <strong className="text-[#F97316]">free guide</strong>.
        </p>
      </div>
      
      {/* Hand-drawn arrow SVG */}
      <svg
        width="80"
        height="60"
        viewBox="0 0 80 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -bottom-8 left-[45px] opacity-70"
      >
        <path
          d="M2 2C15 15 40 25 65 28C40 31 15 41 2 58"
          stroke="#F97316"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="5 5"
          className="animate-pulse"
        />
        <path
          d="M65 20L75 28L65 36"
          stroke="#F97316"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};