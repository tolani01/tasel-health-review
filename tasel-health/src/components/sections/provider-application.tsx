'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Mail, FileText, MapPin, Briefcase, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { useState } from 'react'
import { sendMessageEmail, initEmailJS } from '@/lib/emailjs'
import { useEffect } from 'react'

export function ProviderApplication() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    location: '',
    experience: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    initEmailJS()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    try {
      const result = await sendMessageEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: `Provider Application\n\nPosition: ${formData.position}\nLocation Preference: ${formData.location}\nExperience: ${formData.experience}\n\nMessage:\n${formData.message}`,
        source: 'careers-page-provider-application'
      })

      if (result.success) {
        setStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          position: '',
          location: '',
          experience: '',
          message: ''
        })
      } else {
        setStatus('error')
        setErrorMessage('Failed to send application. Please try again or email us directly.')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage('An error occurred. Please email us directly at info@taselhealth.com')
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="tasel-card">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-gray-900 flex items-center">
                <Briefcase className="h-8 w-8 text-purple-600 mr-3" />
                Provider Application Form
              </CardTitle>
              <p className="text-gray-600 mt-4">
                Interested in joining our team? Fill out the form below and we'll review your application. 
                You can also email your resume directly to <a href="mailto:info@taselhealth.com" className="text-purple-600 hover:text-purple-700 underline">info@taselhealth.com</a>.
              </p>
            </CardHeader>
            <CardContent>
              {status === 'success' ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for your interest in joining Tasel Health. We've received your application 
                    and will review it within 1-2 business days.
                  </p>
                  <Button 
                    onClick={() => setStatus('idle')}
                    variant="outline"
                  >
                    Submit Another Application
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="john.doe@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder="(405) 555-1234"
                      />
                    </div>
                    <div>
                      <Label htmlFor="position">Position of Interest *</Label>
                      <Select
                        value={formData.position}
                        onValueChange={(value) => handleChange('position', value)}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a position" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="nurse-practitioner">Nurse Practitioner (NP)</SelectItem>
                          <SelectItem value="psychiatrist">Psychiatrist</SelectItem>
                          <SelectItem value="physician-assistant">Physician Assistant (PA)</SelectItem>
                          <SelectItem value="therapist">Licensed Therapist (LPC, LMFT, LCSW)</SelectItem>
                          <SelectItem value="clinical-support">Clinical Support (TMS Tech, MA, Care Coordinator)</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="location">Location Preference *</Label>
                      <Select
                        value={formData.location}
                        onValueChange={(value) => handleChange('location', value)}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="oklahoma-city">Oklahoma City, OK</SelectItem>
                          <SelectItem value="san-antonio">San Antonio, TX</SelectItem>
                          <SelectItem value="both">Both Locations</SelectItem>
                          <SelectItem value="telehealth">Telehealth Only</SelectItem>
                          <SelectItem value="no-preference">No Preference</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="experience">Years of Experience</Label>
                      <Select
                        value={formData.experience}
                        onValueChange={(value) => handleChange('experience', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new-graduate">New Graduate</SelectItem>
                          <SelectItem value="1-2-years">1-2 years</SelectItem>
                          <SelectItem value="3-5-years">3-5 years</SelectItem>
                          <SelectItem value="6-10-years">6-10 years</SelectItem>
                          <SelectItem value="10-plus-years">10+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Cover Letter / Additional Information</Label>
                    <Textarea
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Tell us about yourself, your experience, and why you're interested in joining Tasel Health..."
                    />
                    <p className="text-sm text-gray-500 mt-2">
                      Please note: You can attach your resume by emailing it to{' '}
                      <a href="mailto:info@taselhealth.com" className="text-purple-600 hover:text-purple-700 underline">
                        info@taselhealth.com
                      </a>
                    </p>
                  </div>

                  {status === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5" />
                      <div>
                        <p className="text-red-800 font-medium">Error submitting application</p>
                        <p className="text-red-600 text-sm mt-1">{errorMessage}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-purple-600 hover:bg-purple-700 text-white flex-1"
                      disabled={status === 'submitting'}
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Mail className="h-5 w-5 mr-2" />
                          Submit Application
                        </>
                      )}
                    </Button>
                    <Button
                      type="button"
                      size="lg"
                      variant="outline"
                      asChild
                      className="flex-1"
                    >
                      <a href="mailto:info@taselhealth.com?subject=Provider Application">
                        <FileText className="h-5 w-5 mr-2" />
                        Email Resume Instead
                      </a>
                    </Button>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <p className="text-sm text-blue-800">
                      <strong>Note:</strong> After submitting this form, please email your resume and any 
                      supporting documents to <a href="mailto:info@taselhealth.com" className="underline font-medium">info@taselhealth.com</a> with 
                      the subject line "Provider Application - [Your Name]". We review applications weekly.
                    </p>
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
