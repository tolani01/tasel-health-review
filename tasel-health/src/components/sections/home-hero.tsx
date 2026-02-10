'use client'

import { CheckCircle, Brain } from 'lucide-react'

export function HomeHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-purple-900 via-blue-800 to-teal-600 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 text-lg font-bold shadow-xl">
              <Brain className="h-6 w-6 mr-4 text-teal-300" />
              Advanced Mental Health Care
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
              Transform Your
              <span className="block text-teal-300">Mental Health Journey</span>
            </h1>
            
            <p className="text-xl text-purple-100 leading-relaxed max-w-3xl mx-auto">
              Comprehensive care combining BrainsWay Deep TMS™ therapy, Spravato®/Ketamine, psychiatry, and counseling 
              with proven results for depression, anxiety, and OCD.
            </p>

            {/* Key Benefits - Simplified */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-4xl mx-auto pt-6">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-5 w-5 text-teal-300 flex-shrink-0" />
                <span className="text-purple-100 text-sm">FDA-Cleared TMS</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-5 w-5 text-teal-300 flex-shrink-0" />
                <span className="text-purple-100 text-sm">Spravato®/Ketamine</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-5 w-5 text-teal-300 flex-shrink-0" />
                <span className="text-purple-100 text-sm">Same-Week Starts</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-5 w-5 text-teal-300 flex-shrink-0" />
                <span className="text-purple-100 text-sm">Most Insurance Accepted</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-5 w-5 text-teal-300 flex-shrink-0" />
                <span className="text-purple-100 text-sm">Telehealth Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

