'use client'

import { Card, CardContent } from '@/components/ui/card'
import { AlertCircle, CheckCircle } from 'lucide-react'

export function WhyWeExist() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Tasel Health Exists
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solving the real challenges facing mental health care in Oklahoma and Texas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* The Challenge */}
          <Card className="border-red-200 bg-red-50/50">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <AlertCircle className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">The Challenge</h3>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  Mental health care in Oklahoma has historically faced significant barriers:
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span><strong>Long wait times</strong> for psychiatric appointments (often 6-12 weeks)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span><strong>Limited access</strong> to advanced treatments like TMS therapy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span><strong>Fragmented care</strong> where medication, therapy, and brain stimulation happen in separate locations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span><strong>Poor coordination</strong> between providers leading to incomplete treatment</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Our Solution */}
          <Card className="border-teal-200 bg-teal-50/50">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-teal-100 rounded-full p-3 mr-4">
                  <CheckCircle className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Solution</h3>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  Tasel Health was created to change this:
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span><strong>Same-week consultations</strong> to get you started quickly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span><strong>Comprehensive services</strong> under one roof: BrainsWay Deep TMS™, psychiatry, and counseling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span><strong>Integrated care teams</strong> that communicate, coordinate, and collaborate</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span><strong>Evidence-based treatment</strong> combining multiple modalities for optimal outcomes</span>
                  </li>
                </ul>
                
                <div className="mt-6 p-4 bg-white rounded-lg border border-teal-200">
                  <p className="text-sm font-medium text-gray-900">
                    Serving Oklahoma City with expansion to San Antonio, Texas in 2025
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
