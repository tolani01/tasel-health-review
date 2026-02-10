import { Metadata } from 'next'
import { ArticleLayout } from '@/components/knowledge/article-layout'
import { Card } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'
import { StillHaveQuestions } from '@/components/sections/still-have-questions'
import Link from 'next/link'
import { KETAMINE_ARTICLES_LAST_REVIEWED } from '@/data/knowledge-hub-ketamine-articles'

export const metadata: Metadata = {
  title: 'Your Ketamine Treatment Journey: What to Expect Over Time | Tasel Health',
  description: 'Induction phase, 4-week evaluation, maintenance vs taper, and booster sessions for Spravato® and IV ketamine.',
  keywords: ['ketamine treatment timeline', 'Spravato treatment journey', 'ketamine induction', 'ketamine maintenance'],
  openGraph: {
    title: 'Your Ketamine Treatment Journey: What to Expect Over Time',
    description: 'Timeline from induction through maintenance or taper.',
    type: 'article',
  },
}

export default function KetamineTreatmentJourneyPage() {
  const faqs = [
    { question: 'How long is the initial (induction) phase?', answer: 'For Spravato®, induction is typically twice per week for 4 weeks (about 8 sessions). Your team will then evaluate your response and decide whether to continue weekly, taper, or adjust. IV ketamine protocols vary by clinic.' },
    { question: 'What happens at the 4-week evaluation?', answer: 'Your doctor will review your symptoms (e.g., depression scales), side effects, and how you’re functioning. Based on that, they may recommend continuing at a maintenance frequency, tapering, or trying a different approach.' },
    { question: 'What is maintenance?', answer: 'Maintenance means continuing treatment at a lower frequency (e.g., weekly or every 2 weeks) to keep your gains. Not everyone needs it; some people do well after induction and can taper off. Others benefit from longer-term maintenance.' },
    { question: 'What are booster sessions?', answer: 'Boosters are extra sessions if symptoms return or worsen after you’ve tapered or finished the main course. Some people come back for a short series of sessions to get back on track. Your team will tailor this to you.' },
    { question: 'When do people usually return for more treatment?', answer: 'People may return if depression worsens after stopping or reducing treatment, or if they want to restart maintenance. There’s no single rule; it depends on your response and your doctor’s recommendation.' },
  ]

  const keyTakeaways = [
    'Induction for Spravato® is often twice weekly for 4 weeks, then your team evaluates response.',
    'After 4 weeks, you may continue at a maintenance frequency, taper off, or adjust the plan.',
    'Maintenance (e.g., weekly or less) helps some people keep their gains; not everyone needs it.',
    'Booster sessions can be used if symptoms return after you’ve tapered or finished.',
    'Your timeline may include returning for more treatment later; your doctor will personalize the plan.',
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
        title="Your Ketamine Treatment Journey: What to Expect Over Time"
        summary="From induction (e.g., twice-weekly Spravato®) through 4-week evaluation, maintenance or taper, and booster sessions—what to expect over the course of your treatment."
        estimatedReadTime={11}
        lastReviewed={KETAMINE_ARTICLES_LAST_REVIEWED}
        author="Tasel Health Clinical Team"
        clinicalReviewer="Board-Certified Psychiatrist"
        tags={['Ketamine', 'Spravato', 'Treatment Journey', 'Timeline', 'Maintenance']}
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Induction Phase</h2>
          <p className="mb-4">
            For Spravato®, the usual induction is twice per week for 4 weeks (about 8 sessions). You’ll come to the clinic, receive the nasal spray, and stay for observation. IV ketamine induction varies by clinic—often a series of infusions over 1–2 weeks, then evaluation. During this phase, your team will monitor your symptoms and any side effects. Some people start to feel better within the first few weeks.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">4-Week Evaluation</h2>
          <p className="mb-4">
            After about 4 weeks (or the end of your induction), your doctor will evaluate your response. They’ll look at depression scores, how you’re functioning, and side effects. Options typically include: continuing at a maintenance frequency (e.g., weekly), tapering to less often or stopping, or adjusting the plan if response isn’t enough. This is a shared decision with you.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Maintenance vs Taper</h2>
          <p className="mb-4">
            If you’re doing well, your doctor may recommend maintenance—continuing at a lower frequency (e.g., once a week or every 2 weeks) to keep your gains. Others may taper off and stop, with a plan to return if needed. There’s no one-size-fits-all; it depends on your response, preference, and long-term goals.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Booster Sessions and Returning for Treatment</h2>
          <p className="mb-4">
            If symptoms come back after you’ve tapered or finished, your doctor may suggest booster sessions—a short series of treatments to get you back on track. Many people know they can return if depression worsens; that’s part of the long-term plan. At Tasel Health, we’re here to support you through induction, maintenance, and any boosters. Learn more: <Link href="/services/spravato-ketamine" className="text-violet-600 hover:underline">Spravato® & Ketamine services</Link>.
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
            <Link href="/knowledge-hub/ketamine-for-treatment-resistant-depression" className="group">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-violet-600">Evidence & Outcomes</h3>
                <p className="text-sm text-gray-600">Research on TRD</p>
              </Card>
            </Link>
            <Link href="/knowledge-hub/tms-journey-week-by-week" className="group">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-violet-600">Week-by-Week TMS Journey</h3>
                <p className="text-sm text-gray-600">Another treatment timeline</p>
              </Card>
            </Link>
          </div>
        </section>
      </ArticleLayout>
      <StillHaveQuestions />
    </>
  )
}
