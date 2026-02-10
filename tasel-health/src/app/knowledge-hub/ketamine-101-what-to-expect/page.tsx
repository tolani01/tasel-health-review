import { Metadata } from 'next'
import { ArticleLayout } from '@/components/knowledge/article-layout'
import { Card } from '@/components/ui/card'
import { CheckCircle, AlertCircle } from 'lucide-react'
import { StillHaveQuestions } from '@/components/sections/still-have-questions'
import Link from 'next/link'
import { KETAMINE_ARTICLES_LAST_REVIEWED } from '@/data/knowledge-hub-ketamine-articles'

export const metadata: Metadata = {
  title: 'Ketamine 101: What to Expect | Spravato® & IV Ketamine | Tasel Health',
  description: 'Learn what ketamine and Spravato® (esketamine) therapy are: session flow, who it\'s for, and first-visit expectations. Evidence-based guide from Tasel Health.',
  keywords: ['ketamine therapy what to expect', 'Spravato first session', 'ketamine treatment guide', 'esketamine', 'treatment-resistant depression'],
  openGraph: {
    title: 'Ketamine 101: What to Expect',
    description: 'Overview of Spravato® and IV ketamine: what it is, session flow, who it\'s for, and first-visit expectations.',
    type: 'article',
  },
}

export default function Ketamine101Page() {
  const faqs = [
    { question: 'Will ketamine hurt?', answer: 'Spravato® is a nasal spray; you may feel mild taste or nasal discomfort. IV ketamine is given through a vein; the infusion itself doesn\'t hurt. During treatment, many people experience dissociation (feeling detached or dreamy), which is expected and monitored.' },
    { question: 'Can I drive after a session?', answer: 'No. You cannot drive or operate machinery until the next day after a full night\'s sleep. Arrangements for a ride home are required for every Spravato® and IV ketamine session.' },
    { question: 'How often are sessions?', answer: 'Spravato® induction is typically twice per week for 4 weeks; then your team will evaluate and may continue weekly or less often. IV ketamine frequency varies by protocol and response.' },
    { question: 'Is Spravato® or ketamine covered by insurance?', answer: 'Spravato® is FDA-approved and often covered for treatment-resistant depression and depressive symptoms with acute suicidal ideation. IV ketamine is usually off-label and coverage varies. Our team can help verify your benefits.' },
    { question: 'Who is ketamine for?', answer: 'Spravato® is approved for adults with treatment-resistant depression (inadequate response to ≥2 antidepressants) or depressive symptoms with acute suicidal ideation/behavior. IV ketamine for depression is off-label but used in similar situations.' },
    { question: 'What happens during a Spravato® session?', answer: 'You receive the nasal spray in-clinic, then remain under observation for about 2 hours. Vital signs and any side effects are monitored. You must have a ride home and cannot drive until the next day.' },
    { question: 'Can I take my other medications?', answer: 'Most people continue their antidepressant with Spravato®. Your doctor will review all medications and any interactions before starting. Do not change doses without your prescriber\'s guidance.' },
    { question: 'How fast might I feel better?', answer: 'Some people notice improvement within hours to days—faster than with many antidepressants. Response varies; your team will track symptoms and adjust the plan as needed.' },
  ]

  const keyTakeaways = [
    'Ketamine and esketamine (Spravato®) work on the glutamate system and can produce rapid improvement in depression.',
    'Spravato® is FDA-approved for treatment-resistant depression and for depressive symptoms with acute suicidal ideation; IV ketamine for depression is off-label but widely used.',
    'Sessions are in-clinic with monitoring; you need a ride home and cannot drive until the next day after sleep.',
    'Typical Spravato® induction is twice weekly for about 4 weeks, then evaluation and possibly maintenance or taper.',
    'Screening for contraindications (e.g., aneurysm, substance use) and medical stability is required before starting.',
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
        title="Ketamine 101: What to Expect from Spravato® & IV Ketamine"
        summary="An overview of what ketamine and Spravato® (esketamine) are, how they differ, typical session flow, who they're for, and what to expect before, during, and after your first visit."
        estimatedReadTime={12}
        lastReviewed={KETAMINE_ARTICLES_LAST_REVIEWED}
        author="Tasel Health Clinical Team"
        clinicalReviewer="Board-Certified Psychiatrist"
        tags={['Ketamine', 'Spravato', 'Treatment Overview', 'Depression', 'TRD']}
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

        <Card className="p-6 bg-red-50 border-red-200 mb-8">
          <div className="flex items-start space-x-4">
            <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">In a Crisis?</h3>
              <p className="text-gray-700 mb-2">
                If you're in crisis or having thoughts of hurting yourself, reach out now: call or text <a href="tel:988" className="font-semibold text-red-700 underline">988</a> (Suicide & Crisis Lifeline, 24/7).
              </p>
            </div>
          </div>
        </Card>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Ketamine and Spravato® Are</h2>
          <p className="mb-4">
            Ketamine is a medication that affects the glutamate system (NMDA receptors) in the brain—different from serotonin/norepinephrine antidepressants. It can produce rapid improvement in depression, sometimes within hours to days. <strong>Spravato® (esketamine)</strong> is the S-enantiomer of ketamine, delivered as a nasal spray and FDA-approved for (1) treatment-resistant depression (TRD) in adults with an oral antidepressant, and (2) depressive symptoms in major depressive disorder (MDD) with acute suicidal ideation or behavior. <strong>IV ketamine</strong> for depression is off-label but widely used and studied; it's the same drug given by infusion in a clinical setting.
          </p>
          <p className="mb-4">
            Both are given in-clinic under medical supervision. You'll need monitoring during and after the dose, a ride home, and no driving until the next day after a full night's sleep.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Spravato® vs IV Ketamine in Brief</h2>
          <p className="mb-4">
            Spravato® is a nasal spray; you administer it yourself in the clinic under staff guidance, then stay for about 2 hours of observation. IV ketamine is an infusion (typically 40–60 minutes) plus monitoring. Spravato® has FDA approval and REMS (risk evaluation and mitigation) requirements; IV ketamine is off-label for depression. Insurance coverage differs; your team can help you understand options. For more detail, see <Link href="/knowledge-hub/spravato-vs-iv-ketamine" className="text-violet-600 hover:underline">Spravato® vs. IV Ketamine</Link>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Typical Session Flow</h2>
          <p className="mb-4">
            For <strong>Spravato®</strong>: You'll receive the nasal spray in-clinic, then rest while staff monitor blood pressure and any side effects for about 2 hours. For <strong>IV ketamine</strong>: An IV is placed, the infusion runs (often 40–60 minutes), and you're monitored during and after. In both cases, you may feel dissociation (dreamy, detached), dizziness, or nausea; these are common and monitored. You must have a responsible adult to drive you home and must not drive or operate machinery until the next day after sleep.
          </p>
          <p className="mb-4">
            Before starting, you'll complete a medical and psychiatric screening to check for contraindications (e.g., aneurysm, AVM, brain bleed, allergy, certain substance use) and stability for treatment.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Who It's For and First-Visit Expectations</h2>
          <p className="mb-4">
            Spravato® is for adults with TRD (inadequate response to at least 2 antidepressants) or with MDD and acute suicidal ideation/behavior. IV ketamine is often offered in similar situations. You'll have an evaluation to confirm indication, review medications, and complete safety screening. Bring a list of your medications, any relevant medical history, and plan for a ride home after each session. Learn more about candidacy in <Link href="/knowledge-hub/ketamine-who-is-a-candidate" className="text-violet-600 hover:underline">Who Is a Candidate for Ketamine Treatment?</Link>
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
            <Link href="/knowledge-hub/spravato-vs-iv-ketamine" className="group">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-violet-600">Spravato® vs. IV Ketamine</h3>
                <p className="text-sm text-gray-600">Compare your options</p>
              </Card>
            </Link>
            <Link href="/knowledge-hub/ketamine-safety-side-effects" className="group">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-violet-600">Ketamine Safety & Side Effects</h3>
                <p className="text-sm text-gray-600">What to expect during treatment</p>
              </Card>
            </Link>
            <Link href="/knowledge-hub/tms-101-what-to-expect" className="group">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-violet-600">TMS 101</h3>
                <p className="text-sm text-gray-600">Another TRD option</p>
              </Card>
            </Link>
            <Link href="/knowledge-hub/comprehensive-treatment-options-guide" className="group">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-violet-600">Treatment Options Guide</h3>
                <p className="text-sm text-gray-600">Compare all approaches</p>
              </Card>
            </Link>
            <Link href="/knowledge-hub/when-to-seek-help" className="group">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-violet-600">When to Seek Help</h3>
                <p className="text-sm text-gray-600">Signs you need support</p>
              </Card>
            </Link>
          </div>
        </section>
      </ArticleLayout>
      <StillHaveQuestions />
    </>
  )
}
