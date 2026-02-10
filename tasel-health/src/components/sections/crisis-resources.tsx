'use client'

import { Card } from '@/components/ui/card'
import { AlertTriangle, Phone, MessageSquare, Calendar } from 'lucide-react'

export function CrisisResources() {
  return (
    <section className="py-12 bg-red-50">
      <div className="container mx-auto px-4">
        <Card className="border-red-200 bg-red-50/50 shadow-lg">
          <div className="p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="bg-red-100 rounded-full p-3 flex-shrink-0">
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  In Crisis? Get Help Now
                </h3>
                <p className="text-gray-700">
                  If you or someone you know is in immediate danger or experiencing a mental health emergency, 
                  please reach out for help right away.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {/* 911 */}
              <Card className="p-6 bg-white border-red-200">
                <div className="text-center">
                  <Phone className="h-10 w-10 text-red-600 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Emergency</h4>
                  <p className="text-3xl font-bold text-red-600 mb-2">911</p>
                  <p className="text-sm text-gray-600">
                    Life-threatening emergency or immediate danger
                  </p>
                </div>
              </Card>

              {/* 988 Lifeline */}
              <Card className="p-6 bg-white border-red-200">
                <div className="text-center">
                  <Phone className="h-10 w-10 text-red-600 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">24/7 Crisis Lifeline</h4>
                  <p className="text-3xl font-bold text-red-600 mb-2">988</p>
                  <p className="text-sm text-gray-600">
                    Suicide & Crisis Lifeline - Call or text anytime
                  </p>
                </div>
              </Card>

              {/* Crisis Text */}
              <Card className="p-6 bg-white border-red-200">
                <div className="text-center">
                  <MessageSquare className="h-10 w-10 text-red-600 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Crisis Text Line</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Text <span className="font-bold">HELLO</span> to
                  </p>
                  <p className="text-3xl font-bold text-red-600 mb-2">741741</p>
                  <p className="text-sm text-gray-600">
                    Free, confidential support
                  </p>
                </div>
              </Card>
            </div>

            {/* Our Urgent Support */}
            <Card className="p-6 bg-blue-50 border-blue-200">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Urgent Medication Concerns</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    If you're experiencing concerning medication side effects during business hours, 
                    we can offer <strong>urgent same-day or next-day appointments</strong> to help resolve the issue. 
                    Call us at <a href="tel:+14059341681" className="text-blue-600 hover:text-blue-700 font-semibold">405-934-1681</a> (Oklahoma City) or <a href="tel:+12102022341" className="text-blue-600 hover:text-blue-700 font-semibold">210-202-2341</a> (San Antonio) during 
                    business hours.
                  </p>
                </div>
              </div>
            </Card>

            <div className="mt-6 p-4 bg-white rounded-lg border border-red-200">
              <p className="text-sm text-gray-700">
                <strong>Important:</strong> Our clinic does not provide 24/7 emergency services. For psychiatric emergencies 
                outside of business hours, please use the crisis resources above or visit your nearest emergency room.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
