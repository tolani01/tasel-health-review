'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Award, Brain, Users, Heart } from 'lucide-react'

export function OurApproach() {
  const pillars = [
    {
      icon: Award,
      title: 'Evidence-Based Treatment',
      description: 'Every protocol backed by research and clinical studies',
      points: [
        'FDA-cleared technologies',
        'Proven therapeutic approaches',
        'Outcome tracking & measurement'
      ],
      color: 'purple'
    },
    {
      icon: Brain,
      title: 'Comprehensive & Integrated',
      description: 'TMS + Medications + Therapy working together',
      points: [
        'Care team coordination',
        'Personalized treatment plans',
        'Multiple modalities, one location'
      ],
      color: 'teal'
    },
    {
      icon: Users,
      title: 'Accessible & Welcoming',
      description: 'Mental health care that fits your life',
      points: [
        'Accept most insurance plans',
        'Telehealth across OK & TX',
        'Same-week consultations',
        'Judgment-free environment'
      ],
      color: 'blue'
    },
    {
      icon: Heart,
      title: 'Commitment to Excellence',
      description: 'Continuous improvement in everything we do',
      points: [
        'Ongoing professional development',
        'Latest clinical research',
        'Patient-centered approach',
        'Quality outcomes focus'
      ],
      color: 'pink'
    }
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'purple':
        return {
          bg: 'bg-purple-100',
          text: 'text-purple-600',
          border: 'border-purple-200',
          hover: 'hover:border-purple-300'
        }
      case 'teal':
        return {
          bg: 'bg-teal-100',
          text: 'text-teal-600',
          border: 'border-teal-200',
          hover: 'hover:border-teal-300'
        }
      case 'blue':
        return {
          bg: 'bg-blue-100',
          text: 'text-blue-600',
          border: 'border-blue-200',
          hover: 'hover:border-blue-300'
        }
      case 'pink':
        return {
          bg: 'bg-pink-100',
          text: 'text-pink-600',
          border: 'border-pink-200',
          hover: 'hover:border-pink-300'
        }
      default:
        return {
          bg: 'bg-gray-100',
          text: 'text-gray-600',
          border: 'border-gray-200',
          hover: 'hover:border-gray-300'
        }
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Approach to Care
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four core pillars that define how we deliver exceptional mental health care
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            const colors = getColorClasses(pillar.color)
            
            return (
              <Card 
                key={index}
                className={`${colors.border} ${colors.hover} border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}
              >
                <CardHeader>
                  <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-4`}>
                    <Icon className={`h-8 w-8 ${colors.text}`} />
                  </div>
                  <CardTitle className="text-2xl">{pillar.title}</CardTitle>
                  <p className="text-gray-600 mt-2">{pillar.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {pillar.points.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className={`${colors.text} mr-2 font-bold`}>•</span>
                        <span className="text-gray-700">{point}</span>
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
