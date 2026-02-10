'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { 
  Calendar, 
  Brain, 
  Settings, 
  Activity, 
  TrendingUp, 
  CheckCircle,
  ArrowRight 
} from 'lucide-react'
import { useConsultation } from '@/contexts/consultation-context'

interface ProcessStep {
  id: number
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  image?: string
  duration: string
  keyBenefit: string
}

interface ProcessStepsProps {
  steps?: ProcessStep[]
  animationType?: 'timeline' | 'cards' | 'accordion'
  showProgress?: boolean
  className?: string
}

const defaultSteps: ProcessStep[] = [
  {
    id: 1,
    title: 'Initial Consultation',
    description: 'Meet with our specialists to discuss your symptoms and treatment goals',
    icon: Calendar,
    duration: '60 minutes',
    keyBenefit: 'Personalized treatment plan'
  },
  {
    id: 2,
    title: 'Brain Mapping',
    description: 'Advanced brain mapping to identify target areas for stimulation',
    icon: Brain,
    duration: '30 minutes',
    keyBenefit: 'Precision targeting'
  },
  {
    id: 3,
    title: 'Device Setup',
    description: 'Comfortable positioning of the TMS device for optimal treatment',
    icon: Settings,
    duration: '15 minutes',
    keyBenefit: 'Customized settings'
  },
  {
    id: 4,
    title: 'Treatment Sessions',
    description: 'Daily TMS sessions with magnetic pulses to stimulate brain regions',
    icon: Activity,
    duration: '20-40 minutes',
    keyBenefit: 'Non-invasive therapy'
  },
  {
    id: 5,
    title: 'Progress Monitoring',
    description: 'Regular assessments to track improvement and adjust treatment',
    icon: TrendingUp,
    duration: 'Weekly',
    keyBenefit: 'Data-driven adjustments'
  },
  {
    id: 6,
    title: 'Results & Follow-up',
    description: 'Evaluate treatment success and plan maintenance therapy',
    icon: CheckCircle,
    duration: 'Ongoing',
    keyBenefit: 'Long-term wellness'
  }
]

export function ProcessSteps({
  steps = defaultSteps,
  animationType = 'timeline',
  showProgress = true,
  className
}: ProcessStepsProps) {
  const [activeStep, setActiveStep] = useState(1)
  const { showForm } = useConsultation()

  const renderTimelineView = () => (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-teal-500 hidden md:block" />
      
      {/* Steps */}
      <div className="space-y-8">
        {steps.map((step, index) => {
          const Icon = step.icon
          const isActive = step.id === activeStep
          
          return (
            <div
              key={step.id}
              className={cn(
                'relative flex items-start gap-6 animate-slide-in cursor-pointer',
                isActive && 'scale-105'
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setActiveStep(step.id)}
            >
              {/* Step Number Circle */}
              <div className={cn(
                'relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 transition-all',
                isActive 
                  ? 'border-purple-600 bg-purple-600 text-white shadow-lg' 
                  : 'border-gray-300 bg-white text-gray-600'
              )}>
                <Icon className="h-8 w-8" />
              </div>

              {/* Content Card */}
              <Card className={cn(
                'flex-1 p-6 transition-all hover:shadow-lg',
                isActive && 'border-purple-600 shadow-xl'
              )}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Step {step.id}: {step.title}
                    </h3>
                    <p className="text-gray-600 mb-3">{step.description}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-purple-600 font-semibold">Duration:</span>
                        <span>{step.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-teal-600 font-semibold">Key Benefit:</span>
                        <span>{step.keyBenefit}</span>
                      </div>
                    </div>
                  </div>
                  
                  {step.image && (
                    <div className="ml-4 relative w-32 h-32 rounded-lg overflow-hidden">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              </Card>
            </div>
          )
        })}
      </div>
    </div>
  )

  const renderCardsView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {steps.map((step, index) => {
        const Icon = step.icon
        
        return (
          <Card
            key={step.id}
            className={cn(
              'p-6 hover:shadow-xl transition-all animate-scale-in cursor-pointer',
              'hover:-translate-y-2'
            )}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-100 to-teal-100">
                <Icon className="h-6 w-6 text-purple-600" />
              </div>
              <span className="text-3xl font-bold text-gray-200">
                {String(step.id).padStart(2, '0')}
              </span>
            </div>
            
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {step.title}
            </h3>
            
            <p className="text-gray-600 text-sm mb-4">
              {step.description}
            </p>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Duration</span>
                <span className="font-medium text-gray-900">{step.duration}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Benefit</span>
                <span className="font-medium text-purple-600">{step.keyBenefit}</span>
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )

  const renderAccordionView = () => (
    <div className="space-y-4">
      {steps.map((step, index) => {
        const Icon = step.icon
        const isActive = step.id === activeStep
        
        return (
          <Card
            key={step.id}
            className={cn(
              'overflow-hidden transition-all animate-slide-in',
              isActive && 'shadow-lg'
            )}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <button
              className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
              onClick={() => setActiveStep(isActive ? 0 : step.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-100 to-teal-100">
                    <Icon className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Step {step.id}: {step.title}
                    </h3>
                    <p className="text-sm text-gray-500">{step.duration}</p>
                  </div>
                </div>
                <ArrowRight className={cn(
                  'h-5 w-5 text-gray-400 transition-transform',
                  isActive && 'rotate-90'
                )} />
              </div>
            </button>
            
            {isActive && (
              <div className="px-6 pb-6 animate-slide-down">
                <p className="text-gray-600 mb-4">{step.description}</p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
                    {step.keyBenefit}
                  </span>
                </div>
              </div>
            )}
          </Card>
        )
      })}
    </div>
  )

  return (
    <div className={cn('relative', className)}>
      {/* Progress Bar */}
      {showProgress && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Treatment Progress</span>
            <span className="text-sm text-gray-500">Step {activeStep} of {steps.length}</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-600 to-teal-500 transition-all duration-500"
              style={{ width: `${(activeStep / steps.length) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Render based on animation type */}
      {animationType === 'timeline' && renderTimelineView()}
      {animationType === 'cards' && renderCardsView()}
      {animationType === 'accordion' && renderAccordionView()}

      {/* CTA Button */}
      <div className="mt-12 text-center">
        <Button
          size="lg"
          className="bg-purple-600 hover:bg-purple-700"
          onClick={() => showForm('tms', 'process-steps')}
        >
          Start Your TMS Journey
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
