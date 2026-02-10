import { Metadata } from 'next'
import { ArticleLayout } from '@/components/knowledge/article-layout'
import { Card } from '@/components/ui/card'
import { CheckCircle, Heart, Brain } from 'lucide-react'
import { StillHaveQuestions } from '@/components/sections/still-have-questions'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'TMS for Anxious Depression: Treatment for Depression with Anxiety',
  description: 'Learn how TMS treats depression with comorbid anxiety symptoms. FDA-cleared protocol and patient outcomes.',
  keywords: ['TMS anxious depression', 'depression and anxiety treatment', 'TMS for anxiety', 'comorbid anxiety depression'],
}

export default function TMSAnxiousDepressionPage() {
  const keyTakeaways = [
    "FDA cleared Deep TMS for anxious depression in September 2019",
    "Targets depression with significant anxiety symptoms",
    "Response rates similar to standard depression protocol (70-75%)",
    "Addresses both depressive and anxiety symptoms simultaneously",
    "Many people with anxious depression haven't responded well to medications alone"
  ]

  const faqs = [
    {question: "What is anxious depression?", answer: "Anxious depression (also called depression with anxious distress) means you have major depression along with significant anxiety symptoms like excessive worry, restlessness, or feeling keyed up. About 50-60% of people with depression also have clinically significant anxiety."},
    {question: "How does TMS help both depression and anxiety?", answer: "TMS stimulates brain regions involved in both mood and anxiety regulation. By increasing activity in underactive areas, TMS can improve depressive symptoms (low mood, low energy) while also reducing anxiety symptoms (worry, tension, panic)."},
    {question: "Is the TMS protocol different for anxious depression?", answer: "The protocol is similar to standard depression treatment but may include some modifications based on your specific symptoms. Your psychiatrist will determine the optimal approach for your presentation."},
    {question: "Will TMS make my anxiety worse?", answer: "This is uncommon. Some people experience temporary mood or anxiety fluctuations early in treatment as their brain adjusts. If anxiety worsens significantly, tell your treatment team—they can adjust parameters or provide additional support."},
    {question: "Can I continue anti-anxiety medications during TMS?", answer: "Usually yes. Many people stay on their SSRIs, SNRIs, or other medications during TMS. Your psychiatrist will coordinate both approaches and may adjust medications based on your response."},
    {question: "How long until anxiety symptoms improve?", answer: "Similar to depression, improvements build over 2-6 weeks. Some people notice reduced physical anxiety (tension, restlessness) early, while worry and rumination may take longer to improve."},
    {question: "Should I also do therapy for anxiety?", answer: "Yes, combining TMS with therapy is often helpful. Cognitive Behavioral Therapy (CBT) or exposure therapy can teach you skills to manage anxiety long-term while TMS addresses brain circuit dysfunction."},
    {question: "Does insurance cover TMS for anxious depression?", answer: "Coverage is similar to standard depression TMS. Most plans require documentation of inadequate response to antidepressants. Our team will help verify your benefits and handle prior authorization."}
  ]

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {"@type": "Answer", "text": faq.answer}
    }))
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ArticleLayout
        title="TMS for Anxious Depression: Treating Depression with Anxiety"
        summary="Learn how FDA-cleared Deep TMS helps people with depression and significant anxiety symptoms."
        estimatedReadTime={10}
        lastReviewed="May 13, 2024"
        author="Tasel Health Medical Team"
        clinicalReviewer="Board-Certified Psychiatrist"
        tags={['TMS', 'Anxious Depression', 'Anxiety', 'Depression']}
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding Anxious Depression</h2>
          <p className="mb-4">
            Anxious depression is common—about half of people with depression also experience significant anxiety. Symptoms include low mood plus excessive worry, restlessness, difficulty concentrating, muscle tension, or sleep problems related to both depression and anxiety.
          </p>
          <p className="mb-4">This combination can be harder to treat than depression alone, and many people don't respond fully to standard antidepressants.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">FDA Clearance (September 2019)</h2>
          <p className="mb-4">Deep TMS received FDA clearance specifically for treating depression in adults who have comorbid anxiety symptoms. This recognizes that anxious depression is distinct and requires specialized attention.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How TMS Helps Both Conditions</h2>
          <p className="mb-4">TMS stimulates brain networks involved in both mood and anxiety regulation. Benefits may include:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Reduced depressive symptoms (sadness, hopelessness, low energy)</li>
            <li>Decreased physical anxiety (tension, restlessness, racing heart)</li>
            <li>Less worry and rumination</li>
            <li>Better sleep quality</li>
            <li>Improved ability to concentrate despite anxious thoughts</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-l-4 border-purple-500 pl-4 py-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8 text-sm text-gray-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">References</h2>
          <ul className="space-y-2">
            <li>1. FDA clearance for anxious depression (September 2019)</li>
            <li>2. Tavares DF, et al. (2020). "Treatment of comorbid anxiety and depression." Current Opinion in Psychiatry.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/knowledge-hub/tms-for-depression-evidence" className="group">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">TMS for Depression</h3>
                <p className="text-sm text-gray-600">Depression evidence</p>
              </Card>
            </Link>
            <Link href="/knowledge-hub/managing-anxiety-symptoms" className="group">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">Managing Anxiety</h3>
                <p className="text-sm text-gray-600">Anxiety strategies</p>
              </Card>
            </Link>
            <Link href="/knowledge-hub/cbt-cognitive-behavioral-therapy" className="group">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">CBT for Anxiety</h3>
                <p className="text-sm text-gray-600">Therapy approaches</p>
              </Card>
            </Link>
          </div>
        </section>
      </ArticleLayout>
      <StillHaveQuestions />
    </>
  )
}
