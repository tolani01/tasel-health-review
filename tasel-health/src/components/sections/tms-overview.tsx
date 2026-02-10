'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Brain, Shield, Clock, Users } from 'lucide-react'

export function TMSOverview() {
  const features = [
    {
      icon: Brain,
      title: "Deep Brain Stimulation",
      description: "Reaches deeper brain regions than traditional TMS, targeting areas up to 6cm below the skull surface.",
      highlight: "Patented H-Coil Technology"
    },
    {
      icon: Shield,
      title: "FDA-Cleared Safety",
      description: "Approved by the FDA for multiple conditions with extensive clinical research backing its safety and efficacy.",
      highlight: "8 FDA Clearances"
    },
    {
      icon: Clock,
      title: "Quick Sessions",
      description: "Treatment sessions last only 20 minutes, allowing you to return to daily activities immediately.",
      highlight: "20-Minute Sessions"
    },
    {
      icon: Users,
      title: "Proven Results",
      description: "Over 75% of patients experience significant improvement in symptoms with our comprehensive treatment approach.",
      highlight: "75% Success Rate"
    }
  ]

  const conditions = [
    { name: "Major Depressive Disorder", status: "FDA Cleared", severity: "primary" },
    { name: "Anxious Depression", status: "FDA Cleared", severity: "primary" },
    { name: "Obsessive-Compulsive Disorder", status: "FDA Cleared", severity: "primary" },
    { name: "Smoking Cessation", status: "FDA Cleared", severity: "primary" },
    { name: "Bipolar Depression", status: "FDA Cleared", severity: "primary" },
    { name: "Post-Traumatic Stress Disorder", status: "FDA Cleared", severity: "primary" },
    { name: "Alzheimer's Disease", status: "FDA Cleared", severity: "primary" },
    { name: "Chronic Pain", status: "FDA Cleared", severity: "primary" },
    { name: "Alcohol Use Disorder", status: "Off-Label", severity: "secondary" },
    { name: "Autism Spectrum Disorder", status: "Research", severity: "secondary" },
    { name: "Attention Deficit Disorder", status: "Research", severity: "secondary" },
    { name: "Migraine", status: "Research", severity: "secondary" }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Makes BrainsWay Deep TMS™ Different?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Unlike traditional TMS, BrainsWay&apos;s patented Deep TMS™ technology uses H-Coils to reach 
            deeper brain structures, providing more comprehensive treatment for a wider range of conditions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
              <Badge variant="secondary" className="bg-teal-100 text-teal-700">
                {feature.highlight}
              </Badge>
            </Card>
          ))}
        </div>

        {/* Conditions Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Conditions We Treat
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              BrainsWay Deep TMS™ has received multiple FDA clearances and shows promise 
              for treating various neurological and psychiatric conditions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {conditions.map((condition, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between p-4 rounded-lg border hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900">{condition.name}</span>
                <Badge 
                  variant={condition.severity === 'primary' ? 'default' : 'secondary'}
                  className={
                    condition.status === 'FDA Cleared' 
                      ? 'bg-green-100 text-green-700' 
                      : condition.status === 'Off-Label'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }
                >
                  {condition.status}
                </Badge>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> FDA-cleared conditions have been approved by the FDA for treatment with BrainsWay Deep TMS™. 
              Off-label and research conditions may be treated based on clinical judgment and emerging research.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
