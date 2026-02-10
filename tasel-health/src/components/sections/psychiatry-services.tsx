'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Stethoscope, Brain, Heart, Shield, Clock, Users } from 'lucide-react'

export function PsychiatryServices() {
  const services = [
    {
      icon: Stethoscope,
      title: "Medication Management",
      description: "Expert prescription, monitoring, and adjustment of psychiatric medications for optimal therapeutic outcomes.",
      features: ["Initial medication evaluation", "Ongoing monitoring", "Side effect management", "Drug interaction screening"]
    },
    {
      icon: Brain,
      title: "Diagnostic Assessment",
      description: "Comprehensive psychiatric evaluation using evidence-based tools and clinical expertise.",
      features: ["Mental status examination", "Diagnostic interviews", "Symptom assessment", "Treatment planning"]
    },
    {
      icon: Shield,
      title: "Treatment Planning",
      description: "Personalized treatment plans tailored to your unique needs, symptoms, and goals.",
      features: ["Individualized approach", "Evidence-based care", "Regular adjustments", "Progress tracking"]
    },
    {
      icon: Heart,
      title: "Ongoing Support",
      description: "Continuous monitoring and care coordination to ensure your medications work well for you.",
      features: ["Regular follow-ups", "Collaborative care", "Side effect management", "Long-term wellness"]
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Medication Management & Psychiatric Treatment
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Evidence-based medication care with ongoing monitoring and support. 
            We help you find the right treatment through careful evaluation and personalized care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs mr-1 mb-1">
                    {feature}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
