'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, TrendingUp, Users, Shield, Clock, Heart } from 'lucide-react'

export function WhyComprehensiveCare() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Better Outcomes',
      description: 'Multiple treatments working together achieve better results than any single approach alone.',
      highlight: 'Proven Results'
    },
    {
      icon: Users,
      title: 'Coordinated Care',
      description: 'Seamless integration between different treatment modalities with regular team coordination.',
      highlight: 'Team Approach'
    },
    {
      icon: Shield,
      title: 'Evidence-Based Approach',
      description: 'All treatments are backed by research and follow established best practices for mental health care.',
      highlight: 'Research-Backed'
    },
    {
      icon: Heart,
      title: 'Personalized Attention',
      description: 'Your treatment plan is tailored to your specific needs, goals, and circumstances.',
      highlight: 'Individualized'
    },
    {
      icon: Clock,
      title: 'Reduced Treatment Gaps',
      description: 'Coordinated care ensures continuity and reduces gaps that can occur with fragmented treatment.',
      highlight: 'Seamless Care'
    },
    {
      icon: CheckCircle,
      title: 'Holistic Assessment',
      description: 'We consider all aspects of your mental health, not just individual symptoms or conditions.',
      highlight: 'Complete Care'
    }
  ]

  const stats = [
    { number: '1000+', label: 'Patients Treated' },
    { number: '75%', label: 'Success Rate' },
    { number: '5+', label: 'Years Experience' },
    { number: '95%', label: 'Patient Satisfaction' }
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Comprehensive Care?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive care combines multiple evidence-based treatments for better outcomes 
            than any single approach alone.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center bg-gradient-to-br from-lavender-50 to-teal-50 rounded-xl p-4 shadow-lg animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl font-bold tasel-gradient-text mb-1">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card 
                key={benefit.title}
                className="tasel-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-3">
                  <div className="mx-auto mb-3 p-3 rounded-full bg-gradient-to-r from-lavender-100 to-teal-100 w-fit group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-lavender-600" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-3 text-sm">
                    {benefit.description}
                  </p>
                  <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                    {benefit.highlight}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-lavender-500 to-teal-500 rounded-2xl p-6 md:p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Your Mental Health Journey
          </h3>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto mb-6">
            We believe that comprehensive, integrated care provides the best path to mental wellness. 
            By combining multiple evidence-based treatments and coordinating care across disciplines, 
            we help you achieve lasting recovery and improved quality of life.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold mb-1">Research</div>
              <div className="text-base opacity-90">Evidence-based treatments</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">Integration</div>
              <div className="text-base opacity-90">Coordinated care delivery</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">Results</div>
              <div className="text-base opacity-90">Optimal outcomes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
