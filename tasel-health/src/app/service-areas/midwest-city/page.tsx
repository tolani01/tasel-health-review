import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Midwest City, OK | Mental Health Services | Tasel Health',
  description: 'Serving Midwest City and Tinker AFB area with TMS therapy, psychiatry, and counseling. Telehealth available across Oklahoma.',
}

export default function MidwestCityPage() {
  return (
    <main className="min-h-screen">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Midwest City, Oklahoma</h1>
          <p className="text-gray-700 mb-6">Compassionate, evidence-based mental health care for the east OKC metro.</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>Deep TMS™ therapy</li>
            <li>Medication management</li>
            <li>Counseling and therapy</li>
            <li>Telehealth across Oklahoma</li>
          </ul>
          <Link href="/contact" className="text-purple-700 font-semibold hover:underline">Contact Us →</Link>
        </div>
      </section>
    </main>
  )
}


