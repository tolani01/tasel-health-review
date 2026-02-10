'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { HelpCircle, Plus, Minus, Phone, Mail } from 'lucide-react'
import { useState } from 'react'

export function TMSFAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  const faqs = [
    {
      question: "What is BrainsWay Deep TMS™ and how does it work?",
      answer: "BrainsWay Deep TMS™ uses patented H-Coil technology to deliver magnetic pulses to deeper brain regions than traditional TMS. These pulses stimulate neural pathways associated with mood regulation, helping to treat depression, anxiety, OCD, and other conditions. The treatment is non-invasive and doesn't require anesthesia."
    },
    {
      question: "Is Deep TMS™ FDA approved and safe?",
      answer: "Yes, BrainsWay Deep TMS™ has received 8 FDA clearances for various conditions including major depressive disorder, OCD, anxious depression, smoking cessation, and more. The treatment has an excellent safety profile with minimal side effects, backed by extensive clinical research and over 60 peer-reviewed studies."
    },
    {
      question: "What conditions can be treated with Deep TMS™?",
      answer: "Deep TMS™ is FDA-cleared for major depressive disorder, obsessive-compulsive disorder, anxious depression, smoking cessation, bipolar depression, PTSD, Alzheimer's disease, and chronic pain. We also treat other conditions off-label based on emerging research and clinical judgment."
    },
    {
      question: "How long does each treatment session take?",
      answer: "Each Deep TMS™ session lasts approximately 20 minutes. You'll be comfortably seated during the treatment and can return to your normal activities immediately afterward. Most patients complete their initial treatment course over 4-6 weeks with daily sessions Monday through Friday."
    },
    {
      question: "What does Deep TMS™ treatment feel like?",
      answer: "During treatment, you'll feel a tapping sensation on your scalp where the coil is placed. Some patients experience mild discomfort initially, but most adjust quickly. The treatment is well-tolerated, and you remain awake and alert throughout the session. No anesthesia or sedation is required."
    },
    {
      question: "What are the side effects of Deep TMS™?",
      answer: "Side effects are generally mild and temporary. The most common side effects include mild headache and scalp discomfort at the treatment site, which typically resolve within a few hours. Serious side effects are rare. Our medical team monitors you closely throughout treatment."
    },
    {
      question: "How effective is Deep TMS™ treatment?",
      answer: "Clinical studies show that approximately 75% of patients experience significant improvement with Deep TMS™ treatment. Many patients see results within the first few weeks of treatment. Success rates vary by condition, with some patients achieving complete remission of symptoms."
    },
    {
      question: "Am I a good candidate for Deep TMS™?",
      answer: "Deep TMS™ may be right for you if you have treatment-resistant depression, OCD, anxiety, or other approved conditions that haven't responded adequately to medication or therapy. A comprehensive evaluation with our medical team will determine if you're a good candidate based on your medical history and current symptoms."
    },
    {
      question: "Does insurance cover Deep TMS™ treatment?",
      answer: "Many insurance plans cover Deep TMS™ for FDA-approved conditions, particularly for treatment-resistant depression and OCD. Coverage varies by plan and condition. Our team will work with you to verify your insurance benefits and explore payment options, including self-pay arrangements."
    },
    {
      question: "How long do the benefits of Deep TMS™ last?",
      answer: "Many patients experience lasting benefits from Deep TMS™ treatment. Some patients maintain improvement for months or years after completing their initial treatment course. Maintenance sessions may be recommended to sustain benefits, and the frequency varies by individual response and condition."
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
            Your Deep TMS™ Questions Answered
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Get answers to the most common questions about BrainsWay Deep TMS™ treatment, 
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
                Our experienced medical team is here to help you understand Deep TMS™ treatment 
                and determine if it&apos;s right for you. Contact us for a personalized consultation.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 max-w-md mx-auto">
                <Button 
                  size="lg" 
                  className="bg-purple-600 hover:bg-purple-700 w-full"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Us Today
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-purple-200 text-purple-700 hover:bg-purple-50 w-full"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Email Questions
                </Button>
              </div>

              <div className="mt-8 pt-6 border-t border-purple-200">
                <p className="text-sm text-gray-500">
                  <strong>Medical Disclaimer:</strong> This information is for educational purposes only 
                  and should not replace professional medical advice. Consult with our medical team 
                  for personalized treatment recommendations.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
