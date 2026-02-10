'use client'

import { Button } from '@/components/ui/button'
import { MapPin, Clock, Phone, ArrowRight } from 'lucide-react'

export function LocationHero() {
  return (
    <section className="relative min-h-[50vh] bg-gradient-to-br from-purple-900 via-indigo-900 to-teal-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-teal-600/10"></div>
      
      <div className="container mx-auto px-4 py-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[40vh]">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                <MapPin className="h-4 w-4 mr-2" />
                Visit Us
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Visit
                <span className="block text-teal-300">Tasel Health</span>
                <span className="block text-2xl lg:text-3xl font-normal mt-2">
                  Your Mental Health Journey Starts Here
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                Located in the heart of Oklahoma City, our state-of-the-art facility 
                provides a welcoming environment for your mental health care.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                size="lg" 
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 text-lg font-semibold"
                asChild
              >
                <a href="#directions">
                  Get Directions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  size="lg"
                  className="bg-white text-black hover:bg-white hover:text-black px-6 py-4 text-base font-extrabold tracking-wide shadow-lg"
                  asChild
                >
                  <a href="tel:+14059341681">
                    <Phone className="h-5 w-5 mr-2" />
                    Call OKC (405-934-1681)
                  </a>
                </Button>
                <Button 
                  size="lg"
                  className="bg-white text-black hover:bg-white hover:text-black px-6 py-4 text-base font-extrabold tracking-wide shadow-lg"
                  asChild
                >
                  <a href="tel:+12102022341">
                    <Phone className="h-5 w-5 mr-2" />
                    Call SA (210-202-2341)
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Content - Quick Info Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/15 backdrop-blur-sm border-white/30 p-5 rounded-xl">
              <div className="text-center">
                <MapPin className="h-7 w-7 text-teal-300 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-1">Address</h3>
                <p className="text-white/90 text-sm">
                  9210 S Western, Suite A-21<br />
                  Oklahoma City, OK 73139
                </p>
              </div>
            </div>

            <div className="bg-white/15 backdrop-blur-sm border-white/30 p-5 rounded-xl">
              <div className="text-center">
                <Clock className="h-7 w-7 text-teal-300 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-1">Hours</h3>
                <p className="text-white font-semibold text-base tracking-wide">
                  Mon–Fri: 9AM–5PM
                </p>
                <p className="text-white/90 text-sm">
                  Sat & Sun: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
