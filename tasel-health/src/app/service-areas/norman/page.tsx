import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Norman, OK | Mental Health Services | Tasel Health',
  description: 'Serving Norman with TMS therapy, psychiatry, and counseling. Same-week consultations. Telehealth available across Oklahoma.',
}

export default function NormanPage() {
  return (
    <main className="min-h-screen">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Norman, Oklahoma</h1>
          <p className="text-gray-700 mb-6">Evidence-based mental health care for Norman and the University of Oklahoma community.</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>Deep TMS™ clinic within a short drive</li>
            <li>Medication management with close monitoring</li>
            <li>Therapy for individuals, couples, and families</li>
            <li>Telehealth across Oklahoma</li>
          </ul>
          <Link href="/services/psychiatry" className="text-purple-700 font-semibold hover:underline">Explore Psychiatry →</Link>
        </div>
      </section>
    </main>
  )
}


