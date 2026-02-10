import { Metadata } from 'next'
import { ArticleLayout } from '@/components/knowledge/article-layout'
import { Card } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'
import { StillHaveQuestions } from '@/components/sections/still-have-questions'
import Link from 'next/link'
import { KETAMINE_ARTICLES_LAST_REVIEWED } from '@/data/knowledge-hub-ketamine-articles'

export const metadata: Metadata = {
  title: 'Who Is a Candidate for Ketamine Treatment? | Tasel Health',
  description: 'Learn who may benefit from Spravato® or IV ketamine: TRD definition, suicidal ideation indication, contraindications, substance history, and screening.',
  keywords: ['ketamine candidate', 'treatment-resistant depression ketamine', 'Spravato eligibility', 'who qualifies for ketamine'],
  openGraph: {
    title: 'Who Is a Candidate for Ketamine Treatment?',
    description: 'TRD, suicidal ideation indication, contraindications, and screening for Spravato® and IV ketamine.',
    type: 'article',
  },
}

export default function KetamineWhoIsCandidatePage() {
  const faqs = [
    { question: 'What is treatment-resistant depression (TRD)?', answer: 'TRD generally means major depressive disorder that hasn\'t responded adequately to at least two antidepressants (different classes or adequate dose/duration). Spravato® is FDA-approved for adults with TRD when used with an oral antidepressant.' },
    { question: 'Can ketamine help with suicidal thoughts?', answer: 'Spravato® is FDA-approved for depressive symptoms in MDD with acute suicidal ideation or behavior. It is used in addition to other care; crisis support (e.g., 988) remains important. IV ketamine is also used in some settings for acute suicidal ideation, though off-label.' },
    { question: 'Is ketamine approved for children?', answer: 'Spravato® is not approved for children. Use in minors would be off-label and is not standard in most clinics. IV ketamine in youth is sometimes used in very specific settings (e.g., research, pain) but not routinely for depression in the same way as in adults.' },
    { question: 'What contraindications might rule me out?', answer: 'Contraindications can include aneurysm, AVM, brain bleed, allergy to ketamine/esketamine, and certain unstable medical conditions. Substance use history is reviewed because of abuse potential and interactions. Your doctor will screen for these.' },
    { question: 'Do I need to be on an antidepressant for Spravato®?', answer: 'Yes. Spravato® is approved for TRD in adults in combination with an oral antidepressant. Your prescriber will ensure you\'re on an appropriate antidepressant when starting Spravato®.' },
    { question: 'What does screening involve?', answer: 'Screening typically includes psychiatric and medical history, current medications, substance use, cardiovascular and neurological concerns, and pregnancy status. Blood pressure and stability for in-clinic treatment are also assessed.' },
  ]

  const keyTakeaways = [
    'Spravato® is for adults with TRD (inadequate response to ≥2 antidepressants) or MDD with acute suicidal ideation/behavior.',
    'IV ketamine for depression is off-label but used in similar populations when appropriate.',
    'Contraindications include aneurysm, AVM, brain bleed, allergy, and certain medical/substance-use factors.',
    'Spravato® is used with an oral antidepressant; screening ensures safety and appropriateness.',
    'Spravato® is not approved for children; use in minors is not standard for depression.',
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
        title="Who Is a Candidate for Ketamine Treatment?"
        summary="Understand who may benefit from Spravato® or IV ketamine: TRD definition, suicidal ideation indication, contraindications, substance history, and what screening involves."
        estimatedReadTime={10}
        lastReviewed={KETAMINE_ARTICLES_LAST_REVIEWED}
        author="Tasel Health Clinical Team"
        clinicalReviewer="Board-Certified Psychiatrist"
        tags={['Ketamine', 'Spravato', 'TRD', 'Candidacy', 'Screening']}
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Treatment-Resistant Depression (TRD)</h2>
          <p className="mb-4">
            TRD usually means major depressive disorder that has not responded adequately to at least two antidepressant trials (different mechanisms or adequate dose and duration). Spravato® is FDA-approved for adults with TRD when used together with an oral antidepressant. IV ketamine for depression is off-label but often offered in similar situations—when TMS or multiple medications have been tried without sufficient improvement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Acute Suicidal Ideation or Behavior</h2>
          <p className="mb-4">
            Spravato® is also approved for depressive symptoms in adults with MDD who have acute suicidal ideation or behavior. It is used as part of a broader treatment plan; crisis resources (e.g., 988 Suicide & Crisis Lifeline) remain essential. Your team will assess safety and level of care needed.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contraindications and Safety</h2>
          <p className="mb-4">
            Spravato® and ketamine are not used in certain conditions, including aneurysm, arteriovenous malformation (AVM), brain bleed, allergy to ketamine/esketamine, and some unstable cardiovascular or other medical conditions. Substance use history is reviewed because of abuse potential and drug interactions. Pregnancy and breastfeeding are discussed; treatment may not be recommended or may require careful decision-making. Not for use in children (Spravato® is not approved in pediatrics).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Medical and Psychiatric Screening</h2>
          <p className="mb-4">
            Before starting, you'll have a medical and psychiatric evaluation: current and past depression treatment, medications, substance use, medical history (especially cardiovascular and neurological), and stability for in-clinic treatment. Blood pressure and other vital signs are monitored. This screening helps ensure Spravato® or IV ketamine is safe and appropriate for you.
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
