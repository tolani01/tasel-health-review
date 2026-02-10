import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Service Areas | Oklahoma City Metro | Tasel Health',
  description: 'Mental health services for the Oklahoma City metro area including Edmond, Norman, Moore, and Midwest City. TMS therapy, psychiatry, and counseling.',
  keywords: [
    'Oklahoma City mental health',
    'Edmond mental health',
    'Norman mental health',
    'Moore mental health',
    'Midwest City mental health',
    'TMS therapy OKC',
    'psychiatrist OKC',
    'therapist OKC'
  ],
  openGraph: {
    title: 'Service Areas | Oklahoma City Metro',
    description: 'Serving Oklahoma City, Edmond, Norman, Moore, and Midwest City with comprehensive mental health care.',
  },
}

export default function ServiceAreasPage() {
  const areas = [
    { name: 'Edmond, OK', slug: 'edmond', blurb: 'North OKC area including Uptown, Quail Springs, and Arcadia' },
    { name: 'Norman, OK', slug: 'norman', blurb: 'South metro including OU area and surrounding neighborhoods' },
    { name: 'Moore, OK', slug: 'moore', blurb: 'Convenient access via I-35 and I-240 corridors' },
    { name: 'Midwest City, OK', slug: 'midwest-city', blurb: 'East metro including Tinker AFB vicinity' },
  ]

  return (
    <main className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-purple-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-purple-100 text-purple-700 rounded-full px-4 py-2 text-sm font-medium mb-4">Service Areas</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Oklahoma City Metro</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We serve patients across the OKC metro area with in-person care at our clinic on S Western Ave and secure telehealth across Oklahoma and Texas.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map((a) => (
              <Link key={a.slug} href={`/service-areas/${a.slug}`} className="group block bg-white rounded-2xl p-6 border hover:shadow-xl transition-all">
                <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600">{a.name}</h2>
                <p className="text-sm text-gray-600">{a.blurb}</p>
                <div className="mt-4 text-sm font-medium text-purple-700">View details →</div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12 text-gray-700">
            <p>
              Need directions? Visit our <Link href="/directions" className="text-purple-700 font-semibold hover:underline">Directions</Link> page.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}


