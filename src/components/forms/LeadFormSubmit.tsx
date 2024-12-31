import React from 'react';

interface LeadFormSubmitProps {
  isSubmitting: boolean;
}

export const LeadFormSubmit: React.FC<LeadFormSubmitProps> = ({ isSubmitting }) => (
  <button 
    type="submit" 
    disabled={isSubmitting}
    className="w-full bg-[#F97316] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-[#F97316]/90 transition-all duration-200 font-bold text-lg uppercase tracking-wide shadow-lg hover:shadow-xl hover:transform hover:scale-[1.02] hover:-translate-y-0.5 active:transform active:scale-[0.98] mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {isSubmitting ? 'Sending...' : 'Get the Guide'}
  </button>
);