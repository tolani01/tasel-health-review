'use client'

import { AlertTriangle, Phone } from 'lucide-react'

export function CrisisBanner() {
  return (
    <div className="sticky top-0 z-50 bg-red-600 text-white py-3 px-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-center flex-wrap gap-4 text-sm md:text-base">
        <div className="flex items-center space-x-2">
          <AlertTriangle className="h-5 w-5 flex-shrink-0" />
          <span className="font-semibold">Need urgent help?</span>
        </div>
        <div className="flex items-center space-x-4">
          <a 
            href="tel:988" 
            className="flex items-center space-x-1 hover:underline font-medium"
          >
            <Phone className="h-4 w-4" />
            <span>Call/Text 988</span>
          </a>
          <span className="text-red-200">•</span>
          <a 
            href="tel:911" 
            className="flex items-center space-x-1 hover:underline font-medium"
          >
            <Phone className="h-4 w-4" />
            <span>Emergency: 911</span>
          </a>
        </div>
      </div>
    </div>
  )
}
