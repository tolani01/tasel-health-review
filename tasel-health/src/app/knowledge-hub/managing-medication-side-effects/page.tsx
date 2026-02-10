import { Metadata } from 'next'
import { ArticleLayout } from '@/components/knowledge/article-layout'
import { Card } from '@/components/ui/card'
import { CheckCircle, Pill, AlertCircle } from 'lucide-react'
import { StillHaveQuestions } from '@/components/sections/still-have-questions'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Managing Psychiatric Medication Side Effects: Solutions & Strategies',
  description: 'Handle common medication side effects with practical strategies. Learn what to try at home and when to contact your psychiatrist.',
  keywords: ['medication side effects', 'antidepressant side effects', 'SSRI side effects', 'managing medication problems'],
}

export default function ManagingSideEffectsPage() {
  const keyTakeaways = [
    "Most medication side effects are mild and improve within 1-2 weeks",
    "Many side effects have practical management strategies you can try",
    "Never stop medication abruptly due to side effects—contact your doctor first",
    "Some side effects (sexual, weight) may persist and require medication adjustment",
    "Your psychiatrist can modify dose, timing, or switch medications to improve tolerability"
  ]

  const faqs = [
    {question: "How long do side effects last?", answer: "Most initial side effects (nausea, jitteriness, headache) improve within 1-2 weeks as your body adjusts. Some side effects (sexual dysfunction, weight changes) may persist longer and require addressing with your doctor."},
    {question: "Should I stop my medication if I have side effects?", answer: "No, don't stop abruptly. Many side effects are temporary and improve with time. Contact your doctor to discuss—they can adjust timing, dose, add supportive medications, or switch to a different antidepressant if needed."},
    {question: "Can I take other medications to manage side effects?", answer: "Sometimes. For nausea, anti-nausea medications may help initially. For sexual side effects, medications like bupropion can be added. Always check with your doctor before adding anything, including over-the-counter medications or supplements."},
    {question: "What if side effects are unbearable?", answer: "Contact your psychiatrist right away. Intolerable side effects mean the medication isn't the right fit for you. Your doctor can switch you to a different medication with a better side effect profile for your situation."},
    {question: "Do side effects mean the medication is working?", answer: "Not necessarily. Side effects just mean your body is responding to the medication. You can have side effects without mood benefit, or mood benefit without side effects. They're not reliable indicators of therapeutic response."},
    {question: "Can I drink coffee or caffeinated beverages?", answer: "Usually yes, but caffeine may worsen jitteriness or anxiety if you're on activating antidepressants. If you notice increased anxiety or sleep problems, consider reducing caffeine intake and see if symptoms improve."},
    {question: "Will side effects come back if I increase the dose?", answer: "Possibly, but often milder than when you first started. When increasing doses, you may experience a brief return of side effects that typically resolve within days to a week."},
    {question: "Are generic medications different from brand-name?", answer: "Generics contain the same active ingredient and are FDA-required to be equivalent. However, inactive ingredients (fillers) differ, which rarely causes different side effects. If you notice changes after switching, tell your doctor."}
  ]

  const faqSchema = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(faq => ({"@type": "Question", "name": faq.question, "acceptedAnswer": {"@type": "Answer", "text": faq.answer}}))}

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ArticleLayout title="Managing Medication Side Effects" summary="Practical strategies for common psychiatric medication side effects: what to try, when to call your doctor, and how to work together on solutions." estimatedReadTime={14} lastReviewed="November 10, 2024" author="Tasel Health Medical Team" clinicalReviewer="Board-Certified Psychiatrist" tags={['Medications', 'Side Effects', 'Management', 'Solutions']}>
        <Card className="p-6 bg-teal-50 border-teal-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways</h2>
          <ul className="space-y-2">{keyTakeaways.map((t, i) => (<li key={i} className="flex items-start space-x-3"><CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">{t}</span></li>))}</ul>
        </Card>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Side Effects & Solutions</h2>
          
          <div className="space-y-6">
            <Card className="p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Nausea & Stomach Upset</h3>
              <p className="text-gray-700 mb-3"><strong>Why it happens:</strong> SSRIs affect serotonin receptors in your gut</p>
              <p className="font-semibold text-gray-900 mb-2">What to try:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Take medication with food</li>
                <li>Start with half dose for first week if doctor approves</li>
                <li>Take ginger or use anti-nausea medication temporarily</li>
                <li>Usually improves within 1-2 weeks</li>
              </ul>
            </Card>

            <Card className="p-6 border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sexual Side Effects</h3>
              <p className="text-gray-700 mb-3"><strong>Why it happens:</strong> Increased serotonin can affect sexual function</p>
              <p className="font-semibold text-gray-900 mb-2">What to try:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Wait 4-6 weeks—sometimes improves over time</li>
                <li>Lower the dose (if depression is well-controlled)</li>
                <li>Add bupropion (often helps counter sexual effects)</li>
                <li>Switch to bupropion or mirtazapine (fewer sexual side effects)</li>
                <li>Consider 'drug holidays' (talk to doctor first—not always safe)</li>
              </ul>
            </Card>

            <Card className="p-6 border-l-4 border-teal-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Insomnia or Sedation</h3>
              <p className="text-gray-700 mb-3"><strong>Why it happens:</strong> Different medications affect sleep differently</p>
              <p className="font-semibold text-gray-900 mb-2">What to try:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li><strong>If insomnia:</strong> Take medication in morning instead of evening</li>
                <li><strong>If sedation:</strong> Take at bedtime instead of morning</li>
                <li>Practice good sleep hygiene (see CBT-I guide)</li>
                <li>Discuss adding trazodone or switching medications if persistent</li>
              </ul>
            </Card>

            <Card className="p-6 border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Weight Changes</h3>
              <p className="text-gray-700 mb-3"><strong>Why it happens:</strong> Some medications affect metabolism and appetite</p>
              <p className="font-semibold text-gray-900 mb-2">What to try:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Monitor diet and exercise (depression recovery often increases appetite naturally)</li>
                <li>Switch to weight-neutral option (bupropion, fluoxetine)</li>
                <li>Add metformin if metabolic concerns develop</li>
                <li>Discuss with doctor before significant weight gain occurs</li>
              </ul>
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
            <li>1. Ferguson JM. (2001). "SSRI antidepressant medications: adverse effects and tolerability." Primary Care Companion J Clin Psychiatry 3(1):22-27.</li>
            <li>2. Cassano P, Fava M. (2002). "Tolerability issues during long-term treatment with antidepressants." Annals of Clinical Psychiatry 14(4):223-232.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/knowledge-hub/antidepressants-explained" className="group"><Card className="p-6 hover:shadow-lg transition-shadow"><h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">Antidepressants Explained</h3><p className="text-sm text-gray-600">How medications work</p></Card></Link>
            <Link href="/knowledge-hub/starting-medication-first-weeks" className="group"><Card className="p-6 hover:shadow-lg transition-shadow"><h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">Starting Medication</h3><p className="text-sm text-gray-600">First 4-8 weeks</p></Card></Link>
            <Link href="/knowledge-hub/tms-vs-medication" className="group"><Card className="p-6 hover:shadow-lg transition-shadow"><h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">TMS vs Medication</h3><p className="text-sm text-gray-600">Compare options</p></Card></Link>
          </div>
        </section>
      </ArticleLayout>
      <StillHaveQuestions />
    </>
  )
}
