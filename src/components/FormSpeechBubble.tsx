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
        <div className="relative h-16 w-12">
          <div className="absolute w-1 h-12 bg-gradient-to-b from-[#F97316] to-[#F97316]/80 left-1/2 transform -translate-x-1/2 rounded-full shadow-md"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-6 rotate-45 border-b-[3px] border-r-[3px] border-[#F97316] shadow-sm"></div>
        </div>
      </div>
    </div>
  );
};