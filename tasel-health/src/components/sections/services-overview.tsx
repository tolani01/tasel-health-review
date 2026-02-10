'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Brain, Heart, Users, Shield, Pill, Phone } from 'lucide-react'
import { useConsultation } from '@/contexts/consultation-context'

const services = [
  {
    id: 'comprehensive',
    title: 'Comprehensive Care',
    description: 'Research-driven, individually tailored mental health care combining multiple evidence-based treatments.',
    icon: Shield,
    href: '/services/comprehensive-care',
    features: ['Integrated Treatment', 'Personalized Plans', 'Optimal Outcomes']
  },
  {
    id: 'tms',
    title: 'BrainsWay Deep TMS™',
    description: 'FDA-cleared, non-invasive brain stimulation therapy for depression, anxiety, and more.',
    icon: Brain,
    href: '/services/tms-therapy',
    features: ['FDA Cleared', 'Non-Invasive', '75% Success Rate']
  },
  {
    id: 'spravato-ketamine',
    title: 'Spravato®/Ketamine',
    description: 'FDA-approved rapid relief for treatment-resistant depression when other treatments haven\'t worked.',
    icon: Pill,
    href: '/services/spravato-ketamine',
    features: ['FDA Approved', 'Rapid Relief', 'Treatment-Resistant']
  },
  {
    id: 'psychiatry',
    title: 'Psychiatric Care',
    description: 'Comprehensive medication management and psychiatric evaluation services.',
    icon: Heart,
    href: '/services/psychiatry',
    features: ['Medication Management', 'Psychiatric Evaluation', 'Ongoing Support']
  },
  {
    id: 'counseling',
    title: 'Therapy & Counseling',
    description: 'Individual, group, and family therapy with evidence-based treatment approaches.',
    icon: Users,
    href: '/services/counseling',
    features: ['Individual Therapy', 'Group Sessions', 'Family Counseling']
  }
]

export function ServicesOverview() {
  const { showForm } = useConsultation()
  
  return (
    <section className="py-20 bg-gray-50 relative z-0">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From cutting-edge TMS therapy to traditional counseling, we provide 
            complete mental health care tailored to your unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card 
                key={service.id} 
                className="tasel-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-6 p-4 rounded-full bg-gradient-to-r from-lavender-100 to-teal-100 w-fit group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-10 w-10 text-lavender-600" />
                  </div>
                  
                  <CardTitle className="text-xl font-semibold text-lavender-600 mb-3">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
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
                    <a href={service.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Not Sure Which Service Is Right For You?
            </h3>
            <p className="text-gray-600 mb-4">
              Our team of compassionate care providers will help you find the best treatment approach.
            </p>
            <div className="flex flex-col gap-3 items-center">
              <Button 
                size="lg" 
                variant="gradient"
                onClick={() => showForm('', 'services-overview')}
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <div className="text-sm text-gray-500">Prefer to call a specific clinic?</div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center w-full sm:w-auto">
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+14059341681">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Oklahoma City (405-934-1681)
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+12102022341">
                    <Phone className="mr-2 h-4 w-4" />
                    Call San Antonio (210-202-2341)
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
