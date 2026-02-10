'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Shield, TrendingUp, BookOpen } from 'lucide-react'
import Link from 'next/link'

export function PatientCommitment() {
  const commitments = [
    {
      icon: Shield,
      title: 'Accessible Care',
      stats: 'Most Insurance Accepted',
      points: [
        'Accept most major insurance plans',
        'Affordable self-pay options',
        'Same-week consultations available',
        'Telehealth for convenience'
      ],
      link: '/insurance',
      linkText: 'View Insurance Plans',
      color: 'blue'
    },
    {
      icon: TrendingUp,
      title: 'Quality Outcomes',
      stats: '75% Success Rate',
      points: [
        '75% success rate with TMS for depression',
        'Evidence-based treatment protocols',
        'Regular progress tracking',
        'Coordinated care team approach'
      ],
      link: '/services/tms-therapy',
      linkText: 'Learn About TMS',
      color: 'teal'
    },
    {
      icon: BookOpen,
      title: 'Patient Education',
      stats: '40+ Free Articles',
      points: [
        'Free Knowledge Hub with 40+ articles',
        'Informed decision-making support',
        'Transparent treatment information',
        'Ongoing communication'
      ],
      link: '/knowledge-hub',
      linkText: 'Explore Knowledge Hub',
      color: 'purple'
    }
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-100',
          text: 'text-blue-600',
          border: 'border-blue-200',
          hover: 'hover:border-blue-300',
          link: 'text-blue-600 hover:text-blue-700'
        }
      case 'teal':
        return {
          bg: 'bg-teal-100',
          text: 'text-teal-600',
          border: 'border-teal-200',
          hover: 'hover:border-teal-300',
          link: 'text-teal-600 hover:text-teal-700'
        }
      case 'purple':
        return {
          bg: 'bg-purple-100',
          text: 'text-purple-600',
          border: 'border-purple-200',
          hover: 'hover:border-purple-300',
          link: 'text-purple-600 hover:text-purple-700'
        }
      default:
        return {
          bg: 'bg-gray-100',
          text: 'text-gray-600',
          border: 'border-gray-200',
          hover: 'hover:border-gray-300',
          link: 'text-gray-600 hover:text-gray-700'
        }
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Commitment to Patients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trust, transparency, and proven results define everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {commitments.map((commitment, index) => {
            const Icon = commitment.icon
            const colors = getColorClasses(commitment.color)
            
            return (
              <Card 
                key={index}
                className={`${colors.border} ${colors.hover} border-2 transition-all duration-300 hover:shadow-xl`}
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                    <Icon className={`h-8 w-8 ${colors.text}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
                    {commitment.title}
                  </h3>
                  
                  <div className={`text-center text-3xl font-bold ${colors.text} mb-6`}>
                    {commitment.stats}
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {commitment.points.map((point, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <span className={`${colors.text} mr-2 font-bold`}>✓</span>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-center">
                    <Link 
                      href={commitment.link}
                      className={`${colors.link} font-semibold text-sm hover:underline`}
                    >
                      {commitment.linkText} →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Patient Quote */}
        <div className="max-w-3xl mx-auto mt-16">
          <Card className="bg-white border-gray-200">
            <CardContent className="p-8 text-center">
              <div className="text-6xl text-gray-300 mb-4">"</div>
              <p className="text-xl text-gray-700 leading-relaxed italic mb-6">
                The team at Tasel Health changed my life. For the first time in years, 
                I feel hopeful about my mental health journey.
              </p>
              <p className="text-gray-600 font-medium">— Tasel Health Patient</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
