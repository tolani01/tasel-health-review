'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Phone, Mail } from 'lucide-react'

export function StillHaveQuestions() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <Card className="p-8 bg-gradient-to-br from-purple-50 to-teal-50 border-purple-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our experienced medical team is here to help you understand Deep TMS™ treatment 
              and determine if it&apos;s right for you. Contact us for a personalized consultation.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700 w-full"
                asChild
              >
                <a href="tel:+14059341681">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Oklahoma City
                </a>
              </Button>
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700 w-full"
                asChild
              >
                <a href="tel:+12102022341">
                  <Phone className="h-5 w-5 mr-2" />
                  Call San Antonio
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-purple-200 text-purple-700 hover:bg-purple-50 w-full"
                asChild
              >
                <a href="mailto:info@taselhealth.com">
                  <Mail className="h-5 w-5 mr-2" />
                  Email Questions
                </a>
              </Button>
            </div>

            <div className="mt-8 pt-6 border-t border-purple-200">
              <p className="text-sm text-gray-500">
                <strong>Medical Disclaimer:</strong> This information is for educational purposes only 
                and should not replace professional medical advice. Consult with our medical team 
                for personalized treatment recommendations.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
