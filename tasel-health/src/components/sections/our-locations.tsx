'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Globe, Phone } from 'lucide-react'

export function OurLocations() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Where We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Serving Oklahoma & Texas with plans to expand to additional states
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Oklahoma City Location */}
          <Card className="border-teal-200 border-2 hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="bg-teal-100 rounded-full p-3 mr-4">
                    <MapPin className="h-8 w-8 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Oklahoma City</h3>
                    <Badge className="mt-1 bg-green-100 text-green-700">Now Open</Badge>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="font-semibold mb-1">Address:</p>
                  <p>9210 S Western, Suite A-21</p>
                  <p>Oklahoma City, OK 73139</p>
                </div>
                
                <div>
                  <p className="font-semibold mb-1">Phone:</p>
                  <a href="tel:+14059341681" className="text-teal-600 hover:text-teal-700 font-medium">
                    (405) 934-1681
                  </a>
                </div>
                
                <div>
                  <p className="font-semibold mb-1">Services:</p>
                  <ul className="text-sm space-y-1">
                    <li>• BrainsWay Deep TMS™ Therapy</li>
                    <li>• Psychiatric Medication Management</li>
                    <li>• Counseling & Therapy</li>
                    <li>• Telehealth Available</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* San Antonio Location */}
          <Card className="border-purple-200 border-2 hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="bg-purple-100 rounded-full p-3 mr-4">
                    <MapPin className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">San Antonio</h3>
                    <Badge className="mt-1 bg-green-100 text-green-700">Now Open</Badge>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="font-semibold mb-1">Address:</p>
                  <p>4402 Vance Jackson Rd, Suite 218</p>
                  <p>San Antonio, TX 78230</p>
                </div>
                
                <div>
                  <p className="font-semibold mb-1">Phone:</p>
                  <a href="tel:+12102022341" className="text-purple-600 hover:text-purple-700 font-medium">
                    (210) 202-2341
                  </a>
                </div>
                
                <div>
                  <p className="font-semibold mb-1">Fax:</p>
                  <p className="text-gray-600">(210) 874-2022</p>
                </div>
                
                <div>
                  <p className="font-semibold mb-1">Services:</p>
                  <ul className="text-sm space-y-1">
                    <li>• BrainsWay Deep TMS™ Therapy</li>
                    <li>• Spravato/Ketamine Treatment</li>
                    <li>• Psychiatric Medication Management</li>
                    <li>• Counseling & Therapy</li>
                    <li>• Telehealth Available</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-4 mt-4">
                  <p className="text-sm font-medium text-purple-900">
                    🎉 We&apos;re hiring providers in San Antonio! 
                    <a href="/careers" className="text-purple-600 hover:text-purple-700 underline ml-1">
                      Apply now
                    </a>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Telehealth Coverage */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-teal-50 to-purple-50 border-teal-200">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-teal-100 rounded-full p-4 mr-4">
                  <Globe className="h-10 w-10 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Telehealth Services</h3>
              </div>
              
              <p className="text-center text-gray-700 text-lg mb-6">
                Through secure telehealth, we currently serve patients <strong>statewide</strong> across 
                Oklahoma and Texas, with plans to expand to additional states.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 text-center">
                <div className="bg-white rounded-lg p-4">
                  <p className="font-bold text-gray-900 mb-2">✓ Oklahoma</p>
                  <p className="text-sm text-gray-600">Statewide telehealth</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="font-bold text-gray-900 mb-2">✓ Texas</p>
                  <p className="text-sm text-gray-600">Statewide telehealth</p>
                </div>
              </div>
              
              <p className="text-center text-sm text-gray-600 mt-6">
                <Phone className="inline h-4 w-4 mr-1" />
                Call <a href="tel:+14059341681" className="text-teal-600 hover:text-teal-700 font-medium">(405) 934-1681</a> (Oklahoma City) or <a href="tel:+12102022341" className="text-purple-600 hover:text-purple-700 font-medium">(210) 202-2341</a> (San Antonio) to verify coverage in your area
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
