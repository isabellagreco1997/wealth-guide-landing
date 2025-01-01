import React from 'react';

export const FormSpeechBubble = () => {
  return (
    <div className="mb-8 relative">
      <div className="bg-[#FFF4ED] p-4 rounded-lg shadow-md">
        <p className="text-sm md:text-base lg:text-lg font-bold text-[#F97316] text-center">
          Get Your FREE Guide To Early Retirement Now!
        </p>
      </div>
      {/* Thick arrow */}
      <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full z-10">
        <div className="relative h-16 w-12">
          <svg
            width="32"
            height="64"
            viewBox="0 0 32 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-1/2 transform -translate-x-1/2"
          >
            {/* Thick arrow body */}
            <path
              d="M12 0L12 44L4 44L16 64L28 44L20 44L20 0L12 0Z"
              fill="#F97316"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};