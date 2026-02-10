'use client'

import { Heart } from 'lucide-react'

export function AboutHero() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-teal-900 via-blue-800 to-purple-600 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/about-pattern.svg')] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-base font-medium mb-6">
            <Heart className="h-5 w-5 mr-2" />
            About Our Mission
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            About Tasel Health
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8">
            Transforming Mental Health Care, One Life at a Time
          </p>

          <p className="text-lg text-emerald-100 leading-relaxed max-w-3xl mx-auto">
            We bring together advanced treatments, compassionate providers, and evidence-based care 
            to help you achieve lasting mental wellness.
          </p>
        </div>
      </div>
    </section>
  )
}