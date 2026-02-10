'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Brain, Heart, Users, Shield, ArrowRight } from 'lucide-react'

export function TreatmentComponents() {
  const components = [
    {
      icon: Brain,
      title: 'TMS Therapy',
      description: 'Evidence-based brain stimulation',
      details: 'Non-invasive magnetic stimulation targeting specific brain regions associated with mood regulation and mental health conditions.',
      features: ['FDA Cleared', 'Non-Invasive', '75% Success Rate'],
      href: '/services/tms-therapy'
    },
    {
      icon: Heart,
      title: 'Psychiatric Care',
      description: 'Medication management and evaluation',
      details: 'Comprehensive psychiatric evaluation and careful medication management to optimize brain chemistry and symptom control.',
      features: ['Medication Management', 'Psychiatric Evaluation', 'Ongoing Support'],
      href: '/services/psychiatry'
    },
    {
      icon: Users,
      title: 'Therapy & Counseling',
      description: 'Behavioral change and coping skills',
      details: 'Evidence-based therapeutic approaches including CBT, DBT, and other modalities to help you develop healthy coping strategies.',
      features: ['Individual Therapy', 'Group Sessions', 'Family Counseling'],
      href: '/services/counseling'
    },
    {
      icon: Shield,
      title: 'Lifestyle Integration',
      description: 'Holistic wellness support',
      details: 'Guidance on sleep, nutrition, exercise, and stress management to support your overall mental health and treatment success.',
      features: ['Sleep Optimization', 'Nutrition Guidance', 'Stress Management'],
      href: '#'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Treatment Components
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each component of comprehensive care is evidence-based and designed to work 
            together for optimal mental health outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {components.map((component, index) => {
            const Icon = component.icon
            return (
              <Card 
                key={component.title} 
                className="tasel-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-6 p-4 rounded-full bg-gradient-to-r from-lavender-100 to-teal-100 w-fit group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-10 w-10 text-lavender-600" />
                  </div>
                  
                  <CardTitle className="text-xl font-semibold text-lavender-600 mb-3">
                    {component.title}
                  </CardTitle>
                  <p className="text-gray-600 text-sm mb-4">
                    {component.description}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">
                    {component.details}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {component.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="taselSecondary" 
                    className="w-full group-hover:bg-lavender-600 group-hover:text-white transition-colors duration-300"
                    asChild
                  >
                    <a href={component.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
