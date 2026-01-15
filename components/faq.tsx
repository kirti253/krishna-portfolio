"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What makes SunMac Edits different from other marketing agencies?",
    answer:
      "We specialize only in healthcare storytelling. Our team understands the unique challenges doctors face and creates content, videos, and websites that build patient trust and grow visibility.",
  },
  {
    question: "Do you only work with doctors and hospitals?",
    answer:
      "Yes, we exclusively work with healthcare professionals and institutions. This specialization allows us to deeply understand the medical field's unique requirements and compliance needs.",
  },
  {
    question: "Can you help my clinic appear on Google searches?",
    answer:
      "We offer SEO-optimized websites and content strategies specifically designed for healthcare practices to improve their local search rankings and attract more patients.",
  },
  {
    question: "What type of content do you create?",
    answer:
      "We create a wide range of content including YouTube videos, Instagram reels, patient testimonials, explainer videos, medical animations, podcasts, and professional photoshoots.",
  },
]

export function FAQ() {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background border border-border rounded-xl px-6"
            >
              <AccordionTrigger className="text-left hover:no-underline py-4">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
