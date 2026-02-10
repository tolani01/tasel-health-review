'use client'

import { Card } from '@/components/ui/card'
import { Shield, Lock, AlertCircle } from 'lucide-react'

export function TherapyPrivacy() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-green-50 to-teal-50 border-green-200">
            <div className="flex items-start space-x-4 mb-6">
              <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Privacy & Confidentiality
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Your privacy matters. Sessions are confidential and protected by HIPAA. 
                  We use secure platforms and discuss confidentiality before we begin.
                </p>
              </div>
            </div>

            {/* Exceptions */}
            <div className="bg-white rounded-lg p-6 border border-green-200">
              <div className="flex items-start space-x-3 mb-4">
                <AlertCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Legal Exceptions to Confidentiality</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    We're required by law to share information in these rare situations:
                  </p>
                </div>
              </div>
              
              <div className="space-y-2 text-sm text-gray-700 ml-8">
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Risk of harm to yourself or others</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Suspected child, elder, or dependent adult abuse or neglect</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Court orders or legal subpoenas</p>
                </div>
              </div>
            </div>

            {/* Coordination */}
            <div className="mt-6 p-4 bg-white/60 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Care Coordination:</strong> With your written permission, we can coordinate with your 
                doctor, psychiatrist, or other providers to ensure seamless care.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
