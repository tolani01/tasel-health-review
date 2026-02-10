'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Search, Target, TrendingUp } from 'lucide-react'

export function ClinicalApproach() {
  const approaches = [
    {
      icon: Search,
      title: 'Research-Based Decision Making',
      description: 'Our treatment decisions are guided by the latest research and evidence-based protocols, ensuring you receive the most effective care available.',
      details: [
        'Evidence-based treatment protocols',
        'Current mental health research',
        'Clinically proven approaches',
        'Established best practices'
      ]
    },
    {
      icon: Target,
      title: 'Individualized Assessment Process',
      description: 'Every patient receives a comprehensive evaluation that considers their unique history, symptoms, goals, and circumstances.',
      details: [
        'Comprehensive clinical evaluation',
        'Personal history assessment',
        'Symptom analysis',
        'Goal identification'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Outcome-Focused Treatment Planning',
      description: 'We measure success by your improvement and quality of life, not just treatment delivery. Your goals become our objectives.',
      details: [
        'Regular progress monitoring',
        'Outcome measurement',
        'Treatment adjustment',
        'Quality of life focus'
      ]
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Clinical Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Research-driven, individually tailored mental health care that focuses on 
            your unique needs and optimal outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approaches.map((approach, index) => {
            const Icon = approach.icon
            return (
              <Card 
                key={approach.title}
                className="tasel-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 rounded-full bg-gradient-to-r from-lavender-100 to-teal-100 w-fit group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-lavender-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 mb-3">
                    {approach.title}
                  </CardTitle>
                  <p className="text-gray-600">
                    {approach.description}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2">
                    {approach.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-teal-500 mr-3 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
