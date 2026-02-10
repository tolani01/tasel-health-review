'use client'

import { Card } from '@/components/ui/card'
import { Users, Heart, UserCheck, Baby, Shield, Flame } from 'lucide-react'

export function CounselingServices() {
  const mainServices = [
    {
      icon: Users,
      title: "Individual Therapy",
      description: "One-on-one sessions tailored to your unique needs and goals"
    },
    {
      icon: Heart,
      title: "Couples Therapy",
      description: "Strengthen relationships and improve communication patterns"
    },
    {
      icon: UserCheck,
      title: "Family Therapy",
      description: "Address family dynamics and support healthy relationships"
    }
  ]

  const specialties = [
    { icon: Shield, label: "Trauma & PTSD" },
    { icon: Baby, label: "Perinatal Mental Health" },
    { icon: Heart, label: "Grief & Loss" },
    { icon: Users, label: "Teen & Adolescent" },
    { icon: Flame, label: "First Responders" },
    { icon: UserCheck, label: "Life Transitions" }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Therapy Services
            </h2>
            <p className="text-xl text-gray-600">
              Professional counseling for individuals, couples, and families
            </p>
          </div>

          {/* Main Services */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {mainServices.map((service, idx) => {
              const Icon = service.icon
              return (
                <Card key={idx} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </Card>
              )
            })}
          </div>

          {/* Specialty Areas */}
          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Specialty Areas
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {specialties.map((specialty, idx) => {
                const Icon = specialty.icon
                return (
                  <div key={idx} className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-shadow">
                    <Icon className="h-6 w-6 text-green-600 mx-auto mb-2" />
                    <div className="text-xs font-semibold text-gray-700">{specialty.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}