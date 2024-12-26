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

        <div className="pt-4 border-t border-gray-100">
          <div className="flex justify-center -space-x-2">
            <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
              <img src="/lovable-uploads/fa29a560-dcd8-450a-aa98-262d81af5e02.png" alt="Reader" className="w-full h-full object-cover" />
            </div>
            <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
              <img src="/lovable-uploads/fa29a560-dcd8-450a-aa98-262d81af5e02.png" alt="Reader" className="w-full h-full object-cover" />
            </div>
            <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
              <img src="/lovable-uploads/fa29a560-dcd8-450a-aa98-262d81af5e02.png" alt="Reader" className="w-full h-full object-cover" />
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Join <span className="font-semibold text-[#9b87f5]">257</span> other readers who downloaded the guide
          </p>
        </div>
      </div>
    </form>
  );
};