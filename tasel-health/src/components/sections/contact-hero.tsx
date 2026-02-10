'use client'

import { Phone, Mail, MapPin } from 'lucide-react'

export function ContactHero() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-teal-900 via-blue-800 to-purple-600 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/contact-pattern.svg')] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-base font-medium mb-6">
            <Phone className="h-5 w-5 mr-2" />
            Get In Touch
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Contact Us
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-12">
            We're here to help you on your mental health journey
          </p>

          {/* Quick Contact Info - Both Locations */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <a 
              href="tel:+14059341681"
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all"
            >
              <MapPin className="h-8 w-8 text-teal-300 mx-auto mb-3" />
              <div className="font-semibold mb-1">Oklahoma City</div>
              <div className="text-sm text-blue-100">9210 S Western, Suite A-21</div>
              <div className="text-sm text-blue-100">Oklahoma City, OK 73139</div>
              <div className="text-xs text-teal-300 mt-2">(405) 934-1681</div>
            </a>

            <a 
              href="tel:+12102022341"
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all"
            >
              <MapPin className="h-8 w-8 text-teal-300 mx-auto mb-3" />
              <div className="font-semibold mb-1">San Antonio</div>
              <div className="text-sm text-blue-100">4402 Vance Jackson Rd, Suite 218</div>
              <div className="text-sm text-blue-100">San Antonio, TX 78230</div>
              <div className="text-xs text-teal-300 mt-2">(210) 202-2341</div>
            </a>

            <a 
              href="mailto:info@taselhealth.com"
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all"
            >
              <Mail className="h-8 w-8 text-teal-300 mx-auto mb-3" />
              <div className="font-semibold mb-1">Email</div>
              <div className="text-sm text-blue-100">info@taselhealth.com</div>
            </a>

            <a 
              href="/location"
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all"
            >
              <Phone className="h-8 w-8 text-teal-300 mx-auto mb-3" />
              <div className="font-semibold mb-1">Hours</div>
              <div className="text-sm text-blue-100">Mon–Fri: 9AM–5PM</div>
              <div className="text-xs text-teal-300 mt-2">Sat & Sun: Closed</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
