'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    title: 'Call Us',
    details: '(405) 555-0123',
    description: 'Speak with our team directly',
    action: 'Call Now'
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: 'info@taselhealth.com',
    description: 'Send us your questions',
    action: 'Send Email'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    details: '1234 Health Plaza, Oklahoma City, OK 73101',
    description: 'Come see our facility',
    action: 'Get Directions'
  },
  {
    icon: Clock,
    title: 'Hours',
    details: 'Mon–Fri: 9AM-5PM, Sat & Sun: Closed',
    description: 'After-hours by request only',
    action: 'View Hours'
  }
]

export function ContactCTA() {
  return (
    <section className="tasel-section bg-white relative z-0">
      <div className="tasel-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contact us today to schedule your consultation and start your journey to better mental health.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Get in Touch
              </h3>
              <p className="text-gray-600 mb-8">
                Our compassionate team is here to answer your questions and help you 
                find the right treatment approach for your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <Card 
                    key={info.title}
                    className="tasel-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center mb-2">
                        <div className="p-2 rounded-lg bg-gradient-to-r from-lavender-100 to-teal-100 mr-3">
                          <Icon className="h-5 w-5 text-lavender-600" />
                        </div>
                        <CardTitle className="text-lg font-semibold text-gray-900">
                          {info.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="text-gray-900 font-medium mb-1">
                        {info.details}
                      </div>
                      <div className="text-sm text-gray-600 mb-3">
                        {info.description}
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="w-full"
                      >
                        {info.action}
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* CTA Form */}
          <div className="bg-gradient-to-br from-lavender-50 to-teal-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Schedule Your Free Consultation
              </h3>
              <p className="text-gray-600">
                Take the first step towards better mental health with a free, 
                no-obligation consultation with our team.
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input 
                    type="text" 
                    className="tasel-input"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input 
                    type="text" 
                    className="tasel-input"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input 
                  type="email" 
                  className="tasel-input"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  className="tasel-input"
                  placeholder="(405) 555-0123"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Service
                </label>
                <select className="tasel-input">
                  <option value="">Select a service</option>
                  <option value="tms">TMS Therapy</option>
                  <option value="psychiatry">Psychiatric Care</option>
                  <option value="counseling">Therapy & Counseling</option>
                  <option value="comprehensive">Comprehensive Care</option>
                  <option value="consultation">Free Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message (Optional)
                </label>
                <textarea 
                  className="tasel-input min-h-[100px]"
                  placeholder="Tell us about your needs or questions..."
                />
              </div>

              <Button 
                size="lg" 
                variant="gradient" 
                className="w-full text-lg py-4"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <p className="text-sm text-gray-600 text-center">
                By submitting this form, you agree to our privacy policy and 
                consent to being contacted by our team.
              </p>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Why Patients Trust Tasel Health
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-2xl font-bold text-lavender-600 mb-2">100%</div>
                <div className="text-gray-600">Confidential & Private</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-lavender-600 mb-2">FDA</div>
                <div className="text-gray-600">Cleared Treatments</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-lavender-600 mb-2">5+</div>
                <div className="text-gray-600">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
