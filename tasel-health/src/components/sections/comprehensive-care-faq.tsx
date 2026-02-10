'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

export function ComprehensiveCareFAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  const faqs = [
    {
      question: "What makes comprehensive care different from other mental health services?",
      answer: "Comprehensive care combines multiple evidence-based treatments (TMS therapy, medication management, counseling) in a coordinated approach. Instead of receiving fragmented care from different providers, you get integrated treatment where all modalities work together for better outcomes than any single approach alone."
    },
    {
      question: "How long does the comprehensive care process take?",
      answer: "The timeline varies based on your individual needs and goals. Most patients see initial improvements within 4-8 weeks, with ongoing treatment and support as needed. We regularly assess your progress and adjust the treatment plan to ensure optimal outcomes."
    },
    {
      question: "Do I need all treatment components, or can I choose specific ones?",
      answer: "Your treatment plan is personalized based on your specific needs and goals. While comprehensive care often includes multiple components, we may recommend starting with one or two treatments and adding others as needed. The goal is to create the most effective plan for your unique situation."
    },
    {
      question: "How do you coordinate between different treatments?",
      answer: "Our team meets regularly to discuss your progress and coordinate care. We maintain detailed records and communicate frequently to ensure all treatments are working together effectively. You'll have a primary care coordinator who ensures seamless integration of all treatment components."
    },
    {
      question: "Is comprehensive care covered by insurance?",
      answer: "Many components of comprehensive care are covered by insurance, including TMS therapy, psychiatric care, and counseling. Coverage varies by insurance plan and individual circumstances. We work with you to maximize your insurance benefits and provide transparent information about costs."
    },
    {
      question: "What if I've tried other treatments that didn't work?",
      answer: "Comprehensive care is often most effective for treatment-resistant conditions. By combining multiple evidence-based approaches and coordinating care, we can often achieve results when single treatments haven't worked. Our integrated approach addresses multiple aspects of mental health simultaneously."
    },
    {
      question: "How do you measure success in comprehensive care?",
      answer: "We measure success through regular assessments of your symptoms, functioning, and quality of life. We use standardized questionnaires and regular check-ins to track your progress. Success is defined by your improvement and achievement of your personal goals, not just treatment delivery."
    },
    {
      question: "Can I start with comprehensive care if I'm already seeing other providers?",
      answer: "Yes, we can work with your existing providers or help you transition to comprehensive care. We'll review your current treatment and create a coordinated plan that builds on what's working while adding new components as needed. We believe in continuity of care and will work to ensure a smooth transition."
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Common questions about comprehensive mental health care and how it can help you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card 
                key={index}
                className="tasel-card hover:shadow-lg transition-all duration-300"
              >
                <CardHeader 
                  className="cursor-pointer"
                  onClick={() => toggleItem(index)}
                >
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </CardTitle>
                    {openItems.includes(index) ? (
                      <ChevronUp className="h-5 w-5 text-lavender-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-lavender-600 flex-shrink-0" />
                    )}
                  </div>
                </CardHeader>
                
                {openItems.includes(index) && (
                  <CardContent className="pt-0">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
