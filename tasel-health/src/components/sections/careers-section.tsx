'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Stethoscope, 
  MessageSquare, 
  Heart, 
  Users, 
  DollarSign, 
  BookOpen, 
  Clock, 
  TrendingUp,
  Mail,
  Briefcase
} from 'lucide-react'

export function CareersSection() {
  const positions = [
    {
      icon: Stethoscope,
      title: 'Psychiatrists & PMHNPs',
      subtitle: 'Practice BrainsWay Deep TMS™ + medication management',
      details: [
        'Full-time or part-time in Oklahoma City (San Antonio coming 2025)',
        'Telehealth options available',
        'New graduates welcome with mentorship program',
        'Competitive compensation + benefits'
      ],
      badge: 'Medical Providers',
      badgeColor: 'bg-blue-100 text-blue-700'
    },
    {
      icon: MessageSquare,
      title: 'Licensed Therapists',
      subtitle: 'LPC, LMFT, LCSW - All specialties welcome',
      details: [
        'Individual, couples, and family therapy',
        'Evidence-based training provided (CBT, DBT, EMDR)',
        'Hybrid remote opportunities',
        'Supportive clinical supervision for new licensees'
      ],
      badge: 'Therapists',
      badgeColor: 'bg-teal-100 text-teal-700'
    },
    {
      icon: Stethoscope,
      title: 'Physician Assistants',
      subtitle: 'Grow your career in psychiatric medicine',
      details: [
        'Comprehensive training in mental health care',
        'Work alongside experienced psychiatrists',
        'Medication management + patient care',
        'Career development opportunities'
      ],
      badge: 'PAs',
      badgeColor: 'bg-purple-100 text-purple-700'
    },
    {
      icon: Users,
      title: 'Clinical Support Team',
      subtitle: 'TMS technicians, medical assistants, care coordinators',
      details: [
        'Full training provided (no prior TMS experience needed!)',
        'Be part of cutting-edge treatment delivery',
        'Compassionate, mission-driven team',
        'Growth opportunities as we expand'
      ],
      badge: 'Support Roles',
      badgeColor: 'bg-green-100 text-green-700'
    }
  ]

  const benefits = [
    { icon: DollarSign, text: 'Competitive compensation' },
    { icon: Heart, text: 'Comprehensive benefits package' },
    { icon: BookOpen, text: 'CME/CEU support + paid training' },
    { icon: Clock, text: 'Flexible scheduling options' },
    { icon: Users, text: 'Collaborative culture' },
    { icon: TrendingUp, text: 'Career advancement as we grow' },
    { icon: Briefcase, text: 'Robust mentorship for new graduates' },
    { icon: Stethoscope, text: 'Work with BrainsWay Deep TMS™' }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-teal-600">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 text-lg px-6 py-3 bg-yellow-400 text-purple-900 hover:bg-yellow-300">
            ✨ Now Hiring - Join Our Growing Team!
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Careers at Tasel Health
          </h2>
          <p className="text-xl text-purple-100 mb-4 max-w-3xl mx-auto">
            Help us expand access to innovative, compassionate mental health care
          </p>
        </div>

        {/* Opening Paragraphs */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <p className="text-lg text-white leading-relaxed mb-6">
              Tasel Health is <strong>rapidly growing</strong> across Oklahoma and Texas—and we need 
              talented, passionate mental health professionals to join our mission. Whether you&apos;re a 
              <strong> new graduate</strong> seeking excellent training and mentorship, or an 
              <strong> experienced provider</strong> looking for a collaborative practice with cutting-edge 
              technology, we offer a unique opportunity to practice evidence-based care in a supportive environment.
            </p>
            <p className="text-lg text-white leading-relaxed">
              Our team members help shape the future of mental health treatment while maintaining 
              <strong> work-life balance</strong> and <strong>professional growth</strong>.
            </p>
          </div>
        </div>

        {/* Positions Grid */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Open Positions
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {positions.map((position, index) => {
              const Icon = position.icon
              
              return (
                <Card key={index} className="bg-white hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-14 h-14 bg-gradient-to-br from-purple-100 to-teal-100 rounded-2xl flex items-center justify-center`}>
                        <Icon className="h-7 w-7 text-purple-600" />
                      </div>
                      <Badge className={position.badgeColor}>
                        {position.badge}
                      </Badge>
                    </div>
                    
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">
                      {position.title}
                    </h4>
                    <p className="text-gray-600 mb-6">
                      {position.subtitle}
                    </p>
                    
                    <ul className="space-y-3">
                      {position.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <span className="text-teal-600 mr-2 font-bold">✓</span>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              What We Offer All Team Members
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                
                return (
                  <div key={index} className="text-center">
                    <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      <Icon className="h-6 w-6 text-teal-300" />
                    </div>
                    <p className="text-sm text-white">{benefit.text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Application CTA */}
        <div className="max-w-3xl mx-auto">
          <Card className="bg-white">
            <CardContent className="p-8 text-center">
              <Mail className="h-16 w-16 text-purple-600 mx-auto mb-6" />
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Join Us?
              </h3>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Send your resume to <strong>info@taselhealth.com</strong> with the 
                position in your subject line. We review applications weekly.
              </p>
              
              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  className="bg-purple-600 hover:bg-purple-700 text-white px-16 py-6 text-lg"
                  asChild
                >
                  <a href="mailto:info@taselhealth.com">
                    <Mail className="h-5 w-5 mr-2" />
                    Email Resume
                  </a>
                </Button>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <strong>Tasel Health is an Equal Opportunity Employer.</strong> We celebrate 
                  diversity and are committed to creating an inclusive environment for all employees.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
