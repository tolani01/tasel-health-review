'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Phone, Globe, Shield } from 'lucide-react'
import Image from 'next/image'
import { InsuranceProvider } from '@/data/insurance-providers'
import { cn } from '@/lib/utils'

interface InsuranceCardProps {
  provider: InsuranceProvider
  className?: string
}

export function InsuranceCard({ provider, className }: InsuranceCardProps) {
  const [imageError, setImageError] = useState(false)

  const getCategoryColor = (category: InsuranceProvider['category']) => {
    switch (category) {
      case 'commercial':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'government':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'regional':
        return 'bg-purple-100 text-purple-800 border-purple-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getCategoryLabel = (category: InsuranceProvider['category']) => {
    switch (category) {
      case 'commercial':
        return 'Commercial'
      case 'government':
        return 'Government'
      case 'regional':
        return 'Regional'
      default:
        return 'Other'
    }
  }

  return (
    <Card className={cn(
      "tasel-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group",
      className
    )}>
      <CardHeader className="text-center pb-4">
        {/* Logo or Fallback */}
        <div className="mx-auto mb-4 p-4 bg-white rounded-lg shadow-sm border min-h-[80px] flex items-center justify-center">
          {!imageError ? (
            <Image
              src={provider.logo}
              alt={`${provider.name} logo`}
              width={120}
              height={60}
              className="h-12 w-auto mx-auto object-contain"
              onError={() => setImageError(true)}
              unoptimized // Required for external URLs
            />
          ) : (
            // Fallback: Show icon with provider name
            <div className="flex flex-col items-center justify-center text-gray-400">
              <Shield className="h-10 w-10 mb-2" />
              <span className="text-xs font-medium text-gray-600">{provider.name}</span>
            </div>
          )}
        </div>

        {/* Provider Name */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {provider.name}
        </h3>

        {/* Category Badge */}
        <Badge 
          variant="outline" 
          className={cn("w-fit mx-auto text-xs", getCategoryColor(provider.category))}
        >
          {getCategoryLabel(provider.category)}
        </Badge>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Description */}
        {provider.description && (
          <p className="text-sm text-gray-600 mb-4 text-center">
            {provider.description}
          </p>
        )}

        {/* Coverage Areas */}
        {provider.coverageAreas && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-900 mb-2">Coverage Areas:</h4>
            <div className="flex flex-wrap gap-1">
              {provider.coverageAreas.map((area, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {area}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Accepted Plans */}
        {provider.acceptedPlans && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-900 mb-2">Accepted Plans:</h4>
            <div className="flex flex-wrap gap-1">
              {provider.acceptedPlans.map((plan, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {plan}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Contact Information */}
        <div className="space-y-2 pt-4 border-t">
          {provider.phone && (
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
              <Phone className="h-4 w-4" />
              <a 
                href={`tel:${provider.phone}`}
                className="hover:text-purple-600 transition-colors"
              >
                {provider.phone}
              </a>
            </div>
          )}
          
          {provider.website && (
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
              <Globe className="h-4 w-4" />
              <a 
                href={provider.website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-600 transition-colors flex items-center space-x-1"
              >
                <span>Visit Website</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
