import { Metadata } from 'next'
import { ArticleLayout } from '@/components/knowledge/article-layout'
import { Card } from '@/components/ui/card'
import { CheckCircle, AlertCircle, Brain, Pill, Clock, TrendingUp, DollarSign, Calendar } from 'lucide-react'
import { StillHaveQuestions } from '@/components/sections/still-have-questions'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'TMS vs Medication: Which Treatment is Right for You? | Tasel Health',
  description: 'Compare TMS therapy and psychiatric medications side-by-side. Understand benefits, timelines, and how to choose the best depression treatment option.',
  keywords: ['TMS vs medication', 'depression treatment options', 'TMS or antidepressants', 'mental health treatment comparison', 'choosing depression treatment'],
  openGraph: {
    title: 'TMS vs Medication: Understanding Your Treatment Options',
    description: 'Evidence-based comparison of TMS therapy and psychiatric medications for depression treatment.',
    type: 'article',
  },
}

export default function TMSvsMedicationPage() {
  const keyTakeaways = [
    "Both TMS and medications are FDA-cleared, evidence-based treatments for depression",
    "Medications work systemically throughout your body; TMS targets specific brain regions",
    "Timeline: Medications take 4-8 weeks; TMS requires 4-6 weeks of daily sessions",
    "Many people benefit from combining both approaches for comprehensive care",
    "The right choice depends on your treatment history, preferences, and clinical needs"
  ]

  const faqs = [
    {
      question: "Can I do TMS while taking medication?",
      answer: "Yes! Many people continue their medications during TMS therapy. In fact, TMS often works well alongside medication management. Your psychiatrist will coordinate both treatments and may adjust your medications based on how you respond to TMS."
    },
    {
      question: "Is one better than the other?",
      answer: "Neither is universally 'better'—both are effective, FDA-cleared treatments. The best choice depends on your individual situation: treatment history, medication response, side effect tolerance, lifestyle, and preferences. Some people prefer medication's convenience; others prefer TMS's targeted, non-systemic approach."
    },
    {
      question: "What if I've failed multiple medications—will TMS work?",
      answer: "TMS is specifically FDA-cleared for people who haven't responded adequately to antidepressant medications. Clinical studies show TMS can be effective even when multiple medications haven't worked. However, TMS isn't guaranteed—response rates are around 70-75% for treatment-resistant depression."
    },
    {
      question: "Can I switch from medication to TMS?",
      answer: "Yes, you can transition from medication to TMS, though it's often done gradually. Your doctor may recommend staying on medication during TMS therapy, then tapering after you've responded to TMS. Never stop medications abruptly without medical guidance."
    },
    {
      question: "How do costs compare?",
      answer: "Both can be covered by insurance with prior authorization. Medication costs vary widely ($10-300/month depending on the drug and insurance). TMS is typically covered for treatment-resistant depression. Out-of-pocket costs depend on your specific insurance plan and deductible."
    },
    {
      question: "Which works faster?",
      answer: "Timelines are similar. Most antidepressants take 4-8 weeks to show full benefits. TMS requires 4-6 weeks of daily sessions with improvements often appearing around weeks 2-4. Neither is a 'quick fix,' and both require patience and consistency."
    },
    {
      question: "Can I try TMS first without trying medications?",
      answer: "Generally, no. Insurance typically requires documentation that you've tried at least one antidepressant before approving TMS. FDA clearance for TMS is specifically for treatment-resistant depression, meaning medication trials are usually expected first."
    },
    {
      question: "What if TMS doesn't work—can I still try different medications?",
      answer: "Absolutely. If TMS doesn't provide adequate relief, you can work with your psychiatrist to try different medications or medication combinations. Some people also benefit from combining ongoing TMS maintenance sessions with medication management."
    },
    {
      question: "Do most people choose medication or TMS?",
      answer: "Most people try medications first because they're typically more accessible and don't require daily clinic visits. TMS is usually considered when medications haven't worked well, cause intolerable side effects, or when someone prefers a non-medication approach."
    },
    {
      question: "How do I know which is right for me?",
      answer: "Discuss with your psychiatrist. Consider: Have you tried medications before? How did they work? Can you commit to daily TMS sessions for 4-6 weeks? What are your preferences? Your doctor will help evaluate which approach—or combination—makes most sense for your situation."
    }
  ]

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <ArticleLayout
        title="TMS vs. Medication: Understanding Your Treatment Options"
        summary="Compare TMS therapy and psychiatric medications: how they work, benefits, considerations, and how to choose the right approach for you."
        estimatedReadTime={14}
        lastReviewed="November 2, 2024"
        author="Tasel Health Medical Team"
        clinicalReviewer="Board-Certified Psychiatrist"
        tags={['TMS', 'Medications', 'Treatment Comparison', 'Decision Making']}
      >
        {/* Key Takeaways */}
        <Card className="p-6 bg-teal-50 border-teal-200 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways</h2>
          <ul className="space-y-2">
            {keyTakeaways.map((takeaway, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{takeaway}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Compare TMS and Medication?</h2>
          <p className="mb-4">
            If you're struggling with depression, you have multiple evidence-based treatment options. Both <strong>Transcranial Magnetic Stimulation (TMS)</strong> and <strong>antidepressant medications</strong> are FDA-cleared treatments with strong research support.
          </p>
          <p className="mb-4">
            Understanding how they differ—and how they can work together—helps you make informed decisions about your mental health care.
          </p>
          <p className="mb-4">
            This guide compares both approaches so you can have meaningful conversations with your doctor about what might work best for you.
          </p>
        </section>

        {/* Side-by-Side Comparison */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Side-by-Side Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-purple-100 to-teal-100">
                  <th className="border border-gray-300 p-4 text-left font-bold text-gray-900">Feature</th>
                  <th className="border border-gray-300 p-4 text-left font-bold text-gray-900">Antidepressant Medications</th>
                  <th className="border border-gray-300 p-4 text-left font-bold text-gray-900">TMS Therapy</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr>
                  <td className="border border-gray-300 p-4 font-semibold">How it works</td>
                  <td className="border border-gray-300 p-4">Adjusts brain chemistry systemically throughout your body</td>
                  <td className="border border-gray-300 p-4">Magnetic pulses stimulate specific brain regions</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-4 font-semibold">Administration</td>
                  <td className="border border-gray-300 p-4">Daily pill at home</td>
                  <td className="border border-gray-300 p-4">20-30 min sessions at clinic, 5 days/week for 4-6 weeks</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-semibold">Time to benefit</td>
                  <td className="border border-gray-300 p-4">4-8 weeks for full effect</td>
                  <td className="border border-gray-300 p-4">2-6 weeks, cumulative improvement</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-4 font-semibold">Common side effects</td>
                  <td className="border border-gray-300 p-4">Nausea, sleep changes, sexual effects, weight changes (varies by medication)</td>
                  <td className="border border-gray-300 p-4">Scalp discomfort, mild headache (usually temporary)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-semibold">Systemic effects</td>
                  <td className="border border-gray-300 p-4">Yes - affects entire body</td>
                  <td className="border border-gray-300 p-4">No - targeted to brain only</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-4 font-semibold">Convenience</td>
                  <td className="border border-gray-300 p-4">High - take at home daily</td>
                  <td className="border border-gray-300 p-4">Moderate - daily clinic visits required</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-semibold">Duration of treatment</td>
                  <td className="border border-gray-300 p-4">Often 6-12 months minimum; many continue longer</td>
                  <td className="border border-gray-300 p-4">4-6 week acute course; some need occasional maintenance</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-4 font-semibold">Success rate</td>
                  <td className="border border-gray-300 p-4">50-60% for first medication; higher with multiple trials</td>
                  <td className="border border-gray-300 p-4">70-75% response rate for treatment-resistant depression</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 font-semibold">FDA status</td>
                  <td className="border border-gray-300 p-4">Multiple medications FDA-approved for depression</td>
                  <td className="border border-gray-300 p-4">FDA-cleared for MDD, OCD, anxious depression</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-4 font-semibold">Insurance coverage</td>
                  <td className="border border-gray-300 p-4">Widely covered; generic options available</td>
                  <td className="border border-gray-300 p-4">Covered for treatment-resistant depression with prior authorization</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* How Medications Work */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How Antidepressant Medications Work</h2>
          <p className="mb-4">
            Antidepressants adjust levels of neurotransmitters (chemical messengers) in your brain, particularly serotonin, norepinephrine, and dopamine. Different classes work in slightly different ways:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>SSRIs</strong> (e.g., sertraline, escitalopram): Increase serotonin availability</li>
            <li><strong>SNRIs</strong> (e.g., venlafaxine, duloxetine): Increase both serotonin and norepinephrine</li>
            <li><strong>Bupropion</strong>: Affects dopamine and norepinephrine; no sexual side effects</li>
            <li><strong>Mirtazapine</strong>: Can help with sleep and appetite</li>
          </ul>
          <p className="mb-4">
            Because medications work throughout your entire body, they can cause systemic side effects—both the ones that help (improved mood) and the ones you may not want (nausea, sexual changes, weight shifts).
          </p>
          <p className="mb-4">
            Learn more: <Link href="/knowledge-hub/antidepressants-explained" className="text-purple-600 hover:underline">Antidepressants Explained: SSRIs, SNRIs & More</Link>
          </p>
        </section>

        {/* How TMS Works */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How TMS Therapy Works</h2>
          <p className="mb-4">
            TMS uses magnetic pulses to stimulate underactive areas of your brain involved in mood regulation. It's non-invasive—nothing enters your body.
          </p>
          <p className="mb-4">
            During treatment, a specialized coil placed over your head delivers brief magnetic pulses that:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Increase activity in brain regions showing reduced function in depression</li>
            <li>Help restore normal neural signaling patterns</li>
            <li>May promote neuroplasticity (brain's ability to form new connections)</li>
            <li>Influence neurotransmitter systems without systemic medication effects</li>
          </ul>
          <p className="mb-4">
            Because TMS targets the brain directly and doesn't circulate through your body, systemic side effects like nausea, weight gain, or sexual dysfunction are not expected.
          </p>
          <p className="mb-4">
            Learn more: <Link href="/knowledge-hub/tms-101-what-to-expect" className="text-purple-600 hover:underline">TMS 101: What to Expect</Link>
          </p>
        </section>

        {/* Who Each Approach Helps Most */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Who Each Approach Helps Most</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="p-6 bg-blue-50 border-blue-200">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 rounded-full p-3 mr-3">
                  <Pill className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Medications May Be Best If:</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>You prefer the convenience of daily pills at home</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>You can't commit to daily clinic visits for 4-6 weeks</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>You haven't tried antidepressants yet (first-line treatment)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>You've had good results with medications in the past</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>You need long-term maintenance treatment</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-purple-50 border-purple-200">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 rounded-full p-3 mr-3">
                  <Brain className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">TMS May Be Best If:</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>You've tried multiple medications without adequate relief</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Medication side effects are intolerable</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>You prefer a non-medication approach</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>You can commit to daily clinic visits for treatment</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>You're looking for a targeted brain stimulation approach</span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Timeline Comparison */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Timeline Comparison: Week-by-Week</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Medication Timeline */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Pill className="h-6 w-6 text-blue-600 mr-2" />
                Medication Timeline
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Weeks 1-2: Getting Started</div>
                  <p className="text-sm text-gray-600">Adjustment period; side effects may be more noticeable than benefits</p>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Weeks 2-4: Early Changes</div>
                  <p className="text-sm text-gray-600">Some people notice subtle improvements in sleep or energy</p>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Weeks 4-6: Building Benefits</div>
                  <p className="text-sm text-gray-600">Mood improvements become more apparent</p>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Weeks 6-8: Full Assessment</div>
                  <p className="text-sm text-gray-600">Evaluate if medication is working; may adjust dose or try different med</p>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">6-12+ Months: Maintenance</div>
                  <p className="text-sm text-gray-600">Continue medication to maintain benefits; many stay on long-term</p>
                </div>
              </div>
            </Card>

            {/* TMS Timeline */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Brain className="h-6 w-6 text-purple-600 mr-2" />
                TMS Timeline
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Week 1: Initial Sessions</div>
                  <p className="text-sm text-gray-600">Brain mapping, first treatments; mild scalp discomfort common</p>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Weeks 2-3: Adjustment</div>
                  <p className="text-sm text-gray-600">Side effects lessen; some people notice early improvements</p>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Weeks 3-4: Building Response</div>
                  <p className="text-sm text-gray-600">More noticeable mood, energy, and focus improvements</p>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Weeks 4-6: Full Course</div>
                  <p className="text-sm text-gray-600">Complete treatment; assess response and plan next steps</p>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Post-Treatment: Maintenance</div>
                  <p className="text-sm text-gray-600">Monitor; some benefit from occasional booster sessions</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Combining Approaches */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Combining TMS and Medication: The Power of Both</h2>
          <p className="mb-4">
            You don't have to choose one or the other. Many people use both approaches together—this is called <strong>comprehensive care</strong>.
          </p>
          <p className="mb-4">
            <strong>Why combine treatments?</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Different mechanisms working together can produce better outcomes</li>
            <li>TMS may help you respond better to medication or allow lower doses</li>
            <li>Medication can help maintain TMS gains after acute treatment</li>
            <li>Addresses depression from multiple angles simultaneously</li>
          </ul>
          <p className="mb-4">
            Research shows that combining TMS with ongoing medication management can improve response rates and help maintain improvements longer.
          </p>
          <p className="mb-4">
            Learn more: <Link href="/services/comprehensive-care" className="text-purple-600 hover:underline">Comprehensive Mental Health Care</Link>
          </p>
        </section>

        {/* Cost Considerations */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Cost Considerations</h2>
          
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Medication Costs</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>With insurance:</strong> $10-50/month for generic medications; $50-300/month for brand-name</li>
            <li><strong>Without insurance:</strong> $20-200/month depending on medication</li>
            <li><strong>Doctor visits:</strong> Initial evaluation + follow-ups every 1-3 months</li>
            <li><strong>Lab tests:</strong> Some medications require periodic monitoring (cost varies)</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mb-3">TMS Costs</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>With insurance:</strong> Most plans cover TMS for treatment-resistant depression after prior authorization; copays vary</li>
            <li><strong>Without insurance:</strong> Total course cost varies; payment plans often available</li>
            <li><strong>Time investment:</strong> Daily 20-30 minute sessions for 4-6 weeks</li>
            <li><strong>No ongoing costs:</strong> After completing treatment (unless maintenance needed)</li>
          </ul>
          <p className="mb-4">
            For specific pricing and insurance verification, contact our team at <a href="tel:+14059341681" className="text-purple-600 hover:underline">(405) 934-1681</a> (Oklahoma City) or <a href="tel:+12102022341" className="text-purple-600 hover:underline">(210) 202-2341</a> (San Antonio), or visit our <Link href="/insurance" className="text-purple-600 hover:underline">Insurance page</Link>.
          </p>
        </section>

        {/* Making the Decision */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Making the Decision: Questions to Ask Your Doctor</h2>
          <p className="mb-4">
            When deciding between TMS and medication (or both), consider asking:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Based on my history, which approach do you recommend and why?</li>
            <li>Have I tried enough medications to qualify for TMS?</li>
            <li>What are realistic expectations for each option in my case?</li>
            <li>Can I combine both approaches? Would that help?</li>
            <li>What are the time commitments for each?</li>
            <li>How will we track if treatment is working?</li>
            <li>What happens if the first approach doesn't work?</li>
            <li>What does my insurance cover, and what will I pay out-of-pocket?</li>
          </ul>
        </section>

        {/* Decision Factors */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Factors in Your Decision</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                <TrendingUp className="h-5 w-5 text-teal-600 mr-2" />
                Treatment History
              </h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Medications first?</strong> If you haven't tried antidepressants yet, they're usually the first-line approach.
              </p>
              <p className="text-sm text-gray-700">
                <strong>Multiple medication failures?</strong> TMS is FDA-cleared specifically for treatment-resistant depression.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                <Clock className="h-5 w-5 text-teal-600 mr-2" />
                Lifestyle & Schedule
              </h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Busy schedule?</strong> Medication may be easier to fit into daily life.
              </p>
              <p className="text-sm text-gray-700">
                <strong>Can commit to clinic visits?</strong> TMS requires 4-6 weeks of daily sessions but has no downtime.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                <AlertCircle className="h-5 w-5 text-teal-600 mr-2" />
                Side Effect Tolerance
              </h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Sensitive to medications?</strong> TMS doesn't cause systemic side effects like nausea, weight changes, or sexual dysfunction.
              </p>
              <p className="text-sm text-gray-700">
                <strong>Medication side effects manageable?</strong> Many people tolerate medications well, especially after the first few weeks.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                <DollarSign className="h-5 w-5 text-teal-600 mr-2" />
                Insurance & Cost
              </h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Insurance coverage?</strong> Verify what your plan covers for both options.
              </p>
              <p className="text-sm text-gray-700">
                <strong>Out-of-pocket concerns?</strong> Compare total costs for each approach including visits, tests, and treatment fees.
              </p>
            </Card>
          </div>
        </section>

        {/* Clinical Evidence */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What the Research Shows</h2>
          <p className="mb-4">
            Both TMS and antidepressant medications have strong evidence supporting their effectiveness:
          </p>
          
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Medication Evidence</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>50-60% of people respond to their first antidepressant medication</li>
            <li>Response rates improve to 70-80% when trying multiple medications or combinations</li>
            <li>Decades of research with millions of patients treated</li>
            <li>Multiple FDA-approved options with different mechanisms</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mb-3">TMS Evidence</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>70-75% response rate in patients with treatment-resistant depression</li>
            <li>50-60% remission rate (minimal or no symptoms remaining)</li>
            <li>FDA-cleared since 2013; extensive safety data</li>
            <li>Particularly effective when medications haven't provided adequate relief</li>
          </ul>
        </section>

        {/* FAQs */}
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

        {/* References */}
        <section className="mb-8 text-sm text-gray-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Plain-Language References</h2>
          <ul className="space-y-2">
            <li>
              1. Medication response rates: Rush AJ, et al. (2006). "Acute and longer-term outcomes in depressed outpatients requiring one or several treatment steps: a STAR*D report." American Journal of Psychiatry.
            </li>
            <li>
              2. TMS efficacy: Levkovitz Y, et al. (2015). "Efficacy and safety of deep transcranial magnetic stimulation for major depression." World Psychiatry.
            </li>
            <li>
              3. Treatment-resistant depression: FDA guidance on TMS for patients who have not responded adequately to antidepressant medications.
            </li>
            <li>
              4. Combination therapy: Philip NS, et al. (2016). "Network mechanisms of clinical response to transcranial magnetic stimulation in posttraumatic stress disorder and major depressive disorder." Biological Psychiatry.
            </li>
          </ul>
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/knowledge-hub/tms-101-what-to-expect" className="group">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">TMS 101: What to Expect</h3>
                <p className="text-sm text-gray-600">Complete guide to TMS therapy</p>
              </Card>
            </Link>
            <Link href="/knowledge-hub/antidepressants-explained" className="group">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">Antidepressants Explained</h3>
                <p className="text-sm text-gray-600">SSRIs, SNRIs and how they work</p>
              </Card>
            </Link>
            <Link href="/knowledge-hub/comprehensive-treatment-options-guide" className="group">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">Treatment Options Guide</h3>
                <p className="text-sm text-gray-600">Comprehensive comparison of all treatments</p>
              </Card>
            </Link>
          </div>
        </section>
      </ArticleLayout>
      
      <StillHaveQuestions />
    </>
  )
}
