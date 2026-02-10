'use client'

import { Heart, CheckCircle } from 'lucide-react'

export function CounselingHeroSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-green-900 via-green-800 to-teal-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/therapy-pattern.svg')] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 text-lg font-bold shadow-xl">
              <Heart className="h-6 w-6 mr-3 text-teal-300" />
              Counseling & Therapy Services
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Compassionate, Evidence-Based
              <span className="block text-teal-300">Counseling Built Around You</span>
            </h1>

            <p className="text-xl text-green-100 leading-relaxed max-w-3xl mx-auto">
              Licensed therapists providing proven approaches to help you develop skills, 
              process challenges, and achieve your mental health goals
            </p>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto pt-6">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-5 w-5 text-teal-300 flex-shrink-0" />
                <span className="text-green-100 text-sm">Same-week starts</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-5 w-5 text-teal-300 flex-shrink-0" />
                <span className="text-green-100 text-sm">Licensed therapists</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-5 w-5 text-teal-300 flex-shrink-0" />
                <span className="text-green-100 text-sm">Judgment-free care</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-5 w-5 text-teal-300 flex-shrink-0" />
                <span className="text-green-100 text-sm">OK & TX telehealth</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
