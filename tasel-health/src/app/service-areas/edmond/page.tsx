import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Edmond, OK | Mental Health Services | Tasel Health',
  description: 'Serving Edmond with TMS therapy, psychiatry, and counseling. Same-week consultations. Telehealth available across Oklahoma.',
}

export default function EdmondPage() {
  return (
    <main className="min-h-screen">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Edmond, Oklahoma</h1>
          <p className="text-gray-700 mb-6">Convenient access to comprehensive mental health care for Edmond and nearby communities.</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>BrainsWay Deep TMS™ therapy for depression, OCD, and anxious depression</li>
            <li>Psychiatric medication management</li>
            <li>Counseling and therapy (CBT, DBT, trauma-informed care)</li>
            <li>Telehealth across Oklahoma</li>
          </ul>
          <Link href="/services/tms-therapy" className="text-purple-700 font-semibold hover:underline">Explore TMS Therapy →</Link>
        </div>
      </section>
    </main>
  )
}


