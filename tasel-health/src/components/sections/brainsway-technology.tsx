'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
// VideoAnimation removed - using static content
import { Zap, Target, Shield, Award, ExternalLink } from 'lucide-react'

export function BrainsWayTechnology() {
  const techFeatures = [
    {
      icon: Target,
      title: "Precise Targeting",
      description: "H-Coil technology reaches specific brain regions up to 6cm deep with unprecedented precision.",
      stats: "6cm Deep Penetration"
    },
    {
      icon: Zap,
      title: "Powerful Stimulation",
      description: "Delivers therapeutic magnetic pulses at optimal frequency and intensity for maximum efficacy.",
      stats: "10-20 Hz Frequency"
    },
    {
      icon: Shield,
      title: "Safety Profile",
      description: "Extensive clinical trials demonstrate excellent safety with minimal side effects.",
      stats: "99.9% Safety Rate"
    },
    {
      icon: Award,
      title: "Clinical Validation",
      description: "Over 60 peer-reviewed studies and 8 FDA clearances validate the technology's effectiveness.",
      stats: "60+ Studies"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center bg-purple-100 text-purple-700 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Award className="h-4 w-4 mr-2" />
            Patented Technology
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            BrainsWay Deep TMS™ Technology
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Revolutionary H-Coil technology that reaches deeper brain structures than traditional TMS, 
            providing more comprehensive and effective treatment outcomes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Treatment Process Steps */}
          <div className="order-2 lg:order-1">
            <Card className="p-6 bg-gradient-to-br from-purple-50 to-teal-50 border-purple-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                How Deep TMS™ Works
              </h3>
              
              <div className="space-y-4">
                {/* Step 1 */}
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Patient Assessment</h4>
                    <p className="text-sm text-gray-600">Comprehensive evaluation to determine treatment suitability and target brain regions.</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">H-Coil Positioning</h4>
                    <p className="text-sm text-gray-600">Precise placement of the H-Coil over the targeted brain area for optimal stimulation.</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Magnetic Stimulation</h4>
                    <p className="text-sm text-gray-600">Controlled magnetic pulses penetrate up to 6cm deep, stimulating neural pathways.</p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Treatment Session</h4>
                    <p className="text-sm text-gray-600">20-36 sessions over 4-6 weeks, with each session lasting 20-30 minutes.</p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Progress Monitoring</h4>
                    <p className="text-sm text-gray-600">Regular assessments to track improvement and adjust treatment parameters as needed.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white/60 rounded-lg border border-purple-200">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-teal-100 rounded-full flex items-center justify-center">
                    <Target className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Non-Invasive & Safe</h4>
                    <p className="text-sm text-gray-600">No anesthesia required, minimal side effects, outpatient procedure.</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right: Technology Features */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Advanced H-Coil Design
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Unlike traditional figure-8 coils, BrainsWay&apos;s patented H-Coil creates a broader, 
                deeper magnetic field that can stimulate brain regions previously unreachable with standard TMS.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {techFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-purple-100 rounded-lg p-3 flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm mb-2">{feature.description}</p>
                    <div className="text-xs font-medium text-teal-600">{feature.stats}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Button 
                variant="outline" 
                className="border-purple-200 text-purple-700 hover:bg-purple-50"
                asChild
              >
                <a 
                  href="https://www.brainsway.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Learn More About BrainsWay
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Comparison Section */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Deep TMS™ vs Traditional TMS
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional TMS */}
            <Card className="p-6 border-2 border-gray-200">
              <div className="text-center mb-6">
                <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-gray-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900">Traditional TMS</h4>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                  Reaches 1.5-2cm deep
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                  Figure-8 coil design
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                  Limited brain regions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                  Focused stimulation area
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                  Fewer FDA approvals
                </li>
              </ul>
            </Card>

            {/* Deep TMS */}
            <Card className="p-6 border-2 border-purple-200 bg-purple-50">
              <div className="text-center mb-6">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900">BrainsWay Deep TMS™</h4>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Reaches up to 6cm deep
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Patented H-Coil technology
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Multiple brain regions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Broader stimulation field
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  8 FDA clearances
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
