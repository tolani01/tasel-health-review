'use client'

import { Card } from '@/components/ui/card'
import { Brain, Heart, Users, TrendingUp, CheckCircle, Lightbulb } from 'lucide-react'

export function TherapyBenefits() {
  const benefits = [
    {
      icon: Brain,
      title: "Build Coping Skills",
      description: "Learn practical tools to manage stress, emotions, and difficult situations"
    },
    {
      icon: Lightbulb,
      title: "Change Patterns",
      description: "Identify and shift unhelpful thought and behavior patterns"
    },
    {
      icon: Users,
      title: "Improve Relationships",
      description: "Develop better communication and connection with others"
    },
    {
      icon: TrendingUp,
      title: "Track Your Progress",
      description: "Measure improvement and adjust your treatment plan based on results"
    },
    {
      icon: Heart,
      title: "Process Past Pain",
      description: "Work through trauma, grief, and difficult experiences in a safe space"
    },
    {
      icon: CheckCircle,
      title: "Achieve Goals",
      description: "Set and accomplish meaningful personal and mental health goals"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Therapy Helps
            </h2>
            <p className="text-xl text-gray-600">
              Evidence-based approaches that create lasting change
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon
              return (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-teal-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </Card>
              )
            })}
          </div>

          {/* Bottom Message */}
          <div className="mt-12 text-center p-6 bg-gradient-to-r from-green-100 to-teal-100 rounded-xl">
            <p className="text-gray-800 font-medium">
              Therapy works best when it fits your life. We'll set clear goals, practice practical skills, and check progress together.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}