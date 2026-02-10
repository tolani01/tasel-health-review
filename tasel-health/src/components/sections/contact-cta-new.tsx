'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Mail, MapPin, Clock, ArrowRight, MessageSquare, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useConsultation } from '@/contexts/consultation-context'
import { sendMessageEmail, initEmailJS } from '@/lib/emailjs'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Oklahoma City',
    details: '9210 S Western, Suite A-21, Oklahoma City, OK 73139 | (405) 934-1681',
    description: 'Visit or call our Oklahoma City clinic',
    action: 'Get Directions',
    href: 'https://www.google.com/maps?q=9210+S+Western+Suite+A-21+Oklahoma+City+OK+73139',
    primary: true
  },
  {
    icon: MapPin,
    title: 'San Antonio',
    details: '4402 Vance Jackson Rd, Suite 218, San Antonio, TX 78230 | (210) 202-2341',
    description: 'Visit or call our San Antonio clinic',
    action: 'Get Directions',
    href: 'https://www.google.com/maps?q=4402+Vance+Jackson+Rd+Suite+218+San+Antonio+TX+78230',
    primary: true
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: 'info@taselhealth.com',
    description: 'Send us your questions',
    action: 'Send Email',
    href: 'mailto:info@taselhealth.com',
    primary: false
  },
  {
    icon: Clock,
    title: 'Hours',
    details: 'Mon–Fri: 9AM-5PM, Sat & Sun: Closed',
    description: 'After-hours by request only',
    action: 'View Hours',
    href: '/location',
    primary: false
  }
]

export function ContactCTANew() {
  const { showForm } = useConsultation()
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
      const result = await sendMessageEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        source: 'homepage-contact-cta'
      })

      if (result.success) {
        setSubmitStatus('success')
        
        // Reset form after success
        setTimeout(() => {
          setFormData({ name: '', email: '', phone: '', message: '' })
          setSubmitStatus('idle')
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

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contact us today to schedule your consultation and start your journey to better mental health.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <Card 
                key={info.title}
                className={`tasel-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group ${
                  info.primary ? 'border-lavender-200 bg-gradient-to-br from-lavender-50 to-teal-50' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className={`mx-auto mb-4 p-4 rounded-full w-fit group-hover:scale-110 transition-transform duration-300 ${
                    info.primary 
                      ? 'bg-gradient-to-r from-lavender-100 to-teal-100' 
                      : 'bg-gray-100'
                  }`}>
                    <Icon className={`h-8 w-8 ${
                      info.primary ? 'text-lavender-600' : 'text-gray-600'
                    }`} />
                  </div>
                  <CardTitle className={`text-xl font-semibold mb-2 ${
                    info.primary ? 'text-lavender-600' : 'text-gray-900'
                  }`}>
                    {info.title}
                  </CardTitle>
                  <p className="text-gray-600 text-sm mb-4">
                    {info.description}
                  </p>
                </CardHeader>
                
                <CardContent className="text-center">
                  <p className={`text-lg font-medium mb-4 ${
                    info.primary ? 'text-lavender-700' : 'text-gray-700'
                  }`}>
                    {info.details}
                  </p>
                  
                  <Button 
                    variant={info.primary ? "default" : "outline"}
                    className={`w-full group-hover:scale-105 transition-transform duration-300 ${
                      info.primary 
                        ? 'bg-lavender-600 hover:bg-lavender-700 text-white' 
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                    asChild
                  >
                    <a href={info.href}>
                      {info.action}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Compact Message Form */}
        <div className="max-w-2xl mx-auto mb-16">
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
                    placeholder="405-934-1681"
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

                <div className="text-center">
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="bg-lavender-600 hover:bg-lavender-700 text-white px-8 py-3"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </div>
              </form>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mt-6 flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg">
                  <CheckCircle className="h-5 w-5" />
                  <p>Thank you! We&apos;ll get back to you within 24 hours.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-6 flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg">
                  <AlertCircle className="h-5 w-5" />
                  <p>Sorry, there was an error sending your message. Please try again or call us directly.</p>
                </div>
              )}

              {/* CTA for Consultation */}
              <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                <p className="text-gray-600 mb-4">
                  Need a consultation? Schedule a free consultation with our team.
                </p>
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={() => showForm('', 'contact-cta')}
                  className="border-lavender-300 text-lavender-600 hover:bg-lavender-50"
                >
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Why Patients Trust Tasel Health
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-2xl font-bold text-lavender-600 mb-2">100%</div>
                <div className="text-gray-600">Confidential & Private</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-lavender-600 mb-2">FDA</div>
                <div className="text-gray-600">Cleared Treatments</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-lavender-600 mb-2">5+</div>
                <div className="text-gray-600">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
