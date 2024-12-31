import React from 'react';

export const FormSpeechBubble = () => {
  return (
    <div className="relative mb-16">
      <div className="bg-[#FFF4ED] p-4 rounded-lg shadow-md mb-4">
        <p className="text-sm md:text-base lg:text-lg font-bold text-[#F97316] text-center">
          Get Your FREE Guide To Early Retirement Now!
        </p>
      </div>
      {/* Hand-drawn arrow SVG */}
      <svg
        width="120"
        height="90"
        viewBox="0 0 120 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -bottom-12 left-[45px] opacity-90 drop-shadow-lg"
      >
        <path
          d="M2 2C22.5 22.5 60 37.5 97.5 42C60 46.5 22.5 61.5 2 87"
          stroke="#F97316"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="5 5"
          className="animate-pulse"
        />
        <path
          d="M97.5 30L112.5 42L97.5 54"
          stroke="#F97316"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};