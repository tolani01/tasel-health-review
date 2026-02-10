'use client'

import { Card } from '@/components/ui/card'
import { Activity, Heart, Droplet, Scale, AlertCircle } from 'lucide-react'

export function SafetyMonitoring() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 rounded-full px-6 py-2 text-sm font-medium mb-4">
              <Heart className="h-4 w-4 mr-2" />
              Your Safety First
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Safety & Monitoring
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your safety comes first. We use evidence-based monitoring to ensure medications 
              work well for you with minimal side effects.
            </p>
          </div>

          {/* Key Message */}
          <Card className="p-8 mb-12 bg-gradient-to-br from-blue-50 to-teal-50 border-blue-200">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              "We start low, go slow, and monitor regularly. Every medication decision is 
              individualized and backed by evidence—adjusted based on how YOU respond."
            </p>
          </Card>

          {/* Monitoring Elements */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-xl p-3 flex-shrink-0">
                  <Activity className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Baseline Checks</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We measure vitals (blood pressure, heart rate), weight, and review your medical 
                    and family history before starting medications.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-teal-100 rounded-xl p-3 flex-shrink-0">
                  <Droplet className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Lab Testing</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Some medications require blood tests (kidney function, liver enzymes, blood counts, 
                    or drug levels) to ensure safety. We'll order these when needed.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 rounded-xl p-3 flex-shrink-0">
                  <Heart className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Heart Monitoring</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Certain medications may affect heart rhythm. We review cardiac history and may 
                    request an ECG (heart tracing) when indicated.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-xl p-3 flex-shrink-0">
                  <Scale className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Metabolic Monitoring</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Some medications can affect weight, blood sugar, or cholesterol. We track these 
                    and work with you to minimize unwanted effects.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Side Effect Management */}
          <Card className="p-8 bg-white border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Side Effect Management</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              All medications can have side effects, but most are mild and manageable. We'll discuss 
              what to watch for and how to address common concerns:
            </p>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'Upset stomach or nausea',
                'Sleep changes',
                'Energy level shifts',
                'Sexual side effects',
                'Weight changes',
                'Dry mouth or headaches'
              ].map((sideEffect, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <span>{sideEffect}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700">
                  <strong>Important:</strong> We'll work with you to minimize side effects through dose adjustments, 
                  timing changes, or medication switches. Always tell us about any concerns—most issues can be managed.
                </p>
              </div>
            </div>
          </Card>

          {/* Special Populations */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Special Considerations</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-gradient-to-br from-pink-50 to-purple-50">
                <h4 className="font-bold text-gray-900 mb-3">Pregnancy & Breastfeeding</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  We provide careful risk-benefit counseling for those planning pregnancy, currently pregnant, 
                  or breastfeeding. We'll discuss the safest options and latest research to help you make 
                  informed decisions about your care.
                </p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-blue-50 to-teal-50">
                <h4 className="font-bold text-gray-900 mb-3">Drug Interactions</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  We review all your medications, supplements, and substance use (alcohol, cannabis, etc.) 
                  to avoid harmful interactions. Always tell us about everything you're taking—even 
                  over-the-counter products.
                </p>
              </Card>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="mt-8 text-center p-6 bg-gradient-to-r from-blue-100 to-teal-100 rounded-xl">
            <p className="text-gray-800 font-medium">
              Our approach: <span className="text-blue-700">"Lowest effective dose, add slowly, monitor regularly."</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
