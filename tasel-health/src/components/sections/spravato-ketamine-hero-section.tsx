'use client'

import { Button } from '@/components/ui/button'
import { CheckCircle, Award, Pill, Activity } from 'lucide-react'
import Link from 'next/link'
import { useConsultation } from '@/contexts/consultation-context'

export function SpravatoKetamineHeroSection() {
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
              Spravato® (Esketamine) & Ketamine - FDA-Approved Treatment
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Breakthrough Treatment for
              <span className="block text-teal-300">Treatment-Resistant Depression</span>
            </h1>
            
            <p className="text-xl text-purple-100 leading-relaxed max-w-3xl mx-auto">
              FDA-approved Spravato® (esketamine) nasal spray and ketamine infusion therapy offer 
              rapid relief for depression that hasn&apos;t responded to traditional treatments. 
              Fast-acting, effective, and administered under medical supervision.
            </p>
            <p className="text-base text-purple-200 mt-4">
              Learn more in our Knowledge Hub: <Link href="/knowledge-hub/ketamine" className="text-teal-300 underline hover:no-underline font-medium">Spravato® & Ketamine resources</Link>.
            </p>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-5 w-5 text-teal-300 flex-shrink-0" />
                <span className="text-purple-100 text-sm">FDA-Approved</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-5 w-5 text-teal-300 flex-shrink-0" />
                <span className="text-purple-100 text-sm">Rapid Relief</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-5 w-5 text-teal-300 flex-shrink-0" />
                <span className="text-purple-100 text-sm">Medical Supervision</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-5 w-5 text-teal-300 flex-shrink-0" />
                <span className="text-purple-100 text-sm">Treatment-Resistant</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button 
                size="lg"
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg font-semibold"
                onClick={() => showForm('Spravato/Ketamine', 'spravato-hero')}
              >
                Schedule Consultation
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg font-semibold"
                asChild
              >
                <a href="#overview">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
