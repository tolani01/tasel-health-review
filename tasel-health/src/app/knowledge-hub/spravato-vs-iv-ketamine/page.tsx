import { Metadata } from 'next'
import { ArticleLayout } from '@/components/knowledge/article-layout'
import { Card } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'
import { StillHaveQuestions } from '@/components/sections/still-have-questions'
import Link from 'next/link'
import { KETAMINE_ARTICLES_LAST_REVIEWED } from '@/data/knowledge-hub-ketamine-articles'

export const metadata: Metadata = {
  title: 'Spravato® vs. IV Ketamine: Understanding Your Options | Tasel Health',
  description: 'Compare Spravato® (esketamine) nasal spray and IV ketamine: FDA status, administration, duration, monitoring, insurance, and when each may be chosen.',
  keywords: ['Spravato vs IV ketamine', 'esketamine vs ketamine', 'Spravato or IV ketamine', 'ketamine treatment options'],
  openGraph: {
    title: 'Spravato® vs. IV Ketamine: Understanding Your Options',
    description: 'Side-by-side comparison of Spravato® and IV ketamine for depression.',
    type: 'article',
  },
}

export default function SpravatoVsIVKetaminePage() {
  const faqs = [
    { question: 'Which is FDA-approved for depression?', answer: 'Spravato® (esketamine) nasal spray is FDA-approved for treatment-resistant depression in adults (with an oral antidepressant) and for depressive symptoms in MDD with acute suicidal ideation/behavior. IV ketamine for depression is off-label.' },
    { question: 'How is each one given?', answer: "Spravato® is a nasal spray you use in-clinic under staff guidance, then you're observed for about 2 hours. IV ketamine is given through a vein as an infusion, typically 40–60 minutes, with monitoring during and after." },
    { question: 'Does insurance cover them?', answer: "Spravato® is often covered by insurance when criteria are met (e.g., TRD or acute suicidal ideation). IV ketamine for depression is usually off-label and coverage varies; some plans cover it, others don't." },
    { question: 'When might my doctor choose one over the other?', answer: "Choice depends on FDA approval needs, insurance, clinic availability, and your medical history. Spravato® may be preferred when insurance covers it and REMS can be met; IV ketamine may be chosen for protocol flexibility or when Spravato® isn't an option." },
    { question: 'Are driving restrictions the same?', answer: "Yes. For both, you cannot drive or operate machinery until the next day after a full night's sleep. A ride home is required after every session." },
    { question: 'How long does a typical session take?', answer: 'Spravato®: administration plus about 2 hours of observation. IV ketamine: infusion (often 40–60 min) plus monitoring time. Total clinic time varies by site.' },
  ]

  const keyTakeaways = [
    'Spravato® is FDA-approved for TRD and for depressive symptoms with acute suicidal ideation; IV ketamine for depression is off-label.',
    'Spravato® = nasal spray in-clinic + ~2 hr observation; IV ketamine = infusion (40–60 min) + monitoring.',
    'Both require a ride home and no driving until the next day after sleep.',
    'Insurance often covers Spravato® when criteria are met; IV ketamine coverage varies.',
    'Your team will help choose based on indication, insurance, and your medical history.',
  ]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer }
    }))
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ArticleLayout
        title="Spravato® vs. IV Ketamine: Understanding Your Options"
        summary="A comparison of Spravato® (esketamine) nasal spray and IV ketamine: FDA status, how each is given, duration, monitoring, insurance, and when each may be the right choice."
        estimatedReadTime={11}
        lastReviewed={KETAMINE_ARTICLES_LAST_REVIEWED}
        author="Tasel Health Clinical Team"
        clinicalReviewer="Board-Certified Psychiatrist"
        tags={['Ketamine', 'Spravato', 'Treatment Comparison', 'Depression']}
      >
        <Card className="p-6 bg-teal-50 border-teal-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways</h2>
          <ul className="space-y-2">
            {keyTakeaways.map((t, i) => (
              <li key={i} className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{t}</span>
              </li>
            ))}
          </ul>
        </Card>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Comparison at a Glance</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 text-left">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-3 border-b font-semibold text-gray-900">Factor</th>
                  <th className="p-3 border-b font-semibold text-gray-900">Spravato® (Esketamine)</th>
                  <th className="p-3 border-b font-semibold text-gray-900">IV Ketamine</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr><td className="p-3 border-b">FDA status (depression)</td><td className="p-3 border-b">Approved (TRD; acute suicidal ideation)</td><td className="p-3 border-b">Off-label</td></tr>
                <tr><td className="p-3 border-b">Route</td><td className="p-3 border-b">Nasal spray</td><td className="p-3 border-b">IV infusion</td></tr>
                <tr><td className="p-3 border-b">Typical session</td><td className="p-3 border-b">Spray + ~2 hr observation</td><td className="p-3 border-b">40–60 min infusion + monitoring</td></tr>
                <tr><td className="p-3 border-b">Setting</td><td className="p-3 border-b">In-clinic, REMS program</td><td className="p-3 border-b">In-clinic</td></tr>
                <tr><td className="p-3 border-b">Insurance</td><td className="p-3 border-b">Often covered when criteria met</td><td className="p-3 border-b">Varies</td></tr>
                <tr><td className="p-3">Driving</td><td className="p-3">No driving until next day after sleep; ride required</td><td className="p-3">Same</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">When Each May Be Chosen</h2>
          <p className="mb-4">
            Spravato® is often chosen when you want an FDA-approved option that may be covered by insurance for TRD or acute suicidal ideation, and when your clinic participates in the REMS program. IV ketamine may be chosen when you need a different protocol, when Spravato® isn't available or covered, or when your doctor recommends it based on your history. Both require medical screening and same-day transportation; your provider will help you decide.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-l-4 border-violet-500 pl-4 py-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/knowledge-hub/ketamine-101-what-to-expect" className="group">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-violet-600">Ketamine 101</h3>
                <p className="text-sm text-gray-600">What to expect</p>
              </Card>
            </Link>
            <Link href="/knowledge-hub/ketamine-who-is-a-candidate" className="group">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-violet-600">Who Is a Candidate?</h3>
                <p className="text-sm text-gray-600">Screening and eligibility</p>
              </Card>
            </Link>
            <Link href="/knowledge-hub/comprehensive-treatment-options-guide" className="group">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-violet-600">Treatment Options Guide</h3>
                <p className="text-sm text-gray-600">Compare all approaches</p>
              </Card>
            </Link>
          </div>
        </section>
      </ArticleLayout>
      <StillHaveQuestions />
    </>
  )
}
