import React from 'react';
import { FormSpeechBubble } from './FormSpeechBubble';
import { LeadFormInputs } from './LeadFormInputs';
import { LeadFormSubmit } from '../components/forms/LeadFormSubmit';
import { useLeadForm } from '@/hooks/use-lead-form';

export const LeadForm = () => {
  const { formData, setFormData, isSubmitting, handleSubmit } = useLeadForm();

  return (
    <div className="w-full flex flex-col items-center">
      <FormSpeechBubble />
      <form onSubmit={handleSubmit} className="bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-xl w-full max-w-md">
        <LeadFormInputs formData={formData} setFormData={setFormData} />
        <LeadFormSubmit isSubmitting={isSubmitting} />
      </form>
      <p className="text-xs text-gray-500 mt-4 max-w-md text-center px-4">
        🔒 YOUR INFORMATION IS 100% SAFE. WE NEVER SHARE YOUR INFORMATION WITH ANYONE. BY CLICKING "SUBMIT" I AGREE TO RECEIVE AUTO AND PRE-MADE E-MAILS AT THE E-MAIL PROVIDED. I UNDERSTAND THAT MY CONSENT IS NOT A CONDITION TO PURCHASE ANYTHING.
      </p>
    </div>
  );
};