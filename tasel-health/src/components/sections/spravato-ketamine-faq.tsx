'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { HelpCircle, Plus, Minus, Phone, Mail } from 'lucide-react'
import { useState } from 'react'

export function SpravatoKetamineFAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  const faqs = [
    {
      question: "What is Spravato® and how is it different from ketamine?",
      answer: "Spravato® (esketamine) is the S-enantiomer of ketamine, FDA-approved as a nasal spray for treatment-resistant depression. It's a more refined form of ketamine with FDA approval and specific dosing protocols. Ketamine infusions use the racemic mixture and are administered off-label for depression. Both work on the NMDA receptor system but have different administration methods and regulatory statuses."
    },
    {
      question: "How does Spravato®/ketamine work for depression?",
      answer: "Unlike traditional antidepressants that target serotonin or norepinephrine, Spravato® and ketamine work on the NMDA (glutamate) receptor system. This different mechanism allows them to provide rapid relief—often within hours to days—for treatment-resistant depression. They help restore neural connections and improve mood regulation pathways in the brain."
    },
    {
      question: "Who is a good candidate for Spravato® or ketamine treatment?",
      answer: "Good candidates typically have treatment-resistant depression (failed 2+ antidepressant trials), major depressive disorder with suicidal ideation, or severe depression that hasn't responded to traditional treatments. A comprehensive medical and psychiatric evaluation will determine if you're a suitable candidate based on your medical history, current medications, and condition severity."
    },
    {
      question: "What does treatment feel like?",
      answer: "During treatment, you may experience dissociation (feeling disconnected from your body or surroundings), dizziness, or sedation. These effects are temporary and typically resolve within 1-2 hours after treatment. You'll be in a comfortable, supervised setting throughout. Most patients find the experience manageable, and our medical team monitors you closely for safety."
    },
    {
      question: "How long does each treatment session take?",
      answer: "Spravato® sessions take about 2 hours total: 30-40 minutes for administration and monitoring, followed by 2 hours of post-treatment observation. Ketamine infusions typically take 40-60 minutes for the infusion itself, plus monitoring time. You'll need to arrange transportation as you cannot drive for the rest of the day."
    },
    {
      question: "How many treatments will I need?",
      answer: "Treatment frequency varies. Spravato® typically starts with twice-weekly treatments for 4 weeks, then may reduce to weekly or bi-weekly. Ketamine protocols vary but often involve 6-8 initial treatments over 2-4 weeks, followed by maintenance sessions. Your provider will create a personalized treatment plan based on your response."
    },
    {
      question: "What are the side effects?",
      answer: "Common side effects include dissociation, dizziness, nausea, sedation, increased blood pressure, and feeling disconnected. These are usually mild to moderate and resolve within hours. Serious side effects like psychosis or severe dissociation are rare but possible. All treatments are medically supervised to ensure safety."
    },
    {
      question: "Does insurance cover Spravato® or ketamine?",
      answer: "Spravato® is often covered by insurance for treatment-resistant depression, though prior authorization is typically required. Coverage varies by plan. Ketamine infusions are usually not covered by insurance and are typically self-pay. Our team will verify your insurance benefits and discuss all payment options with you."
    },
    {
      question: "How quickly will I see results?",
      answer: "Many patients notice improvement within hours to days after their first treatment—much faster than traditional antidepressants which can take 4-6 weeks. Some patients experience significant relief after just 1-2 sessions, while others may need the full initial treatment course. Response varies by individual."
    },
    {
      question: "Can I continue taking my other medications?",
      answer: "Most patients continue their existing antidepressants while receiving Spravato® or ketamine treatment. However, some medications may need adjustment. Your provider will review all your medications during evaluation and coordinate with your other doctors to ensure safe, effective treatment."
    },
    {
      question: "Is Spravato® or ketamine addictive?",
      answer: "When administered under medical supervision in controlled doses, the risk of addiction is very low. Spravato® has specific FDA-approved dosing protocols, and ketamine is given in therapeutic doses under medical supervision. However, these medications can be misused if not properly supervised, which is why treatment must occur in a medical setting."
    },
    {
      question: "How long do the benefits last?",
      answer: "Many patients experience lasting benefits, but maintenance treatments are often needed to sustain improvement. After the initial treatment course, your provider will determine an appropriate maintenance schedule—which may be weekly, bi-weekly, or monthly—based on your response and needs."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-700 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <HelpCircle className="h-4 w-4 mr-2" />
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your Spravato®/Ketamine Questions Answered
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Get answers to the most common questions about Spravato® and ketamine treatment, 
            safety, effectiveness, and what to expect during your journey to better mental health.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* FAQ Items */}
          <div className="space-y-4 mb-12">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openFAQ === index ? (
                        <Minus className="h-5 w-5 text-purple-600" />
                      ) : (
                        <Plus className="h-5 w-5 text-purple-600" />
                      )}
                    </div>
                  </div>
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* Contact Section */}
          <Card className="p-8 bg-gradient-to-br from-purple-50 to-teal-50 border-purple-200">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Still Have Questions?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Our experienced medical team is here to help you understand Spravato® and ketamine treatment 
                and determine if it's right for you. Contact us for a personalized consultation.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                <Button 
                  size="lg" 
                  className="bg-purple-600 hover:bg-purple-700 w-full"
                  asChild
                >
                  <a href="tel:+14059341681">
                    <Phone className="h-5 w-5 mr-2" />
                    Call Oklahoma City
                  </a>
                </Button>
                <Button 
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 w-full"
                  asChild
                >
                  <a href="tel:+12102022341">
                    <Phone className="h-5 w-5 mr-2" />
                    Call San Antonio
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-purple-200 text-purple-700 hover:bg-purple-50 w-full"
                  asChild
                >
                  <a href="mailto:info@taselhealth.com">
                    <Mail className="h-5 w-5 mr-2" />
                    Email Questions
                  </a>
                </Button>
              </div>

              <div className="mt-8 pt-6 border-t border-purple-200">
                <p className="text-sm text-gray-500">
                  <strong>Medical Disclaimer:</strong> This information is for educational purposes only 
                  and should not replace professional medical advice. Consult with our medical team 
                  for personalized treatment recommendations. Spravato® is a registered trademark of Janssen Pharmaceuticals.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
