'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Pill, Shield, Clock, TrendingUp, Brain, Activity } from 'lucide-react'

export function SpravatoKetamineOverview() {
  const features = [
    {
      icon: Pill,
      title: "FDA-Approved Spravato®",
      description: "Esketamine nasal spray is FDA-approved for treatment-resistant depression, offering rapid relief when other treatments haven't worked.",
      highlight: "FDA-Approved 2019"
    },
    {
      icon: Brain,
      title: "Ketamine Infusion Therapy",
      description: "IV ketamine therapy provides fast-acting relief for severe depression, with effects often felt within hours of treatment.",
      highlight: "Rapid Onset"
    },
    {
      icon: Shield,
      title: "Medical Supervision",
      description: "All treatments are administered in our clinic under close medical supervision to ensure safety and optimal outcomes.",
      highlight: "Safe & Monitored"
    },
    {
      icon: Clock,
      title: "Quick Treatment Sessions",
      description: "Spravato® sessions last about 2 hours including monitoring. Ketamine infusions typically take 40-60 minutes.",
      highlight: "2-Hour Sessions"
    },
    {
      icon: TrendingUp,
      title: "Proven Effectiveness",
      description: "Studies show significant improvement in treatment-resistant depression, with many patients experiencing relief within days.",
      highlight: "70%+ Response Rate"
    },
    {
      icon: Activity,
      title: "Rapid Relief",
      description: "Unlike traditional antidepressants that take weeks, Spravato® and ketamine can provide relief within hours to days.",
      highlight: "Fast-Acting"
    }
  ]

  const conditions = [
    { name: "Treatment-Resistant Depression", status: "FDA Approved", severity: "primary" },
    { name: "Major Depressive Disorder", status: "FDA Approved", severity: "primary" },
    { name: "Suicidal Ideation", status: "FDA Approved", severity: "primary" },
    { name: "Bipolar Depression", status: "Off-Label", severity: "secondary" },
    { name: "Post-Traumatic Stress Disorder", status: "Off-Label", severity: "secondary" },
    { name: "Anxiety Disorders", status: "Off-Label", severity: "secondary" },
    { name: "Chronic Pain", status: "Research", severity: "secondary" },
    { name: "Obsessive-Compulsive Disorder", status: "Research", severity: "secondary" }
  ]

  return (
    <section id="overview" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Are Spravato® and Ketamine?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Spravato® (esketamine) and ketamine are breakthrough treatments for treatment-resistant depression. 
            They work differently than traditional antidepressants, targeting the NMDA receptor system to provide 
            rapid relief when other medications haven't been effective.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
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
              Spravato® and ketamine are FDA-approved for treatment-resistant depression and are being 
              studied for other mental health conditions with promising results.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {conditions.map((condition, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between p-4 rounded-lg border hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900 text-sm">{condition.name}</span>
                <Badge 
                  variant={condition.severity === 'primary' ? 'default' : 'secondary'}
                  className={
                    condition.status === 'FDA Approved' 
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
              <strong>Note:</strong> Spravato® (esketamine) is FDA-approved for treatment-resistant depression. 
              Ketamine infusions are used off-label for depression and other conditions based on clinical research. 
              All treatments require medical evaluation and supervision.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
