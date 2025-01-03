import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";

interface LeadFormInputsProps {
  formData: {
    name: string;
    email: string;
    mobile: string;
    consent: boolean;
  };
  setFormData: (data: any) => void;
}

export const LeadFormInputs = ({ formData, setFormData }: LeadFormInputsProps) => (
  <div className="space-y-4 md:space-y-6">
    <div className="text-center md:text-left">
      <label htmlFor="name" className="block text-sm font-medium text-navy mb-1">
        Full Name
      </label>
      <input
        type="text"
        id="name"
        required
        className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F97316]/50 focus:border-[#F97316] transition-all duration-200"
        value={formData.name}
        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
      />
    </div>
    
    <div className="text-center md:text-left">
      <label htmlFor="email" className="block text-sm font-medium text-navy mb-1">
        Email Address
      </label>
      <input
        type="email"
        id="email"
        required
        className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F97316]/50 focus:border-[#F97316] transition-all duration-200"
        value={formData.email}
        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
      />
    </div>
    
    <div className="text-center md:text-left">
      <label htmlFor="mobile" className="block text-sm font-medium text-navy mb-1">
        Mobile Number
      </label>
      <input
        type="tel"
        id="mobile"
        required
        className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F97316]/50 focus:border-[#F97316] transition-all duration-200"
        value={formData.mobile}
        onChange={(e) => setFormData(prev => ({ ...prev, mobile: e.target.value }))}
      />
    </div>

    <div className="flex items-start space-x-3">
      <Checkbox
        id="consent"
        checked={formData.consent}
        onCheckedChange={(checked) => 
          setFormData(prev => ({ ...prev, consent: checked as boolean }))
        }
        className="mt-1"
      />
      <label 
        htmlFor="consent" 
        className="text-xs md:text-sm text-gray-600 leading-tight text-center md:text-left"
      >
        By ticking this box, I understand I will receive this free guide and ongoing insights from Retirement Scientist by email or phone
      </label>
    </div>
  </div>
);