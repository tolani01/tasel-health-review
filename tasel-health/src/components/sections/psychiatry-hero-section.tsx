'use client'

import { Stethoscope, CheckCircle } from 'lucide-react'

export function PsychiatryHeroSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/medical-pattern.svg')] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 text-lg font-bold shadow-xl">
              <Stethoscope className="h-6 w-6 mr-3 text-teal-300" />
              Psychiatric Services & Medication Management
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Safe, Evidence-Based
              <span className="block text-teal-300">Medication Care</span>
            </h1>

            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Personalized medication management with close monitoring and collaborative care for optimal mental health outcomes
            </p>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto pt-6">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-5 w-5 text-teal-300 flex-shrink-0" />
                <span className="text-blue-100 text-sm">Same-week starts</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-5 w-5 text-teal-300 flex-shrink-0" />
                <span className="text-blue-100 text-sm">Collaborative care</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-5 w-5 text-teal-300 flex-shrink-0" />
                <span className="text-blue-100 text-sm">Regular monitoring</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-5 w-5 text-teal-300 flex-shrink-0" />
                <span className="text-blue-100 text-sm">Measurable results</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
