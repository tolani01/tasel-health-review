'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Stethoscope, MessageSquare, Activity } from 'lucide-react'

export function OurTeamExpertise() {
  const teamCategories = [
    {
      icon: Stethoscope,
      title: 'Medical Expertise',
      roles: [
        'Board-certified psychiatrists',
        'Psychiatric nurse practitioners (PMHNP)',
        'Physician assistants specializing in psychiatry'
      ],
      focus: 'Medication management, diagnostic assessment, TMS therapy',
      color: 'blue'
    },
    {
      icon: MessageSquare,
      title: 'Therapeutic Expertise',
      roles: [
        'Licensed professional counselors (LPC)',
        'Licensed marriage & family therapists (LMFT)',
        'Licensed clinical social workers (LCSW)'
      ],
      focus: 'Trauma, perinatal, couples therapy, CBT, DBT, EMDR',
      color: 'teal'
    },
    {
      icon: Activity,
      title: 'Clinical Excellence',
      roles: [
        'BrainsWay-certified TMS technicians',
        'Care coordinators & patient advocates',
        'Intake & scheduling specialists'
      ],
      focus: 'Smooth care delivery, patient support, treatment coordination',
      color: 'purple'
    }
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-100',
          text: 'text-blue-600',
          border: 'border-blue-200'
        }
      case 'teal':
        return {
          bg: 'bg-teal-100',
          text: 'text-teal-600',
          border: 'border-teal-200'
        }
      case 'purple':
        return {
          bg: 'bg-purple-100',
          text: 'text-purple-600',
          border: 'border-purple-200'
        }
      default:
        return {
          bg: 'bg-gray-100',
          text: 'text-gray-600',
          border: 'border-gray-200'
        }
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            A Team United by Your Wellness
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our strength is our people. Tasel Health has assembled board-certified psychiatrists, 
            licensed therapists, BrainsWay-certified TMS specialists, and compassionate support staff 
            who work together seamlessly to deliver comprehensive mental health care. We&apos;re not a 
            collection of solo practitioners—we&apos;re a coordinated team committed to your success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {teamCategories.map((category, index) => {
            const Icon = category.icon
            const colors = getColorClasses(category.color)
            
            return (
              <Card key={index} className={`${colors.border} border-2 hover:shadow-lg transition-shadow`}>
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                    <Icon className={`h-8 w-8 ${colors.text}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                    {category.title}
                  </h3>
                  
                  <ul className="space-y-2 mb-4">
                    {category.roles.map((role, idx) => (
                      <li key={idx} className="text-gray-700 text-sm">
                        • {role}
                      </li>
                    ))}
                  </ul>
                  
                  <div className={`mt-4 pt-4 border-t ${colors.border}`}>
                    <p className="text-xs text-gray-600 italic">
                      <strong>Providing:</strong> {category.focus}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom Statement with Transition to Recruitment */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-50 via-teal-50 to-blue-50 rounded-2xl p-8 border border-purple-200">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Every provider on our team participates in <strong>ongoing training</strong>, 
              stays current with the <strong>latest research</strong>, and brings genuine 
              <strong> compassion</strong> to patient care.
            </p>
            <p className="text-xl font-semibold text-gray-900">
              We&apos;re proud of who we are—and we&apos;re growing. 🌱
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
