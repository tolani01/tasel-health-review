import { Metadata } from 'next'
import { ArticleLayout } from '@/components/knowledge/article-layout'
import { Card } from '@/components/ui/card'
import { CheckCircle, Moon, Pill, Brain } from 'lucide-react'
import { StillHaveQuestions } from '@/components/sections/still-have-questions'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sleep Medications vs CBT-I: Best Treatment for Insomnia',
  description: 'Compare sleep medications and behavioral therapy (CBT-I) for insomnia. Learn when each approach works best and how to improve sleep long-term.',
  keywords: ['sleep medication', 'CBT-I', 'insomnia treatment', 'sleep therapy', 'cognitive behavioral therapy insomnia'],
}

export default function SleepMedicationsCBTIPage() {
  const keyTakeaways = [
    "CBT-I (Cognitive Behavioral Therapy for Insomnia) is the gold-standard treatment with lasting benefits",
    "Sleep medications provide quick relief but don't address underlying sleep problems",
    "Combining both approaches initially, then tapering medication, often works well",
    "Long-term medication use can lead to tolerance and dependence",
    "CBT-I teaches skills that continue working after treatment ends"
  ]

  const faqs = [
    {question: "Which is better: sleep medication or CBT-I?", answer: "CBT-I is considered the gold standard because it addresses the root causes of insomnia and provides lasting benefits without medication risks. However, sleep medications can provide quick relief while you learn CBT-I skills. The best approach often combines both initially."},
    {question: "How quickly do sleep medications work?", answer: "Most sleep medications work the first night you take them. This quick relief can be helpful when insomnia is severe, but it doesn't teach your brain healthy sleep patterns."},
    {question: "Can I use sleep medication long-term?", answer: "It's generally not recommended. Long-term use can lead to tolerance (needing higher doses), dependence (difficulty sleeping without it), and rebound insomnia if stopped abruptly. CBT-I provides long-lasting benefits without these risks."},
    {question: "What is CBT-I and how does it work?", answer: "CBT-I is a structured program teaching behavioral and cognitive strategies to improve sleep: sleep restriction, stimulus control, sleep hygiene, and addressing thoughts that interfere with sleep. It usually involves 4-8 sessions and creates lasting sleep improvements."},
    {question: "Can I do both medication and CBT-I?", answer: "Yes, this is a common approach. Start sleep medication for immediate relief while learning CBT-I skills, then gradually taper medication as behavioral strategies take effect. This combines quick relief with long-term solution."},
    {question: "Do antidepressants help with sleep?", answer: "Some antidepressants (mirtazapine, trazodone) are sedating and used off-label for insomnia. They're not FDA-approved for insomnia but are alternatives to traditional sleep medications, especially if you also have depression."},
    {question: "What about melatonin or over-the-counter sleep aids?", answer: "Melatonin can help with circadian rhythm issues (shift work, jet lag) but is less effective for chronic insomnia. OTC antihistamines (diphenhydramine, doxylamine) cause sedation but aren't recommended long-term due to cognitive effects, especially in older adults."},
    {question: "How long does CBT-I take to work?", answer: "Most people notice improvement within 2-4 weeks of consistently applying CBT-I techniques. Unlike medication, benefits continue and often improve over time as healthy sleep patterns become established."}
  ]

  const faqSchema = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(faq => ({"@type": "Question", "name": faq.question, "acceptedAnswer": {"@type": "Answer", "text": faq.answer}}))}

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ArticleLayout title="Sleep Medications vs. CBT-I: Choosing the Right Approach" summary="Compare sleep medications and Cognitive Behavioral Therapy for Insomnia: when each is appropriate, combining approaches, and long-term solutions." estimatedReadTime={12} lastReviewed="July 24, 2024" author="Tasel Health Medical Team" clinicalReviewer="Board-Certified Psychiatrist" tags={['Medications', 'Sleep', 'Insomnia', 'CBT-I', 'Behavioral Treatment']}>
        <Card className="p-6 bg-teal-50 border-teal-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways</h2>
          <ul className="space-y-2">{keyTakeaways.map((t, i) => (<li key={i} className="flex items-start space-x-3"><CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">{t}</span></li>))}</ul>
        </Card>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Sleep Medications: Quick Relief, Short-Term Solution</h2>
          <p className="mb-4"><strong>Common sleep medications include:</strong></p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Benzodiazepines:</strong> Temazepam, triazolam (controlled substances; not preferred long-term)</li>
            <li><strong>Z-drugs:</strong> Zolpidem (Ambien), eszopiclone (Lunesta), zaleplon (Sonata)</li>
            <li><strong>Sedating antidepressants:</strong> Trazodone, mirtazapine (off-label but commonly used)</li>
            <li><strong>Melatonin receptor agonists:</strong> Ramelteon (Rozerem)</li>
            <li><strong>Orexin antagonists:</strong> Suvorexant (Belsomra), lemborexant (Dayvigo)</li>
          </ul>
          <p className="mb-4"><strong>Pros:</strong> Work quickly (often first night); provide immediate relief</p>
          <p className="mb-4"><strong>Cons:</strong> Don't address underlying causes; tolerance and dependence risks; rebound insomnia when stopped</p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">CBT-I: Long-Term Solution</h2>
          <p className="mb-4">Cognitive Behavioral Therapy for Insomnia is a structured program teaching you to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Sleep restriction:</strong> Limit time in bed to match actual sleep time, then gradually expand</li>
            <li><strong>Stimulus control:</strong> Retrain your brain that bed = sleep (not worry, TV, phone)</li>
            <li><strong>Sleep hygiene:</strong> Optimize environment and behaviors for better sleep</li>
            <li><strong>Cognitive restructuring:</strong> Change anxiety-producing thoughts about sleep</li>
          </ul>
          <p className="mb-4"><strong>Pros:</strong> Lasting results; no side effects or dependence; addresses root causes</p>
          <p className="mb-4"><strong>Cons:</strong> Takes 2-4 weeks to see results; requires active participation and discipline</p>
          <p className="mb-4">Learn more: <Link href="/knowledge-hub/sleep-better-cbt-i-guide" className="text-purple-600 hover:underline">Sleep Better: CBT-I Starter Guide</Link></p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Recommended Approach</h2>
          <p className="mb-4">Most sleep medicine experts recommend:</p>
          <ol className="list-decimal pl-6 mb-4 space-y-3">
            <li><strong>Start with CBT-I if possible:</strong> First-line treatment for chronic insomnia</li>
            <li><strong>Add medication if needed:</strong> For severe insomnia while building CBT-I skills</li>
            <li><strong>Taper medication:</strong> As behavioral strategies take effect (usually 4-8 weeks)</li>
            <li><strong>Maintain CBT-I skills:</strong> Continue healthy sleep practices long-term</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">{faqs.map((faq, i) => (<div key={i} className="border-l-4 border-purple-500 pl-4 py-2"><h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3><p className="text-gray-700">{faq.answer}</p></div>))}</div>
        </section>

        <section className="mb-8 text-sm text-gray-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">References</h2>
          <ul className="space-y-2">
            <li>1. Qaseem A, et al. (2016). "Management of chronic insomnia disorder in adults: A clinical practice guideline from the American College of Physicians." Annals of Internal Medicine 165(2):125-133.</li>
            <li>2. Edinger JD, et al. (2021). "Behavioral and psychological treatments for chronic insomnia disorder in adults: an American Academy of Sleep Medicine clinical practice guideline." J Clin Sleep Med 17(2):255-262.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/knowledge-hub/sleep-better-cbt-i-guide" className="group"><Card className="p-6 hover:shadow-lg transition-shadow"><h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">CBT-I Starter Guide</h3><p className="text-sm text-gray-600">Improve sleep naturally</p></Card></Link>
            <Link href="/knowledge-hub/antidepressants-explained" className="group"><Card className="p-6 hover:shadow-lg transition-shadow"><h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">Antidepressants for Sleep</h3><p className="text-sm text-gray-600">Sedating medications</p></Card></Link>
            <Link href="/knowledge-hub/managing-medication-side-effects" className="group"><Card className="p-6 hover:shadow-lg transition-shadow"><h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">Side Effect Management</h3><p className="text-sm text-gray-600">All medications</p></Card></Link>
          </div>
        </section>
      </ArticleLayout>
      <StillHaveQuestions />
    </>
  )
}
