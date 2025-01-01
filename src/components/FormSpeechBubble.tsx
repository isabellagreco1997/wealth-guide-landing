import React from 'react';

export const FormSpeechBubble = () => {
  return (
    <div className="mb-8 relative">
      <div className="bg-[#FFF4ED] p-4 rounded-lg shadow-md">
        <p className="text-sm md:text-base lg:text-lg font-bold text-[#F97316] text-center">
          Get Your FREE Guide To Early Retirement Now!
        </p>
      </div>
      {/* New zigzag arrow design */}
      <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full z-10">
        <div className="relative h-16 w-12">
          {/* Zigzag line */}
          <svg
            width="12"
            height="48"
            viewBox="0 0 12 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-1/2 transform -translate-x-1/2"
          >
            <path
              d="M6 0L2 12L10 24L2 36L6 48"
              stroke="#F97316"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {/* Arrow head */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 20L0 10L20 10L10 20Z"
                fill="#F97316"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};