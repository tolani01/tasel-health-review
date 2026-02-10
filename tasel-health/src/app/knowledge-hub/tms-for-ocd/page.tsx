import { Metadata } from 'next'
import { ArticleLayout } from '@/components/knowledge/article-layout'
import { Card } from '@/components/ui/card'
import { CheckCircle, AlertCircle, Brain, RefreshCw, Shield } from 'lucide-react'
import { StillHaveQuestions } from '@/components/sections/still-have-questions'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'TMS for OCD: How Brain Stimulation Helps Obsessive-Compulsive Disorder',
  description: 'Discover how FDA-cleared TMS therapy treats OCD. Learn about the specialized protocol, success rates, and patient experiences.',
  keywords: ['TMS for OCD', 'OCD treatment', 'obsessive compulsive disorder therapy', 'TMS BrainsWay OCD', 'brain stimulation OCD'],
  openGraph: {
    title: 'TMS for OCD: FDA-Cleared Treatment Option',
    description: 'Learn how TMS therapy helps treat obsessive-compulsive disorder.',
    type: 'article',
  },
}

export default function TMSforOCDPage() {
  const keyTakeaways = [
    "Deep TMS received FDA clearance for OCD in August 2018",
    "OCD protocol targets different brain circuits than depression treatment",
    "Success rates show 40-50% significant symptom reduction on Y-BOCS scale",
    "Works well alongside exposure and response prevention (ERP) therapy",
    "Treatment involves 29 sessions over 6 weeks with specialized coil placement"
  ]

  const faqs = [
    {
      question: "How is TMS different for OCD vs. depression?",
      answer: "TMS for OCD uses a different coil placement (targeting the anterior cingulate cortex and medial prefrontal cortex) and a specialized protocol. The session is slightly longer (about 29-30 minutes) and uses different stimulation parameters specifically designed for OCD brain circuits."
    },
    {
      question: "Do I need to stop my OCD medications for TMS?",
      answer: "No, you can typically continue your medications during TMS. Many people stay on their SSRIs, clomipramine, or other OCD medications. Your psychiatrist will coordinate both treatments and may adjust medications based on how you respond to TMS."
    },
    {
      question: "Can TMS replace exposure therapy (ERP)?",
      answer: "No, TMS should not replace ERP. Research suggests TMS works best when combined with behavioral therapy. TMS may help reduce obsessions and anxiety enough to make ERP more tolerable and effective. Think of TMS as preparing your brain to better engage with therapy."
    },
    {
      question: "How long does it take to see OCD improvement with TMS?",
      answer: "Most people notice changes gradually over weeks 3-5 of treatment. Some report reduced anxiety around obsessions earlier, while compulsion reduction may take longer. Full benefits are typically assessed at the end of the 6-week course."
    },
    {
      question: "What if I have both depression and OCD?",
      answer: "Your psychiatrist will determine which condition to target first based on severity and impact on your functioning. Sometimes protocols can be adjusted to address both, or separate treatment courses may be recommended. Insurance coverage and clinical priorities guide the decision."
    },
    {
      question: "Is TMS covered by insurance for OCD?",
      answer: "Coverage varies more for OCD than for depression. Some plans cover TMS for OCD with prior authorization, while others may not yet have updated their policies. Our billing team will verify your specific benefits and help with appeals if needed."
    },
    {
      question: "Can TMS help with compulsions or just obsessions?",
      answer: "TMS can help reduce both obsessions (intrusive thoughts) and compulsions (repetitive behaviors). By targeting the brain circuits that generate anxiety and the urge to perform rituals, TMS may make it easier to resist compulsions and reduce the frequency and intensity of obsessions."
    },
    {
      question: "Do I need maintenance TMS for OCD?",
      answer: "This is still being researched. Some people maintain OCD improvements without additional TMS, especially if they continue ERP therapy. Others benefit from periodic booster sessions. Your doctor will create a maintenance plan based on your response and symptom trajectory."
    },
    {
      question: "What's the success rate for TMS and OCD?",
      answer: "Clinical studies show about 40-50% of people experience clinically significant symptom reduction (at least 30% improvement on Y-BOCS scale). About 30-35% achieve 'response' (50% or more symptom reduction). Results are best when combined with ongoing behavioral therapy."
    },
    {
      question: "Can TMS make OCD worse?",
      answer: "This is extremely rare. Some people may experience temporary anxiety increase as they become more aware of their symptoms while reducing compulsions. This is actually similar to what happens in ERP therapy and usually resolves. If you experience worsening symptoms, discuss with your doctor immediately."
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
        title="TMS for OCD: FDA-Cleared Treatment Option"
        summary="Learn how TMS therapy helps treat obsessive-compulsive disorder: the evidence, protocol, and what to expect."
        estimatedReadTime={12}
        lastReviewed="July 8, 2024"
        author="Tasel Health Medical Team"
        clinicalReviewer="Board-Certified Psychiatrist"
        tags={['TMS', 'OCD', 'Obsessive Compulsive Disorder', 'FDA Cleared']}
      >
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

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding OCD and Treatment Challenges</h2>
          <p className="mb-4">
            Obsessive-Compulsive Disorder (OCD) affects about 2-3% of the population. It involves intrusive, unwanted thoughts (obsessions) and repetitive behaviors or mental acts (compulsions) performed to reduce anxiety.
          </p>
          <p className="mb-4">
            Standard OCD treatments include medications (usually SSRIs at higher doses or clomipramine) and exposure with response prevention (ERP) therapy. However, about 40-60% of people don't achieve full symptom relief with these approaches alone.
          </p>
          <p className="mb-4">
            TMS offers an additional FDA-cleared option for people with OCD who need more help.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">FDA Clearance for OCD (August 2018)</h2>
          <p className="mb-4">
            In 2018, the FDA cleared BrainsWay Deep TMS™ specifically for treating OCD in adults. This clearance was based on rigorous clinical trials demonstrating safety and effectiveness.
          </p>
          <Card className="p-6 bg-purple-50 border-purple-200 mb-4">
            <div className="flex items-start space-x-4">
              <Shield className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Regulatory Milestone</h3>
                <p className="text-gray-700">
                  This was the first FDA clearance of any TMS device specifically for OCD, recognizing Deep TMS as a proven intervention for this challenging condition.
                </p>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How TMS Targets OCD: Brain Circuits Explained</h2>
          <p className="mb-4">
            OCD involves overactivity in specific brain circuits, particularly the cortico-striato-thalamo-cortical (CSTC) loop. This circuit includes:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Anterior Cingulate Cortex:</strong> Involved in error detection and anxiety</li>
            <li><strong>Orbitofrontal Cortex:</strong> Related to decision-making and doubt</li>
            <li><strong>Striatum:</strong> Connected to repetitive behaviors</li>
            <li><strong>Thalamus:</strong> Acts as relay station for these signals</li>
          </ul>
          <p className="mb-4">
            In OCD, this circuit becomes "stuck" in a loop—generating persistent anxiety and the urge to perform rituals. TMS for OCD targets these overactive areas to help calm the circuit and reduce symptom intensity.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">OCD-Specific TMS Protocol</h2>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">How It Differs from Depression Treatment</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Coil placement:</strong> Positioned more anteriorly (forward) to target OCD circuits</li>
            <li><strong>Session length:</strong> Approximately 29-30 minutes (vs. 20 minutes for depression)</li>
            <li><strong>Stimulation parameters:</strong> Different frequency and intensity optimized for OCD</li>
            <li><strong>Number of sessions:</strong> Typically 29 sessions over 6 weeks</li>
            <li><strong>Bilateral stimulation:</strong> May target both hemispheres in some protocols</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Clinical Evidence & Success Rates</h2>
          <p className="mb-4">
            The pivotal trial that led to FDA clearance showed promising results:
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <Card className="p-6 text-center bg-gradient-to-br from-purple-50 to-indigo-50">
              <div className="text-4xl font-bold text-purple-600 mb-2">38%</div>
              <div className="text-sm text-gray-600">Response Rate</div>
              <p className="text-xs text-gray-500 mt-2">vs. 11% sham</p>
            </Card>
            <Card className="p-6 text-center bg-gradient-to-br from-teal-50 to-green-50">
              <div className="text-4xl font-bold text-teal-600 mb-2">-30%</div>
              <div className="text-sm text-gray-600">Average Symptom Reduction</div>
              <p className="text-xs text-gray-500 mt-2">On Y-BOCS scale</p>
            </Card>
            <Card className="p-6 text-center bg-gradient-to-br from-blue-50 to-cyan-50">
              <div className="text-4xl font-bold text-blue-600 mb-2">29</div>
              <div className="text-sm text-gray-600">Treatment Sessions</div>
              <p className="text-xs text-gray-500 mt-2">Over 6 weeks</p>
            </Card>
          </div>
          <p className="text-sm text-gray-600 italic mb-6">
            Note: Response defined as ≥30% reduction in Y-BOCS (Yale-Brown Obsessive Compulsive Scale) score from baseline.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Combining TMS with ERP Therapy</h2>
          <p className="mb-4">
            Exposure and Response Prevention (ERP) is the gold-standard behavioral therapy for OCD. TMS doesn't replace ERP—it can enhance it.
          </p>
          <p className="mb-4">
            <strong>How they work together:</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>TMS reduces baseline anxiety:</strong> Makes it easier to engage with exposure exercises</li>
            <li><strong>Weakens compulsion urges:</strong> You may find it less difficult to resist rituals</li>
            <li><strong>Improves therapy tolerance:</strong> Reduced distress during exposures</li>
            <li><strong>Addresses brain circuits:</strong> While ERP addresses behavior patterns</li>
          </ul>
          <p className="mb-4">
            Many clinicians recommend continuing or starting ERP therapy alongside TMS for optimal OCD management.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What to Expect with TMS for OCD</h2>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Treatment Course</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Week 1-2:</strong> Brain mapping, adjustment to treatment; early sessions</li>
            <li><strong>Week 3-4:</strong> Some people notice reduced anxiety around obsessions</li>
            <li><strong>Week 5-6:</strong> Continued symptom reduction; easier to resist compulsions</li>
            <li><strong>Post-treatment:</strong> Assessment of response; maintenance planning</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mb-3">What Improvement Looks Like</h3>
          <p className="mb-4">
            For people who respond to TMS for OCD, improvements may include:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Reduced frequency and intensity of intrusive thoughts</li>
            <li>Less anxiety associated with obsessions</li>
            <li>Decreased urge to perform compulsions</li>
            <li>Ability to resist or delay rituals more easily</li>
            <li>More time spent on meaningful activities (less time on rituals)</li>
            <li>Improved quality of life and daily functioning</li>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Plain-Language References</h2>
          <ul className="space-y-2">
            <li>1. FDA Clearance: FDA permits marketing of transcranial magnetic stimulation for treatment of obsessive compulsive disorder (August 2018)</li>
            <li>2. Carmi L, et al. (2019). "Efficacy and safety of deep TMS for OCD: a prospective multicenter randomized controlled trial." American Journal of Psychiatry 176(11):931-938.</li>
            <li>3. Roth Y, et al. (2021). "Real-world efficacy of deep TMS for OCD." Journal of Psychiatric Research 140:373-378.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/knowledge-hub/tms-101-what-to-expect" className="group">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">TMS 101</h3>
                <p className="text-sm text-gray-600">Introduction to TMS</p>
              </Card>
            </Link>
            <Link href="/knowledge-hub/tms-for-depression-evidence" className="group">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">TMS for Depression</h3>
                <p className="text-sm text-gray-600">Depression evidence</p>
              </Card>
            </Link>
            <Link href="/knowledge-hub/exposure-ladders-anxiety" className="group">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">ERP & Exposure Therapy</h3>
                <p className="text-sm text-gray-600">Behavioral approaches</p>
              </Card>
            </Link>
          </div>
        </section>
      </ArticleLayout>
      <StillHaveQuestions />
    </>
  )
}
