'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronDown, User, Briefcase } from 'lucide-react'

export function AboutFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    // Patient Questions
    {
      type: 'patient',
      question: 'What insurance do you accept?',
      answer: 'We accept most major commercial and government insurance plans, including UnitedHealthcare, Blue Cross Blue Shield, Aetna, Cigna, Humana, Medicare, and Medicaid. We also offer affordable self-pay options. Visit our Insurance page for a complete list or call us to verify your specific plan.'
    },
    {
      type: 'patient',
      question: 'Do you offer telehealth services?',
      answer: 'Yes! We provide secure telehealth services statewide across Oklahoma and Texas for psychiatry and counseling appointments. TMS therapy requires in-person visits at our Oklahoma City clinic (San Antonio opening 2025).'
    },
    {
      type: 'patient',
      question: 'How quickly can I be seen?',
      answer: 'We typically offer same-week consultations for new patients. Most patients can schedule their first appointment within 3-7 business days. For urgent medication concerns during business hours, we can often accommodate same-day or next-day appointments.'
    },
    {
      type: 'patient',
      question: 'What is your success rate with TMS therapy?',
      answer: 'Our TMS therapy achieves approximately 75% response rates for major depressive disorder, consistent with clinical trial data. Success rates vary by condition and individual factors, and we track outcomes carefully to ensure optimal results.'
    },
    {
      type: 'patient',
      question: 'What conditions do you treat?',
      answer: 'We treat major depressive disorder, anxiety disorders, OCD, PTSD, bipolar disorder, ADHD, and other mental health conditions. We offer TMS therapy, psychiatric medication management, and evidence-based counseling approaches including CBT, DBT, and EMDR.'
    },
    // Career Questions
    {
      type: 'career',
      question: 'What positions are you currently hiring for?',
      answer: 'We are actively hiring psychiatrists, psychiatric nurse practitioners (PMHNPs), physician assistants, licensed therapists (LPC, LMFT, LCSW), TMS technicians, medical assistants, and care coordinators. Check our Careers section above or email info@taselhealth.com for current openings.'
    },
    {
      type: 'career',
      question: 'Do you accept new graduates?',
      answer: 'Absolutely! We welcome new graduates across all disciplines and provide robust mentorship, clinical supervision, and ongoing training. Our experienced team offers excellent learning opportunities and professional development for early-career providers.'
    },
    {
      type: 'career',
      question: 'Is training provided for TMS therapy?',
      answer: 'Yes! We provide comprehensive BrainsWay Deep TMS™ training and certification for both medical providers and TMS technicians. No prior TMS experience is required—we will train you on this cutting-edge technology.'
    },
    {
      type: 'career',
      question: 'What is the work environment like?',
      answer: 'Our culture is collaborative, supportive, and mission-driven. Providers work as a coordinated team (not solo practice), have access to cutting-edge technology, and maintain work-life balance with flexible scheduling. We emphasize ongoing professional development and a judgment-free, compassionate approach to patient care.'
    },
    {
      type: 'career',
      question: 'How do I apply?',
      answer: 'Send your resume and brief cover letter to info@taselhealth.com with the position title in your subject line. We review applications weekly and respond promptly to all qualified candidates. Feel free to include questions about the role, compensation, or our practice environment.'
    },
    {
      type: 'career',
      question: 'Can I shadow or tour the clinic?',
      answer: 'Yes! We welcome prospective providers to tour our Oklahoma City clinic and meet our team. Email info@taselhealth.com to schedule a visit and see our BrainsWay Deep TMS™ technology, meet current staff, and learn more about our integrated care model.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Questions for patients and prospective team members
          </p>
          
          {/* Legend */}
          <div className="flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center">
              <User className="h-4 w-4 text-teal-600 mr-2" />
              <span className="text-gray-600">Patient Questions</span>
            </div>
            <div className="flex items-center">
              <Briefcase className="h-4 w-4 text-purple-600 mr-2" />
              <span className="text-gray-600">Career Questions</span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            const Icon = faq.type === 'patient' ? User : Briefcase
            const iconColor = faq.type === 'patient' ? 'text-teal-600' : 'text-purple-600'
            const borderColor = faq.type === 'patient' ? 'border-teal-200' : 'border-purple-200'
            
            return (
              <Card 
                key={index}
                className={`${borderColor} border-l-4 cursor-pointer hover:shadow-md transition-all`}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start flex-1">
                      <Icon className={`h-5 w-5 ${iconColor} mr-3 mt-0.5 flex-shrink-0`} />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 pr-8">
                          {faq.question}
                        </h3>
                        {isOpen && (
                          <p className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        )}
                      </div>
                    </div>
                    <ChevronDown 
                      className={`h-5 w-5 text-gray-400 flex-shrink-0 transition-transform ${
                        isOpen ? 'transform rotate-180' : ''
                      }`}
                    />
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
