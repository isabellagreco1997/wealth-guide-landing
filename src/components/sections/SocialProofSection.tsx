import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const SocialProofSection = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
        Join Thousands Who Have Already <span className="text-gold">Started Their Journey</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center mb-4">
            <Avatar className="w-12 h-12">
              <AvatarImage src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" alt="Michael Stevens" />
              <AvatarFallback>MS</AvatarFallback>
            </Avatar>
            <div className="ml-4">
              <h4 className="font-bold text-navy">Michael Stevens</h4>
              <p className="text-sm text-gray-500">Manchester</p>
            </div>
          </div>
          <p className="text-gray-600">"The mindset transformation approach completely changed how I think about retirement. Understanding the fundamentals of lifestyle planning helped me align my goals with my values. It's not just about money - it's about designing the life I want."</p>
          <p className="mt-4 text-sm text-gold font-semibold">Mindset transformation</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center mb-4">
            <Avatar className="w-12 h-12">
              <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" alt="Sarah Lewis" />
              <AvatarFallback>SL</AvatarFallback>
            </Avatar>
            <div className="ml-4">
              <h4 className="font-bold text-navy">Sarah Lewis</h4>
              <p className="text-sm text-gray-500">Birmingham</p>
            </div>
          </div>
          <p className="text-gray-600">"The cashflow modeling tools were eye-opening. Being able to visualize different scenarios and stress test my retirement plans gave me confidence. The lifestyle planning workshops helped me define what truly matters to me."</p>
          <p className="mt-4 text-sm text-gold font-semibold">Financial clarity</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center mb-4">
            <Avatar className="w-12 h-12">
              <AvatarImage src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" alt="David Richardson" />
              <AvatarFallback>DR</AvatarFallback>
            </Avatar>
            <div className="ml-4">
              <h4 className="font-bold text-navy">David Richardson</h4>
              <p className="text-sm text-gray-500">Liverpool</p>
            </div>
          </div>
          <p className="text-gray-600">"The perspective shift on retirement planning was invaluable. Learning about lifestyle design and understanding the fundamentals of sustainable retirement helped me create a more balanced and achievable plan."</p>
          <p className="mt-4 text-sm text-gold font-semibold">Perspective transformation</p>
        </div>
      </div>
    </div>
  </section>
);