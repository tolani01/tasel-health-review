'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MessageCircle, User, Brain, Settings, Activity, TrendingUp, CheckCircle, ArrowRight, type LucideIcon } from 'lucide-react'
import { useState } from 'react'

interface ConsultationStep {
  step: number
  icon: LucideIcon
  title: string
  subtitle: string
  duration: string
  bullets: string[]
  badge: string
  badgeColor: string
  footer: string
}

interface TreatmentStep {
  step: number
  icon: LucideIcon
  title: string
  subtitle: string
  duration: string
  description: string
  benefit: string
}

export function TMSProcess() {
  const [activeStep, setActiveStep] = useState<number | null>(1) // Default to first step
  const steps = [
    {
      step: 1,
      icon: MessageCircle,
      title: "Free Consultation",
      duration: "10-15 minutes",
      description: "Meet with our TMS Care Team to discuss your symptoms, learn about TMS therapy, and explore your options.",
      badge: "FREE",
      badgeColor: "bg-green-100 text-green-700"
    },
    {
      step: 2,
      icon: User,
      title: "Physician Evaluation",
      duration: "45-60 minutes",
      description: "Your physician reviews your medical history, evaluates your condition, and creates a personalized treatment plan.",
      badge: "Medical Clearance",
      badgeColor: "bg-blue-100 text-blue-700"
    },
    {
      step: 3,
      icon: Brain,
      title: "Brain Mapping",
      duration: "30 minutes",
      description: "Advanced brain mapping identifies precise target areas for optimal magnetic stimulation.",
      badge: "Personalized",
      badgeColor: "bg-purple-100 text-purple-700"
    },
    {
      step: 4,
      icon: Settings,
      title: "Device Setup",
      duration: "15 minutes",
      description: "Comfortable positioning and calibration of TMS device for your treatment sessions.",
      badge: "Comfort",
      badgeColor: "bg-teal-100 text-teal-700"
    },
    {
      step: 5,
      icon: Activity,
      title: "Treatment Sessions",
      duration: "20-40 min/session",
      description: "Daily magnetic stimulation targeting specific brain regions. Complete 20-36 sessions over 4-6 weeks.",
      badge: "Non-Invasive",
      badgeColor: "bg-indigo-100 text-indigo-700"
    },
    {
      step: 6,
      icon: TrendingUp,
      title: "Progress Monitoring",
      duration: "Weekly",
      description: "Regular assessments to track improvement and make data-driven adjustments to your treatment.",
      badge: "Optimized",
      badgeColor: "bg-pink-100 text-pink-700"
    },
    {
      step: 7,
      icon: CheckCircle,
      title: "Results & Follow-Up",
      duration: "Ongoing",
      description: "Evaluate treatment success and develop long-term maintenance plan for sustained mental wellness.",
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
            Your TMS Treatment Journey
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            A clear, structured path from consultation to lasting wellness—designed with your comfort and success in mind
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
                <div className="text-3xl font-bold text-purple-600 mb-1">4-6</div>
                <div className="text-sm text-gray-600">Weeks</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600 mb-1">20-36</div>
                <div className="text-sm text-gray-600">Sessions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-1">75%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Steps - Compact Clickable Cards */}
        <div className="max-w-6xl mx-auto">
          {/* Step Cards - Smaller & Clickable */}
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
                    {/* Step Number */}
                    <div className={`text-4xl font-bold mb-2 transition-colors ${
                      isActive ? 'text-lavender-600' : 'text-gray-300'
                    }`}>
                      {step.step.toString().padStart(2, '0')}
                    </div>

                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-2 transition-all ${
                      isActive 
                        ? 'bg-gradient-to-br from-lavender-500 to-teal-500' 
                        : 'bg-gradient-to-br from-lavender-100 to-teal-100'
                    }`}>
                      <Icon className={`h-6 w-6 ${isActive ? 'text-white' : 'text-lavender-600'}`} />
                    </div>

                    {/* Title */}
                    <h4 className="text-xs font-semibold text-gray-900 mb-1 leading-tight">{step.title}</h4>

                    {/* Duration */}
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
                {/* Icon */}
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

                {/* Content */}
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
                    
                    {/* Navigation */}
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

        {/* Data Sources & Disclaimers */}
        <div className="max-w-5xl mx-auto mt-16 pt-8 border-t border-gray-300">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-sm">
            <h4 className="text-sm font-bold text-gray-900 mb-3">Clinical Evidence & Data Sources</h4>
            <div className="space-y-2 text-xs text-gray-600">
              <p>
                <strong>Success Rate (75%):</strong> Based on clinical response rates from peer-reviewed studies of Deep TMS therapy for major depressive disorder. 
                Response rate defined as significant improvement in symptoms as measured by standardized depression scales.
              </p>
              <p>
                <strong>Sources:</strong> Cognitive FX TMS Research showing 74% response rate and 58% remission rate after 20 sessions; 
                Additional studies reporting 75-82% response rates with Deep TMS therapy 
                (<a href="https://www.cognitivefxusa.com/blog/tms-success-rates-for-depression" target="_blank" rel="noopener noreferrer" className="text-lavender-600 hover:text-lavender-700 underline">Cognitive FX</a>).
              </p>
              <p>
                <strong>FDA Clearances:</strong> BrainsWay Deep TMS™ has received 8 FDA clearances for various mental health conditions including Major Depressive Disorder (2013), 
                OCD (2018), Anxious Depression (2019), and others.
              </p>
              <p className="italic">
                *Individual results may vary. Treatment outcomes depend on various factors including condition severity, treatment adherence, and individual response. 
                Success rates represent clinical trial and real-world data averages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}