'use client'

import { Card } from '@/components/ui/card'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { useState } from 'react'

export function CounselingFAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  const faqs = [
    {
      question: "How long until I feel better with therapy?",
      answer: "Most people notice small improvements within 3-4 sessions, with more significant changes after 8-12 sessions. The timeline depends on your goals, the complexity of concerns, and how actively you practice skills between sessions. Some issues (like grief or trauma) may take longer, while others (like specific phobias or sleep problems) often improve faster. We'll track progress together and adjust as needed."
    },
    {
      question: "What happens in the first therapy session?",
      answer: "Your first session is about getting to know each other. We'll discuss what brings you to therapy, your goals, relevant history, current stressors, and strengths. We'll explain how therapy works, answer questions, review confidentiality, and start developing a plan together. There's no pressure to share more than you're comfortable with—therapy goes at your pace."
    },
    {
      question: "How do I choose between CBT, DBT, ACT, or other approaches?",
      answer: "You don't have to choose! Your therapist will recommend approaches based on your goals and what research shows works best. CBT is great for changing thought patterns and behaviors. DBT skills help with emotion regulation and distress tolerance. ACT focuses on values and acceptance. Trauma therapy uses specialized techniques for processing difficult experiences. Most therapists blend approaches to fit your needs."
    },
    {
      question: "Do you offer couples or family therapy?",
      answer: "Yes, we offer both couples and family therapy. These sessions help improve communication, resolve conflicts, and strengthen relationships. Sessions are typically 50-60 minutes and may happen weekly or every other week depending on your needs. We create a safe space for all voices to be heard and work toward shared goals."
    },
    {
      question: "How often will we meet—and for how long?",
      answer: "Most people start with weekly 45-50 minute sessions. As you build skills and see progress, we may space sessions to every other week or monthly for maintenance. Some people benefit from short-term therapy (8-12 sessions) for specific issues, while others prefer longer-term support. The length of treatment depends on your goals and progress—we'll decide together."
    },
    {
      question: "What if I don't connect with my therapist?",
      answer: "A good therapeutic relationship is essential for progress. If you don't feel comfortable or connected after a few sessions, please tell us. There's no judgment—fit matters. We can help you transition to another therapist in our clinic who might be a better match. Your comfort and trust are priorities."
    },
    {
      question: "Can I switch to another therapist in your clinic?",
      answer: "Absolutely. Sometimes a different therapist's style, background, or approach resonates better. We'll help you transition smoothly and ensure continuity of care. Your progress and comfort matter more than any one therapist's ego."
    },
    {
      question: "Do you offer telehealth? What states do you serve?",
      answer: "Yes, we offer secure video therapy for residents of Oklahoma and Texas. We're expanding to more states soon. You'll need a private space, reliable internet, and a device with camera and microphone. Some situations may benefit from in-person sessions, which we also offer. We'll discuss what works best for you."
    },
    {
      question: "Is therapy confidential? What are the exceptions?",
      answer: "Yes, therapy is confidential and protected by HIPAA. We use secure platforms and don't share information without your written permission. Legal exceptions include: risk of harm to yourself or others, suspected abuse or neglect of children/elders/dependent adults, and court orders. We review these limits clearly at your first session so there are no surprises."
    },
    {
      question: "Do I need medication in addition to therapy?",
      answer: "Not necessarily. Many people do well with therapy alone. For some conditions (like moderate-to-severe depression or anxiety), combining therapy with medication leads to better outcomes. We'll discuss whether medication might help and can connect you with our psychiatric team if interested. The choice is always yours."
    },
    {
      question: "Is therapy for mental health emergencies?",
      answer: "No. Therapy is not an emergency service. If you're in immediate danger or experiencing a crisis, please call 911 or text/call 988 (Suicide & Crisis Lifeline) for 24/7 support. Our therapists are available during scheduled sessions and may offer urgent appointments for established clients during business hours, but we cannot provide crisis intervention outside of sessions."
    },
    {
      question: "What's your cancellation policy?",
      answer: "Please give us 24-48 hours notice if you need to cancel or reschedule. Late cancellations or no-shows may result in a fee and can delay your progress. We understand life happens—just let us know as soon as possible. Consistent attendance helps therapy work better."
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-green-100 text-green-700 rounded-full px-6 py-2 text-sm font-medium mb-4">
              <HelpCircle className="h-4 w-4 mr-2" />
              Frequently Asked Questions
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Common Questions About Therapy
            </h2>
            <p className="text-xl text-gray-600">
              Clear answers to help you feel confident about starting counseling
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
