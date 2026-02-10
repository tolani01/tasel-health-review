import { Metadata } from 'next'
import { ArticleLayout } from '@/components/knowledge/article-layout'
import { Card } from '@/components/ui/card'
import { CheckCircle, AlertCircle } from 'lucide-react'
import { StillHaveQuestions } from '@/components/sections/still-have-questions'
import Link from 'next/link'
import { KETAMINE_ARTICLES_LAST_REVIEWED } from '@/data/knowledge-hub-ketamine-articles'

export const metadata: Metadata = {
  title: 'Ketamine Safety, Side Effects & What to Expect During Treatment | Tasel Health',
  description: 'Spravato® and IV ketamine safety: dissociation, blood pressure, monitoring, REMS, driving restrictions, pregnancy, abuse potential, and what to report.',
  keywords: ['ketamine side effects', 'Spravato safety', 'esketamine side effects', 'ketamine monitoring', 'Spravato REMS'],
  openGraph: {
    title: 'Ketamine Safety, Side Effects & What to Expect During Treatment',
    description: 'Safety and side effects of Spravato® and IV ketamine.',
    type: 'article',
  },
}

export default function KetamineSafetySideEffectsPage() {
  const faqs = [
    { question: 'What is dissociation?', answer: 'Dissociation is a feeling of being detached from yourself or your surroundings—dreamy, spacey, or “out of body.” It’s common with ketamine and usually temporary during and shortly after the dose. Staff monitor you; it typically resolves within the observation period.' },
    { question: 'Why is blood pressure monitored?', answer: 'Ketamine and esketamine can raise blood pressure. Your blood pressure is checked before, during, and after treatment. If it gets too high, treatment may be paused or adjusted. This is a standard safety measure.' },
    { question: 'How long do I need to stay after a dose?', answer: 'For Spravato®, you’re observed for about 2 hours after the nasal spray. For IV ketamine, you’re monitored during and after the infusion. You cannot leave until staff clear you and you have a ride home.' },
    { question: 'Can I drive the same day?', answer: 'No. You must not drive or operate machinery until the next day after a full night’s sleep. A responsible adult must drive you home after every session.' },
    { question: 'What is REMS?', answer: 'REMS (Risk Evaluation and Mitigation Strategy) is an FDA program for certain drugs. Spravato® has a REMS that includes certified pharmacies and healthcare settings, and patient education. It helps ensure safe use and monitoring.' },
    { question: 'What about pregnancy or breastfeeding?', answer: 'Ketamine/esketamine use in pregnancy or breastfeeding is a decision you make with your doctor. There are potential risks; your provider will discuss them and alternatives so you can make an informed choice.' },
    { question: 'Is there abuse potential?', answer: 'Ketamine has abuse potential. That’s why Spravato® and IV ketamine are given only in-clinic under supervision, and why substance use history is part of screening. Do not share or use the medication outside the clinic.' },
    { question: 'What should I report to my doctor?', answer: 'Report any severe or persistent side effects: very high blood pressure, severe dissociation that doesn’t improve, breathing problems, chest pain, allergic reactions, mood changes (e.g., worsening depression or mania), or any other concerning symptoms.' },
  ]

  const keyTakeaways = [
    'Dissociation (dreamy, detached feeling) is common and usually temporary; you’re monitored throughout.',
    'Blood pressure is checked before, during, and after; treatment may be paused if it’s too high.',
    'You must have a ride home and cannot drive until the next day after sleep.',
    'Spravato® has a REMS program; both treatments require in-clinic administration and observation.',
    'Pregnancy, breastfeeding, and substance use history are discussed; report any severe or concerning side effects.',
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
        title="Ketamine Safety, Side Effects & What to Expect During Treatment"
        summary="What to expect during Spravato® or IV ketamine: dissociation, blood pressure, monitoring, REMS, driving rules, pregnancy/breastfeeding, abuse potential, and when to call your doctor."
        estimatedReadTime={11}
        lastReviewed={KETAMINE_ARTICLES_LAST_REVIEWED}
        author="Tasel Health Clinical Team"
        clinicalReviewer="Board-Certified Psychiatrist"
        tags={['Ketamine', 'Spravato', 'Safety', 'Side Effects', 'Monitoring']}
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Dissociation and What You Might Feel</h2>
          <p className="mb-4">
            During treatment, many people feel dissociation—a sense of being detached, dreamy, or “out of body.” This is expected and usually resolves within the observation period (about 2 hours for Spravato®). Staff monitor you the whole time. Dizziness, nausea, and tiredness are also common. If you feel unwell, tell the team; they can support you and check your vital signs.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Blood Pressure and Monitoring</h2>
          <p className="mb-4">
            Ketamine and esketamine can increase blood pressure. Your blood pressure is taken before, during, and after the dose. If it rises too much, treatment may be paused or the next dose adjusted. Respiratory depression is a rare risk; monitoring helps catch any problems early. The typical observation is about 2 hours after Spravato® and during plus after IV infusion.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Driving, REMS, and In-Clinic Use</h2>
          <p className="mb-4">
            You cannot drive or operate machinery until the next day after a full night’s sleep. A ride home is required every time. Spravato® is only dispensed and used in certified settings under REMS; you don’t take it at home. IV ketamine is given in-clinic. This reduces misuse and keeps you safe during the drug’s effects.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pregnancy, Breastfeeding, and Abuse Potential</h2>
          <p className="mb-4">
            Use in pregnancy or while breastfeeding is a shared decision with your doctor; there can be risks to the baby. Your provider will explain and discuss alternatives. Ketamine has abuse potential, so screening for substance use and in-clinic-only use are part of safe care. Do not share medication or use it outside the clinic.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What to Report</h2>
          <p className="mb-4">
            Tell your doctor or the clinic if you have: very high blood pressure, severe or prolonged dissociation, trouble breathing, chest pain, allergic reactions (e.g., rash, swelling), worsening depression, new or worsening suicidal thoughts, mood elevation/mania, or any other concerning symptoms. If you’re in crisis, call or text 988.
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
            <Link href="/knowledge-hub/ketamine-and-your-other-medications" className="group">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-violet-600">Ketamine and Your Other Medications</h3>
                <p className="text-sm text-gray-600">Interactions and coordination</p>
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
