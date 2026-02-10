'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Brain, Pill, MessageSquare, Activity, ArrowRight } from 'lucide-react'

export function TreatmentIntegration() {
  const treatments = [
    {
      icon: Brain,
      title: 'TMS Therapy',
      description: 'Addresses brain chemistry and neural pathways',
      details: 'Non-invasive magnetic stimulation that targets specific brain regions associated with mood regulation and mental health conditions.'
    },
    {
      icon: Pill,
      title: 'Medication Management',
      description: 'Supports chemical balance and symptom management',
      details: 'Careful medication selection and monitoring to optimize brain chemistry and manage symptoms effectively.'
    },
    {
      icon: MessageSquare,
      title: 'Therapy & Counseling',
      description: 'Provides coping skills and behavioral change',
      details: 'Evidence-based therapeutic approaches including CBT, DBT, and other modalities to help you develop healthy coping strategies.'
    },
    {
      icon: Activity,
      title: 'Lifestyle Support',
      description: 'Holistic wellness and treatment adherence',
      details: 'Guidance on sleep, nutrition, exercise, and stress management to support your overall mental health and treatment success.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How Treatments Work Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Multiple evidence-based treatments working synergistically for better outcomes 
            than any single approach alone.
          </p>
        </div>

        {/* Clean and Simple Integration Layout */}
        <div className="max-w-5xl mx-auto">
          {/* Central Wellness Focus with Brain Image */}
          <div className="text-center mb-16">
            <div className="relative inline-block mb-6">
              {/* Brain Image Container */}
              <div className="w-48 h-48 mx-auto relative overflow-hidden rounded-full shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-lavender-100 to-teal-100 flex items-center justify-center">
                  {/* Brain Icon with Enhanced Styling */}
                  <Brain className="h-32 w-32 text-lavender-600" />
                </div>
                
                {/* Overlay with "Your Wellness" */}
                <div className="absolute inset-0 bg-gradient-to-br from-lavender-500/90 to-teal-500/90 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-xl font-bold">Your</div>
                    <div className="text-xl font-bold">Wellness</div>
                  </div>
                </div>
                
                {/* Subtle Animation Ring */}
                <div className="absolute inset-0 rounded-full border-4 border-lavender-300/50 animate-pulse"></div>
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Holistic Care Approach</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Multiple evidence-based treatments working together for better outcomes
            </p>
          </div>

          {/* Treatment Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {treatments.map((treatment, index) => {
              const Icon = treatment.icon
              return (
                <Card 
                  key={treatment.title}
                  className="tasel-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group text-center"
                >
                  <CardContent className="p-6">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-lavender-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-lavender-600" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-lavender-600 transition-colors duration-300">
                      {treatment.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {treatment.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Connection Visualization */}
          <div className="relative mb-16">
            {/* Connection Lines */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-lavender-200 via-purple-200 to-teal-200 transform -translate-y-1/2"></div>
            
            {/* Connection Dots */}
            <div className="hidden lg:flex justify-between items-center absolute top-1/2 left-0 right-0 transform -translate-y-1/2">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i}
                  className="w-3 h-3 bg-gradient-to-r from-lavender-400 to-teal-400 rounded-full"
                ></div>
              ))}
            </div>
          </div>

          {/* Enhanced Integration Statement */}
          <div className="text-center">
            <div className="max-w-4xl mx-auto">
              {/* Visual Connection Line */}
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-0.5 bg-gradient-to-r from-lavender-200 to-transparent"></div>
                <div className="w-3 h-3 bg-gradient-to-r from-lavender-400 to-teal-400 rounded-full mx-4"></div>
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-teal-200"></div>
              </div>
              
              {/* Enhanced Message */}
              <div className="bg-gradient-to-br from-lavender-50 via-purple-50 to-teal-50 rounded-3xl p-8 shadow-xl border border-lavender-100/50">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-lavender-500 to-teal-500 rounded-full flex items-center justify-center mr-4">
                    <ArrowRight className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Integrated Care</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                  Multiple evidence-based treatments working synergistically to achieve 
                  <span className="font-semibold text-lavender-600"> optimal outcomes</span> for your mental wellness journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
