'use client'

import { Brain } from 'lucide-react'

export function ComprehensiveCareHero() {

  return (
    <section className="relative py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-teal-800 overflow-hidden">
      {/* Research Lab Background - CSS Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(34, 197, 94, 0.3) 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, rgba(34, 197, 94, 0.3) 2px, transparent 2px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.2) 1px, transparent 1px),
            linear-gradient(rgba(34, 197, 94, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px, 60px 60px, 30px 30px, 30px 30px',
          backgroundPosition: '0 0, 30px 30px, 0 0, 0 0'
        }}
      ></div>
      
      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-indigo-900/50 to-teal-800/60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="inline-flex items-center bg-white/15 backdrop-blur-sm rounded-full px-8 py-4 text-lg md:text-xl font-semibold shadow-lg">
              <Brain className="h-6 w-6 md:h-7 md:w-7 mr-3" />
              Comprehensive Care
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Research-Driven,
              <span className="block text-teal-300">Individually Tailored</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}
