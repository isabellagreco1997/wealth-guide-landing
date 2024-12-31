import React, { useState } from 'react';
import { toast } from 'sonner';
import { FormSpeechBubble } from './FormSpeechBubble';
import { LeadFormInputs } from './LeadFormInputs';
import { LeadFormSubmit } from './forms/LeadFormSubmit';
import { createLead } from '@/lib/api/leads';
import type { NewLead } from '@/lib/types/supabase';

export const LeadForm = () => {
  const [formData, setFormData] = useState<NewLead>({
    name: '',
    email: '',
    mobile: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast.error("Please accept the terms to continue");
      return;
    }

    setIsSubmitting(true);

    try {
      await createLead(formData);
      toast.success("Thank you for your interest! Check your email for the guide.");
      setFormData({ name: '', email: '', mobile: '', consent: false });
    } catch (error: any) {
      console.error('Error submitting form:', error);
      if (error.code === '23505') {
        toast.error("You've already signed up with this email address!");
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

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