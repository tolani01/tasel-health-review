'use client'

import { useState } from 'react'
import { InsuranceCard } from './insurance-card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Search, Shield, Users, MapPin, Phone, Mail, DollarSign, CheckCircle } from 'lucide-react'
import { 
  insuranceProviders, 
  getCommercialProviders, 
  getGovernmentProviders, 
  getRegionalProviders 
} from '@/data/insurance-providers'

export function InsuranceOverview() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'commercial' | 'government' | 'regional'>('all')

  // Filter providers based on search and category
  const filteredProviders = insuranceProviders.filter(provider => {
    const matchesSearch = provider.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || provider.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const categories = [
    { id: 'all', label: 'All Providers', count: insuranceProviders.length },
    { id: 'commercial', label: 'Commercial', count: getCommercialProviders().length },
    { id: 'government', label: 'Government', count: getGovernmentProviders().length },
    { id: 'regional', label: 'Regional', count: getRegionalProviders().length }
  ]

  return (
    <section className="tasel-section bg-gray-50 relative z-0">
      <div className="tasel-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Accepted Insurance Providers
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Search below to find your insurance plan or contact us to verify your coverage
          </p>

          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search insurance providers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-lg"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id as any)}
                  className="flex items-center space-x-2"
                >
                  <span>{category.label}</span>
                  <Badge variant="secondary" className="ml-1">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Insurance Providers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredProviders.map((provider, index) => (
            <div
              key={provider.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <InsuranceCard
                provider={provider}
              />
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProviders.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No providers found
            </h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search terms or category filter.
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('all')
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Coverage Verification Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Verify Your Coverage
            </h3>
            <p className="text-gray-600">
              Don&apos;t see your insurance provider? Contact us to verify your coverage and benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Call Us</h4>
              <p className="text-gray-600 text-sm mb-3">
                Speak with our insurance specialists
              </p>
              <div className="space-y-1">
                <a 
                  href="tel:+14059341681" 
                  className="block text-purple-600 hover:text-purple-700 font-medium"
                >
                  Oklahoma City: 405-934-1681
                </a>
                <a 
                  href="tel:+12102022341" 
                  className="block text-purple-600 hover:text-purple-700 font-medium"
                >
                  San Antonio: 210-202-2341
                </a>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <Mail className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Email Us</h4>
              <p className="text-gray-600 text-sm mb-3">
                Send us your insurance information
              </p>
              <a 
                href="mailto:info@taselhealth.com" 
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                info@taselhealth.com
              </a>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Visit Us</h4>
              <p className="text-gray-600 text-sm mb-3">
                Bring your insurance card to your appointment
              </p>
              <span className="text-purple-600 font-medium">
                We&apos;ll verify on-site
              </span>
            </div>
          </div>
        </div>

        {/* Important Information */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <Shield className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <h4 className="font-semibold text-amber-900 mb-2">
                Important Insurance Information
              </h4>
              <ul className="text-sm text-amber-800 space-y-1">
                <li>• Coverage verification is recommended before your first appointment</li>
                <li>• Copays and deductibles vary by insurance plan</li>
                <li>• Some services may require prior authorization</li>
                <li>• We accept most major insurance plans but coverage may vary</li>
                <li>• Self-pay options are available for uninsured patients</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
