import React, { useState } from 'react';
import { toast } from 'sonner';
import { Checkbox } from "@/components/ui/checkbox";

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
      <div className="relative bg-[#9b87f5] text-white p-6 rounded-[20px] mb-8 text-center w-full max-w-md shadow-lg transform hover:scale-105 transition-transform duration-200 before:content-[''] before:absolute before:bottom-0 before:left-[48px] before:w-4 before:h-4 before:bg-[#9b87f5] before:transform before:translate-y-1/2 before:rotate-45">
        <p className="text-lg md:text-xl font-medium">
          Enter your Name, Email Address, and Mobile, and we'll send you your free guide.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-xl w-full max-w-md">
        <div className="space-y-4 md:space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-navy mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9b87f5]/50 focus:border-[#9b87f5] transition-all duration-200"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-navy mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9b87f5]/50 focus:border-[#9b87f5] transition-all duration-200"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            />
          </div>
          
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-navy mb-1">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              required
              className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9b87f5]/50 focus:border-[#9b87f5] transition-all duration-200"
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
              className="text-xs md:text-sm text-gray-600 leading-tight"
            >
              By ticking this box, I understand I will receive this free guide and ongoing insights from Retirement Scientist by email or phone
            </label>
          </div>
          
          <button type="submit" className="w-full bg-[#9b87f5] text-white px-6 md:px-8 py-2 md:py-3 rounded-lg hover:bg-[#9b87f5]/90 transition-all duration-200 font-semibold">
            Get the Guide
          </button>
        </div>
      </form>
      <p className="text-xs text-gray-500 mt-4 max-w-md text-center px-4">
        🔒 YOUR INFORMATION IS 100% SAFE. WE NEVER SHARE YOUR INFORMATION WITH ANYONE. BY CLICKING "SUBMIT" I AGREE TO RECEIVE AUTO AND PRE-MADE E-MAILS AT THE E-MAIL PROVIDED. I UNDERSTAND THAT MY CONSENT IS NOT A CONDITION TO PURCHASE ANYTHING.
      </p>
    </div>
  );
};
