import { Metadata } from 'next'
import { ArticleLayout } from '@/components/knowledge/article-layout'
import { Card } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'
import { StillHaveQuestions } from '@/components/sections/still-have-questions'
import Link from 'next/link'
import { KETAMINE_ARTICLES_LAST_REVIEWED } from '@/data/knowledge-hub-ketamine-articles'

export const metadata: Metadata = {
  title: 'Ketamine for Treatment-Resistant Depression: Evidence & Outcomes | Tasel Health',
  description: 'Research summary on Spravato® and IV ketamine for TRD: response and remission rates, rapid onset, durability, and comparison to TMS and ECT.',
  keywords: ['ketamine TRD', 'ketamine depression evidence', 'Spravato outcomes', 'treatment-resistant depression research'],
  openGraph: {
    title: 'Ketamine for Treatment-Resistant Depression: Evidence & Outcomes',
    description: 'Evidence and outcomes for ketamine and Spravato® in TRD.',
    type: 'article',
  },
}

export default function KetamineForTRDPage() {
  const faqs = [
    { question: 'How fast can ketamine work?', answer: 'Unlike many antidepressants that take weeks, ketamine and esketamine can produce improvement within hours to days in some people. This rapid onset is one reason they\'re used in severe or suicidal depression.' },
    { question: 'What are response and remission rates?', answer: 'Studies vary. In trials, a significant proportion of people with TRD show response (meaningful symptom reduction) or remission (minimal/no symptoms) with Spravato® or IV ketamine. Your doctor can discuss what the research shows and what to expect individually.' },
    { question: 'How long do benefits last?', answer: 'Benefits may require maintenance. Spravato® is often given twice weekly initially, then may be continued weekly or less often. Some people need booster sessions; durability varies by person.' },
    { question: 'How does ketamine compare to TMS or ECT?', answer: 'Ketamine works on a different mechanism (glutamate/NMDA). TMS uses magnetic stimulation; ECT uses electrical stimulation. All can help TRD. Choice depends on your history, safety, availability, and preference. Many people try TMS or medications before ketamine.' },
    { question: 'Where can I get Spravato® or IV ketamine?', answer: 'Tasel Health offers Spravato® and ketamine treatment. Learn more at our Spravato® & Ketamine services page or schedule a consultation.' },
  ]

  const keyTakeaways = [
    'Ketamine and esketamine can produce rapid improvement (hours to days) in some people with TRD.',
    'Clinical trials show meaningful response and remission rates in treatment-resistant depression.',
    'Benefits often require ongoing or maintenance treatment; durability varies.',
    'Ketamine works differently from TMS and ECT; choice depends on your situation and doctor\'s recommendation.',
    'Spravato® is FDA-approved for TRD; IV ketamine is off-label but widely studied.',
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
        title="Ketamine for Treatment-Resistant Depression: Evidence & Outcomes"
        summary="A research-based overview of Spravato® and IV ketamine for TRD: response and remission, rapid onset, durability, and how they compare to other TRD options like TMS and ECT."
        estimatedReadTime={12}
        lastReviewed={KETAMINE_ARTICLES_LAST_REVIEWED}
        author="Tasel Health Clinical Team"
        clinicalReviewer="Board-Certified Psychiatrist"
        tags={['Ketamine', 'Spravato', 'TRD', 'Evidence', 'Depression']}
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Evidence Summary</h2>
          <p className="mb-4">
            Spravato® (esketamine) was approved based on clinical trials in adults with treatment-resistant depression and in those with MDD and acute suicidal ideation. IV ketamine has been studied in hundreds of trials and meta-analyses for depression. Both show that a substantial proportion of people with TRD can achieve response (significant symptom improvement) or remission (minimal or no symptoms). Results vary by study design, population, and definition of response.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Rapid Onset and Durability</h2>
          <p className="mb-4">
            A key advantage of ketamine and esketamine is rapid onset—improvement can occur within hours to days, unlike many antidepressants that take 4–8 weeks. That makes them relevant for severe or acutely suicidal depression. Durability varies: some people maintain gains with maintenance dosing (e.g., weekly or less often); others may need booster sessions. Your team will monitor your progress and adjust the plan.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Comparison to Other TRD Options</h2>
          <p className="mb-4">
            TMS (transcranial magnetic stimulation) and ECT (electroconvulsive therapy) are also used for TRD. TMS is non-invasive and typically done daily for several weeks; ECT is an older, highly effective option that requires anesthesia. Ketamine works on the glutamate system and is given as a medication (nasal or IV). The best option depends on your history, contraindications, availability, and preference. Many people have tried multiple antidepressants or TMS before considering ketamine. Learn about our <Link href="/services/spravato-ketamine" className="text-violet-600 hover:underline">Spravato® & Ketamine services</Link> to see if we can help.
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
            <Link href="/knowledge-hub/ketamine-treatment-journey" className="group">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-violet-600">Your Ketamine Treatment Journey</h3>
                <p className="text-sm text-gray-600">Timeline and maintenance</p>
              </Card>
            </Link>
            <Link href="/knowledge-hub/tms-for-depression-evidence" className="group">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-violet-600">TMS for Depression: Evidence</h3>
                <p className="text-sm text-gray-600">Another TRD option</p>
              </Card>
            </Link>
          </div>
        </section>
      </ArticleLayout>
      <StillHaveQuestions />
    </>
  )
}
