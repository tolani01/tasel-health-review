import { Metadata } from 'next'
import { ArticleLayout } from '@/components/knowledge/article-layout'
import { Card } from '@/components/ui/card'
import { CheckCircle, Pill, AlertCircle } from 'lucide-react'
import { StillHaveQuestions } from '@/components/sections/still-have-questions'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Antidepressants Explained: SSRIs, SNRIs & How They Work | Tasel Health',
  description: 'Understand antidepressant medications: types (SSRIs, SNRIs, bupropion), how they work, timeline to benefit, and what to discuss with your psychiatrist.',
  keywords: ['antidepressants', 'SSRIs explained', 'SNRIs', 'depression medication', 'how antidepressants work'],
}

export default function AntidepressantsPage() {
  const keyTakeaways = [
    "Multiple types of antidepressants work in different ways; treatment is tailored to your symptoms",
    "Most antidepressants take 4-8 weeks to show full benefits",
    "Side effects often improve after the first 1-2 weeks",
    "Never stop antidepressants abruptly—work with your doctor to taper safely",
    "Finding the right medication may require trial and adjustment with your psychiatrist"
  ]

  const faqs = [
    {question: "How long until antidepressants work?", answer: "Most people start noticing some changes in sleep or energy within 1-2 weeks, but full mood benefits typically take 4-8 weeks. It's important to give medications adequate time to work before deciding they're not effective."},
    {question: "Do I have to take them forever?", answer: "Not necessarily. Most guidelines recommend staying on antidepressants for at least 6-12 months after symptoms improve to prevent relapse. Some people need longer-term treatment, while others can taper off successfully. This decision should be made with your doctor based on your history."},
    {question: "What if the first medication doesn't work?", answer: "This is common—about 40-50% of people don't respond adequately to their first antidepressant. Your psychiatrist can try a different medication, adjust the dose, add a second medication, or explore other treatment options like TMS or therapy."},
    {question: "Can I drink alcohol on antidepressants?", answer: "Moderate alcohol use is generally safe with most antidepressants, but alcohol can worsen depression, interfere with medication effectiveness, and increase side effects like sedation. Discuss your alcohol use honestly with your doctor."},
    {question: "Will I gain weight on antidepressants?", answer: "It depends on the medication. Some (mirtazapine, paroxetine) are more likely to cause weight gain, while others (bupropion, fluoxetine) are weight-neutral or may cause weight loss. If weight is a concern, discuss medication options with your psychiatrist."},
    {question: "What about sexual side effects?", answer: "SSRIs and SNRIs commonly cause sexual side effects (decreased libido, difficulty achieving orgasm). This affects 30-60% of users. Bupropion, mirtazapine, or adding medications like bupropion can help. Be honest with your doctor—solutions are available."},
    {question: "Can I stop taking antidepressants if I feel better?", answer: "Don't stop without consulting your doctor. Abrupt discontinuation can cause withdrawal symptoms (dizziness, flu-like symptoms, mood changes). Most guidelines recommend continuing for 6-12 months after improvement, then tapering gradually if you and your doctor decide to stop."},
    {question: "Are antidepressants addictive?", answer: "No, antidepressants are not addictive in the way opioids or benzodiazepines are. You don't develop tolerance or cravings. However, your body does adjust to them, which is why stopping abruptly can cause withdrawal symptoms. That's different from addiction."},
    {question: "What's the difference between SSRIs and SNRIs?", answer: "SSRIs (Selective Serotonin Reuptake Inhibitors) primarily increase serotonin. SNRIs (Serotonin-Norepinephrine Reuptake Inhibitors) increase both serotonin and norepinephrine. SNRIs may be more effective for some people, particularly if you have low energy or pain alongside depression."},
    {question: "Can I take antidepressants while pregnant?", answer: "This requires careful discussion with your doctor. Some antidepressants are safer than others during pregnancy. Untreated depression also carries risks for both mother and baby. Your psychiatrist will help you weigh the risks and benefits to make an informed decision."},
    {question: "Do antidepressants change your personality?", answer: "No, antidepressants don't change your core personality. They help restore your brain chemistry to healthier levels so you can feel more like yourself. If you feel emotionally numb or unlike yourself on medication, tell your doctor—dose adjustment or medication change may help."},
    {question: "What if I forget a dose?", answer: "If you miss one dose, take it as soon as you remember unless it's almost time for the next dose. Don't double up. Missing occasional doses usually isn't harmful, but consistency is important for maintaining steady blood levels and avoiding withdrawal symptoms."}
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
        title="Antidepressants Explained: SSRIs, SNRIs & More"
        summary="Plain-language guide to antidepressant medications: how they work, different types, what to expect, and how to work with your doctor."
        estimatedReadTime={16}
        lastReviewed="January 8, 2025"
        author="Tasel Health Medical Team"
        clinicalReviewer="Board-Certified Psychiatrist"
        tags={['Medications', 'Antidepressants', 'SSRIs', 'SNRIs', 'Depression']}
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How Antidepressants Help</h2>
          <p className="mb-4">Antidepressants work by adjusting the levels of neurotransmitters (chemical messengers) in your brain. These chemicals—particularly serotonin, norepinephrine, and dopamine—play crucial roles in mood, energy, sleep, and emotional regulation.</p>
          <p className="mb-4">In depression, these neurotransmitter systems often aren't functioning optimally. Antidepressants help restore better balance, which can improve your mood, energy, motivation, and overall quality of life.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Antidepressants</h2>
          
          <div className="space-y-6">
            <Card className="p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">SSRIs (Selective Serotonin Reuptake Inhibitors)</h3>
              <p className="text-gray-700 mb-3">Most commonly prescribed antidepressants. They increase serotonin levels in the brain.</p>
              <p className="font-semibold text-gray-900 mb-2">Common SSRIs:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li>Sertraline (Zoloft)</li>
                <li>Escitalopram (Lexapro)</li>
                <li>Fluoxetine (Prozac)</li>
                <li>Paroxetine (Paxil)</li>
                <li>Citalopram (Celexa)</li>
              </ul>
              <p className="text-sm text-gray-600"><strong>Common side effects:</strong> Nausea, sexual effects, sleep changes, initial activation</p>
              <p className="text-sm text-gray-600"><strong>Best for:</strong> First-line treatment for depression and anxiety</p>
            </Card>

            <Card className="p-6 border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">SNRIs (Serotonin-Norepinephrine Reuptake Inhibitors)</h3>
              <p className="text-gray-700 mb-3">Increase both serotonin and norepinephrine. May be more effective for some people.</p>
              <p className="font-semibold text-gray-900 mb-2">Common SNRIs:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li>Venlafaxine (Effexor)</li>
                <li>Duloxetine (Cymbalta)</li>
                <li>Desvenlafaxine (Pristiq)</li>
              </ul>
              <p className="text-sm text-gray-600"><strong>Common side effects:</strong> Similar to SSRIs; may increase blood pressure at higher doses</p>
              <p className="text-sm text-gray-600"><strong>Best for:</strong> Depression with low energy, chronic pain, when SSRIs haven't worked</p>
            </Card>

            <Card className="p-6 border-l-4 border-teal-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bupropion (Wellbutrin)</h3>
              <p className="text-gray-700 mb-3">Affects dopamine and norepinephrine. Structurally different from SSRIs/SNRIs.</p>
              <p className="text-sm text-gray-600 mb-2"><strong>Common side effects:</strong> Activation, restlessness, dry mouth; NO sexual side effects</p>
              <p className="text-sm text-gray-600"><strong>Best for:</strong> Low energy depression, when avoiding sexual side effects, smoking cessation</p>
              <p className="text-sm text-amber-600 mt-2"><strong>Caution:</strong> Can lower seizure threshold at high doses</p>
            </Card>

            <Card className="p-6 border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mirtazapine (Remeron)</h3>
              <p className="text-gray-700 mb-3">Works on multiple receptors; particularly helpful for sleep and appetite.</p>
              <p className="text-sm text-gray-600 mb-2"><strong>Common side effects:</strong> Sedation, increased appetite, weight gain</p>
              <p className="text-sm text-gray-600"><strong>Best for:</strong> Depression with insomnia, poor appetite, when SSRIs didn't work</p>
            </Card>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Timeline to Benefit</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Week 1-2:</strong> Possible improvement in sleep or energy; side effects may be more noticeable than benefits</li>
            <li><strong>Week 2-4:</strong> Some people notice mood starting to lift</li>
            <li><strong>Week 4-6:</strong> More consistent mood improvement for most responders</li>
            <li><strong>Week 6-8:</strong> Full therapeutic effect typically reached; time to assess response</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-l-4 border-purple-500 pl-4 py-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8 text-sm text-gray-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">References</h2>
          <ul className="space-y-2">
            <li>1. APA Practice Guidelines for Treatment of Major Depressive Disorder, 3rd Edition (2010)</li>
            <li>2. Cipriani A, et al. (2018). "Comparative efficacy and acceptability of 21 antidepressant drugs." Lancet 391:1357-1366.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/knowledge-hub/starting-medication-first-weeks" className="group">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">Starting Medication</h3>
                <p className="text-sm text-gray-600">First 4-8 weeks guide</p>
              </Card>
            </Link>
            <Link href="/knowledge-hub/managing-medication-side-effects" className="group">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">Managing Side Effects</h3>
                <p className="text-sm text-gray-600">Practical strategies</p>
              </Card>
            </Link>
            <Link href="/knowledge-hub/tms-vs-medication" className="group">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">TMS vs Medication</h3>
                <p className="text-sm text-gray-600">Treatment comparison</p>
              </Card>
            </Link>
          </div>
        </section>
      </ArticleLayout>
      <StillHaveQuestions />
    </>
  )
}
