'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MessageCircle, User, FileCheck, Pill, Activity, TrendingUp, CheckCircle, type LucideIcon } from 'lucide-react'
import { useState } from 'react'

export function SpravatoKetamineProcess() {
  const [activeStep, setActiveStep] = useState<number | null>(1)

  const steps = [
    {
      step: 1,
      icon: MessageCircle,
      title: "Free Consultation",
      duration: "15-20 minutes",
      description: "Meet with our medical team to discuss your symptoms, treatment history, and determine if Spravato® or ketamine therapy is right for you.",
      badge: "FREE",
      badgeColor: "bg-green-100 text-green-700"
    },
    {
      step: 2,
      icon: User,
      title: "Medical Evaluation",
      duration: "45-60 minutes",
      description: "Comprehensive medical and psychiatric evaluation to assess your condition, review medical history, and ensure you're a good candidate for treatment.",
      badge: "Medical Clearance",
      badgeColor: "bg-blue-100 text-blue-700"
    },
    {
      step: 3,
      icon: FileCheck,
      title: "Insurance & Authorization",
      duration: "1-2 weeks",
      description: "Our team verifies your insurance coverage and obtains prior authorization if needed. We'll work with you to explore all payment options.",
      badge: "Coverage Verified",
      badgeColor: "bg-purple-100 text-purple-700"
    },
    {
      step: 4,
      icon: Pill,
      title: "Treatment Sessions",
      duration: "2 hours (Spravato®) / 1 hour (Ketamine)",
      description: "Treatment is administered in our clinic under medical supervision. Spravato® is a nasal spray; ketamine is given via IV infusion. You'll be monitored throughout.",
      badge: "Supervised",
      badgeColor: "bg-teal-100 text-teal-700"
    },
    {
      step: 5,
      icon: Activity,
      title: "Post-Treatment Monitoring",
      duration: "2 hours post-treatment",
      description: "After treatment, you'll be monitored for 2 hours to ensure safety. You cannot drive for the rest of the day, so arrange transportation.",
      badge: "Safety First",
      badgeColor: "bg-indigo-100 text-indigo-700"
    },
    {
      step: 6,
      icon: TrendingUp,
      title: "Progress Assessment",
      duration: "Weekly",
      description: "Regular check-ins with your provider to monitor progress, adjust treatment frequency, and track improvement in your symptoms.",
      badge: "Optimized",
      badgeColor: "bg-pink-100 text-pink-700"
    },
    {
      step: 7,
      icon: CheckCircle,
      title: "Maintenance & Follow-Up",
      duration: "Ongoing",
      description: "After initial treatment course, maintenance sessions may be recommended to sustain benefits. Long-term follow-up ensures continued wellness.",
      badge: "Long-Term",
      badgeColor: "bg-emerald-100 text-emerald-700"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-teal-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center bg-teal-100 text-teal-700 rounded-full px-6 py-2 text-sm font-medium mb-4">
            Treatment Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Spravato®/Ketamine Treatment Journey
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            A structured, medically supervised path from consultation to lasting relief—designed with your safety and success in mind
          </p>
        </div>

        {/* Timeline Overview */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-lavender-600 mb-1">7</div>
                <div className="text-sm text-gray-600">Steps</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-1">4-8</div>
                <div className="text-sm text-gray-600">Weeks</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600 mb-1">2-8</div>
                <div className="text-sm text-gray-600">Sessions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-1">70%+</div>
                <div className="text-sm text-gray-600">Response Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
            {steps.map((step) => {
              const Icon = step.icon
              const isActive = activeStep === step.step
              
              return (
                <Card 
                  key={step.step} 
                  className={`cursor-pointer transition-all duration-300 ${
                    isActive 
                      ? 'ring-2 ring-lavender-500 shadow-lg scale-105' 
                      : 'hover:shadow-md hover:scale-102'
                  }`}
                  onClick={() => setActiveStep(step.step)}
                >
                  <div className="p-4 text-center">
                    <div className={`text-4xl font-bold mb-2 transition-colors ${
                      isActive ? 'text-lavender-600' : 'text-gray-300'
                    }`}>
                      {step.step.toString().padStart(2, '0')}
                    </div>

                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-2 transition-all ${
                      isActive 
                        ? 'bg-gradient-to-br from-lavender-500 to-teal-500' 
                        : 'bg-gradient-to-br from-lavender-100 to-teal-100'
                    }`}>
                      <Icon className={`h-6 w-6 ${isActive ? 'text-white' : 'text-lavender-600'}`} />
                    </div>

                    <h4 className="text-xs font-semibold text-gray-900 mb-1 leading-tight">{step.title}</h4>
                    <div className="text-xs text-gray-500">{step.duration}</div>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Active Step Details */}
          {activeStep && (
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-lavender-200">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-lavender-500 to-teal-500 flex items-center justify-center">
                    {(() => {
                      const activeStepData = steps.find(s => s.step === activeStep)
                      if (!activeStepData) return null
                      const Icon = activeStepData.icon
                      return <Icon className="h-8 w-8 text-white" />
                    })()}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-sm text-lavender-600 font-medium mb-1">Step {activeStep} of 7</div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {steps.find(s => s.step === activeStep)?.title}
                      </h3>
                    </div>
                    <div className={`${steps.find(s => s.step === activeStep)?.badgeColor} px-4 py-2 rounded-full text-sm font-semibold`}>
                      {steps.find(s => s.step === activeStep)?.badge}
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    {steps.find(s => s.step === activeStep)?.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Duration:</span> {steps.find(s => s.step === activeStep)?.duration}
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
                        disabled={activeStep === 1}
                      >
                        ← Previous
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setActiveStep(Math.min(7, activeStep + 1))}
                        disabled={activeStep === 7}
                      >
                        Next →
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Important Safety Information */}
        <div className="max-w-5xl mx-auto mt-16 pt-8 border-t border-gray-300">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-sm">
            <h4 className="text-sm font-bold text-gray-900 mb-3">Important Safety Information</h4>
            <div className="space-y-2 text-xs text-gray-600">
              <p>
                <strong>Driving Restriction:</strong> You cannot drive or operate machinery for the rest of the day after treatment. 
                Arrange for transportation home.
              </p>
              <p>
                <strong>Medical Supervision:</strong> All treatments are administered in our clinic under close medical supervision. 
                You'll be monitored for 2 hours after Spravato® treatment.
              </p>
              <p>
                <strong>Side Effects:</strong> Common side effects may include dissociation, dizziness, nausea, and sedation. 
                These typically resolve within hours. Serious side effects are rare but will be monitored.
              </p>
              <p className="italic">
                *Individual results may vary. Treatment outcomes depend on various factors including condition severity, 
                treatment adherence, and individual response. Response rates represent clinical trial and real-world data averages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
