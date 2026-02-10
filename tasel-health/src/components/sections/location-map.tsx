'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Navigation, ExternalLink } from 'lucide-react'

export function LocationMap() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Find Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We have locations in Oklahoma City and San Antonio with easy access and convenient parking.
          </p>
        </div>

        {/* Oklahoma City */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Oklahoma City</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="tasel-card h-80">
                <CardContent className="p-0 h-full">
                  <iframe
                    title="Google Map - Tasel Health Oklahoma City"
                    aria-label="Google Map showing the location of Tasel Health at 9210 S Western, Suite A-21, Oklahoma City, OK 73139"
                    className="w-full h-full rounded-2xl"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=9210+S+Western+Suite+A-21+Oklahoma+City+OK+73139&output=embed"
                  />
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <Card className="tasel-card">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900">Oklahoma City</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a
                    href="https://maps.google.com/?q=9210+S+Western+Suite+A-21+Oklahoma+City+OK+73139"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-lavender-50 hover:bg-lavender-100 rounded-lg transition-colors duration-200"
                  >
                    <Navigation className="h-5 w-5 text-lavender-600 mr-3" />
                    <div>
                      <div className="font-medium text-gray-900">Get Directions</div>
                      <div className="text-sm text-gray-600">9210 S Western, Suite A-21</div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400 ml-auto" />
                  </a>
                  <a href="tel:+14059341681" className="flex items-center p-3 bg-teal-50 hover:bg-teal-100 rounded-lg transition-colors duration-200">
                    <MapPin className="h-5 w-5 text-teal-600 mr-3" />
                    <div>
                      <div className="font-medium text-gray-900">Call</div>
                      <div className="text-sm text-gray-600">(405) 934-1681</div>
                    </div>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* San Antonio */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">San Antonio</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="tasel-card h-80">
                <CardContent className="p-0 h-full">
                  <iframe
                    title="Google Map - Tasel Health San Antonio"
                    aria-label="Google Map showing the location of Tasel Health at 4402 Vance Jackson Rd, Suite 218, San Antonio, TX 78230"
                    className="w-full h-full rounded-2xl"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=4402+Vance+Jackson+Rd+Suite+218+San+Antonio+TX+78230&output=embed"
                  />
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <Card className="tasel-card">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900">San Antonio</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a
                    href="https://maps.google.com/?q=4402+Vance+Jackson+Rd+Suite+218+San+Antonio+TX+78230"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-lavender-50 hover:bg-lavender-100 rounded-lg transition-colors duration-200"
                  >
                    <Navigation className="h-5 w-5 text-lavender-600 mr-3" />
                    <div>
                      <div className="font-medium text-gray-900">Get Directions</div>
                      <div className="text-sm text-gray-600">4402 Vance Jackson Rd, Suite 218</div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400 ml-auto" />
                  </a>
                  <a href="tel:+12102022341" className="flex items-center p-3 bg-teal-50 hover:bg-teal-100 rounded-lg transition-colors duration-200">
                    <MapPin className="h-5 w-5 text-teal-600 mr-3" />
                    <div>
                      <div className="font-medium text-gray-900">Call</div>
                      <div className="text-sm text-gray-600">(210) 202-2341</div>
                    </div>
                  </a>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="font-medium text-gray-900">Fax</div>
                    <div className="text-sm text-gray-600">(210) 874-2022</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
