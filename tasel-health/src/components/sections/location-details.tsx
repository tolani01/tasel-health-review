'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Car, Wifi, Shield, Clock } from 'lucide-react'

export function LocationDetails() {
  const amenities = [
    {
      icon: Car,
      title: 'Free Parking',
      description: 'Convenient parking available on-site with accessible spaces'
    },
    {
      icon: Wifi,
      title: 'Free WiFi',
      description: 'Complimentary high-speed internet for your comfort'
    },
    {
      icon: Shield,
      title: 'Secure Facility',
      description: 'Safe, private environment with controlled access'
    },
    {
      icon: Clock,
      title: 'Clinic Hours',
      description: 'Mon–Fri 9AM–5PM. After-hours by request. Closed Sat/Sun.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Locations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conveniently located in Oklahoma City and San Antonio with easy access and all the amenities 
            you need for a comfortable visit.
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Oklahoma City Address & Contact */}
          <Card className="tasel-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                <MapPin className="h-6 w-6 text-lavender-600 mr-3" />
                Oklahoma City
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Physical Address</h3>
                <p className="text-gray-600">
                  9210 S Western, Suite A-21<br />
                  Oklahoma City, OK 73139
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <a href="tel:+14059341681" className="text-lavender-600 hover:text-lavender-700 font-medium">405-934-1681</a>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">info@taselhealth.com</p>
              </div>
            </CardContent>
          </Card>

          {/* San Antonio Address & Contact */}
          <Card className="tasel-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                <MapPin className="h-6 w-6 text-lavender-600 mr-3" />
                San Antonio
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Physical Address</h3>
                <p className="text-gray-600">
                  4402 Vance Jackson Rd, Suite 218<br />
                  San Antonio, TX 78230
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <a href="tel:+12102022341" className="text-lavender-600 hover:text-lavender-700 font-medium">210-202-2341</a>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Fax</h3>
                <p className="text-gray-600">210-874-2022</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">info@taselhealth.com</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Amenities */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Facility Amenities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {amenities.map((amenity) => {
              const Icon = amenity.icon
              return (
                <Card key={amenity.title} className="tasel-card hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-lavender-100 to-teal-100">
                        <Icon className="h-5 w-5 text-lavender-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {amenity.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {amenity.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
