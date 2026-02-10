'use client'

import { useState, useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { MessageSquare, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { sendMessageEmail, initEmailJS } from '@/lib/emailjs'

export function MessageUsCompact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Initialize EmailJS on component mount
  useEffect(() => {
    initEmailJS()
  }, [])

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[\d\s\-\(\)\+]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
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
      await sendMessageEmail({ ...formData, source: 'Contact Page' })
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
      setErrors({})
    } catch (err) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="tasel-card">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-4 rounded-full bg-gradient-to-r from-lavender-100 to-teal-100 w-fit">
                <MessageSquare className="h-8 w-8 text-lavender-600" />
              </div>
              <CardTitle className="text-2xl font-semibold text-lavender-600 mb-2">
                Send Us a Message
              </CardTitle>
              <p className="text-gray-600">
                Have a question? Send us a quick message and we&apos;ll get back to you.
              </p>
            </CardHeader>
            
            <CardContent>
              {submitStatus === 'success' ? (
                <div className="text-center py-8">
                  <div className="mx-auto mb-6 p-4 rounded-full bg-green-100 w-fit animate-fade-in">
                    <CheckCircle className="h-12 w-12 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Sent Successfully!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. We&apos;ll respond within 24 hours.
                  </p>
                  <Button
                    onClick={() => setSubmitStatus('idle')}
                    variant="outline"
                    className="border-lavender-200 text-lavender-700 hover:bg-lavender-50"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        className={`mt-1 ${errors.name ? 'border-red-500' : ''}`}
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className={`mt-1 ${errors.email ? 'border-red-500' : ''}`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                      className={`mt-1 ${errors.phone ? 'border-red-500' : ''}`}
                      placeholder="(405) 934-1681"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                      rows={4}
                      className={`mt-1 ${errors.message ? 'border-red-500' : ''}`}
                      placeholder="Tell us how we can help..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  {submitStatus === 'error' && (
                    <div className="flex items-center space-x-3 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                      <AlertCircle className="h-5 w-5 flex-shrink-0" />
                      <p className="text-sm">
                        Failed to send message. Please try calling Oklahoma City at (405) 934-1681 or San Antonio at (210) 202-2341.
                      </p>
                    </div>
                  )}

                  <div className="text-center">
                    <Button 
                      type="submit" 
                      size="lg" 
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-lavender-500 to-teal-500 hover:from-lavender-600 hover:to-teal-600 text-white px-8 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <MessageSquare className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
