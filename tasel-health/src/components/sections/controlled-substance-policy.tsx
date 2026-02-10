'use client'

import { Card } from '@/components/ui/card'
import { Shield, CheckCircle, AlertCircle } from 'lucide-react'

export function ControlledSubstancePolicy() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 rounded-full px-6 py-2 text-sm font-medium mb-4">
              <Shield className="h-4 w-4 mr-2" />
              Controlled Medication Policy
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Controlled Substance Prescribing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We prescribe controlled medications responsibly when appropriate, with careful monitoring 
              and clear guidelines to ensure your safety.
            </p>
          </div>

          {/* What are controlled substances */}
          <Card className="p-8 mb-8 bg-gradient-to-br from-blue-50 to-teal-50">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">What Are Controlled Medications?</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Controlled substances are medications with potential for dependence or misuse. 
              They include stimulants (for ADHD), benzodiazepines (for anxiety), and certain sleep medications. 
              These can be helpful tools when used appropriately under close medical supervision.
            </p>
          </Card>

          {/* Requirements */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Requirements for Controlled Medications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-start space-x-3 mb-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Comprehensive Evaluation</h4>
                    <p className="text-sm text-gray-600">
                      Review of your medical history, current symptoms, and past medication trials
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-3 mb-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Treatment Agreement</h4>
                    <p className="text-sm text-gray-600">
                      Written agreement outlining expectations, refill policies, and monitoring requirements
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-3 mb-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Prescription Monitoring</h4>
                    <p className="text-sm text-gray-600">
                      We check state prescription databases (PDMP) to ensure safe prescribing
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-3 mb-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Regular Follow-Ups</h4>
                    <p className="text-sm text-gray-600">
                      Monthly visits initially to monitor effectiveness and watch for concerns
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-3 mb-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">ID Verification</h4>
                    <p className="text-sm text-gray-600">
                      Photo ID required at each controlled substance prescription pickup
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-3 mb-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Urine Drug Screening</h4>
                    <p className="text-sm text-gray-600">
                      May be required for certain medications to ensure safe and appropriate use
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Refill Policy */}
          <Card className="p-8 bg-amber-50 border-amber-200">
            <div className="flex items-start space-x-4">
              <AlertCircle className="h-8 w-8 text-amber-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Refill Policy</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm">Request refills <strong>3-5 business days before</strong> you run out through the patient portal or by phone</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm"><strong>No early refills</strong> for lost or stolen medications</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm">Prescriptions must be filled at an <strong>in-state pharmacy</strong></p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm">Refills <strong>require keeping scheduled appointments</strong>—missed visits may pause refills</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Alternatives */}
          <div className="mt-8 p-6 bg-gradient-to-br from-purple-50 to-teal-50 rounded-xl">
            <h4 className="font-bold text-gray-900 mb-3">Non-Controlled Alternatives</h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              We always consider non-controlled medication options first and recommend behavioral therapies 
              (like CBT for insomnia or anxiety) alongside or instead of controlled medications when appropriate. 
              Our goal is the safest, most effective treatment plan for your unique needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
