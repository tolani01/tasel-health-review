import { Metadata } from 'next'
import { ArticleLayout } from '@/components/knowledge/article-layout'
import { Card } from '@/components/ui/card'
import { CheckCircle, Activity, FlaskConical } from 'lucide-react'
import { StillHaveQuestions } from '@/components/sections/still-have-questions'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mood Stabilizers Explained: Lithium, Lamotrigine & Monitoring',
  description: 'Learn about mood stabilizing medications: who they help, required lab monitoring, side effects to watch, and how they differ from antidepressants.',
  keywords: ['mood stabilizers', 'lithium', 'lamotrigine', 'bipolar medication', 'mood stabilizer monitoring'],
}

export default function MoodStabilizersPage() {
  const keyTakeaways = [
    "Mood stabilizers treat bipolar disorder and sometimes augment antidepressants",
    "Lithium and lamotrigine are most commonly used; each requires specific monitoring",
    "Regular lab tests ensure safety and therapeutic blood levels",
    "Side effects vary by medication; many are manageable with proper monitoring",
    "Never adjust doses or stop mood stabilizers without medical guidance"
  ]

  const faqs = [
    {question: "What conditions do mood stabilizers treat?", answer: "Primarily bipolar disorder (to prevent manic and depressive episodes). Sometimes used to augment antidepressants in treatment-resistant depression, or to treat other mood instability conditions."},
    {question: "How is lithium different from antidepressants?", answer: "Lithium prevents mood episodes (both manic and depressive) rather than treating acute depression. It's particularly effective for bipolar disorder. Antidepressants target depression specifically but can trigger mania in bipolar disorder."},
    {question: "Why do I need blood tests for mood stabilizers?", answer: "Blood tests ensure the medication is at therapeutic levels (not too low to work, not too high to cause toxicity) and monitor for potential effects on kidney, thyroid, or liver function. These tests protect your safety."},
    {question: "How often will I need lab work?", answer: "Initially every 1-2 weeks until levels are stable, then every 3-6 months for lithium. Lamotrigine doesn't require blood level monitoring but may need occasional liver tests. Your doctor will create a monitoring schedule."},
    {question: "What are signs of lithium toxicity?", answer: "Severe tremor, confusion, slurred speech, severe nausea/vomiting, muscle weakness. If you experience these, contact your doctor or go to ER immediately. Staying hydrated and avoiding NSAIDs helps prevent toxicity."},
    {question: "Can I take mood stabilizers during pregnancy?", answer: "This requires very careful discussion. Some mood stabilizers (valproate) have significant fetal risks. Others (lamotrigine) may be safer options. Untreated bipolar disorder also carries risks. Work closely with your psychiatrist and OB to make the best decision."},
    {question: "Will I gain weight on mood stabilizers?", answer: "Depends on the medication. Lithium and valproate can cause weight gain in some people. Lamotrigine is generally weight-neutral. Discuss weight concerns with your doctor when choosing a mood stabilizer."},
    {question: "How long do I need to take mood stabilizers?", answer: "Usually long-term for bipolar disorder to prevent mood episodes. Many people stay on mood stabilizers for years or indefinitely. Stopping prematurely increases risk of relapse. Any decision to stop should be made carefully with your psychiatrist."}
  ]

  const faqSchema = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(faq => ({"@type": "Question", "name": faq.question, "acceptedAnswer": {"@type": "Answer", "text": faq.answer}}))}

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ArticleLayout title="Mood Stabilizers: Uses, Types & Monitoring" summary="Essential information about mood stabilizing medications: lithium, lamotrigine, and others—how they help, required monitoring, and safety." estimatedReadTime={13} lastReviewed="June 28, 2024" author="Tasel Health Medical Team" clinicalReviewer="Board-Certified Psychiatrist" tags={['Medications', 'Mood Stabilizers', 'Bipolar', 'Monitoring']}>
        <Card className="p-6 bg-teal-50 border-teal-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways</h2>
          <ul className="space-y-2">{keyTakeaways.map((t, i) => (<li key={i} className="flex items-start space-x-3"><CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">{t}</span></li>))}</ul>
        </Card>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Are Mood Stabilizers?</h2>
          <p className="mb-4">Mood stabilizers are medications that help prevent extreme mood swings—both manic highs and depressive lows. They're primarily used for bipolar disorder but sometimes prescribed for other conditions involving mood instability.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Mood Stabilizers</h2>
          <div className="space-y-6">
            <Card className="p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lithium</h3>
              <p className="text-gray-700 mb-3">Gold standard for bipolar disorder; proven efficacy over decades</p>
              <p className="text-sm text-gray-600 mb-2"><strong>Monitoring required:</strong> Blood levels, kidney function, thyroid function every 3-6 months</p>
              <p className="text-sm text-gray-600 mb-2"><strong>Common side effects:</strong> Tremor, increased thirst/urination, weight gain, stomach upset</p>
              <p className="text-sm text-gray-600"><strong>Benefits:</strong> Prevents both mania and depression; reduces suicide risk</p>
            </Card>

            <Card className="p-6 border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lamotrigine (Lamictal)</h3>
              <p className="text-gray-700 mb-3">Particularly effective for preventing depressive episodes in bipolar disorder</p>
              <p className="text-sm text-gray-600 mb-2"><strong>Monitoring required:</strong> Periodic liver tests; watch for rash</p>
              <p className="text-sm text-gray-600 mb-2"><strong>Common side effects:</strong> Headache, dizziness, nausea (usually mild)</p>
              <p className="text-sm text-amber-600 mb-2"><strong>Important:</strong> Must start low and increase slowly to prevent serious rash</p>
            </Card>

            <Card className="p-6 border-l-4 border-teal-500">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Valproate/Divalproex (Depakote)</h3>
              <p className="text-gray-700 mb-3">Effective for acute mania and mood stabilization</p>
              <p className="text-sm text-gray-600 mb-2"><strong>Monitoring required:</strong> Blood levels, liver function tests</p>
              <p className="text-sm text-gray-600 mb-2"><strong>Common side effects:</strong> Weight gain, tremor, hair thinning, sedation</p>
              <p className="text-sm text-red-600"><strong>Warning:</strong> Should NOT be used during pregnancy due to fetal risks</p>
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
            <li>1. Geddes JR, Miklowitz DJ. (2013). "Treatment of bipolar disorder." Lancet 381(9878):1672-1682.</li>
            <li>2. Malhi GS, et al. (2017). "The 2017 Royal Australian and New Zealand College of Psychiatrists clinical practice guidelines for mood disorders." Australian & New Zealand Journal of Psychiatry 51(12):1-99.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/knowledge-hub/antidepressants-explained" className="group"><Card className="p-6 hover:shadow-lg transition-shadow"><h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">Antidepressants Explained</h3><p className="text-sm text-gray-600">Depression medications</p></Card></Link>
            <Link href="/knowledge-hub/medication-pregnancy-planning" className="group"><Card className="p-6 hover:shadow-lg transition-shadow"><h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">Medication & Pregnancy</h3><p className="text-sm text-gray-600">Planning considerations</p></Card></Link>
            <Link href="/knowledge-hub/managing-medication-side-effects" className="group"><Card className="p-6 hover:shadow-lg transition-shadow"><h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">Managing Side Effects</h3><p className="text-sm text-gray-600">Practical strategies</p></Card></Link>
          </div>
        </section>
      </ArticleLayout>
      <StillHaveQuestions />
    </>
  )
}
