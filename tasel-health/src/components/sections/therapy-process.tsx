'use client'

import { Card } from '@/components/ui/card'
import { MessageCircle, Target, Brain, TrendingUp, CheckCircle } from 'lucide-react'

export function TherapyProcess() {
  const steps = [
    {
      icon: MessageCircle,
      title: "Intake Session",
      duration: "45-60 minutes",
      description: "Share your story, discuss goals, and learn how therapy can help you"
    },
    {
      icon: Target,
      title: "Collaborative Goals",
      duration: "Ongoing",
      description: "Set clear, measurable goals that matter to you and your life"
    },
    {
      icon: Brain,
      title: "Skill Building",
      duration: "Weekly sessions",
      description: "Learn practical tools and practice between sessions"
    },
    {
      icon: TrendingUp,
      title: "Track Progress",
      duration: "Every 4-6 sessions",
      description: "Review what's working and adjust your treatment plan"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What to Expect
            </h2>
            <p className="text-xl text-gray-600">
              A clear, collaborative path to building skills and achieving your goals
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => {
              const Icon = step.icon
              return (
                <Card key={idx} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-teal-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                    {idx + 1}
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-teal-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                  <div className="text-xs text-gray-500">{step.duration}</div>
                </Card>
              )
            })}
          </div>

          {/* Bottom Note */}
          <div className="mt-12 text-center p-6 bg-white rounded-xl shadow-sm">
            <p className="text-gray-700">
              <strong>Therapy is collaborative.</strong> We'll work together to set goals, 
              practice skills, and measure progress along the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
