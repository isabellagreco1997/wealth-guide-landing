import { useState } from 'react';
import { toast } from 'sonner';
import { createLead } from '@/lib/api/leads';
import { getErrorMessage } from '@/lib/api/errors';
import { downloadFile } from '@/lib/utils/download';
import type { NewLead } from '@/lib/types/supabase';

const initialState: NewLead = {
  name: '',
  email: '',
  mobile: '',
  consent: false
};

const GUIDE_PDF_URL = '/retirement-guide.pdf';
const GUIDE_FILENAME = 'early-retirement-guide.pdf';

export function useLeadForm() {
  const [formData, setFormData] = useState<NewLead>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resetForm = () => setFormData(initialState);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast.error("Please accept the terms to continue");
      return;
    }

    setIsSubmitting(true);

    try {
      await createLead(formData);
      toast.success("Thank you for your interest! Your guide is downloading now.");
      downloadFile(GUIDE_PDF_URL, GUIDE_FILENAME);
      resetForm();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(getErrorMessage(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    setFormData,
    isSubmitting,
    handleSubmit
  };
}