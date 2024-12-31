import React from 'react';

export const FormSpeechBubble = () => {
  return (
    <div className="relative bg-[#FFF4ED] p-4 rounded-lg shadow-md mb-6">
      <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-[16px] border-t-[#FFF4ED]"></div>
      <p className="text-lg sm:text-xl md:text-2xl text-[#F97316]">
        Enter your Name, Email Address, and Mobile, and we'll send you your free guide.
      </p>
    </div>
  );
};