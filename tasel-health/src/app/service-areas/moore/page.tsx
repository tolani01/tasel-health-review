import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Moore, OK | Mental Health Services | Tasel Health',
  description: 'Serving Moore with TMS therapy, psychiatry, and counseling. Same-week consultations. Telehealth available across Oklahoma.',
}

export default function MoorePage() {
  return (
    <main className="min-h-screen">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Moore, Oklahoma</h1>
          <p className="text-gray-700 mb-6">Access coordinated mental health care minutes from Moore via I-35.</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>BrainsWay Deep TMS™ treatment plans</li>
            <li>Psychiatric evaluation and ongoing care</li>
            <li>Therapy with CBT/DBT/trauma focus</li>
            <li>Telehealth across Oklahoma</li>
          </ul>
          <Link href="/services/counseling" className="text-purple-700 font-semibold hover:underline">Explore Counseling →</Link>
        </div>
      </section>
    </main>
  )
}


