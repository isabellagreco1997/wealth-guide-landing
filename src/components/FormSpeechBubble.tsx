import React from 'react';

export const FormSpeechBubble = () => {
  return (
    <div className="mb-8 relative">
      <div className="bg-[#FFF4ED] p-4 rounded-lg shadow-md">
        <p className="text-sm md:text-base lg:text-lg font-bold text-[#F97316] text-center">
          Get Your FREE Guide To Early Retirement Now!
        </p>
      </div>
      {/* Animated curved arrow */}
      <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full z-10">
        <div className="relative h-16 w-12 animate-bounce">
          <svg
            width="24"
            height="64"
            viewBox="0 0 24 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-1/2 transform -translate-x-1/2"
          >
            {/* Curved path */}
            <path
              d="M12 0C12 20 24 24 24 32C24 40 12 44 12 64"
              stroke="#F97316"
              strokeWidth="2"
              strokeLinecap="round"
              className="animate-dash"
            />
            {/* Arrow head */}
            <path
              d="M12 64L6 56H18L12 64Z"
              fill="#F97316"
              className="animate-pulse"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};