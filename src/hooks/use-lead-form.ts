import { useState } from 'react';
import { toast } from 'sonner';
import { createLead } from '@/lib/api/leads';
import { getErrorMessage } from '@/lib/api/errors';
import { downloadFile } from '@/lib/utils/download';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const resetForm = () => setFormData(initialState);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast.error("Please accept the terms to continue");
      return;
    }

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      await createLead({...formData});
      
      // Start the download
      downloadFile(GUIDE_PDF_URL, GUIDE_FILENAME);
      
      // Reset form and redirect to success page
      resetForm();
      navigate('/success');
      
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