'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react'
import { useConsultation } from '@/contexts/consultation-context'

export function LocationContact() {
  const { showForm } = useConsultation()

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our team',
      details: 'OKC: 405-934-1681 | SA: 210-202-2341',
      action: 'Call Oklahoma City',
      href: 'tel:+14059341681',
      primary: true
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us a message',
      details: 'info@taselhealth.com',
      action: 'Send Email',
      href: 'mailto:info@taselhealth.com',
      primary: true
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Come to our clinic',
      details: '9210 S Western, Suite A-21, Oklahoma City, OK 73139',
      action: 'Get Directions',
      href: 'https://maps.google.com/?q=9210+S+Western+Suite+A-21+Oklahoma+City+OK+73139',
      primary: false
    },
    {
      icon: Clock,
      title: 'Schedule Appointment',
      description: 'Book your consultation',
      details: 'Flexible scheduling available',
      action: 'Schedule Now',
      href: '#',
      primary: false
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Visit?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contact us to schedule your visit or get answers to any questions about our location.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <Card 
                key={method.title}
                className={`tasel-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group ${
                  method.primary ? 'border-lavender-200 bg-gradient-to-br from-lavender-50 to-teal-50' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className={`mx-auto mb-4 p-4 rounded-full w-fit group-hover:scale-110 transition-transform duration-300 ${
                    method.primary 
                      ? 'bg-gradient-to-r from-lavender-100 to-teal-100' 
                      : 'bg-gray-100'
                  }`}>
                    <Icon className={`h-8 w-8 ${
                      method.primary ? 'text-lavender-600' : 'text-gray-600'
                    }`} />
                  </div>
                  <CardTitle className={`text-xl font-semibold mb-2 ${
                    method.primary ? 'text-lavender-600' : 'text-gray-900'
                  }`}>
                    {method.title}
                  </CardTitle>
                  <p className="text-gray-600 text-sm mb-4">
                    {method.description}
                  </p>
                </CardHeader>
                
                <CardContent className="text-center">
                  <p className={`text-lg font-medium mb-4 ${
                    method.primary ? 'text-lavender-700' : 'text-gray-700'
                  }`}>
                    {method.details}
                  </p>
                  
                  <Button 
                    variant={method.primary ? "default" : "outline"}
                    className={`w-full group-hover:scale-105 transition-transform duration-300 ${
                      method.primary 
                        ? 'bg-lavender-600 hover:bg-lavender-700 text-white' 
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={method.title === 'Schedule Appointment' ? () => showForm('', 'location-page') : undefined}
                    asChild={method.title !== 'Schedule Appointment'}
                  >
                    {method.title === 'Schedule Appointment' ? (
                      method.action
                    ) : (
                      <a href={method.href}>
                        {method.action}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    )}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="tasel-card max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Questions About Our Location?
              </h3>
              <p className="text-gray-600 mb-6">
                Our team is here to help with directions, parking information, or any other 
                questions about visiting our facility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="gradient"
                  onClick={() => showForm('', 'location-questions')}
                >
                  Ask a Question
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  asChild
                >
                  <a href="tel:+14059341681">
                    <Phone className="h-5 w-5 mr-2" />
                    Call OKC (405-934-1681)
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                >
                  <a href="tel:+12102022341">
                    <Phone className="h-5 w-5 mr-2" />
                    Call SA (210-202-2341)
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
