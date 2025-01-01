import React from 'react';

export const FormSpeechBubble = () => {
  return (
    <div className="mb-8 relative">
      <div className="bg-[#FFF4ED] p-4 rounded-lg shadow-md">
        <p className="text-sm md:text-base lg:text-lg font-bold text-[#F97316] text-center">
          Get Your FREE Guide To Early Retirement Now!
        </p>
      </div>
      {/* Hand-drawn style arrow */}
      <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full z-10">
        <div className="relative h-16 w-12">
          <svg
            width="48"
            height="64"
            viewBox="0 0 48 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 left-0"
          >
            {/* Slightly curved vertical line */}
            <path
              d="M24 0C24 0 26 16 24 32C22 48 24 52 24 52"
              stroke="#F97316"
              strokeWidth="3"
              strokeLinecap="round"
              className="drop-shadow-md"
            />
            {/* Hand-drawn arrow head */}
            <path
              d="M24 52C24 52 12 48 8 56M24 52C24 52 36 48 40 56"
              stroke="#F97316"
              strokeWidth="3"
              strokeLinecap="round"
              className="drop-shadow-sm"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};