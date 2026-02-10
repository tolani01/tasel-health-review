'use client'

import { HeroImage } from '@/components/static-content/HeroImage'
import { InfoCard } from '@/components/static-content/InfoCard'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { CheckCircle, Brain, Zap, Award } from 'lucide-react'
import { useConsultation } from '@/contexts/consultation-context'

export function TMSHeroSection() {
  const { showForm } = useConsultation()
  
  return (
    <section className="relative py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-teal-600 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/neural-pattern.svg')] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 text-lg font-bold shadow-xl">
              <Award className="h-6 w-6 mr-4 text-teal-300" />
              BrainsWay Deep TMS™ - FDA-Cleared Treatment
            </div>
            
            <p className="text-xl text-purple-100 leading-relaxed max-w-3xl mx-auto">
              Advanced magnetic stimulation therapy for depression, anxiety, OCD, and more. 
              Non-invasive, medication-free treatment with proven results.
            </p>

            {/* Key Benefits - Simplified */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-5 w-5 text-teal-300 flex-shrink-0" />
                <span className="text-purple-100 text-sm">75% Success Rate</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-5 w-5 text-teal-300 flex-shrink-0" />
                <span className="text-purple-100 text-sm">Non-Invasive</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-5 w-5 text-teal-300 flex-shrink-0" />
                <span className="text-purple-100 text-sm">No Medication</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-5 w-5 text-teal-300 flex-shrink-0" />
                <span className="text-purple-100 text-sm">Outpatient</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
