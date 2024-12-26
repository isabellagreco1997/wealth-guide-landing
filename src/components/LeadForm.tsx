import React, { useState } from 'react';
import { toast } from 'sonner';

export const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your interest! Check your email for the guide.");
    setFormData({ name: '', email: '', mobile: '' });
  };

  return (
    <div className="space-y-6">
      <img 
        src="/lovable-uploads/c03c5eb4-24fe-4d60-81e8-877ae729cab6.png" 
        alt="How Much Money Do I Need to Retire in the UK?" 
        className="w-full rounded-lg shadow-lg mb-6"
      />
      <form onSubmit={handleSubmit} className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-xl max-w-md w-full">
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-navy mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9b87f5]/50 focus:border-[#9b87f5] transition-all duration-200"
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
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9b87f5]/50 focus:border-[#9b87f5] transition-all duration-200"
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
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9b87f5]/50 focus:border-[#9b87f5] transition-all duration-200"
              value={formData.mobile}
              onChange={(e) => setFormData(prev => ({ ...prev, mobile: e.target.value }))}
            />
          </div>
          
          <button type="submit" className="w-full bg-[#9b87f5] text-white px-8 py-3 rounded-lg hover:bg-[#9b87f5]/90 transition-all duration-200 font-semibold">
            Get the Guide
          </button>
        </div>
      </form>
    </div>
  );
};