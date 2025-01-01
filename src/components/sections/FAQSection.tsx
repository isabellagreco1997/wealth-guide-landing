import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { LeadFormDialog } from '@/components/LeadFormDialog';

export const FAQSection = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
        Frequently Asked <span className="text-gold">Questions</span>
      </h2>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is early retirement really possible in today's economy?</AccordionTrigger>
            <AccordionContent>
              Yes, absolutely. While it may seem challenging, our guide shows you proven strategies that have worked for thousands of people, even in challenging economic conditions. The key is having the right framework and approach.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Do I need a high income to achieve early retirement?</AccordionTrigger>
            <AccordionContent>
              No. While a higher income can help, our guide focuses on optimisation strategies that work at any income level. We'll show you how to make the most of what you have and potentially increase your income along the way.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Will I have to live extremely frugally?</AccordionTrigger>
            <AccordionContent>
              Not at all. Our approach focuses on smart financial decisions while maintaining your quality of life. It's about optimising your spending and investments, not sacrificing your lifestyle.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>How is this guide different from others?</AccordionTrigger>
            <AccordionContent>
              Our guide focuses on practical, actionable strategies rather than theory. It's based on real success stories and provides a step-by-step framework you can implement immediately, without complex financial jargon.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>What if I have existing debts?</AccordionTrigger>
            <AccordionContent>
              Our guide includes specific strategies for managing and eliminating debt while building wealth. We'll show you how to balance debt repayment with investment growth, ensuring you're making progress towards both goals.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>How much do I need to save for early retirement?</AccordionTrigger>
            <AccordionContent>
              The amount varies based on your lifestyle goals and location. Our guide provides detailed calculators and frameworks to determine your personal "magic number" and shows you how to achieve it systematically.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>What about healthcare costs in early retirement?</AccordionTrigger>
            <AccordionContent>
              Healthcare is a crucial consideration in early retirement planning. Our guide covers various strategies for managing healthcare costs, including private insurance options, health savings accounts, and building adequate buffers into your retirement fund.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>Can I still enjoy holidays and leisure activities?</AccordionTrigger>
            <AccordionContent>
              Absolutely! Our guide emphasises balanced living. We'll show you how to plan for and enjoy leisure activities while staying on track with your early retirement goals. It's about making smart choices, not eliminating enjoyment.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="text-center mt-12">
        <LeadFormDialog>
          <Button 
            className="bg-gold hover:bg-gold/90 text-white font-semibold px-8 py-6 text-lg"
          >
            Get Answers
          </Button>
        </LeadFormDialog>
      </div>
    </div>
  </section>
);
