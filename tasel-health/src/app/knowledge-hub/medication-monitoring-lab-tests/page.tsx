import { Metadata } from 'next'
import { ArticleLayout } from '@/components/knowledge/article-layout'
import { Card } from '@/components/ui/card'
import { CheckCircle, FlaskConical, Activity } from 'lucide-react'
import { StillHaveQuestions } from '@/components/sections/still-have-questions'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Psychiatric Medication Monitoring: Lab Tests & Safety Checks',
  description: 'Learn why psychiatric medications require monitoring: blood tests, ECGs, weight checks, and how regular monitoring keeps you safe.',
  keywords: ['medication monitoring', 'psychiatric lab tests', 'lithium levels', 'medication safety monitoring'],
}

export default function MedicationMonitoringPage() {
  const keyTakeaways = [
    "Some psychiatric medications require lab monitoring to ensure safety and therapeutic levels",
    "Blood tests check kidney, liver, thyroid function and medication levels",
    "ECGs monitor heart rhythm for certain medications",
    "Metabolic monitoring tracks weight, blood sugar, cholesterol",
    "Regular monitoring catches problems early and allows dose adjustments"
  ]

  const faqs = [
    {question: "Why do I need lab tests for psychiatric medications?", answer: "Lab tests ensure the medication is working at the right level in your body and not causing harmful effects on your organs. This is especially important for medications like lithium (affects kidneys/thyroid), valproate (affects liver), or antipsychotics (affect metabolism)."},
    {question: "How often will I need blood work?", answer: "Depends on the medication. Lithium: every 1-2 weeks initially, then every 3-6 months. Valproate: similar schedule. Antipsychotics: baseline, then 3-6 months for metabolic monitoring. Your doctor will create a specific monitoring plan."},
    {question: "What happens if my lab results are abnormal?", answer: "Your doctor will review results with you. Minor abnormalities may just need monitoring. Significant changes may require dose adjustment, adding supportive treatments, or switching medications. Most issues can be managed if caught early."},
    {question: "Do antidepressants require lab monitoring?", answer: "Most SSRIs and SNRIs don't require regular blood tests once you're stable. However, we may check sodium levels if you're older or on certain medications. ECGs may be done for medications that can affect heart rhythm (citalopram, escitalopram at higher doses)."},
    {question: "Why do I need to be weighed at appointments?", answer: "Some medications (especially antipsychotics and mood stabilizers) can cause weight gain or metabolic changes. Regular weight tracking helps us catch this early and address it before significant weight gain occurs."},
    {question: "What's a metabolic panel?", answer: "A metabolic panel checks blood sugar, cholesterol, and triglycerides. Some psychiatric medications (particularly atypical antipsychotics) can increase risk of diabetes and high cholesterol. We monitor these to protect your physical health."},
    {question: "Can I skip lab appointments if I feel fine?", answer: "No—many medication effects on organs happen without symptoms. You can feel perfectly fine while kidney function or thyroid is changing. Regular monitoring is essential for safe long-term medication use."},
    {question: "Will my insurance cover medication monitoring labs?", answer: "Most insurance plans cover medically necessary lab tests. We'll order only what's clinically indicated. If you have concerns about costs, discuss with our billing team before tests are ordered."}
  ]

  const faqSchema = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(faq => ({"@type": "Question", "name": faq.question, "acceptedAnswer": {"@type": "Answer", "text": faq.answer}}))}

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ArticleLayout title="Medication Monitoring: Lab Tests & Safety Checks" summary="Why psychiatric medications require monitoring: what tests are needed, how often, and how monitoring protects your health." estimatedReadTime={10} lastReviewed="May 5, 2024" author="Tasel Health Medical Team" clinicalReviewer="Board-Certified Psychiatrist" tags={['Medications', 'Monitoring', 'Lab Tests', 'Safety']}>
        <Card className="p-6 bg-teal-50 border-teal-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways</h2>
          <ul className="space-y-2">{keyTakeaways.map((t, i) => (<li key={i} className="flex items-start space-x-3"><CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">{t}</span></li>))}</ul>
        </Card>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Monitoring Matters</h2>
          <p className="mb-4">Psychiatric medications can be highly effective, but some require regular monitoring to ensure they're working properly and not causing harmful effects. This monitoring protects your safety and helps optimize your treatment.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Monitoring Tests</h2>
          <div className="space-y-4">
            <Card className="p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Blood Level Monitoring</h3>
              <p className="text-gray-700 mb-2"><strong>For:</strong> Lithium, valproate, carbamazepine</p>
              <p className="text-sm text-gray-600">Ensures medication is at therapeutic level—not too low (ineffective) or too high (toxic). Requires periodic blood draws.</p>
            </Card>

            <Card className="p-6 border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Kidney & Liver Function</h3>
              <p className="text-gray-700 mb-2"><strong>For:</strong> Lithium, valproate, and others metabolized by kidneys/liver</p>
              <p className="text-sm text-gray-600">Monitors organ function to ensure medication isn't causing harm. Allows early detection and intervention if problems arise.</p>
            </Card>

            <Card className="p-6 border-l-4 border-teal-500">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Metabolic Panel (Blood Sugar, Cholesterol)</h3>
              <p className="text-gray-700 mb-2"><strong>For:</strong> Atypical antipsychotics, some mood stabilizers</p>
              <p className="text-sm text-gray-600">Screens for diabetes risk and cholesterol changes. Weight and waist circumference also tracked.</p>
            </Card>

            <Card className="p-6 border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-gray-900 mb-2">ECG (Electrocardiogram)</h3>
              <p className="text-gray-700 mb-2"><strong>For:</strong> Medications that may affect heart rhythm</p>
              <p className="text-sm text-gray-600">Baseline ECG before starting certain medications; repeat if dose increases or symptoms develop.</p>
            </Card>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="border-l-4 border-purple-500 pl-4 py-2"><h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3><p className="text-gray-700">{faq.answer}</p></div>))}</div>
        </section>

        <section className="mb-8 text-sm text-gray-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">References</h2>
          <ul className="space-y-2">
            <li>1. Malhi GS, et al. (2015). "Lithium monitoring in clinical practice." Bipolar Disorders 17(S2):1-17.</li>
            <li>2. De Hert M, et al. (2011). "Physical illness in patients with severe mental disorders." World Psychiatry 10(1):52-77.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/knowledge-hub/mood-stabilizers-guide" className="group"><Card className="p-6 hover:shadow-lg transition-shadow"><h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">Mood Stabilizers</h3><p className="text-sm text-gray-600">Lithium & lamotrigine</p></Card></Link>
            <Link href="/knowledge-hub/antidepressants-explained" className="group"><Card className="p-6 hover:shadow-lg transition-shadow"><h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">Antidepressants</h3><p className="text-sm text-gray-600">SSRIs & SNRIs</p></Card></Link>
            <Link href="/knowledge-hub/managing-medication-side-effects" className="group"><Card className="p-6 hover:shadow-lg transition-shadow"><h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">Managing Side Effects</h3><p className="text-sm text-gray-600">Practical strategies</p></Card></Link>
          </div>
        </section>
      </ArticleLayout>
      <StillHaveQuestions />
    </>
  )
}
