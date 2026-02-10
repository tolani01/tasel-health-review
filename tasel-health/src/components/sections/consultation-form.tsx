'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card } from '@/components/ui/card'
import { X, CheckCircle, AlertCircle, Loader2, ArrowRight } from 'lucide-react'
import { sendConsultationEmail, sendAdminNotification, initEmailJS } from '@/lib/emailjs'

interface ConsultationFormProps {
  isVisible: boolean
  onClose: () => void
  preSelectedService?: string
  source: string // Which button triggered this form
}

export function ConsultationForm({ 
  isVisible, 
  onClose, 
  preSelectedService = '', 
  source 
}: ConsultationFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: preSelectedService,
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Initialize EmailJS on component mount
  useEffect(() => {
    initEmailJS()
  }, [])

  // Update service when preSelectedService changes
  useEffect(() => {
    if (preSelectedService) {
      setFormData(prev => ({ ...prev, service: preSelectedService }))
    }
  }, [preSelectedService])

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Send consultation email
      const result = await sendConsultationEmail({
        ...formData,
        source
      })

      if (result.success) {
        // Send admin notification
        await sendAdminNotification({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          service: formData.service,
          source
        })

        setSubmitStatus('success')
        
        // Reset form after success
        setTimeout(() => {
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            service: '',
            message: ''
          })
          setSubmitStatus('idle')
          onClose()
        }, 3000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Schedule Your Free Consultation
              </h2>
              <p className="text-gray-600 mt-1">
                Take the first step towards better mental health
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className={`mt-1 ${errors.firstName ? 'border-red-500' : ''}`}
                  placeholder="Enter your first name"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                )}
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className={`mt-1 ${errors.lastName ? 'border-red-500' : ''}`}
                  placeholder="Enter your last name"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`mt-1 ${errors.email ? 'border-red-500' : ''}`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={`mt-1 ${errors.phone ? 'border-red-500' : ''}`}
                  placeholder="405-934-1681"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Service Selection */}
            <div>
              <Label htmlFor="service">Preferred Service *</Label>
              <Select 
                value={formData.service} 
                onValueChange={(value) => handleInputChange('service', value)}
              >
                <SelectTrigger className={`mt-1 ${errors.service ? 'border-red-500' : ''}`}>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tms">TMS Therapy</SelectItem>
                  <SelectItem value="psychiatry">Psychiatric Care</SelectItem>
                  <SelectItem value="counseling">Therapy & Counseling</SelectItem>
                  <SelectItem value="comprehensive">Comprehensive Care</SelectItem>
                  <SelectItem value="consultation">Free Consultation</SelectItem>
                </SelectContent>
              </Select>
              {errors.service && (
                <p className="text-red-500 text-sm mt-1">{errors.service}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className={`mt-1 min-h-[100px] ${errors.message ? 'border-red-500' : ''}`}
                placeholder="Tell us about your needs or questions..."
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="flex-1 bg-purple-600 hover:bg-purple-700"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Schedule Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={onClose}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg">
                <CheckCircle className="h-5 w-5" />
                <p>Thank you! We&apos;ll contact you within 24 hours to schedule your consultation.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg">
                <AlertCircle className="h-5 w-5" />
                <p>Sorry, there was an error sending your message. Please try again or call us directly.</p>
              </div>
            )}

            {/* Privacy Notice */}
            <p className="text-sm text-gray-600 text-center">
              By submitting this form, you agree to our privacy policy and consent to being contacted by our team.
            </p>
          </form>
        </div>
      </Card>
    </div>
  )
}
