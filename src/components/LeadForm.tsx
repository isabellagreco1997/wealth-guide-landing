import React, { useState } from 'react';
import { toast } from 'sonner';
import { FormSpeechBubble } from './FormSpeechBubble';
import { LeadFormInputs } from './LeadFormInputs';

export const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    consent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      toast.error("Please accept the terms to continue");
      return;
    }
    toast.success("Thank you for your interest! Check your email for the guide.");
    setFormData({ name: '', email: '', mobile: '', consent: false });
  };

  return (
    <div className="w-full flex flex-col items-center">
      <FormSpeechBubble />
      <form onSubmit={handleSubmit} className="bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-xl w-full max-w-md">
        <LeadFormInputs formData={formData} setFormData={setFormData} />
        <button 
          type="submit" 
          className="w-full bg-[#F97316] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-[#F97316]/90 transition-all duration-200 font-bold text-lg uppercase tracking-wide shadow-lg hover:shadow-xl hover:transform hover:scale-[1.02] hover:-translate-y-0.5 active:transform active:scale-[0.98] mt-6"
        >
          Get the Guide
        </button>
      </form>
      <p className="text-xs text-gray-500 mt-4 max-w-md text-center px-4">
        🔒 YOUR INFORMATION IS 100% SAFE. WE NEVER SHARE YOUR INFORMATION WITH ANYONE. BY CLICKING "SUBMIT" I AGREE TO RECEIVE AUTO AND PRE-MADE E-MAILS AT THE E-MAIL PROVIDED. I UNDERSTAND THAT MY CONSENT IS NOT A CONDITION TO PURCHASE ANYTHING.
      </p>
    </div>
  );
};