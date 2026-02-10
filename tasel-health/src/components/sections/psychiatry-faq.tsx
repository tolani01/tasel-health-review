'use client'

import { Card } from '@/components/ui/card'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { useState } from 'react'

export function PsychiatryFAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  const faqs = [
    {
      question: "How long until I feel better on medication?",
      answer: "Most antidepressants and anti-anxiety medications take 2-6 weeks to show noticeable benefits, though some people feel improvements sooner. Mood stabilizers may take 4-8 weeks. ADHD medications often work within hours to days. We monitor your progress closely and adjust as needed. If you don't see improvement within the expected timeframe, we'll explore other options."
    },
    {
      question: "What if I experience side effects?",
      answer: "Most side effects are mild and temporary, often improving within 1-2 weeks as your body adjusts. Common issues like upset stomach, dry mouth, or mild headaches can usually be managed with dose timing, food, or simple remedies. If side effects are bothersome, we can adjust your dose, switch medications, or add supportive treatments. Always contact us if you experience concerning symptoms—most issues are manageable."
    },
    {
      question: "Will you change medications started by another provider?",
      answer: "Yes, we can adjust or change medications prescribed by previous providers. We'll review what you've tried, what worked or didn't, and why changes might be helpful. If your current medication is working well, we'll usually continue it. If it's not helping or causing problems, we'll work together to find a better option. We always make changes gradually and safely."
    },
    {
      question: "Can I drink alcohol or use cannabis while on psychiatric medications?",
      answer: "Alcohol and cannabis can interact with many psychiatric medications, affecting how they work or increasing side effects. Some combinations can be dangerous. We'll discuss your specific medications and give you clear guidance about what's safe. Honesty about substance use helps us prescribe safely and avoid harmful interactions. We don't judge—we just want to keep you safe."
    },
    {
      question: "Can you prescribe ADHD medications (stimulants) at the first visit?",
      answer: "Sometimes, but not always. If you have recent medical records, a clear ADHD diagnosis, and no concerning risk factors, we may prescribe at the first visit. New diagnoses require comprehensive evaluation, often with rating scales and collateral information. Stimulants are controlled substances requiring careful assessment, treatment agreements, and regular monitoring. We prioritize getting you the right care safely."
    },
    {
      question: "How often will I need blood tests or lab work?",
      answer: "It depends on your medications. Some require no labs at all, while others need baseline and periodic monitoring. For example, lithium requires kidney and thyroid tests; mood stabilizers may need liver function checks; some antipsychotics require metabolic monitoring (blood sugar, cholesterol). We order only necessary tests and explain why each is important for your safety."
    },
    {
      question: "Do you manage medications during pregnancy or breastfeeding?",
      answer: "Yes, with careful risk-benefit counseling. Untreated mental health conditions can pose risks during pregnancy, but so can some medications. We review the latest research, discuss your specific situation, and help you make informed decisions. Many medications can be used safely, especially when weighed against the risks of untreated illness. We provide ongoing monitoring and adjust as needed throughout pregnancy and postpartum."
    },
    {
      question: "Do you offer genetic testing for medication selection?",
      answer: "Genetic testing (pharmacogenomics) can sometimes help predict medication metabolism and side effects, but it's not always necessary or definitive. It's most useful when you've had multiple medication failures or severe side effects. Results guide treatment but don't guarantee success. We'll discuss if testing makes sense for your situation. Most patients do well with standard medication trials without genetic testing."
    },
    {
      question: "Can you coordinate with my therapist or primary care doctor?",
      answer: "Absolutely! Coordinated care leads to better outcomes. With your written consent (Release of Information), we can communicate with your therapist, primary care doctor, or other providers. This helps us avoid duplicate medications, share treatment goals, and provide seamless care. We encourage this collaboration and make it as easy as possible."
    },
    {
      question: "Do you offer telehealth appointments?",
      answer: "Yes, we offer telehealth for established patients in Oklahoma. Initial evaluations may require an in-person visit for some services, especially for controlled substances. You'll need a quiet, private space, reliable internet, and a device with camera/microphone. Some situations (like certain physical exams or lab reviews) may require in-person visits. We'll let you know what's appropriate for your care."
    },
    {
      question: "What if I can't afford my medications?",
      answer: "We'll work with you to find affordable options. This includes prescribing generic medications when available (often 10-20% the cost of brand names), helping you access manufacturer discount programs, exploring patient assistance programs, and using your insurance benefits wisely (90-day fills, preferred formulary drugs). Let us know about cost concerns—we'll never prescribe something you can't access."
    },
    {
      question: "What happens if I miss an appointment?",
      answer: "Please give us 24-48 hours notice if you need to cancel. Missed appointments may delay medication refills, especially for controlled substances, as we need to see you regularly to prescribe safely. If you're having trouble keeping appointments, let us know—we can often find solutions like telehealth visits, different appointment times, or urgent slots when needed."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 rounded-full px-6 py-2 text-sm font-medium mb-4">
              <HelpCircle className="h-4 w-4 mr-2" />
              Frequently Asked Questions
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Common Questions About Psychiatric Medications
            </h2>
            <p className="text-xl text-gray-600">
              Evidence-based answers to help you make informed decisions about your mental health care
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card 
                key={index}
                className="overflow-hidden hover:shadow-md transition-shadow"
              >
                <button
                  className="w-full p-6 text-left flex items-center justify-between"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`h-5 w-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                      openFAQ === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
