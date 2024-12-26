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
          <div className="flex items-center justify-start">
            <div className="flex -space-x-4">
              <div className="w-10 h-10 rounded-full border-4 border-white overflow-hidden shadow-md hover:scale-105 transition-transform">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=48&h=48&fit=crop" 
                  alt="Reader" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-10 h-10 rounded-full border-4 border-white overflow-hidden shadow-md hover:scale-105 transition-transform">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=48&h=48&fit=crop" 
                  alt="Reader" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-10 h-10 rounded-full border-4 border-white overflow-hidden shadow-md hover:scale-105 transition-transform">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=48&h=48&fit=crop" 
                  alt="Reader" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-10 h-10 rounded-full border-4 border-white overflow-hidden shadow-md hover:scale-105 transition-transform">
                <img 
                  src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=48&h=48&fit=crop" 
                  alt="Reader" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-10 h-10 rounded-full border-4 border-white overflow-hidden shadow-md hover:scale-105 transition-transform">
                <img 
                  src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=48&h=48&fit=crop" 
                  alt="Reader" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-2 text-left">
            Join <span className="font-semibold text-[#9b87f5]">257</span> other readers who downloaded the guide
          </p>
        </div>
      </div>
    </form>
  );
};