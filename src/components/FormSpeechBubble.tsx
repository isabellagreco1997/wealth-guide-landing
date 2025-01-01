import React from 'react';

export const FormSpeechBubble = () => {
  return (
    <div className="mb-8 relative">
      <div className="bg-[#FFF4ED] p-4 rounded-lg shadow-md">
        <p className="text-sm md:text-base lg:text-lg font-bold text-[#F97316] text-center">
          Get Your FREE Guide To Early Retirement Now!
        </p>
      </div>
      {/* Arrow pointing down */}
      <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full z-10">
        <div className="relative h-12 w-8">
          <div className="absolute w-0.5 h-8 bg-[#F97316] left-1/2 transform -translate-x-1/2"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45 border-b-2 border-r-2 border-[#F97316]"></div>
        </div>
      </div>
    </div>
  );
};