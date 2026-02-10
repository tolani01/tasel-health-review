'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Phone, Mail, Calendar, Briefcase } from 'lucide-react'

export function AboutDualCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Connect?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you&apos;re seeking care or looking to join our team, we&apos;re here for you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* For Patients */}
          <Card className="border-teal-200 border-2 hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-10 text-center">
              <div className="bg-teal-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-10 w-10 text-teal-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                For Patients
              </h3>
              
              <p className="text-gray-700 mb-8 leading-relaxed">
                Start your mental health journey with a free consultation. 
                We&apos;ll help you understand your options and create a personalized treatment plan.
              </p>
              
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-6 text-lg"
                  asChild
                >
                  <a href="tel:+14059341681">
                    <Phone className="h-5 w-5 mr-2" />
                    Call Oklahoma City (405) 934-1681
                  </a>
                </Button>

                <Button 
                  size="lg"
                  variant="outline"
                  className="w-full border-teal-200 text-teal-700 hover:bg-teal-50 py-6 text-lg"
                  asChild
                >
                  <a href="tel:+12102022341">
                    <Phone className="h-5 w-5 mr-2" />
                    Call San Antonio (210) 202-2341
                  </a>
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full border-teal-200 text-teal-700 hover:bg-teal-50 py-6 text-lg"
                  asChild
                >
                  <a href="mailto:info@taselhealth.com">
                    <Mail className="h-5 w-5 mr-2" />
                    Email Us
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* For Providers */}
          <Card className="border-purple-200 border-2 hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-10 text-center">
              <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Briefcase className="h-10 w-10 text-purple-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                For Providers
              </h3>
              
              <p className="text-gray-700 mb-8 leading-relaxed">
                Join a collaborative team that&apos;s changing mental health care. 
                Explore career opportunities with cutting-edge technology and mentorship.
              </p>
              
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6 text-lg"
                  asChild
                >
                  <a href="mailto:info@taselhealth.com">
                    <Mail className="h-5 w-5 mr-2" />
                    Apply Today
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
