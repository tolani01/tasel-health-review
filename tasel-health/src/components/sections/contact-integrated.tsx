'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { useConsultation } from '@/contexts/consultation-context'

export function ContactIntegrated() {
  const { showForm } = useConsultation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    service: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', message: '', service: '' })
  }

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our team',
      details: 'OKC: 405-934-1681 | SA: 210-202-2341',
      action: 'Call Oklahoma City',
      href: 'tel:+14059341681',
      primary: true
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us a message',
      details: 'info@taselhealth.com',
      action: 'Send Email',
      href: 'mailto:info@taselhealth.com',
      primary: true
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Come to our clinic',
      details: '123 Mental Health Way, Oklahoma City, OK 73101',
      action: 'Get Directions',
      href: 'https://maps.google.com',
      primary: false
    },
    {
      icon: Clock,
      title: 'Hours',
      description: 'When we&apos;re available',
      details: 'Mon–Fri: 9AM-5PM, Sat & Sun: Closed',
      action: 'View Hours',
      href: '#',
      primary: false
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your preferred way to contact us. We&apos;re here to help with your mental health needs.
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <Card 
                  key={method.title}
                  className={`tasel-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group ${
                    method.primary ? 'border-lavender-200 bg-gradient-to-br from-lavender-50 to-teal-50' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="text-center">
                    <div className={`mx-auto mb-4 p-4 rounded-full w-fit group-hover:scale-110 transition-transform duration-300 ${
                      method.primary 
                        ? 'bg-gradient-to-r from-lavender-100 to-teal-100' 
                        : 'bg-gray-100'
                    }`}>
                      <Icon className={`h-8 w-8 ${
                        method.primary ? 'text-lavender-600' : 'text-gray-600'
                      }`} />
                    </div>
                    <CardTitle className={`text-xl font-semibold mb-2 ${
                      method.primary ? 'text-lavender-600' : 'text-gray-900'
                    }`}>
                      {method.title}
                    </CardTitle>
                    <p className="text-gray-600 text-sm mb-4">
                      {method.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="text-center">
                    <p className={`text-lg font-medium mb-4 ${
                      method.primary ? 'text-lavender-700' : 'text-gray-700'
                    }`}>
                      {method.details}
                    </p>
                    
                    <Button 
                      variant={method.primary ? "default" : "outline"}
                      className={`w-full group-hover:scale-105 transition-transform duration-300 ${
                        method.primary 
                          ? 'bg-lavender-600 hover:bg-lavender-700 text-white' 
                          : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                      asChild
                    >
                      <a href={method.href}>
                        {method.action}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Compact Message Us Form */}
          <div className="max-w-2xl mx-auto">
            <Card className="tasel-card">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 rounded-full bg-gradient-to-r from-lavender-100 to-teal-100 w-fit">
                  <MessageSquare className="h-8 w-8 text-lavender-600" />
                </div>
                <CardTitle className="text-2xl font-semibold text-lavender-600 mb-2">
                  Message Us
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
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className="mt-1"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                        className="mt-1"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service">Service Interest (Optional)</Label>
                    <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tms">TMS Therapy</SelectItem>
                        <SelectItem value="psychiatry">Psychiatry</SelectItem>
                        <SelectItem value="counseling">Counseling</SelectItem>
                        <SelectItem value="general">General Question</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                      rows={4}
                      className="mt-1"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <div className="text-center">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="bg-lavender-600 hover:bg-lavender-700 text-white px-8 py-3"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>

                {/* CTA for Consultation */}
                <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                  <p className="text-gray-600 mb-4">
                    Need a consultation? Schedule a free consultation with our team.
                  </p>
                  <Button 
                    variant="outline"
                    size="lg"
                    onClick={() => showForm('', 'contact-page')}
                    className="border-lavender-300 text-lavender-600 hover:bg-lavender-50"
                  >
                    Schedule Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
