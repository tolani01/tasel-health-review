'use client'

import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, MessageCircle, Search, FileText, Users, Heart } from 'lucide-react'

export function CareProcess() {
  const processSteps = [
    {
      step: 1,
      icon: MessageCircle,
      title: 'Free Consultation',
      description: 'Discuss your needs, goals, and concerns with our team',
      details: 'Initial conversation to understand your situation and determine if comprehensive care is right for you.'
    },
    {
      step: 2,
      icon: Search,
      title: 'Clinical Evaluation',
      description: 'Comprehensive assessment of your mental health and needs',
      details: 'Thorough evaluation including history, symptoms, and current functioning to create your personalized treatment plan.'
    },
    {
      step: 3,
      icon: FileText,
      title: 'Treatment Plan',
      description: 'Personalized approach combining multiple evidence-based therapies',
      details: 'Custom treatment plan that may include TMS therapy, medication management, counseling, or a combination of treatments.'
    },
    {
      step: 4,
      icon: Users,
      title: 'Coordinated Care',
      description: 'Multiple treatments working together for better outcomes',
      details: 'Seamless integration of different treatment modalities with regular coordination between your care team.'
    },
    {
      step: 5,
      icon: Heart,
      title: 'Ongoing Support',
      description: 'Regular monitoring and adjustment to ensure optimal results',
      details: 'Continuous follow-up, progress monitoring, and treatment adjustments to help you achieve your goals.'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Comprehensive Care Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A clear, structured path to mental wellness with our proven 5-step process
          </p>
        </div>

        {/* Process Flow Diagram */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.step} className="flex flex-col lg:flex-row items-center">
                  {/* Step Card */}
                  <div className="relative w-full max-w-sm">
                    <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-lavender-500 to-teal-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="text-3xl font-bold text-lavender-600 mb-3">
                          {step.step}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {step.description}
                        </p>
                        <p className="text-sm text-gray-500">
                          {step.details}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Arrow (except for last step) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block mx-2">
                      <ArrowRight className="h-8 w-8 text-lavender-400" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
