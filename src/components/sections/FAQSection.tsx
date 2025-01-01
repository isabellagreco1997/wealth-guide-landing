import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
        </Accordion>
      </div>
    </div>
  </section>
);