import { Metadata } from 'next'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { MessageUsCompact } from '@/components/sections/message-us-compact'

export const metadata: Metadata = {
  title: 'Mental Health Services | TMS Therapy, Spravato®, Ketamine, Psychiatry, Counseling',
  description: 'Evidence-based services including TMS Therapy, Spravato®/Ketamine, Psychiatry, and Counseling. In-person and telehealth options where available.',
  keywords: [
    'mental health services',
    'TMS therapy',
    'Spravato treatment',
    'ketamine therapy',
    'psychiatry',
    'counseling',
    'depression treatment',
    'anxiety treatment'
  ],
}

const services = [
  {
    id: 'tms',
    title: 'BrainsWay Deep TMS™ Therapy',
    description: 'FDA-cleared, non-invasive treatment for depression, OCD, anxious depression, smoking cessation, and more.',
    href: '/services/tms-therapy',
    bullets: ['FDA-cleared', 'Non-invasive', 'Short daily sessions']
  },
  {
    id: 'spravato-ketamine',
    title: 'Spravato® & Ketamine',
    description: 'FDA-approved rapid relief for treatment-resistant depression. Breakthrough treatment when other medications haven\'t worked.',
    href: '/services/spravato-ketamine',
    bullets: ['FDA-approved', 'Rapid relief', 'Treatment-resistant']
  },
  {
    id: 'psychiatry',
    title: 'Psychiatry',
    description: 'Comprehensive evaluations and ongoing medication management tailored to your needs.',
    href: '/services/psychiatry',
    bullets: ['Evaluation & diagnosis', 'Medication management', 'Follow-up care']
  },
  {
    id: 'counseling',
    title: 'Counseling & Therapy',
    description: 'Individual and family therapy using evidence-based modalities like CBT and ACT.',
    href: '/services/counseling',
    bullets: ['CBT/ACT approaches', 'In-person & telehealth', 'Personalized goals']
  },
  {
    id: 'comprehensive',
    title: 'Comprehensive Care',
    description: 'Integrated plans that combine therapies for optimal outcomes.',
    href: '/services/comprehensive-care',
    bullets: ['Integrated approach', 'Team-based care', 'Outcome focused']
  }
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero image only (no overlay/CTA) */}
      <section className="relative h-[46vh] md:h-[56vh]">
        <Image
          src="/images/services-hero.png"
          alt="Tasel Health services hero"
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
        {/* Right-side gradient band overlay to obscure window text */}
        <div className="absolute inset-y-0 right-0 w-2/5 md:w-1/3 bg-gradient-to-l from-teal-900/50 via-teal-700/30 to-transparent backdrop-blur-sm animate-fade-in-slow" />
        {/* Left-side subtle balancing band */}
        <div className="absolute inset-y-0 left-0 w-1/6 md:w-1/5 bg-gradient-to-r from-purple-900/30 via-purple-700/20 to-transparent backdrop-blur-[1px] animate-fade-in-slow" style={{ animationDelay: '0.2s' }} />
      </section>

      {/* Which service is right for me? */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Which Service Is Right For Me?</h2>
            <p className="text-gray-600">Explore our core services below. Each page explains who it helps, what to expect, and FAQs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <Card key={s.id} className="tasel-card animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <CardHeader>
                  <CardTitle className="text-xl text-lavender-600">{s.title}</CardTitle>
                  <CardDescription className="text-gray-600">{s.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-1 mb-4">
                    {s.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-center"><span className="w-2 h-2 bg-teal-400 rounded-full mr-2" />{b}</li>
                    ))}
                  </ul>
                  <Button variant="taselSecondary" asChild className="w-full">
                    <a href={s.href}>Learn More</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance & Payment */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-5xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Insurance & Payment</h3>
            <p className="text-gray-600 mb-6">We accept most major insurance plans and offer payment options. Coverage varies by plan and service.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="gradient" asChild>
                <a href="/insurance">See Insurance Panels We Work With</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="tel:+14059341681">Call Oklahoma City (405-934-1681)</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="tel:+12102022341">Call San Antonio (210-202-2341)</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h4 className="font-semibold mb-1">Do you offer telehealth?</h4>
              <p className="text-gray-600">Yes, telehealth is available where appropriate and permitted.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Is TMS covered by insurance?</h4>
              <p className="text-gray-600">Many plans cover TMS for qualifying conditions; prior authorization may be required.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">What happens at my first visit?</h4>
              <p className="text-gray-600">You’ll complete a comprehensive intake and collaborate on a personalized plan.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">How soon can I start?</h4>
              <p className="text-gray-600">Many patients begin within a week, depending on availability and insurance authorization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Message Us Section */}
      <MessageUsCompact />
    </main>
  )
}


