import { Metadata } from 'next'
import { ArticleLayout } from '@/components/knowledge/article-layout'
import { Card } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'
import { StillHaveQuestions } from '@/components/sections/still-have-questions'
import Link from 'next/link'
import { KETAMINE_ARTICLES_LAST_REVIEWED } from '@/data/knowledge-hub-ketamine-articles'

export const metadata: Metadata = {
  title: 'Ketamine and Your Other Medications | Tasel Health',
  description: 'Continuing antidepressants with Spravato® or IV ketamine, interactions, coordination with TMS and therapy, and tapering considerations.',
  keywords: ['ketamine and antidepressants', 'ketamine medications', 'Spravato and SSRIs', 'ketamine TMS together'],
  openGraph: {
    title: 'Ketamine and Your Other Medications',
    description: 'How ketamine treatment fits with your other medications and treatments.',
    type: 'article',
  },
}

export default function KetamineAndOtherMedsPage() {
  const faqs = [
    { question: 'Do I stay on my antidepressant with Spravato®?', answer: 'Yes. Spravato® is approved for treatment-resistant depression when used with an oral antidepressant. Your doctor will keep you on an appropriate antidepressant while you receive Spravato®.' },
    { question: 'Can I do TMS and ketamine at the same time?', answer: 'Sometimes both are used in sequence (e.g., TMS first, then ketamine if needed) rather than at the exact same time. Using them together is less common and would be a decision your psychiatrist makes based on your case. Coordination of care is important.' },
    { question: 'What about therapy?', answer: 'Therapy (e.g., CBT) is often recommended alongside Spravato® or IV ketamine. It can help you build skills and maintain gains. Your team can coordinate therapy and medication/ketamine care.' },
    { question: 'Are there drug interactions?', answer: 'Your doctor will review all your medications. Some drugs (e.g., certain MAOIs, stimulants) may need to be adjusted or avoided. Decongestants and other substances that affect blood pressure or sedation may also be considered. Don’t change doses or add new meds without asking your prescriber.' },
    { question: 'What if I want to taper off my antidepressant later?', answer: 'Tapering should be done slowly and only with your prescriber’s guidance. If you’re doing well on Spravato® or IV ketamine and an antidepressant, the timing of any taper is something to discuss as part of your long-term plan.' },
  ]

  const keyTakeaways = [
    'Spravato® is used with an oral antidepressant; you typically stay on your antidepressant during treatment.',
    'Your doctor will review all medications for interactions (e.g., MAOIs, stimulants, blood pressure effects).',
    'Therapy and TMS can be coordinated with ketamine care; often they’re used in sequence rather than simultaneously.',
    'Do not change or stop medications without your prescriber’s guidance; tapering should be gradual and planned.',
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
        title="Ketamine and Your Other Medications"
        summary="How Spravato® and IV ketamine fit with your antidepressants, other medications, TMS, and therapy—including interactions, coordination, and tapering."
        estimatedReadTime={9}
        lastReviewed={KETAMINE_ARTICLES_LAST_REVIEWED}
        author="Tasel Health Clinical Team"
        clinicalReviewer="Board-Certified Psychiatrist"
        tags={['Ketamine', 'Spravato', 'Medications', 'Antidepressants', 'TMS', 'Therapy']}
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Continuing Antidepressants</h2>
          <p className="mb-4">
            Spravato® is FDA-approved for treatment-resistant depression when used with an oral antidepressant. So you’ll typically stay on your current antidepressant (or one your doctor chooses) while you receive Spravato®. IV ketamine is often used the same way—alongside your existing medications. Your prescriber will decide which antidepressant and dose are right for you.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Interactions and What to Avoid</h2>
          <p className="mb-4">
            Your doctor will review all your medications and supplements. Some drugs can interact with ketamine or esketamine—for example, MAOIs, certain stimulants, or medicines that raise blood pressure or sedation. Decongestants and alcohol may also be discussed. Don’t start, stop, or change doses without your prescriber’s approval.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Coordination with TMS and Therapy</h2>
          <p className="mb-4">
            Many people have tried TMS or therapy before ketamine, or do therapy while on ketamine. TMS and ketamine are usually used in sequence (e.g., TMS first, then ketamine if needed) rather than at the same time; your psychiatrist can explain the best order for you. Therapy (e.g., CBT) is often recommended alongside Spravato® or IV ketamine to build skills and maintain improvement. Your care team can coordinate all of this.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Tapering Considerations</h2>
          <p className="mb-4">
            If you and your doctor later decide to taper off an antidepressant or change your regimen, it should be done gradually and under supervision. Stopping suddenly can cause withdrawal or relapse. Your prescriber will create a plan that fits your response to ketamine and your long-term goals.
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
            <Link href="/knowledge-hub/ketamine-safety-side-effects" className="group">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-violet-600">Ketamine Safety & Side Effects</h3>
                <p className="text-sm text-gray-600">Monitoring and safety</p>
              </Card>
            </Link>
            <Link href="/knowledge-hub/antidepressants-explained" className="group">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-violet-600">Antidepressants Explained</h3>
                <p className="text-sm text-gray-600">How antidepressants work</p>
              </Card>
            </Link>
          </div>
        </section>
      </ArticleLayout>
      <StillHaveQuestions />
    </>
  )
}
