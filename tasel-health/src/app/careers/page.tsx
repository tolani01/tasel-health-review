import { Metadata } from 'next'
import { CareersSection } from '@/components/sections/careers-section'
import { ProviderApplication } from '@/components/sections/provider-application'
import { Button } from '@/components/ui/button'
import { Briefcase, Users, Heart, TrendingUp, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Careers at Tasel Health | Join Our Mental Health Team',
  description: 'Join Tasel Health as a Nurse Practitioner, Psychiatrist, Therapist, or Clinical Support team member. We\'re hiring in Oklahoma City and San Antonio. Competitive benefits, mentorship, and growth opportunities.',
  keywords: [
    'mental health jobs',
    'NP jobs San Antonio',
    'psychiatrist jobs Oklahoma',
    'therapist jobs',
    'mental health careers',
    'healthcare jobs',
    'nurse practitioner jobs',
    'TMS technician jobs'
  ],
  openGraph: {
    title: 'Careers at Tasel Health | Join Our Mental Health Team',
    description: 'Join our growing team of mental health professionals. We\'re hiring providers in Oklahoma City and San Antonio.',
    type: 'website',
  },
}

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-teal-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/neural-pattern.svg')] opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-base font-medium mb-6">
              <Briefcase className="h-5 w-5 mr-2" />
              Now Hiring - Join Our Team!
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Build Your Career in
              <span className="block text-teal-300">Mental Health Care</span>
            </h1>
            
            <p className="text-xl text-purple-100 leading-relaxed max-w-3xl mx-auto mb-8">
              Join Tasel Health and help us expand access to innovative, compassionate mental health care. 
              We're growing across Oklahoma and Texas and need talented professionals like you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg font-semibold"
                asChild
              >
                <a href="#application">
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg font-semibold"
                asChild
              >
                <a href="#open-positions">
                  View Open Positions
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Join Tasel Health?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer more than just a job—we offer a mission, mentorship, and meaningful work 
                that makes a difference in people's lives.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Mission-Driven</h3>
                <p className="text-gray-600">
                  Help expand access to cutting-edge mental health treatments and make a real impact in your community.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Mentorship & Growth</h3>
                <p className="text-gray-600">
                  New graduates welcome! We provide comprehensive training, mentorship, and career development opportunities.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-lavender-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-lavender-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Competitive Benefits</h3>
                <p className="text-gray-600">
                  Competitive compensation, comprehensive benefits, CME/CEU support, and flexible scheduling options.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cutting-Edge Technology</h3>
                <p className="text-gray-600">
                  Work with BrainsWay Deep TMS™, Spravato®, and other innovative treatments at the forefront of mental health care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're actively hiring for multiple positions across our Oklahoma City and San Antonio locations.
            </p>
          </div>
          <CareersSection />
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application" className="py-20 bg-white">
        <ProviderApplication />
      </section>

      {/* Equal Opportunity Statement */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-700">
              <strong>Tasel Health is an Equal Opportunity Employer.</strong> We celebrate diversity and are 
              committed to creating an inclusive environment for all employees. We do not discriminate on the 
              basis of race, color, religion, gender, gender identity or expression, sexual orientation, national 
              origin, genetics, disability, age, or veteran status.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
